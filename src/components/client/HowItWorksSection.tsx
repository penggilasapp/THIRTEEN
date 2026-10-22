import React from 'react';
import { useTour } from '../../context/TourContext';
import { FileText, UserCheck, Calculator, CheckCircle2, Compass, Sparkles, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const { openInquireForPackage } = useTour();

  const steps = [
    {
      num: '01',
      title: 'Share Your Vision',
      desc: 'Tell us your destinations, dates, group size, and preferences.',
      icon: FileText
    },
    {
      num: '02',
      title: 'Route Design & Audit',
      desc: 'Our travel specialist designs a personalized itinerary for your needs.',
      icon: UserCheck
    },
    {
      num: '03',
      title: 'Get a Quotation',
      desc: 'Receive a clear, itemized proposal with transparent pricing.',
      icon: Calculator
    },
    {
      num: '04',
      title: 'Confirm & Customize',
      desc: 'Finalize your booking and adjust any details with our team.',
      icon: CheckCircle2
    },
    {
      num: '05',
      title: 'Travel with Confidence',
      desc: 'Enjoy a seamless journey with 24/7 support from our local team.',
      icon: Compass
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-white text-slate-800 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header with right note */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-emerald-900">
              <Sparkles className="w-4 h-4 text-emerald-800" />
              <span>How a Journey Planning Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display'] text-slate-900">
              A Thoughtful, Tailored Journey from Start to Finish
            </h2>
          </div>

          <p className="text-stone-600 text-xs sm:text-sm max-w-sm md:text-right leading-relaxed">
            Every THIRTEEN expedition is custom-designed around your pace and preferences.
          </p>
        </div>

        {/* Steps Grid with Arrow Connectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div key={st.num} className="relative flex">
                <div className="w-full p-5 sm:p-6 rounded-3xl bg-[#FAF9F6] border border-stone-200 flex flex-col justify-between hover:shadow-md hover:border-emerald-700/40 transition-all group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-2xl font-bold text-stone-300 group-hover:text-emerald-900 transition-colors">
                        {st.num}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-emerald-900 shadow-2xs">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="font-bold text-slate-900 text-base font-['Playfair_Display']">
                      {st.title}
                    </h4>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>

                {/* Desktop Arrow Connector between cards */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-stone-200 items-center justify-center text-stone-400 shadow-xs pointer-events-none">
                    <ArrowRight className="w-3 h-3 text-emerald-800" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
