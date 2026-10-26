import React, { useState } from 'react';
import { TourPackage } from '../../types/tour';
import { 
  MapPin, 
  Mountain, 
  Compass, 
  Layers, 
  ArrowRight, 
  Info, 
  Sparkles, 
  Activity,
  Maximize2,
  Calendar,
  Clock,
  Car
} from 'lucide-react';

interface WaypointLocation {
  name: string;
  lat: number;
  lng: number;
  day: number;
  type: 'city' | 'mountain' | 'waterfall' | 'temple' | 'coast' | 'safari' | 'wildlife';
  highlight: string;
  altitude?: string;
  image?: string;
}

interface TourInteractiveMapProps {
  pkg: TourPackage;
  onSelectDay?: (dayNumber: number) => void;
  activeDay?: number;
}

// Fallback coordinates for key Java & Bali destinations
const DEFAULT_COORDINATES: Record<string, { lat: number; lng: number; altitude: string; type: WaypointLocation['type']; highlight: string; image: string }> = {
  'Borobudur': { lat: -7.6079, lng: 110.2038, altitude: '230m', type: 'temple', highlight: '9th-Century UNESCO Buddhist Sanctuary', image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=600&q=80' },
  'Prambanan': { lat: -7.7520, lng: 110.4915, altitude: '150m', type: 'temple', highlight: 'UNESCO Hindu Spires & Ramayana Ballet', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80' },
  'Yogyakarta': { lat: -7.7956, lng: 110.3695, altitude: '113m', type: 'city', highlight: 'Royal Sultanate Kraton & Tamansari', image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=600&q=80' },
  'Jomblang Cave': { lat: -8.0285, lng: 110.6385, altitude: '320m', type: 'mountain', highlight: '60m Vertical Rappel into Heavenly Light', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80' },
  'Merapi': { lat: -7.5407, lng: 110.4457, altitude: '1,200m', type: 'mountain', highlight: 'Open-top 4x4 Lava Trail & Volcanic Bunker', image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=600&q=80' },
  'Surabaya': { lat: -7.2575, lng: 112.7521, altitude: '5m', type: 'city', highlight: 'Gateway Airport & Executive Chauffeur Hub', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80' },
  'Malang': { lat: -7.9666, lng: 112.6326, altitude: '450m', type: 'city', highlight: 'Highland Apple Orchards & Colonial Boulevard', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' },
  'Bromo': { lat: -7.9425, lng: 112.9530, altitude: '2,329m', type: 'mountain', highlight: 'King Kong Hill Sunrise & Tengger Caldera', image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=600&q=80' },
  'Madakaripura': { lat: -7.8542, lng: 113.0117, altitude: '620m', type: 'waterfall', highlight: 'Eternal 200m Rain Curtain Canyon Walk', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80' },
  'Tumpak Sewu': { lat: -8.2318, lng: 112.9179, altitude: '500m', type: 'waterfall', highlight: 'A Thousand Cascades 120m Circular Ravine', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80' },
  'Ijen': { lat: -8.0583, lng: 114.2425, altitude: '2,386m', type: 'mountain', highlight: 'Electric-Blue Flame & Acidic Turquoise Lake', image: 'https://images.unsplash.com/photo-1601662528567-526cd06f6582?auto=format&fit=crop&w=600&q=80' },
  'Banyuwangi': { lat: -8.2192, lng: 114.3691, altitude: '20m', type: 'city', highlight: 'Coastline Resorts & Midnight Ijen Departure Base', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80' },
  'Pulau Merah': { lat: -8.5992, lng: 114.0275, altitude: '2m', type: 'coast', highlight: 'Red Island Conical Islet & Golden Sunsets', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
  'Meru Betiri': { lat: -8.5500, lng: 113.8000, altitude: '10m', type: 'wildlife', highlight: 'Sukamade Giant Sea Turtle Sanctuary', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80' },
  'Baluran': { lat: -7.8389, lng: 114.3889, altitude: '40m', type: 'safari', highlight: 'Little Africa Savannah Safari & Bama Beach', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80' },
  'Ubud': { lat: -8.5069, lng: 115.2625, altitude: '200m', type: 'temple', highlight: 'Ayung River Gorge & Subak Rice Terraces', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80' },
  'Batur': { lat: -8.2417, lng: 115.3753, altitude: '1,500m', type: 'mountain', highlight: 'Caldera Rim Sunrise & 4x4 Black Lava Trails', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' },
  'Uluwatu': { lat: -8.8291, lng: 115.0849, altitude: '70m', type: 'coast', highlight: '100m Ocean Cliffs & Clifftop Kecak Dance', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80' },
  'Nusa Dua': { lat: -8.8005, lng: 115.2311, altitude: '5m', type: 'coast', highlight: 'Water Blow Natural Blowhole & White Sands', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
  'Seminyak': { lat: -8.6892, lng: 115.1614, altitude: '8m', type: 'coast', highlight: 'Sunset Beach Pavilions & Cosmopolitan Dining', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80' },
  'Kuta': { lat: -8.7185, lng: 115.1690, altitude: '5m', type: 'coast', highlight: 'Iconic Rolling Surf Crescent & Golden Horizon', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
  'Canggu': { lat: -8.6482, lng: 115.1385, altitude: '12m', type: 'coast', highlight: 'Black Sand Surf Breaks & Artisanal Lifestyle', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80' },
  'Nusa Penida': { lat: -8.7278, lng: 115.5444, altitude: '150m', type: 'coast', highlight: 'Kelingking T-Rex Sea Cliffs & Oceanic Mantas', image: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=600&q=80' },
  'Bali': { lat: -8.4095, lng: 115.1889, altitude: 'Sea Level', type: 'coast', highlight: 'Island of the Gods & Coral Coastline', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80' }
};

export const TourInteractiveMap: React.FC<TourInteractiveMapProps> = ({
  pkg,
  onSelectDay,
  activeDay = 1
}) => {
  const [viewMode, setViewMode] = useState<'corridor' | 'elevation'>('corridor');

  // Build waypoints from pkg.mapWaypoints or infer from routeWaypoints
  const waypoints: WaypointLocation[] = React.useMemo(() => {
    if (pkg.mapWaypoints && pkg.mapWaypoints.length > 0) {
      return pkg.mapWaypoints;
    }

    const list = pkg.routeWaypoints || ['Surabaya', 'Bromo', 'Ijen', 'Bali'];
    return list.map((item, idx) => {
      // Find matching coordinate key
      const key = Object.keys(DEFAULT_COORDINATES).find(k => 
        item.toLowerCase().includes(k.toLowerCase())
      ) || 'Bromo';

      const match = DEFAULT_COORDINATES[key];
      const day = Math.min(Math.ceil((idx + 1) / Math.max(1, Math.ceil(list.length / pkg.durationDays))), pkg.durationDays);

      return {
        name: item,
        lat: match.lat,
        lng: match.lng,
        day: day,
        type: match.type,
        highlight: match.highlight,
        altitude: match.altitude,
        image: match.image
      };
    });
  }, [pkg]);

  const [selectedWaypoint, setSelectedWaypoint] = useState<WaypointLocation>(waypoints[0]);

  // Bounding box for mapping latitude/longitude to SVG viewport [0, 800] x [0, 420]
  // Longitude spans ~110.0 (Yogyakarta) to ~115.6 (Nusa Penida)
  // Latitude spans ~-7.2 (Surabaya) to ~-8.9 (Uluwatu)
  const minLng = 109.8;
  const maxLng = 115.8;
  const minLat = -7.0;
  const maxLat = -9.0;

  const projectPoint = (lng: number, lat: number) => {
    const x = ((lng - minLng) / (maxLng - minLng)) * 740 + 30;
    const y = ((lat - minLat) / (maxLat - minLat)) * 320 + 40;
    return { x, y };
  };

  const points = waypoints.map(wp => ({
    ...wp,
    ...projectPoint(wp.lng, wp.lat)
  }));

  // Build SVG path data connecting points in sequence
  const pathD = points.reduce((acc, pt, i) => {
    return i === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
  }, '');

  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden flex flex-col">
      {/* Map Header Toolbar */}
      <div className="p-4 sm:p-5 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-stone-50/80">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-emerald-900 text-white flex items-center justify-center shadow-xs">
            <Compass className="w-4 h-4 text-emerald-300" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 font-['Playfair_Display']">
              Interactive Route Corridor &amp; Key Waypoints
            </h3>
            <p className="text-xs text-stone-500">
              {waypoints.length} verified checkpoints across Java &amp; Bali · Click any point to inspect
            </p>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-white border border-stone-200 rounded-xl shadow-2xs self-start sm:self-auto">
          <button
            onClick={() => setViewMode('corridor')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'corridor'
                ? 'bg-[#0F2922] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Route Map</span>
          </button>
          <button
            onClick={() => setViewMode('elevation')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'elevation'
                ? 'bg-[#0F2922] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Elevation Profile</span>
          </button>
        </div>
      </div>

      {/* Main Map Canvas Area */}
      {viewMode === 'corridor' ? (
        <div className="relative bg-[#091D17] text-white overflow-hidden p-2 sm:p-4 select-none">
          {/* Subtle Topographical Grid Background */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="topoGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#topoGrid)" />
            </svg>
          </div>

          {/* Regional Labels in Canvas */}
          <div className="absolute top-4 left-6 text-[10px] tracking-widest uppercase font-bold text-emerald-400/40 pointer-events-none font-mono">
            JAVA SEA
          </div>
          <div className="absolute bottom-4 right-8 text-[10px] tracking-widest uppercase font-bold text-emerald-400/40 pointer-events-none font-mono">
            INDIAN OCEAN
          </div>
          <div className="absolute top-4 right-1/4 text-[10px] tracking-widest uppercase font-bold text-emerald-400/50 pointer-events-none font-mono">
            BALI STRAIT
          </div>

          {/* Interactive SVG Rendering */}
          <div className="relative w-full aspect-[16/9] min-h-[280px] sm:min-h-[380px]">
            <svg
              viewBox="0 0 800 400"
              className="w-full h-full drop-shadow-md"
              style={{ overflow: 'visible' }}
            >
              {/* Island Landmass Silhouettes (Java & Bali decorative contours) */}
              <path
                d="M 20 180 Q 150 140 280 170 Q 420 160 550 190 Q 610 210 630 250 Q 560 280 430 270 Q 300 280 180 260 Q 50 250 20 180 Z"
                fill="rgba(20, 60, 48, 0.45)"
                stroke="rgba(52, 211, 153, 0.2)"
                strokeWidth="1.5"
              />
              <path
                d="M 645 220 Q 690 190 730 210 Q 760 230 750 260 Q 710 280 660 270 Q 640 250 645 220 Z"
                fill="rgba(20, 60, 48, 0.45)"
                stroke="rgba(52, 211, 153, 0.2)"
                strokeWidth="1.5"
              />

              {/* Connecting Overland Route Corridor Line */}
              <path
                d={pathD}
                fill="none"
                stroke="rgba(16, 185, 129, 0.35)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d={pathD}
                fill="none"
                stroke="#34D399"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pulse"
              />

              {/* Waypoint Checkpoint Pins */}
              {points.map((pt, idx) => {
                const isSelected = selectedWaypoint.name === pt.name;
                const isMountain = pt.type === 'mountain';
                const isTemple = pt.type === 'temple';

                return (
                  <g
                    key={idx}
                    transform={`translate(${pt.x}, ${pt.y})`}
                    className="cursor-pointer transition-transform group"
                    onClick={() => {
                      setSelectedWaypoint(pt);
                      if (onSelectDay) onSelectDay(pt.day);
                    }}
                  >
                    {/* Pulsing Selection Halo */}
                    {isSelected && (
                      <circle
                        r="18"
                        fill="rgba(52, 211, 153, 0.25)"
                        className="animate-ping"
                      />
                    )}

                    {/* Outer Pin Body */}
                    <circle
                      r={isSelected ? '12' : '9'}
                      fill={isSelected ? '#34D399' : '#0F2922'}
                      stroke={isSelected ? '#FFFFFF' : '#34D399'}
                      strokeWidth="2.5"
                      className="transition-all drop-shadow-md"
                    />

                    {/* Inner Sequence Number */}
                    <text
                      textAnchor="middle"
                      dy="3.5"
                      fontSize={isSelected ? '10' : '8'}
                      fontWeight="bold"
                      fill={isSelected ? '#091A14' : '#FFFFFF'}
                      fontFamily="monospace"
                    >
                      {idx + 1}
                    </text>

                    {/* Floating Label */}
                    <g transform={`translate(0, ${pt.y > 320 ? -18 : 22})`}>
                      <rect
                        x={-(pt.name.length * 3.6 + 8)}
                        y="-10"
                        width={pt.name.length * 7.2 + 16}
                        height="18"
                        rx="9"
                        fill="rgba(9, 26, 20, 0.88)"
                        stroke={isSelected ? '#34D399' : 'rgba(255,255,255,0.2)'}
                        strokeWidth="1"
                      />
                      <text
                        textAnchor="middle"
                        dy="2.5"
                        fontSize="9"
                        fontWeight={isSelected ? 'bold' : 'normal'}
                        fill={isSelected ? '#34D399' : '#FFFFFF'}
                      >
                        {pt.name}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Map Footer Legend & Waypoint Stepper */}
          <div className="mt-2 p-3 sm:p-4 rounded-2xl bg-slate-950/70 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[11px] font-mono font-bold uppercase text-emerald-400">
                Route Progression:
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {waypoints.map((wp, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedWaypoint(wp);
                      if (onSelectDay) onSelectDay(wp.day);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all cursor-pointer flex items-center gap-1 ${
                      selectedWaypoint.name === wp.name
                        ? 'bg-emerald-500 text-slate-950 font-bold shadow-xs'
                        : 'bg-white/10 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    <span className="font-mono text-[10px]">{idx + 1}.</span>
                    <span>{wp.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="text-[11px] text-emerald-300/70 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>GPS Verified Coordinates</span>
            </div>
          </div>
        </div>
      ) : (
        /* Elevation Profile View */
        <div className="p-6 bg-[#091D17] text-white space-y-6">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-emerald-300 font-['Playfair_Display']">
              High-Altitude Mountain &amp; Coastal Elevation Profile
            </h4>
            <p className="text-xs text-stone-300">
              Pacing through dramatic topographical shifts: from sea-level coastal ports up to 2,600m volcanic caldera viewpoints.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {waypoints.map((wp, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedWaypoint(wp)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  selectedWaypoint.name === wp.name
                    ? 'bg-emerald-950/80 border-emerald-400 shadow-sm'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-stone-400">
                    <span className="font-mono">Step {idx + 1}</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/10 font-bold text-emerald-300">Day {wp.day}</span>
                  </div>
                  <h5 className="font-bold text-xs text-white truncate">{wp.name}</h5>
                </div>

                <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">
                    {wp.altitude || 'Sea Level'}
                  </span>
                  <Mountain className="w-3.5 h-3.5 text-stone-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Selected Waypoint Detailed Dossier Card */}
      {selectedWaypoint && (
        <div className="p-4 sm:p-5 border-t border-stone-200 bg-[#FAF9F6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 min-w-0">
            {selectedWaypoint.image && (
              <img
                src={selectedWaypoint.image}
                alt={selectedWaypoint.name}
                className="w-16 h-16 rounded-2xl object-cover shrink-0 border border-stone-200 shadow-2xs"
              />
            )}
            <div className="space-y-0.5 min-w-0">
              <div className="flex items-center gap-2 text-[11px] text-emerald-800 font-bold uppercase tracking-wider">
                <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-950">
                  Day {selectedWaypoint.day} Milestone
                </span>
                <span>•</span>
                <span>Altitude: {selectedWaypoint.altitude || 'Sea Level'}</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 font-['Playfair_Display'] truncate">
                {selectedWaypoint.name}
              </h4>
              <p className="text-xs text-stone-600 line-clamp-1 leading-relaxed">
                {selectedWaypoint.highlight}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
            {onSelectDay && (
              <button
                onClick={() => onSelectDay(selectedWaypoint.day)}
                className="px-4 py-2 rounded-xl bg-white hover:bg-stone-100 border border-stone-200 text-xs font-bold text-stone-800 transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
              >
                <Calendar className="w-3.5 h-3.5 text-emerald-800" />
                <span>Jump to Day {selectedWaypoint.day}</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
