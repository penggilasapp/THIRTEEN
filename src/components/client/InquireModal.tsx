import React, { useState, useEffect } from 'react';
import { useTour } from '../../context/TourContext';
import { 
  X, 
  Sparkles, 
  Check, 
  ArrowRight, 
  ArrowLeft,
  HeartHandshake,
  FileCheck2,
  Copy,
  Layers,
  MapPin,
  Calendar,
  CheckSquare,
  Square
} from 'lucide-react';

export const InquireModal: React.FC = () => {
  const { 
    inquireModalOpen, 
    setInquireModalOpen, 
    preselectedPackageId, 
    preselectedDestinationId,
    preselectedPackageIds,
    preselectedDestinationIds,
    packages, 
    destinations, 
    createInquiry,
    setActiveBookingRefForClient
  } = useTour();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Form Fields - Multi Destination & Multi Tour Support
  const [selectedDestinationIds, setSelectedDestinationIds] = useState<string[]>(['dest-bromo']);
  const [selectedPackageIds, setSelectedPackageIds] = useState<string[]>([]);
  const [serviceTier, setServiceTier] = useState<'essential' | 'private' | 'premium_concierge'>('private');
  
  // Dates & Guests
  const [startDate, setStartDate] = useState<string>('2026-11-20');
  const [endDate, setEndDate] = useState<string>('2026-11-25');
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);

  // Preferences
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState<string>('');
  const [fitnessLevel, setFitnessLevel] = useState<'easy' | 'moderate' | 'active_adventurous'>('moderate');

  // Customer Contact
  const [customerName, setCustomerName] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerCountry, setCustomerCountry] = useState<string>('United Kingdom');
  const [preferredLanguage, setPreferredLanguage] = useState<'en' | 'id' | 'de' | 'fr' | 'nl' | 'zh'>('en');

  // Validation
  const [validationError, setValidationError] = useState<string>('');

  // Sync incoming preselected packages and destinations
  useEffect(() => {
    if (inquireModalOpen) {
      // Initialize preselected packages
      if (preselectedPackageIds && preselectedPackageIds.length > 0) {
        setSelectedPackageIds(preselectedPackageIds);
      } else if (preselectedPackageId) {
        setSelectedPackageIds([preselectedPackageId]);
      } else {
        setSelectedPackageIds([]);
      }

      // Initialize preselected destinations
      if (preselectedDestinationIds && preselectedDestinationIds.length > 0) {
        setSelectedDestinationIds(preselectedDestinationIds);
      } else if (preselectedDestinationId) {
        setSelectedDestinationIds([preselectedDestinationId]);
      } else if (preselectedPackageId) {
        const pkg = packages.find(p => p.id === preselectedPackageId);
        if (pkg && pkg.destinationId) {
          setSelectedDestinationIds([pkg.destinationId]);
        }
      }
    }
  }, [inquireModalOpen, preselectedPackageId, preselectedPackageIds, preselectedDestinationId, preselectedDestinationIds, packages]);

  if (!inquireModalOpen) return null;

  const toggleDestination = (destId: string) => {
    setSelectedDestinationIds(prev => {
      if (prev.includes(destId)) {
        if (prev.length === 1) return prev; // keep at least 1 destination selected
        return prev.filter(id => id !== destId);
      } else {
        return [...prev, destId];
      }
    });
  };

  const togglePackage = (pkgId: string) => {
    setSelectedPackageIds(prev => {
      if (prev.includes(pkgId)) {
        return prev.filter(id => id !== pkgId);
      } else {
        const next = [...prev, pkgId];
        // Automatically ensure destination is included
        const pkg = packages.find(p => p.id === pkgId);
        if (pkg && pkg.destinationId && !selectedDestinationIds.includes(pkg.destinationId)) {
          setSelectedDestinationIds(dPrev => [...dPrev, pkg.destinationId]);
        }
        return next;
      }
    });
  };

  const selectAllJava = () => {
    const javaDests = destinations.filter(d => d.regionId === 'java').map(d => d.id);
    setSelectedDestinationIds(prev => Array.from(new Set([...prev, ...javaDests])));
  };

  const selectAllBali = () => {
    const baliDests = destinations.filter(d => d.regionId === 'bali').map(d => d.id);
    setSelectedDestinationIds(prev => Array.from(new Set([...prev, ...baliDests])));
  };

  const selectedPackagesData = packages.filter(p => selectedPackageIds.includes(p.id));
  const totalCombinedDays = selectedPackagesData.reduce((acc, p) => acc + p.durationDays, 0);
  const totalCombinedNights = selectedPackagesData.reduce((acc, p) => acc + p.durationNights, 0);

  const handleNext = () => {
    setValidationError('');
    if (step === 1) {
      if (selectedDestinationIds.length === 0) {
        setValidationError('Please select at least one destination.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!startDate) {
        setValidationError('Please select your preferred arrival date.');
        return;
      }
      if (adults < 1) {
        setValidationError('At least 1 adult guest required.');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');
    if (!customerName.trim() || !customerEmail.trim()) {
      setValidationError('Please fill in your name and email address so we can send your tailored quotation.');
      return;
    }

    const bookingRef = createInquiry({
      customerName: customerName.trim(),
      customerEmail: customerEmail.trim(),
      customerPhone: customerPhone.trim(),
      customerCountry,
      preferredLanguage,
      destinationId: selectedDestinationIds[0] || 'dest-bromo',
      destinationIds: selectedDestinationIds,
      packageId: selectedPackageIds[0] || undefined,
      packageIds: selectedPackageIds,
      serviceTier,
      startDate,
      endDate,
      adults,
      children,
      specialRequests,
      dietaryRestrictions,
      leadSource: 'website_seo'
    });

    setSubmittedRef(bookingRef);
  };

  const handleCopyRef = () => {
    if (submittedRef) {
      navigator.clipboard.writeText(submittedRef);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleClose = () => {
    setInquireModalOpen(false);
    setStep(1);
    setSubmittedRef(null);
  };

  const handleViewLiveItinerary = () => {
    if (submittedRef) {
      setActiveBookingRefForClient(submittedRef);
      setInquireModalOpen(false);
      window.location.hash = '#client-portal';
    }
  };

  const javaDestinations = destinations.filter(d => d.regionId === 'java');
  const baliDestinations = destinations.filter(d => d.regionId === 'bali');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-auto animate-fade-in">
        
        {/* Header Bar */}
        <div className="px-5 sm:px-8 py-4 sm:py-5 bg-[#0F2922] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-800/80 border border-emerald-600/40 flex items-center justify-center text-emerald-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300">THIRTEEN Expeditions</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                  Multi-Tour Ready
                </span>
              </div>
              <h3 className="text-base sm:text-xl font-bold font-['Playfair_Display'] text-white">
                Request a Bespoke Private Quotation
              </h3>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-step progress indicator */}
        {!submittedRef && (
          <div className="px-6 sm:px-8 py-3 bg-[#FAF9F6] border-b border-stone-200 flex items-center justify-between text-xs font-semibold shrink-0">
            {[
              { num: 1, label: 'Destinations & Tours' },
              { num: 2, label: 'Dates & Guests' },
              { num: 3, label: 'Preferences' },
              { num: 4, label: 'Contact Details' }
            ].map(s => (
              <div 
                key={s.num} 
                className={`flex items-center gap-2 ${
                  step === s.num 
                    ? 'text-emerald-900 font-bold' 
                    : step > s.num 
                      ? 'text-emerald-800 font-medium' 
                      : 'text-stone-400'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${
                  step === s.num 
                    ? 'bg-[#0F2922] text-white shadow-2xs' 
                    : step > s.num 
                      ? 'bg-emerald-200 text-emerald-900' 
                      : 'bg-stone-200 text-stone-500'
                }`}>
                  {step > s.num ? '✓' : s.num}
                </span>
                <span className="hidden md:inline">{s.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 overflow-y-auto grow space-y-6">
          {validationError && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-2xl text-xs text-rose-800 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-600 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {/* SUCCESS SCREEN */}
          {submittedRef ? (
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-sm">
                <FileCheck2 className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Inquiry Registered
                </span>
                <h4 className="text-2xl font-bold font-['Playfair_Display'] text-slate-900">
                  Your Bespoke Expedition is Being Crafted
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Thank you, <span className="text-slate-900 font-semibold">{customerName}</span>. Your bespoke travel inquiry has been received by our senior travel designers.
                </p>
              </div>

              {/* Reference Code Box */}
              <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 max-w-sm mx-auto space-y-2">
                <span className="text-[10px] uppercase text-stone-500 font-mono tracking-wider block">
                  Official Booking Reference
                </span>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-mono font-extrabold text-[#0F2922] tracking-wider">
                    {submittedRef}
                  </span>
                  <button
                    onClick={handleCopyRef}
                    className="p-2 rounded-lg bg-white border border-stone-200 hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
                    title="Copy reference code"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                {copied && <span className="text-[11px] text-emerald-700 font-medium block">Copied to clipboard!</span>}
              </div>

              {/* Dispatch Summary */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 max-w-lg mx-auto text-left space-y-2">
                <div className="flex items-center gap-2 font-bold">
                  <HeartHandshake className="w-4 h-4 text-emerald-800" />
                  <span>The THIRTEEN Bespoke Protocol:</span>
                </div>
                <ul className="space-y-1 list-disc list-inside text-stone-700 text-[11px]">
                  <li>Our specialist reviews route feasibility, private chauffeur logistics, and boutique lodge availability.</li>
                  <li>An itemized official quotation with transparent line items will be sent to <strong>{customerEmail}</strong>.</li>
                  <li>You can track this reservation anytime on the website using reference <strong>{submittedRef}</strong>.</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={handleViewLiveItinerary}
                  className="px-6 py-3 rounded-xl bg-[#0F2922] hover:bg-[#153A30] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Track in Client Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleClose}
                  className="px-5 py-3 rounded-xl bg-stone-100 text-stone-700 hover:bg-stone-200 text-xs font-semibold cursor-pointer"
                >
                  Close &amp; Explore More
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* STEP 1: Multi-Destination & Multi-Tour Selection */}
              {step === 1 && (
                <div className="space-y-6">
                  
                  {/* MULTI-DESTINATION SELECTION */}
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1 border-b border-stone-200">
                      <div>
                        <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                          1. Select Destinations (Choose 1 or More)
                        </label>
                        <p className="text-[11px] text-stone-500">
                          Combine multiple destinations across Java and Bali into a connected cross-island itinerary.
                        </p>
                      </div>

                      {/* Quick Select Actions */}
                      <div className="flex items-center gap-2 text-xs">
                        <button
                          type="button"
                          onClick={selectAllJava}
                          className="px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-[11px] font-medium transition-colors cursor-pointer"
                        >
                          + All Java
                        </button>
                        <button
                          type="button"
                          onClick={selectAllBali}
                          className="px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-[11px] font-medium transition-colors cursor-pointer"
                        >
                          + All Bali
                        </button>
                      </div>
                    </div>

                    {/* Active Selected Destination Chips */}
                    <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-bold text-emerald-950">
                          {selectedDestinationIds.length} Destinations Selected:
                        </span>
                        {destinations
                          .filter(d => selectedDestinationIds.includes(d.id))
                          .map(d => (
                            <span 
                              key={d.id} 
                              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-900 text-white shadow-2xs"
                            >
                              <MapPin className="w-3 h-3 text-emerald-300" />
                              <span>{d.name}</span>
                              <button
                                type="button"
                                onClick={() => toggleDestination(d.id)}
                                className="hover:text-rose-300 ml-0.5"
                                title="Remove destination"
                              >
                                ×
                              </button>
                            </span>
                          ))}
                      </div>
                    </div>

                    {/* Java Group */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                        Java Destinations
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                        {javaDestinations.map(d => {
                          const isSelected = selectedDestinationIds.includes(d.id);
                          return (
                            <div
                              key={d.id}
                              onClick={() => toggleDestination(d.id)}
                              className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-2.5 ${
                                isSelected
                                  ? 'border-emerald-800 bg-emerald-50/60 shadow-2xs'
                                  : 'border-stone-200 bg-stone-50 hover:bg-white hover:border-stone-300'
                              }`}
                            >
                              <div className="mt-0.5 shrink-0 text-emerald-800">
                                {isSelected ? (
                                  <CheckSquare className="w-4 h-4 text-emerald-800" />
                                ) : (
                                  <Square className="w-4 h-4 text-stone-300" />
                                )}
                              </div>
                              <div className="min-w-0">
                                <span className="font-bold text-xs text-slate-900 block truncate">{d.name}</span>
                                <span className="text-[10px] text-stone-500 line-clamp-1 mt-0.5">{d.tagline || d.shortDescription}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bali Group */}
                    <div className="space-y-2 pt-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                        Bali Destinations
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                        {baliDestinations.map(d => {
                          const isSelected = selectedDestinationIds.includes(d.id);
                          return (
                            <div
                              key={d.id}
                              onClick={() => toggleDestination(d.id)}
                              className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-2.5 ${
                                isSelected
                                  ? 'border-emerald-800 bg-emerald-50/60 shadow-2xs'
                                  : 'border-stone-200 bg-stone-50 hover:bg-white hover:border-stone-300'
                              }`}
                            >
                              <div className="mt-0.5 shrink-0 text-emerald-800">
                                {isSelected ? (
                                  <CheckSquare className="w-4 h-4 text-emerald-800" />
                                ) : (
                                  <Square className="w-4 h-4 text-stone-300" />
                                )}
                              </div>
                              <div className="min-w-0">
                                <span className="font-bold text-xs text-slate-900 block truncate">{d.name}</span>
                                <span className="text-[10px] text-stone-500 line-clamp-1 mt-0.5">{d.tagline || d.shortDescription}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* MULTI-PACKAGE / TOUR COMBINER */}
                  <div className="space-y-3 pt-4 border-t border-stone-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1">
                      <div>
                        <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                          2. Select Curated Expedition(s) to Combine
                        </label>
                        <p className="text-[11px] text-stone-500">
                          Select one or multi-select several packages to link together into a single expedition.
                        </p>
                      </div>

                      {selectedPackageIds.length > 0 && (
                        <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full self-start sm:self-auto">
                          {selectedPackageIds.length} Tour{selectedPackageIds.length > 1 ? 's' : ''} Combined ({totalCombinedDays}D{totalCombinedNights}N)
                        </span>
                      )}
                    </div>

                    {/* Combined Expedition Banner if 2+ tours selected */}
                    {selectedPackageIds.length > 1 && (
                      <div className="p-3.5 rounded-2xl bg-[#0F2922] text-white text-xs space-y-1.5 shadow-sm">
                        <div className="flex items-center gap-2 font-bold text-emerald-300">
                          <Layers className="w-4 h-4" />
                          <span>Multi-Tour Combination Active</span>
                        </div>
                        <p className="text-[11px] text-stone-200 leading-relaxed">
                          You have selected <strong>{selectedPackageIds.length} expeditions</strong>. We will unite them into one continuous itinerary with private cross-provincial vehicle transfers, connecting trains, and coordinated boutique accommodation.
                        </p>
                      </div>
                    )}

                    <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                      {/* Option for 100% custom route */}
                      <div
                        onClick={() => setSelectedPackageIds([])}
                        className={`p-3 rounded-xl border cursor-pointer text-xs transition-all flex items-center justify-between ${
                          selectedPackageIds.length === 0
                            ? 'border-emerald-800 bg-emerald-50/70 text-emerald-950 font-medium'
                            : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-white'
                        }`}
                      >
                        <div className="flex items-start gap-2.5">
                          <div className="mt-0.5 shrink-0 text-emerald-800">
                            {selectedPackageIds.length === 0 ? (
                              <CheckSquare className="w-4 h-4 text-emerald-800" />
                            ) : (
                              <Square className="w-4 h-4 text-stone-300" />
                            )}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">Custom Tailored Route (Build from Scratch)</div>
                            <div className="text-[11px] text-stone-500">Design a custom day-by-day journey touching all your selected destinations.</div>
                          </div>
                        </div>
                      </div>

                      {/* Package Checklist */}
                      {packages.map(pkg => {
                        const isChecked = selectedPackageIds.includes(pkg.id);
                        return (
                          <div
                            key={pkg.id}
                            onClick={() => togglePackage(pkg.id)}
                            className={`p-3 rounded-xl border cursor-pointer text-xs transition-all flex items-center justify-between gap-3 ${
                              isChecked
                                ? 'border-emerald-800 bg-emerald-50/70 text-emerald-950'
                                : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-white'
                            }`}
                          >
                            <div className="flex items-start gap-2.5 min-w-0">
                              <div className="mt-0.5 shrink-0 text-emerald-800">
                                {isChecked ? (
                                  <CheckSquare className="w-4 h-4 text-emerald-800" />
                                ) : (
                                  <Square className="w-4 h-4 text-stone-300" />
                                )}
                              </div>
                              <div className="min-w-0">
                                <div className="font-semibold text-slate-900 flex items-center gap-2 flex-wrap">
                                  <span>{pkg.title}</span>
                                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-200/80 text-stone-800 font-mono">
                                    {pkg.indicativeDuration}
                                  </span>
                                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium">
                                    {pkg.destinationName}
                                  </span>
                                </div>
                                <div className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">
                                  {pkg.shortDescription}
                                </div>
                              </div>
                            </div>
                            
                            <span className="text-[10px] uppercase font-bold text-stone-400 shrink-0 hidden sm:inline">
                              {isChecked ? 'Included' : '+ Add'}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* SERVICE TIER SELECTION */}
                  <div className="pt-4 border-t border-stone-200 space-y-2">
                    <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                      3. Service Tier Level
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { id: 'essential', label: 'Essential', desc: 'Verified local drivers, certified guides, standard heritage stays' },
                        { id: 'private', label: 'Private (Core)', desc: 'Dedicated private luxury chauffeur, hand-picked lodges, 24/7 CS' },
                        { id: 'premium_concierge', label: 'Premium Concierge', desc: '5-star suites, private historian, VIP airport fast-track' }
                      ].map(tier => (
                        <div
                          key={tier.id}
                          onClick={() => setServiceTier(tier.id as any)}
                          className={`p-3 rounded-xl border cursor-pointer text-xs transition-all ${
                            serviceTier === tier.id
                              ? 'border-emerald-800 bg-emerald-50/60 shadow-2xs'
                              : 'border-stone-200 bg-stone-50 hover:bg-white'
                          }`}
                        >
                          <div className="font-bold text-slate-900">{tier.label}</div>
                          <div className="text-[11px] text-stone-500 mt-1">{tier.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* STEP 2: Dates & Guests */}
              {step === 2 && (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
                        Estimated Arrival Date *
                      </label>
                      <input
                        type="date"
                        value={startDate}
                        onChange={e => setStartDate(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-emerald-800 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
                        Estimated Departure Date (Flexible)
                      </label>
                      <input
                        type="date"
                        value={endDate}
                        onChange={e => setEndDate(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-emerald-800 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
                        Adult Guests (Age 12+) *
                      </label>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          className="w-10 h-10 rounded-xl bg-stone-100 hover:bg-stone-200 font-bold text-sm text-stone-800 transition-colors flex items-center justify-center cursor-pointer"
                        >
                          -
                        </button>
                        <span className="font-mono font-bold text-base text-slate-900 w-8 text-center">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults(adults + 1)}
                          className="w-10 h-10 rounded-xl bg-stone-100 hover:bg-stone-200 font-bold text-sm text-stone-800 transition-colors flex items-center justify-center cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
                        Children (Under 12)
                      </label>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                          className="w-10 h-10 rounded-xl bg-stone-100 hover:bg-stone-200 font-bold text-sm text-stone-800 transition-colors flex items-center justify-center cursor-pointer"
                        >
                          -
                        </button>
                        <span className="font-mono font-bold text-base text-slate-900 w-8 text-center">{children}</span>
                        <button
                          type="button"
                          onClick={() => setChildren(children + 1)}
                          className="w-10 h-10 rounded-xl bg-stone-100 hover:bg-stone-200 font-bold text-sm text-stone-800 transition-colors flex items-center justify-center cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-950">
                    <p className="font-medium">
                      Private vehicle allocation (Executive MPV, HiAce Premio, or Land Cruiser) will be matched to your total party size for spacious passenger comfort.
                    </p>
                  </div>
                </div>
              )}

              {/* STEP 3: Preferences & Readiness */}
              {step === 3 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-2 uppercase tracking-wider">
                      Physical Readiness &amp; Pace
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'easy', title: 'Gentle & Leisurely', desc: 'No steep ascents, comfortable walking paces' },
                        { id: 'moderate', title: 'Moderate (Standard)', desc: 'Standard crater rim stairs & waterfall nature trails' },
                        { id: 'active_adventurous', title: 'Active & Adventurous', desc: 'Midnight volcano ascents, river crossings, rugged terrain' }
                      ].map(lvl => (
                        <div
                          key={lvl.id}
                          onClick={() => setFitnessLevel(lvl.id as any)}
                          className={`p-3.5 rounded-2xl border cursor-pointer text-xs transition-all ${
                            fitnessLevel === lvl.id
                              ? 'border-emerald-800 bg-emerald-50/60 shadow-2xs'
                              : 'border-stone-200 bg-stone-50 hover:bg-white'
                          }`}
                        >
                          <div className="font-bold text-slate-900">{lvl.title}</div>
                          <div className="text-[11px] text-stone-500 mt-1">{lvl.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
                      Special Interests &amp; Custom Requests
                    </label>
                    <textarea
                      rows={3}
                      value={specialRequests}
                      onChange={e => setSpecialRequests(e.target.value)}
                      placeholder="e.g. Dedicated landscape photography focus, romantic honeymoon anniversary surprises, private tea masterclass, request for senior volcanologist guide, connecting train between Java and Bali..."
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-800 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
                      Dietary Preferences or Medical Notes
                    </label>
                    <input
                      type="text"
                      value={dietaryRestrictions}
                      onChange={e => setDietaryRestrictions(e.target.value)}
                      placeholder="e.g. Vegetarian, Halal, Nut allergy, Gluten-sensitive, Asthma (for Ijen gas checks)"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-800 focus:bg-white"
                    />
                  </div>
                </div>
              )}

              {/* STEP 4: Customer Contact Info */}
              {step === 4 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={e => setCustomerName(e.target.value)}
                        placeholder="e.g. Alexander Mitchell"
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-800 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={customerEmail}
                        onChange={e => setCustomerEmail(e.target.value)}
                        placeholder="alexander@domain.com"
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-800 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
                        Phone / WhatsApp (with Country Code)
                      </label>
                      <input
                        type="tel"
                        value={customerPhone}
                        onChange={e => setCustomerPhone(e.target.value)}
                        placeholder="e.g. +44 7911 123456"
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-800 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
                        Country of Residence
                      </label>
                      <input
                        type="text"
                        value={customerCountry}
                        onChange={e => setCustomerCountry(e.target.value)}
                        placeholder="e.g. United Kingdom, Australia, USA, Netherlands"
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-800 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
                        Preferred Communication Language
                      </label>
                      <select
                        value={preferredLanguage}
                        onChange={e => setPreferredLanguage(e.target.value as any)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-emerald-800"
                      >
                        <option value="en">English (Default)</option>
                        <option value="id">Bahasa Indonesia</option>
                        <option value="de">Deutsch (German)</option>
                        <option value="fr">Français (French)</option>
                        <option value="nl">Nederlands (Dutch)</option>
                        <option value="zh">Mandarin</option>
                      </select>
                    </div>
                    <div className="flex items-center text-xs text-stone-500 p-2.5 bg-stone-50 rounded-xl border border-stone-200">
                      <span>Inquiries are acknowledged automatically; human designers prepare quotation costing during business hours.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer actions */}
        {!submittedRef && (
          <div className="px-4 sm:px-6 py-4 bg-[#FAF9F6] border-t border-stone-200 flex items-center justify-between shrink-0">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((step - 1) as any)}
                className="px-4 py-2.5 rounded-xl bg-stone-100 text-stone-700 hover:bg-stone-200 text-xs font-semibold flex items-center gap-1.5 transition-colors min-h-[44px] cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div></div>
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl bg-[#0F2922] hover:bg-[#153A30] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm min-h-[44px] cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="px-6 py-2.5 rounded-xl bg-[#0F2922] hover:bg-[#153A30] text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md min-h-[44px] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <span>Submit Bespoke Inquiry</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
