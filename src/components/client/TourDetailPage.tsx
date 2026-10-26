import React, { useState, useEffect } from 'react';
import { useTour } from '../../context/TourContext';
import { TourPackage } from '../../types/tour';
import { TourInteractiveMap } from './TourInteractiveMap';
import { 
  ArrowLeft, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Compass, 
  Share2, 
  Printer, 
  ChevronRight, 
  Car, 
  Mountain, 
  Utensils, 
  Bed, 
  AlertTriangle, 
  Check, 
  X, 
  Maximize2, 
  MessageCircle, 
  Calendar,
  Layers,
  HeartHandshake
} from 'lucide-react';

export const TourDetailPage: React.FC = () => {
  const { 
    packages, 
    selectedTourId, 
    setClientPage, 
    navigateToTourDetail,
    openInquireForPackage,
    toggleSelectMultiPackage,
    isPackageSelectedForMulti,
    selectedMultiPackageIds
  } = useTour();

  const [activeDay, setActiveDay] = useState<number>(1);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Find active package or fallback to first package
  const pkg: TourPackage | undefined = packages.find(p => p.id === selectedTourId) || packages[0];

  useEffect(() => {
    // Reset active day when package changes
    setActiveDay(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedTourId]);

  if (!pkg) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <Compass className="w-12 h-12 text-stone-400 mb-4 animate-spin-slow" />
        <h2 className="text-2xl font-bold font-['Playfair_Display'] text-stone-800">Expedition Not Found</h2>
        <p className="text-sm text-stone-600 mt-2 max-w-md">The requested tour itinerary could not be located in our private catalog.</p>
        <button
          onClick={() => setClientPage('tours')}
          className="mt-6 px-6 py-2.5 rounded-xl bg-[#0F2922] text-white text-xs font-semibold hover:bg-emerald-900 transition-colors"
        >
          Return to Tour Catalog
        </button>
      </div>
    );
  }

  // Aggregate all gallery images
  const galleryPhotos = [
    pkg.coverImage,
    ...(pkg.galleryImages || []),
    'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80'
  ].filter((v, i, a) => a.indexOf(v) === i).slice(0, 8);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello THIRTEEN Concierge, I would like to inquire about the private itinerary "${pkg.title}" (${pkg.indicativeDuration}). Please share personalized quotation details.`
  );

  const relatedPackages = packages
    .filter(p => p.id !== pkg.id && p.active)
    .slice(0, 2);

  return (
    <div className="bg-[#FAF9F6] text-slate-800 min-h-screen pb-24 print:bg-white print:text-black">
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="bg-[#0B2019] text-white border-b border-emerald-950/80 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          <nav className="flex items-center gap-2 text-xs text-emerald-200/80 overflow-x-auto whitespace-nowrap scrollbar-none py-1">
            <button
              onClick={() => setClientPage('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-400/60 shrink-0" />
            <button
              onClick={() => setClientPage('tours')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Tours &amp; Expeditions
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-400/60 shrink-0" />
            <span className="font-semibold text-white truncate max-w-[200px] sm:max-w-xs">{pkg.title}</span>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setClientPage('tours')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">All Tours</span>
            </button>

            <button
              onClick={handleShare}
              title="Share Tour Itinerary"
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all cursor-pointer text-xs font-semibold inline-flex items-center gap-1.5"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedLink ? 'Link Copied' : 'Share'}</span>
            </button>

            <button
              onClick={handlePrint}
              title="Print Itinerary"
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all cursor-pointer text-xs font-semibold inline-flex items-center gap-1.5 print:hidden"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header Banner */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        {/* Background Image & Editorial Gradient */}
        <div className="absolute inset-0">
          <img
            src={pkg.coverImage}
            alt={pkg.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-45 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
          <div className="absolute inset-0 bg-radial-at-t from-transparent via-transparent to-slate-950/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 space-y-6">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-semibold uppercase tracking-wider backdrop-blur-xs">
              {pkg.destinationName}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-stone-200 border border-white/15 font-medium backdrop-blur-xs flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{pkg.indicativeDuration}</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-stone-200 border border-white/15 font-mono text-[11px] backdrop-blur-xs">
              {pkg.code}
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-200 border border-amber-400/30 font-semibold uppercase tracking-wider text-[11px] backdrop-blur-xs">
              {pkg.serviceTier.replace('_', ' ')} tier
            </span>
          </div>

          {/* Title & Tagline */}
          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Playfair_Display'] leading-[1.15] text-white">
              {pkg.title}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-stone-300 font-light leading-relaxed max-w-3xl">
              {pkg.shortDescription}
            </p>
          </div>

          {/* Quick Route Corridor Strip */}
          {pkg.routeSummary && (
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-emerald-100 max-w-full overflow-hidden">
                <Compass className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold text-white shrink-0">Route Corridor:</span>
                <span className="truncate">{pkg.routeSummary}</span>
              </div>
            </div>
          )}

          {/* Hero CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-3.5">
            <button
              onClick={() => openInquireForPackage(pkg.id)}
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-emerald-950/50 flex items-center gap-2 cursor-pointer min-h-[46px]"
            >
              <Sparkles className="w-4 h-4 text-emerald-200" />
              <span>Request a Personalized Quote</span>
            </button>

            <a
              href={`https://wa.me/6281234567890?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold transition-all backdrop-blur-md flex items-center gap-2 cursor-pointer min-h-[46px]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Direct Concierge WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Technical Specifications Bar */}
      <section className="bg-white border-b border-stone-200 py-6 px-4 sm:px-6 lg:px-8 shadow-2xs">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Duration</span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-900">
              <Clock className="w-4 h-4 text-emerald-800 shrink-0" />
              <span>{pkg.indicativeDuration}</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Fitness Level</span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-900">
              <Mountain className="w-4 h-4 text-emerald-800 shrink-0" />
              <span className="truncate">{pkg.fitnessLevel || 'Moderate Active'}</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Expedition Fleet</span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-900">
              <Car className="w-4 h-4 text-emerald-800 shrink-0" />
              <span className="truncate">{pkg.fleetType ? pkg.fleetType.split('&')[0] : '4x4 Cruiser & Van'}</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Service Format</span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-900">
              <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0" />
              <span className="capitalize">{pkg.tourType.replace('_', ' ')}</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Terrain Type</span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-900">
              <Compass className="w-4 h-4 text-emerald-800 shrink-0" />
              <span className="truncate">{pkg.terrainType ? pkg.terrainType.split('&')[0] : 'Alpine & Volcanic'}</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Guidance</span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-900">
              <HeartHandshake className="w-4 h-4 text-emerald-800 shrink-0" />
              <span>Certified Bilingual</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body Content & Sidebar Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Itinerary Content Column (8 Cols on Desktop) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. Experience Narrative */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span>The Curated Experience</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display'] text-slate-900">
                A Journey Crafted for Discerning Travelers
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {pkg.experienceNarrative}
              </p>

              {/* Highlights Bulleted Grid */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-xs uppercase font-bold text-stone-400 tracking-wider mb-4">Key Expedition Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {pkg.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Interactive Route Map & Elevation Profile */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    <Compass className="w-4 h-4 text-emerald-700" />
                    <span>Interactive Route Map</span>
                  </div>
                  <h2 className="text-2xl font-bold font-['Playfair_Display'] text-slate-900 mt-1">
                    Expedition Milestones &amp; Elevation Profile
                  </h2>
                </div>
                <span className="text-xs text-stone-500">
                  Select any waypoint or day to view details
                </span>
              </div>

              {/* Embedded TourInteractiveMap Component */}
              <TourInteractiveMap
                pkg={pkg}
                activeDay={activeDay}
                onSelectDay={(day) => setActiveDay(day)}
              />
            </div>

            {/* 3. Detailed Day-by-Day Itinerary Schedule */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    <Calendar className="w-4 h-4 text-emerald-700" />
                    <span>Day-by-Day Itinerary</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display'] text-slate-900 mt-1">
                    Operational Daily Schedule
                  </h2>
                </div>

                {/* Day Selector Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  {pkg.itineraryDays.map((d) => (
                    <button
                      key={d.dayNumber}
                      onClick={() => setActiveDay(d.dayNumber)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                        activeDay === d.dayNumber
                          ? 'bg-[#0F2922] text-white shadow-xs'
                          : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                      }`}
                    >
                      Day {d.dayNumber}
                    </button>
                  ))}
                </div>
              </div>

              {/* Render Days */}
              <div className="space-y-6">
                {pkg.itineraryDays.map((day) => {
                  const isActive = activeDay === day.dayNumber;
                  return (
                    <div
                      key={day.dayNumber}
                      className={`rounded-3xl bg-white border transition-all duration-300 overflow-hidden ${
                        isActive
                          ? 'border-emerald-800/80 shadow-md ring-1 ring-emerald-800/20'
                          : 'border-stone-200/90 shadow-2xs hover:border-stone-300'
                      }`}
                    >
                      {/* Day Header Accordion Toggle */}
                      <button
                        onClick={() => setActiveDay(isActive ? 0 : day.dayNumber)}
                        className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer hover:bg-stone-50/60 transition-colors"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-bold text-sm sm:text-base shrink-0 ${
                            isActive
                              ? 'bg-[#0F2922] text-white'
                              : 'bg-stone-100 text-stone-700'
                          }`}>
                            D{day.dayNumber}
                          </div>
                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                              Day {day.dayNumber}
                            </span>
                            <h3 className="text-base sm:text-xl font-bold font-['Playfair_Display'] text-slate-900 mt-0.5">
                              {day.title}
                            </h3>
                            <p className="text-xs text-stone-500 mt-1">
                              {day.subtitle}
                            </p>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          {day.stayLocation && (
                            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-stone-600 bg-stone-100 px-3 py-1 rounded-full font-medium">
                              <Bed className="w-3.5 h-3.5 text-emerald-700" />
                              <span className="truncate max-w-[140px]">{day.stayLocation}</span>
                            </span>
                          )}
                        </div>
                      </button>

                      {/* Day Body Content */}
                      <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-stone-100 space-y-6">
                        {/* Timed Activities Timeline */}
                        <div className="space-y-3 relative pl-6 sm:pl-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-stone-200">
                          {day.schedule.map((slot, sIdx) => (
                            <div key={sIdx} className="relative group">
                              {/* Dot */}
                              <div className="absolute -left-[19px] sm:-left-[23px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-emerald-800 group-hover:scale-125 transition-transform" />

                              <div className="bg-stone-50/80 hover:bg-stone-50 p-3.5 rounded-2xl border border-stone-200/60 transition-colors">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                  <span className="text-xs font-mono font-bold text-emerald-900 bg-emerald-100/60 px-2 py-0.5 rounded-md">
                                    {slot.time}
                                  </span>
                                  {slot.location && (
                                    <span className="text-[11px] text-stone-500 flex items-center gap-1 font-medium">
                                      <MapPin className="w-3 h-3 text-stone-400" />
                                      <span>{slot.location}</span>
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed">
                                  {slot.activity}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Stay & Meals Info Footer for Day */}
                        <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600">
                          {day.stayLocation && (
                            <div className="flex items-center gap-2">
                              <Bed className="w-4 h-4 text-emerald-800" />
                              <span className="font-semibold text-stone-900">Overnight Stay:</span>
                              <span>{day.stayLocation}</span>
                            </div>
                          )}

                          {day.meals && day.meals.length > 0 && (
                            <div className="flex items-center gap-2">
                              <Utensils className="w-4 h-4 text-emerald-800" />
                              <span className="font-semibold text-stone-900">Meals Included:</span>
                              <div className="flex items-center gap-1">
                                {day.meals.map((m, mIdx) => (
                                  <span key={mIdx} className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-semibold text-[10px]">
                                    {m}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Facilities & Service Matrix: Inclusions vs Exclusions */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Facilities &amp; Standards</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display'] text-slate-900 mt-1">
                  What is Included in Your Journey
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Transparent, comprehensive private inclusions designed to eliminate hidden expenses in the field.
                </p>
              </div>

              {/* Two-Column Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Inclusions */}
                <div className="space-y-4 p-5 sm:p-6 rounded-2xl bg-emerald-50/40 border border-emerald-200/70">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm uppercase tracking-wide">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Guaranteed Inclusions</span>
                  </div>
                  <ul className="space-y-3">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800 leading-relaxed">
                        <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="space-y-4 p-5 sm:p-6 rounded-2xl bg-rose-50/40 border border-rose-200/60">
                  <div className="flex items-center gap-2 text-rose-900 font-bold text-sm uppercase tracking-wide">
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span>Personal Exclusions</span>
                  </div>
                  <ul className="space-y-3">
                    {pkg.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Safety Mandates Notice */}
              {pkg.safetyMandates && pkg.safetyMandates.length > 0 && (
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 text-amber-700" />
                    <span>Expedition Safety &amp; Health Mandates</span>
                  </div>
                  <ul className="space-y-1.5 pl-6 list-disc text-xs sm:text-sm text-amber-950/80">
                    {pkg.safetyMandates.map((sm, idx) => (
                      <li key={idx} className="leading-relaxed">{sm}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* 5. Photo Gallery with Lightbox */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-emerald-700" />
                    <span>Visual Showcase</span>
                  </div>
                  <h2 className="text-2xl font-bold font-['Playfair_Display'] text-slate-900 mt-1">
                    Route Photo Gallery
                  </h2>
                </div>
                <span className="text-xs text-stone-500">
                  {galleryPhotos.length} high-resolution captures
                </span>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {galleryPhotos.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPhotoIndex(idx)}
                    className="relative group h-32 sm:h-44 rounded-2xl overflow-hidden bg-slate-900 cursor-pointer border border-stone-200/80 shadow-2xs"
                  >
                    <img
                      src={img}
                      alt={`Expedition view ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Conversion & Consultation Sidebar (4 Cols on Desktop) */}
          <div className="lg:col-span-4 lg:sticky lg:top-20 space-y-6">
            
            {/* Private Tailored Quotation Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-xl space-y-6">
              
              <div className="space-y-2 pb-4 border-b border-stone-100">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-emerald-900 tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>Private Expedition</span>
                  </span>
                  <span className="text-[10px] font-semibold text-stone-500 uppercase tracking-wider bg-stone-100 px-2.5 py-0.5 rounded-full">
                    Tailored Quotation
                  </span>
                </div>
                <h3 className="text-xl font-bold font-['Playfair_Display'] text-slate-900">
                  Bespoke Private Expedition
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Operated exclusively as a 100% private journey. Tailored to your travel party, preferred dates, and luxury tier with continuous concierge coordination.
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2.5 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Guaranteed private vehicle &amp; chauffeur throughout</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Certified licensed alpine &amp; cultural specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Handpicked boutique heritage &amp; mountain lodges</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>24/7 dedicated trip concierge support</span>
                </div>
              </div>

              {/* Multi-Tour Combination Option */}
              <div className="pt-2">
                <button
                  onClick={() => toggleSelectMultiPackage(pkg.id)}
                  className={`w-full py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isPackageSelectedForMulti(pkg.id)
                      ? 'bg-[#0F2922] text-white border-emerald-800 shadow-xs'
                      : 'bg-emerald-50 text-emerald-950 border-emerald-300 hover:bg-emerald-100'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>
                    {isPackageSelectedForMulti(pkg.id)
                      ? '✓ Included in Multi-Tour Plan (Added)'
                      : '+ Combine with Another Tour / Region'}
                  </span>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-1">
                <button
                  onClick={() => openInquireForPackage(pkg.id)}
                  className="w-full py-4 px-5 rounded-2xl bg-[#0F2922] hover:bg-[#153A30] text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
                >
                  <Sparkles className="w-4 h-4 text-emerald-300" />
                  <span>Request Bespoke Itinerary &amp; Quote</span>
                </button>

                <a
                  href={`https://wa.me/6281234567890?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-2xl bg-white hover:bg-stone-50 text-emerald-950 border border-emerald-900/20 text-xs sm:text-sm font-bold transition-all shadow-2xs flex items-center justify-center gap-2 cursor-pointer min-h-[46px]"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>Instant Concierge Chat (WhatsApp)</span>
                </a>
              </div>

              {/* Consultation Hotline Notice */}
              <div className="pt-4 border-t border-stone-100 text-center space-y-1">
                <p className="text-[11px] text-stone-500">
                  Prefer direct phone consultation?
                </p>
                <p className="text-xs font-mono font-bold text-slate-900">
                  +62 812-3456-7890 (24/7 Desk)
                </p>
              </div>

            </div>

            {/* Need Customization Card */}
            <div className="bg-[#0B2019] text-white rounded-3xl p-6 border border-emerald-950/80 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Need Route Modifications?</span>
              </div>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                Add extra days in Yogyakarta, connect directly to North Bali, or upgrade to luxury villa retreats. Our senior travel designers can shape any bespoke extension.
              </p>
              <button
                onClick={() => openInquireForPackage(pkg.id)}
                className="text-xs font-bold text-emerald-300 hover:text-white underline cursor-pointer inline-flex items-center gap-1"
              >
                <span>Customize this route with a designer</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* Related Expeditions Section */}
        {relatedPackages.length > 0 && (
          <div className="mt-20 pt-12 border-t border-stone-200 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  Continue Exploring
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display'] text-slate-900 mt-1">
                  Other Curated Expeditions
                </h2>
              </div>
              <button
                onClick={() => setClientPage('tours')}
                className="text-xs font-bold text-emerald-800 hover:text-emerald-950 underline self-start sm:self-auto cursor-pointer"
              >
                View all journeys →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPackages.map(rp => (
                <div
                  key={rp.id}
                  className="rounded-3xl bg-white border border-stone-200/90 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row"
                >
                  <div className="w-full sm:w-2/5 h-48 sm:h-auto relative bg-slate-900 shrink-0">
                    <img
                      src={rp.coverImage}
                      alt={rp.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/70 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                      {rp.destinationName}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col justify-between space-y-3 grow">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-[11px] text-stone-500">
                        <Clock className="w-3.5 h-3.5 text-emerald-800" />
                        <span>{rp.indicativeDuration}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold font-['Playfair_Display'] text-slate-900 leading-snug">
                        {rp.title}
                      </h3>
                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {rp.shortDescription}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                      <button
                        onClick={() => navigateToTourDetail(rp.id)}
                        className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
                      >
                        <span>View Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => openInquireForPackage(rp.id)}
                        className="px-3.5 py-1.5 rounded-xl bg-[#0F2922] text-white text-xs font-semibold hover:bg-emerald-900 transition-colors cursor-pointer"
                      >
                        Inquire
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Lightbox Modal for Full Screen Gallery */}
      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-8">
          <div className="w-full max-w-5xl flex items-center justify-between text-white pb-4">
            <span className="text-xs font-mono text-stone-400">
              {selectedPhotoIndex + 1} of {galleryPhotos.length}
            </span>
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative max-w-5xl max-h-[75vh] w-full flex items-center justify-center">
            <img
              src={galleryPhotos[selectedPhotoIndex]}
              alt="Full view"
              referrerPolicy="no-referrer"
              className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl"
            />
          </div>

          <div className="w-full max-w-5xl flex items-center justify-between pt-4">
            <button
              onClick={() => setSelectedPhotoIndex(prev => (prev !== null && prev > 0 ? prev - 1 : galleryPhotos.length - 1))}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Previous
            </button>
            <button
              onClick={() => setSelectedPhotoIndex(prev => (prev !== null && prev < galleryPhotos.length - 1 ? prev + 1 : 0))}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Mobile Fixed Bottom Sticky Consultation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 p-3.5 px-4 shadow-xl flex items-center gap-3">
        <a
          href={`https://wa.me/6281234567890?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 flex items-center justify-center shrink-0 min-h-[44px]"
          title="WhatsApp Concierge"
        >
          <MessageCircle className="w-5 h-5 text-emerald-800" />
        </a>

        <button
          onClick={() => openInquireForPackage(pkg.id)}
          className="grow py-3.5 px-4 rounded-xl bg-[#0F2922] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm min-h-[44px] cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-emerald-300" />
          <span>Request a Quote</span>
        </button>
      </div>

    </div>
  );
};
