import React from 'react';
import { useTour } from '../../context/TourContext';
import { Sparkles, ShieldCheck, Compass, ArrowRight, HeartHandshake } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { openInquireForPackage, setClientPage } = useTour();

  return (
    <section id="home" className="relative min-h-[82vh] flex items-center justify-center bg-[#0B2019] text-white overflow-hidden px-4 sm:px-6 lg:px-8 py-20">
      {/* Background imagery with subtle cinematic grade */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=2200&q=85"
          alt="Indonesian Caldera"
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2019] via-[#0B2019]/60 to-[#0B2019]/30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Subtle pill kicker */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-[10px] sm:text-xs font-semibold tracking-wider uppercase max-w-full">
          <Sparkles className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
          <span className="truncate">TAILORED JOURNEYS ACROSS JAVA &amp; BALI</span>
        </div>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-['Playfair_Display'] tracking-tight leading-tight text-white">
          Discover Ijen, Bromo &amp; Bali Your Way.
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-emerald-100/90 font-light leading-relaxed px-2">
          Explore tailored private journeys across Java and Bali, with routes shaped around your destinations, travel dates, and preferences.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 w-full max-w-md sm:max-w-none mx-auto">
          <button
            onClick={() => setClientPage('tours')}
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white text-emerald-950 hover:bg-stone-100 font-bold text-xs uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer min-h-[48px]"
          >
            <span>EXPLORE OUR TOURS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => openInquireForPackage()}
            className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-[#0F2922] hover:bg-[#153A30] text-white border border-emerald-800/60 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer min-h-[48px]"
          >
            <div className="w-5 h-5 rounded-full bg-emerald-800/70 flex items-center justify-center">
              <Compass className="w-3.5 h-3.5 text-emerald-200" />
            </div>
            <span>PLAN YOUR JOURNEY</span>
          </button>
        </div>

        {/* Trust Pillars */}
        <div className="pt-10 sm:pt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
          <div className="p-4 sm:p-4.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-emerald-200 shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white font-['Playfair_Display']">Certified Partner Network</h4>
              <p className="text-[11px] sm:text-xs text-emerald-100/80 mt-1 leading-relaxed">
                Audited 4x4 drivers, alpine miner guides &amp; safety respirators.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-4.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-emerald-200 shrink-0 mt-0.5">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white font-['Playfair_Display']">100% Private Expeditions</h4>
              <p className="text-[11px] sm:text-xs text-emerald-100/80 mt-1 leading-relaxed">
                No mixed groups or rigid buses. Your timetable, vehicles, and pace.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-4.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-emerald-200 shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white font-['Playfair_Display']">Transparent &amp; Fair Pricing</h4>
              <p className="text-[11px] sm:text-xs text-emerald-100/80 mt-1 leading-relaxed">
                Tailored to your group size, travel dates, and exact preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
