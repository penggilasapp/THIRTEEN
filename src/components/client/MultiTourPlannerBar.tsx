import React, { useState } from 'react';
import { useTour } from '../../context/TourContext';
import { 
  Sparkles, 
  Layers, 
  X, 
  Check, 
  Calendar, 
  MapPin, 
  ArrowRight,
  ChevronUp,
  ChevronDown,
  Trash2
} from 'lucide-react';

export const MultiTourPlannerBar: React.FC = () => {
  const { 
    packages, 
    selectedMultiPackageIds, 
    toggleSelectMultiPackage, 
    clearSelectedMultiPackages,
    openInquireForMultiPackages,
    navigateToTourDetail
  } = useTour();

  const [expanded, setExpanded] = useState(false);

  if (selectedMultiPackageIds.length === 0) {
    return null;
  }

  const selectedPackages = packages.filter(p => selectedMultiPackageIds.includes(p.id));
  const totalDays = selectedPackages.reduce((acc, p) => acc + p.durationDays, 0);
  const totalNights = selectedPackages.reduce((acc, p) => acc + p.durationNights, 0);

  const handleInquireAll = () => {
    openInquireForMultiPackages(selectedMultiPackageIds);
  };

  return (
    <div className="fixed bottom-3 sm:bottom-6 left-3 right-3 sm:left-auto sm:right-6 sm:max-w-xl z-40 transition-all duration-300">
      <div className="bg-[#0F2922] text-white rounded-2xl sm:rounded-3xl shadow-2xl border border-emerald-700/60 p-3 sm:p-4 backdrop-blur-xl">
        
        {/* Top Summary Bar */}
        <div className="flex items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-800/80 border border-emerald-600/40 flex items-center justify-center shrink-0 text-emerald-300">
              <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs sm:text-sm font-bold text-white tracking-wide truncate">
                  {selectedPackages.length} {selectedPackages.length === 1 ? 'Expedition' : 'Expeditions'} Selected
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                  {totalDays}D{totalNights}N Total
                </span>
              </div>
              <p className="text-[11px] text-emerald-200/80 truncate hidden xs:block">
                {selectedPackages.map(p => p.title).join(' + ')}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setExpanded(!expanded)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-stone-300 hover:text-white transition-colors cursor-pointer"
              title={expanded ? 'Collapse preview' : 'Expand preview'}
              aria-label="Toggle tour preview"
            >
              {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>

            <button
              onClick={handleInquireAll}
              className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-[#071E17] font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="whitespace-nowrap">Inquire Combined</span>
            </button>
          </div>
        </div>

        {/* Expandable Selected Tours Tray */}
        {expanded && (
          <div className="mt-3 pt-3 border-t border-emerald-800/60 space-y-2 max-h-60 overflow-y-auto pr-1">
            <div className="flex items-center justify-between text-[11px] text-emerald-300 font-semibold mb-1">
              <span>Selected Route Components:</span>
              <button
                onClick={clearSelectedMultiPackages}
                className="text-stone-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Trash2 className="w-3 h-3" />
                <span>Clear All</span>
              </button>
            </div>

            {selectedPackages.map(pkg => (
              <div 
                key={pkg.id} 
                className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-between gap-2 text-xs"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <div className="min-w-0">
                    <span 
                      onClick={() => navigateToTourDetail(pkg.id)}
                      className="font-medium text-white truncate block hover:text-emerald-300 cursor-pointer"
                    >
                      {pkg.title}
                    </span>
                    <span className="text-[10px] text-emerald-300/80 font-mono">
                      {pkg.indicativeDuration} • {pkg.destinationName}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => toggleSelectMultiPackage(pkg.id)}
                  className="p-1 rounded-lg hover:bg-white/10 text-stone-400 hover:text-white shrink-0 cursor-pointer"
                  title="Remove from combined itinerary"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}

            <div className="pt-2 text-center">
              <p className="text-[11px] text-emerald-300/70">
                Our senior travel designer will seamlessly bridge these expeditions with private chauffeur transfers and continuous lodge reservations.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
