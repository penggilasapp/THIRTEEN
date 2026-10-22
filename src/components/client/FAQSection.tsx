import React, { useState, useMemo } from 'react';
import { FAQS_DATA, FAQItem, FAQCategory } from '../../data/policyData';
import { useTour } from '../../context/TourContext';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  ShieldCheck, 
  CreditCard, 
  Compass, 
  AlertTriangle, 
  MessageSquare, 
  ExternalLink, 
  Check, 
  ThumbsUp, 
  X,
  FileText,
  PhoneCall
} from 'lucide-react';

interface FAQSectionProps {
  id?: string;
  showHeader?: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ 
  id = 'faq',
  showHeader = true 
}) => {
  const { openInquireForPackage } = useTour();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>('faq-01');
  const [helpfulFeedback, setHelpfulFeedback] = useState<Record<string, boolean>>({});

  const categories: { key: string; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { key: 'all', label: 'All Questions', icon: HelpCircle },
    { key: 'Booking & Payment', label: 'Booking & Payment', icon: CreditCard },
    { key: 'Travel Requirements & Visas', label: 'Travel Requirements & Visas', icon: FileText },
    { key: 'Mountain Safety & Health', label: 'Mountain Safety & Health', icon: ShieldCheck },
    { key: 'Overland Logistics & Transport', label: 'Overland Logistics & Transport', icon: Compass },
    { key: 'Cancellations & Force Majeure', label: 'Cancellations & Contingency', icon: AlertTriangle }
  ];

  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch = 
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleExpand = (faqId: string) => {
    setExpandedId(prev => (prev === faqId ? null : faqId));
  };

  const handleHelpful = (faqId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setHelpfulFeedback(prev => ({
      ...prev,
      [faqId]: !prev[faqId]
    }));
  };

  return (
    <section id={id} className="py-20 sm:py-24 bg-white text-slate-800 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header with Left Title & Right Subtitle */}
        {showHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-emerald-900">
                <HelpCircle className="w-4 h-4 text-emerald-800" />
                <span>Traveler Information &amp; Operational Standards</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display'] text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>

            <p className="text-stone-600 text-xs sm:text-sm max-w-md md:text-right leading-relaxed">
              Clear, transparent answers regarding booking procedures, visa regulations, health screening, and overland logistics.
            </p>
          </div>
        )}

        {/* Search Bar */}
        <div className="relative w-full">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-stone-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions or keywords (e.g. visa, deposit, 3M respirator, Bromo cold, ferry...)"
              className="w-full pl-12 pr-10 py-3.5 text-xs sm:text-sm bg-[#FAF9F6] border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:bg-white transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/60"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {searchQuery && (
            <div className="text-[11px] text-stone-500 mt-2 px-2 flex items-center justify-between">
              <span>Showing {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for "{searchQuery}"</span>
              <button 
                onClick={() => setSearchQuery('')}
                className="text-emerald-800 font-semibold hover:underline"
              >
                Reset search
              </button>
            </div>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            const count = cat.key === 'all' 
              ? FAQS_DATA.length 
              : FAQS_DATA.filter(f => f.category === cat.key).length;

            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0F2922] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200/80 hover:text-stone-900'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-700'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List Header with View All FAQs Link */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
            Questions &amp; Direct Answers
          </span>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="text-xs font-bold text-emerald-900 hover:text-emerald-950 flex items-center gap-1 hover:underline"
          >
            <span>View All FAQs</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 px-4 rounded-3xl bg-stone-50 border border-stone-200 space-y-3">
              <HelpCircle className="w-8 h-8 text-stone-400 mx-auto" />
              <h3 className="text-base font-bold text-slate-800">No matching questions found</h3>
              <p className="text-xs text-stone-500 max-w-md mx-auto">
                We couldn't find any questions matching "{searchQuery}". You can chat directly with our Travel Concierge on WhatsApp for instant assistance.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  className="px-4 py-2 rounded-xl bg-emerald-800 text-white text-xs font-semibold hover:bg-emerald-900 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          ) : (
            filteredFaqs.slice(0, showHeader ? 5 : undefined).map((faq) => {
              const isExpanded = expandedId === faq.id;
              const isHelpful = helpfulFeedback[faq.id];

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all border ${
                    isExpanded
                      ? 'bg-white border-emerald-800/40 shadow-sm ring-1 ring-emerald-800/10'
                      : 'bg-[#FAF9F6] border-stone-200/90 hover:border-stone-300 hover:bg-white'
                  }`}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleExpand(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <h3 className={`text-xs sm:text-sm font-semibold transition-colors ${
                      isExpanded ? 'text-emerald-950 font-bold' : 'text-slate-800'
                    }`}>
                      {faq.question}
                    </h3>

                    {/* Circular expander button */}
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors border ${
                      isExpanded 
                        ? 'bg-[#0F2922] text-white border-[#0F2922]' 
                        : 'bg-white text-stone-500 border-stone-200 hover:border-emerald-800'
                    }`}>
                      {isExpanded ? (
                        <span className="text-sm font-bold leading-none">−</span>
                      ) : (
                        <span className="text-sm font-bold leading-none">+</span>
                      )}
                    </div>
                  </button>

                  {/* Answer Content */}
                  {isExpanded && (
                    <div className="px-5 pb-5 sm:px-6 pt-1 border-t border-stone-100 text-xs sm:text-sm text-stone-600 leading-relaxed space-y-4">
                      <p className="whitespace-pre-line text-stone-700">
                        {faq.answer}
                      </p>

                      {/* Footer Actions inside Accordion */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-100 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-stone-400">Was this information helpful?</span>
                          <button
                            onClick={(e) => handleHelpful(faq.id, e)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1 transition-all cursor-pointer ${
                              isHelpful
                                ? 'bg-emerald-100 text-emerald-900 font-semibold'
                                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                            }`}
                          >
                            <ThumbsUp className="w-3 h-3" />
                            <span>{isHelpful ? 'Helpful' : 'Yes'}</span>
                          </button>
                        </div>

                        <div className="flex items-center gap-3">
                          <a
                            href={`https://wa.me/6281234567890?text=${encodeURIComponent(`Hello THIRTEEN Concierge, I have a question regarding: "${faq.question}"`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800 hover:text-emerald-950 hover:underline"
                          >
                            <MessageSquare className="w-3 h-3 text-emerald-600" />
                            <span>Ask Travel Designer about this</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* 24/7 Concierge Support Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0B2019] to-[#14352A] p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-emerald-300 text-xs font-semibold">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Dedicated International Concierge</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Playfair_Display'] text-white">
              Have specific travel requirements or health inquiries?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/80 max-w-xl">
              Our Travel Designers provide personalized consultations within 15 minutes, covering private flight connections, customized dietary needs, or tailored pacing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="https://wa.me/6281234567890?text=Hello%20THIRTEEN%20Operator%20Tour,%20I%20would%20like%20to%20inquire%20about%20booking%20and%20travel%20requirements"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 min-h-[44px] rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md text-center"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp (24/7)</span>
            </a>

            <button
              onClick={() => openInquireForPackage()}
              className="w-full sm:w-auto px-5 py-3 min-h-[44px] rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span>Request Custom Quote</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
