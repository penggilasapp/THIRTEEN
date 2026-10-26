import React, { useState } from 'react';
import { HeroSection } from './HeroSection';
import { useTour } from '../../context/TourContext';
import { EXPERIENCES_DATA } from '../../data/experienceData';
import { TRAVEL_ARTICLES_DATA } from '../../data/guideData';
import { HowItWorksSection } from './HowItWorksSection';
import { FAQSection } from './FAQSection';
import { TourPackage } from '../../types/tour';
import { TourRouteDetailModal } from './TourRouteDetailModal';
import { 
  ArrowRight, 
  MapPin, 
  Compass, 
  Sparkles, 
  Clock, 
  Palmtree, 
  Mountain, 
  Car, 
  Activity, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const { 
    destinations, 
    packages, 
    setClientPage, 
    openInquireForPackage,
    navigateToDestinationRoute,
    navigateToTourDetail
  } = useTour();

  const [inspectingPackage, setInspectingPackage] = useState<TourPackage | null>(null);
  const [activeRegionTab, setActiveRegionTab] = useState<'bali' | 'java'>('bali');

  const featuredPackages = packages.filter(p => p.active).slice(0, 2);
  const baliDestinations = destinations.filter(d => d.regionId === 'bali').slice(0, 5);
  const javaDestinations = destinations.filter(d => d.regionId === 'java').slice(0, 7);
  const featuredExperiences = EXPERIENCES_DATA.slice(0, 3);
  const featuredArticles = TRAVEL_ARTICLES_DATA.slice(0, 2);

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. FEATURED TOURS: Curated Expeditions & Routes */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-stone-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-emerald-900">
                <Compass className="w-4 h-4 text-emerald-800" />
                <span>Featured Private Tours</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Playfair_Display'] text-slate-900">
                Curated Expeditions &amp; Routes
              </h2>
            </div>

            <button
              onClick={() => setClientPage('tours')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 hover:text-emerald-950 transition-colors cursor-pointer self-start sm:self-center"
            >
              <span>Explore All Tours</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 2 Wide Expeditions Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {featuredPackages.map((pkg, idx) => (
              <div
                key={pkg.id}
                onClick={() => navigateToTourDetail(pkg.id)}
                className="group rounded-3xl bg-white border border-stone-200 overflow-hidden hover:shadow-xl hover:border-emerald-800/40 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top Image with Badges */}
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                    <img
                      src={pkg.coverImage}
                      alt={pkg.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Badges on Top */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          idx === 0 
                            ? 'bg-[#0F2922] text-white' 
                            : 'bg-amber-600 text-white'
                        }`}>
                          {pkg.indicativeDuration}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-slate-900 shadow-xs">
                          {idx === 0 ? 'Scheduled Package' : 'Private Tour'}
                        </span>
                      </div>

                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-slate-900/90 text-white border border-white/20">
                        {pkg.code}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>{pkg.destinationName}</span>
                      <span className="text-stone-300">·</span>
                      <span className="text-stone-500 font-normal">
                        {idx === 0 ? 'Essential Experience' : 'Private Expedition'}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-['Playfair_Display'] text-slate-900 group-hover:text-emerald-950 transition-colors">
                      {pkg.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-2">
                      {pkg.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Specs Footer Row with Circular Arrow Button */}
                <div className="p-5 sm:p-6 pt-0 border-t border-stone-100 flex items-center justify-between gap-3 mt-2">
                  <div className="flex items-center gap-3 sm:gap-5 text-xs text-stone-600 flex-wrap pt-3">
                    <div className="flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                      <span>{idx === 0 ? 'Moderate' : 'Challenging'}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Car className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                      <span>4x4 Private</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                      <span>Surabaya / Malang</span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateToTourDetail(pkg.id);
                    }}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-50 text-emerald-900 group-hover:bg-[#0F2922] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs mt-3 cursor-pointer"
                    aria-label={`View itinerary for ${pkg.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DESTINATIONS: 5-Column Grid with Bali/Java Toggle */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F6] border-b border-stone-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
          {/* Header & Pill Switcher */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-emerald-900">
                <Sparkles className="w-4 h-4 text-emerald-800" />
                <span>Explore Indonesia</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Playfair_Display'] text-slate-900">
                Destinations
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                From stunning coastlines to volcanic highlands, explore the beauty and cultural richness of Bali, Java, and beyond.
              </p>
            </div>

            {/* Region Switcher Pills: Bali (5) / Java (7) */}
            <div className="flex items-center gap-2 p-1 rounded-2xl bg-white border border-stone-200 shadow-2xs self-start md:self-center">
              <button
                onClick={() => setActiveRegionTab('bali')}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeRegionTab === 'bali'
                    ? 'bg-[#0F2922] text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Bali ({baliDestinations.length})
              </button>
              <button
                onClick={() => setActiveRegionTab('java')}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeRegionTab === 'java'
                    ? 'bg-[#0F2922] text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Java ({javaDestinations.length})
              </button>
            </div>
          </div>

          {/* 5-Column Grid on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {(activeRegionTab === 'bali' ? baliDestinations : javaDestinations).map((dest) => (
              <div
                key={dest.id}
                onClick={() => navigateToDestinationRoute(dest.regionId as any, dest.slug)}
                className="group rounded-2xl bg-white border border-stone-200 overflow-hidden hover:shadow-lg hover:border-emerald-800/40 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-40 overflow-hidden bg-slate-900">
                    <img
                      src={dest.coverImage || dest.heroImage}
                      alt={dest.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-4 space-y-1.5">
                    <h3 className="text-base font-bold font-['Playfair_Display'] text-slate-900 group-hover:text-emerald-950 transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                      {dest.shortDescription || dest.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <div className="pt-2 border-t border-stone-100 flex items-center gap-1 text-xs font-bold text-emerald-900 group-hover:text-emerald-950">
                    <span>Explore Destination</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE EXPERIENCES: 3 Cards */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-stone-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-emerald-900">
                <Sparkles className="w-4 h-4 text-emerald-800" />
                <span>Nature, Culture &amp; Adventure</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Playfair_Display'] text-slate-900">
                Signature Experiences
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Hand-picked private excursions led by certified alpine miner guides, cultural historians, and experienced 4x4 drivers.
              </p>
            </div>

            <button
              onClick={() => setClientPage('experiences')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 hover:text-emerald-950 transition-colors cursor-pointer self-start sm:self-center"
            >
              <span>View All Experiences</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredExperiences.map((exp) => (
              <div
                key={exp.id}
                onClick={() => setClientPage('experiences')}
                className="group rounded-3xl bg-white border border-stone-200 overflow-hidden hover:shadow-xl hover:border-emerald-800/40 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={exp.coverImage}
                      alt={exp.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-white text-slate-900 shadow-xs">
                      {exp.categoryLabel}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center gap-1 text-xs text-stone-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{exp.duration}</span>
                      <span className="text-stone-300">·</span>
                      <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="truncate">{exp.destination}</span>
                    </div>

                    <h3 className="text-base font-bold font-['Playfair_Display'] text-slate-900 group-hover:text-emerald-950 transition-colors">
                      {exp.title}
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-end border-t border-stone-100 mt-2">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-900 group-hover:bg-[#0F2922] group-hover:text-white flex items-center justify-center transition-colors shadow-2xs mt-3">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <HowItWorksSection />

      {/* 6. TRAVEL GUIDES & FIELD ADVICE: 2 Wide Horizontal Cards */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F6] border-b border-stone-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-emerald-900">
                <Sparkles className="w-4 h-4 text-emerald-800" />
                <span>Expedition Intelligence</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Playfair_Display'] text-slate-900">
                Travel Guides &amp; Field Advice
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Practical insights to prepare for volcanic terrains, sacred temple sanctuaries, and overland journeys across Indonesia.
              </p>
            </div>

            <button
              onClick={() => setClientPage('travel-guide')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 hover:text-emerald-950 transition-colors cursor-pointer self-start sm:self-center"
            >
              <span>Explore All Travel Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {featuredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setClientPage('travel-guide')}
                className="group rounded-3xl bg-white border border-stone-200 overflow-hidden hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    {/* Badge */}
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-[#0F2922] text-white">
                      {article.destinationTag}
                    </span>

                    {/* Meta overlay */}
                    <span className="absolute bottom-3 left-4 text-xs text-white/90 font-medium">
                      {article.readingTime} · {article.publishDate}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 space-y-2">
                    <h3 className="text-base sm:text-lg font-bold font-['Playfair_Display'] text-slate-900 group-hover:text-emerald-950 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 flex items-center justify-end border-t border-stone-100">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-50 text-emerald-900 group-hover:bg-[#0F2922] group-hover:text-white flex items-center justify-center transition-colors shadow-2xs mt-2">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <FAQSection />

      {/* 8. BOTTOM CTA BANNER: Plan Your Private Expedition */}
      <section className="py-20 sm:py-24 bg-[#0F2922] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Mountain Panorama Background Image */}
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=2200&q=80"
            alt="Mount Bromo Panorama"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-emerald-200 text-xs font-bold tracking-wider uppercase border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span>Ready for a Journey Beyond the Ordinary?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Playfair_Display'] text-white leading-tight">
            Plan Your Private Expedition
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
            Connect with our travel designer to create a tailored itinerary across Java and Bali, based on your travel dates, group size, and interests.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
            <button
              onClick={() => openInquireForPackage()}
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white text-emerald-950 hover:bg-stone-100 font-bold text-xs uppercase tracking-wider transition-all shadow-xl cursor-pointer flex items-center justify-center gap-2 min-h-[48px]"
            >
              <span>REQUEST A PERSONALIZED QUOTE</span>
              <ArrowRight className="w-4 h-4 text-emerald-950" />
            </button>

            <a
              href="https://wa.me/6281234567890?text=Hello%20THIRTEEN%20Operator%20Tour,%20I%20would%20like%20to%20plan%20a%20private%20expedition"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-[#14352A] hover:bg-[#1a4436] text-white border border-emerald-700/60 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
            >
              <MessageSquare className="w-4 h-4 text-emerald-300" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Unified Tour Route Detail Modal */}
      <TourRouteDetailModal
        pkg={inspectingPackage}
        onClose={() => setInspectingPackage(null)}
        onInquire={(id) => openInquireForPackage(id)}
      />
    </div>
  );
};
