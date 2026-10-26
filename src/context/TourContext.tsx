import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Destination,
  Region,
  TourPackage,
  CertifiedPartner,
  BookingInquiry,
  PipelineStatus,
  Quotation,
  ActiveItineraryDay,
  ActiveItineraryActivity,
  FollowUpLog
} from '../types/tour';
import {
  INITIAL_DESTINATIONS,
  REGIONS_DATA,
  DESTINATIONS_DATA,
  INITIAL_PACKAGES,
  INITIAL_PARTNERS,
  INITIAL_BOOKINGS
} from '../data/mockData';

interface TourContextType {
  // Destinations & Regions
  regions: Region[];
  destinations: Destination[];
  selectedRegionSlug: 'bali' | 'java' | null;
  selectedDestinationSlug: string | null;
  navigateToDestinationRoute: (regionSlug?: 'bali' | 'java' | null, destinationSlug?: string | null) => void;
  packages: TourPackage[];
  addPackage: (newPkg: Omit<TourPackage, 'id' | 'code'>) => void;
  updatePackage: (id: string, updates: Partial<TourPackage>) => void;
  deletePackage: (id: string) => void;

  // Bookings & Leads CRM
  bookings: BookingInquiry[];
  createInquiry: (data: {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    customerCountry: string;
    preferredLanguage: 'en' | 'id' | 'de' | 'fr' | 'nl' | 'zh';
    destinationId?: string;
    destinationIds?: string[];
    packageId?: string;
    packageIds?: string[];
    serviceTier: 'essential' | 'private' | 'premium_concierge';
    startDate: string;
    endDate: string;
    adults: number;
    children: number;
    specialRequests: string;
    dietaryRestrictions?: string;
    leadSource?: BookingInquiry['leadSource'];
  }) => string; // returns bookingRef
  updateBooking: (id: string, updates: Partial<BookingInquiry>) => void;
  updatePipelineStatus: (id: string, status: PipelineStatus) => void;
  saveQuotation: (bookingId: string, quotation: Quotation) => void;
  verifyPayment: (
    bookingId: string,
    type: 'deposit' | 'balance',
    reference: string,
    method: 'bank_transfer' | 'electronic_wise' | 'credit_card_gateway'
  ) => void;
  addFollowUpLog: (
    bookingId: string,
    log: Omit<FollowUpLog, 'id' | 'date'>
  ) => void;

  // Itinerary Management
  updateBookingItinerary: (bookingId: string, itinerary: ActiveItineraryDay[]) => void;
  updateItineraryDay: (bookingId: string, dayNumber: number, dayData: Partial<ActiveItineraryDay>) => void;
  addItineraryActivity: (bookingId: string, dayNumber: number, activity: Omit<ActiveItineraryActivity, 'id'>) => void;
  removeItineraryActivity: (bookingId: string, dayNumber: number, activityId: string) => void;
  verifySafetyChecklist: (bookingId: string, dayNumber: number, verified: boolean) => void;

  // Partners
  partners: CertifiedPartner[];
  addPartner: (partner: Omit<CertifiedPartner, 'id'>) => void;
  updatePartner: (id: string, updates: Partial<CertifiedPartner>) => void;
  deletePartner: (id: string) => void;

  // System & View States
  viewMode: 'client' | 'admin';
  setViewMode: (mode: 'client' | 'admin') => void;
  deviceMode: 'responsive' | 'mobile_sim';
  setDeviceMode: (mode: 'responsive' | 'mobile_sim') => void;
  activeBookingRefForClient: string | null;
  setActiveBookingRefForClient: (ref: string | null) => void;
  selectedCurrency: 'USD' | 'IDR' | 'EUR' | 'AUD';
  setSelectedCurrency: (curr: 'USD' | 'IDR' | 'EUR' | 'AUD') => void;
  selectedLang: 'en' | 'id';
  setSelectedLang: (lang: 'en' | 'id') => void;
  // Client Page Routing
  clientPage: 'home' | 'destinations' | 'experiences' | 'tours' | 'tour-detail' | 'about-us' | 'travel-guide' | 'contact' | 'faq';
  setClientPage: (page: 'home' | 'destinations' | 'experiences' | 'tours' | 'tour-detail' | 'about-us' | 'travel-guide' | 'contact' | 'faq') => void;
  selectedTourId: string | null;
  setSelectedTourId: (id: string | null) => void;
  navigateToTourDetail: (tourId: string) => void;

  // Inquire Modal & Multi-Tour Selection
  inquireModalOpen: boolean;
  setInquireModalOpen: (open: boolean) => void;
  preselectedPackageId: string | null;
  preselectedDestinationId: string | null;
  preselectedPackageIds: string[];
  preselectedDestinationIds: string[];
  selectedMultiPackageIds: string[];
  toggleSelectMultiPackage: (packageId: string) => void;
  clearSelectedMultiPackages: () => void;
  isPackageSelectedForMulti: (packageId: string) => boolean;
  openInquireForPackage: (packageId?: string, destinationId?: string) => void;
  openInquireForMultiPackages: (packageIds: string[], destinationIds?: string[]) => void;

  resetToDefaults: () => void;
}

const STORAGE_KEY_PREFIX = 'thirteen_tour_operator_v1_';

const TourContext = createContext<TourContextType | undefined>(undefined);

export const TourProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Regions & Destinations
  const [regions] = useState<Region[]>(REGIONS_DATA);
  const [destinations] = useState<Destination[]>(INITIAL_DESTINATIONS);
  const [selectedRegionSlug, setSelectedRegionSlug] = useState<'bali' | 'java' | null>(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash.startsWith('destinations/')) {
      const parts = hash.split('/');
      return parts[1] === 'bali' || parts[1] === 'java' ? (parts[1] as any) : null;
    }
    return null;
  });
  const [selectedDestinationSlug, setSelectedDestinationSlug] = useState<string | null>(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash.startsWith('destinations/')) {
      const parts = hash.split('/');
      return parts[2] || null;
    }
    return null;
  });

  // Packages
  const [packages, setPackages] = useState<TourPackage[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}packages`);
    if (saved) {
      try { 
        const parsed = JSON.parse(saved); 
        return parsed.map((p: TourPackage) => {
          if (!p.indicativePriceIdr || !p.indicativePriceUsd) {
            const init = INITIAL_PACKAGES.find(ip => ip.id === p.id);
            if (init) {
              return { ...p, indicativePriceIdr: init.indicativePriceIdr, indicativePriceUsd: init.indicativePriceUsd };
            }
          }
          return p;
        });
      } catch (e) { console.error(e); }
    }
    return INITIAL_PACKAGES;
  });

  // Bookings / Leads CRM
  const [bookings, setBookings] = useState<BookingInquiry[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}bookings`);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_BOOKINGS;
  });

  // Partners
  const [partners, setPartners] = useState<CertifiedPartner[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}partners`);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_PARTNERS;
  });

  // UI state
  const [viewMode, setViewMode] = useState<'client' | 'admin'>('client');
  const [deviceMode, setDeviceMode] = useState<'responsive' | 'mobile_sim'>('responsive');
  const [activeBookingRefForClient, setActiveBookingRefForClient] = useState<string | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'IDR' | 'EUR' | 'AUD'>('USD');
  const [selectedLang, setSelectedLang] = useState<'en' | 'id'>('en');

  // Selected Tour for Dedicated Tour Detail Page
  const [selectedTourId, setSelectedTourId] = useState<string | null>(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash.startsWith('tours/')) {
      return hash.split('/')[1] || null;
    }
    return null;
  });

  // Client Page Routing state
  const [clientPage, setClientPageState] = useState<'home' | 'destinations' | 'experiences' | 'tours' | 'tour-detail' | 'about-us' | 'travel-guide' | 'contact' | 'faq'>(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash.startsWith('destinations')) {
      return 'destinations';
    }
    if (hash.startsWith('tours/') && hash.split('/')[1]) {
      return 'tour-detail';
    }
    const valid: Array<'home' | 'destinations' | 'experiences' | 'tours' | 'tour-detail' | 'about-us' | 'travel-guide' | 'contact' | 'faq'> = [
      'home', 'destinations', 'experiences', 'tours', 'tour-detail', 'about-us', 'travel-guide', 'contact', 'faq'
    ];
    return valid.includes(hash as any) ? (hash as any) : 'home';
  });

  const navigateToDestinationRoute = (regionSlug?: 'bali' | 'java' | null, destinationSlug?: string | null) => {
    setSelectedRegionSlug(regionSlug || null);
    setSelectedDestinationSlug(destinationSlug || null);
    setClientPageState('destinations');
    let hash = 'destinations';
    if (regionSlug) {
      hash += `/${regionSlug}`;
      if (destinationSlug) {
        hash += `/${destinationSlug}`;
      }
    }
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToTourDetail = (tourId: string) => {
    setSelectedTourId(tourId);
    setClientPageState('tour-detail');
    window.location.hash = `tours/${tourId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setClientPage = (page: 'home' | 'destinations' | 'experiences' | 'tours' | 'tour-detail' | 'about-us' | 'travel-guide' | 'contact' | 'faq') => {
    setClientPageState(page);
    if (page === 'destinations') {
      setSelectedRegionSlug(null);
      setSelectedDestinationSlug(null);
    }
    if (page !== 'tour-detail') {
      setSelectedTourId(null);
    }
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash.startsWith('destinations')) {
        setClientPageState('destinations');
        const parts = hash.split('/');
        const region = parts[1] === 'bali' || parts[1] === 'java' ? (parts[1] as any) : null;
        const destination = parts[2] || null;
        setSelectedRegionSlug(region);
        setSelectedDestinationSlug(destination);
        return;
      }
      if (hash.startsWith('tours/')) {
        const tourId = hash.split('/')[1];
        if (tourId) {
          setSelectedTourId(tourId);
          setClientPageState('tour-detail');
          return;
        }
      }
      const valid: Array<'home' | 'destinations' | 'experiences' | 'tours' | 'tour-detail' | 'about-us' | 'travel-guide' | 'contact' | 'faq'> = [
        'home', 'destinations', 'experiences', 'tours', 'tour-detail', 'about-us', 'travel-guide', 'contact', 'faq'
      ];
      if (valid.includes(hash as any)) {
        setClientPageState(hash as any);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Modal & Multi-Tour Selection state
  const [inquireModalOpen, setInquireModalOpen] = useState(false);
  const [preselectedPackageId, setPreselectedPackageId] = useState<string | null>(null);
  const [preselectedDestinationId, setPreselectedDestinationId] = useState<string | null>(null);
  const [preselectedPackageIds, setPreselectedPackageIds] = useState<string[]>([]);
  const [preselectedDestinationIds, setPreselectedDestinationIds] = useState<string[]>([]);
  const [selectedMultiPackageIds, setSelectedMultiPackageIds] = useState<string[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}multi_packages`);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}multi_packages`, JSON.stringify(selectedMultiPackageIds));
  }, [selectedMultiPackageIds]);

  const toggleSelectMultiPackage = (packageId: string) => {
    setSelectedMultiPackageIds(prev => 
      prev.includes(packageId) 
        ? prev.filter(id => id !== packageId) 
        : [...prev, packageId]
    );
  };

  const clearSelectedMultiPackages = () => {
    setSelectedMultiPackageIds([]);
  };

  const isPackageSelectedForMulti = (packageId: string) => {
    return selectedMultiPackageIds.includes(packageId);
  };

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}packages`, JSON.stringify(packages));
  }, [packages]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}bookings`, JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}partners`, JSON.stringify(partners));
  }, [partners]);

  // Packages CRUD
  const addPackage = (newPkg: Omit<TourPackage, 'id' | 'code'>) => {
    const nextCodeNumber = packages.length + 1;
    const code = `TT-PKG-${String(nextCodeNumber).padStart(2, '0')}`;
    const newEntry: TourPackage = {
      ...newPkg,
      id: `pkg-${Date.now()}`,
      code
    };
    setPackages(prev => [newEntry, ...prev]);
  };

  const updatePackage = (id: string, updates: Partial<TourPackage>) => {
    setPackages(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deletePackage = (id: string) => {
    setPackages(prev => prev.filter(p => p.id !== id));
  };

  // Inquiry & Bookings
  const createInquiry = (data: {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    customerCountry: string;
    preferredLanguage: 'en' | 'id' | 'de' | 'fr' | 'nl' | 'zh';
    destinationId?: string;
    destinationIds?: string[];
    packageId?: string;
    packageIds?: string[];
    serviceTier: 'essential' | 'private' | 'premium_concierge';
    startDate: string;
    endDate: string;
    adults: number;
    children: number;
    specialRequests: string;
    dietaryRestrictions?: string;
    leadSource?: BookingInquiry['leadSource'];
  }): string => {
    const randomSuffix = Math.floor(100 + Math.random() * 900);
    const newRef = `TT-2026-${randomSuffix}`;
    const inqId = `INQ-2026-${randomSuffix}`;

    // Resolve destinations
    const destIds: string[] = data.destinationIds && data.destinationIds.length > 0 
      ? data.destinationIds 
      : data.destinationId ? [data.destinationId] : ['dest-bromo'];
    const matchedDests = destinations.filter(d => destIds.includes(d.id));
    const destName = matchedDests.length > 0 
      ? matchedDests.map(d => d.name).join(' & ') 
      : 'Indonesian Archipelago';

    // Resolve packages
    const pkgIds: string[] = data.packageIds && data.packageIds.length > 0 
      ? data.packageIds 
      : data.packageId ? [data.packageId] : [];
    const matchedPkgs = packages.filter(p => pkgIds.includes(p.id));
    
    let packageTitle = 'Bespoke Custom Route';
    if (matchedPkgs.length === 1) {
      packageTitle = matchedPkgs[0].title;
    } else if (matchedPkgs.length > 1) {
      packageTitle = `Combined Expedition: ${matchedPkgs.map(p => p.title).join(' + ')}`;
    }

    // Build combined active itinerary draft from all selected packages
    const activeItineraryDays: ActiveItineraryDay[] = [];
    let currentDayNumber = 1;

    if (matchedPkgs.length > 0) {
      matchedPkgs.forEach((p) => {
        p.itineraryDays.forEach((d) => {
          let dateStr = data.startDate;
          try {
            const start = new Date(data.startDate);
            if (!isNaN(start.getTime())) {
              start.setDate(start.getDate() + (currentDayNumber - 1));
              dateStr = start.toISOString().split('T')[0];
            }
          } catch (e) {
            console.error(e);
          }

          activeItineraryDays.push({
            dayNumber: currentDayNumber,
            date: dateStr,
            title: d.title,
            subtitle: d.subtitle,
            stayLocation: d.stayLocation,
            activities: d.schedule.map((s, sIdx) => ({
              id: `act-gen-${Date.now()}-${currentDayNumber}-${sIdx}`,
              time: s.time,
              activity: s.activity,
              location: s.location,
              completed: false
            })),
            driverNotes: 'Pending driver allocation upon quotation confirmation.',
            safetyChecklistVerified: false,
            emergencyContact: '+62 812-3456-7890'
          });
          currentDayNumber++;
        });
      });
    }

    const newBooking: BookingInquiry = {
      id: inqId,
      bookingRef: newRef,
      createdAt: new Date().toISOString(),
      leadSource: data.leadSource || 'website_seo',
      customer: {
        name: data.customerName,
        email: data.customerEmail,
        phone: data.customerPhone,
        country: data.customerCountry,
        preferredLanguage: data.preferredLanguage
      },
      tripDetails: {
        destinationId: destIds[0] || 'dest-bromo',
        destinationName: destName,
        destinationIds: destIds,
        destinationNames: matchedDests.map(d => d.name),
        packageId: pkgIds[0] || undefined,
        packageTitle: packageTitle,
        packageIds: pkgIds,
        packageTitles: matchedPkgs.map(p => p.title),
        serviceTier: data.serviceTier,
        tourType: matchedPkgs.length > 1 ? 'multiday_expedition' : (matchedPkgs[0]?.tourType || 'custom_private'),
        startDate: data.startDate,
        endDate: data.endDate,
        paxCount: data.adults + data.children,
        adults: data.adults,
        children: data.children,
        fitnessLevel: 'moderate',
        specialRequests: data.specialRequests,
        dietaryRestrictions: data.dietaryRestrictions
      },
      pipelineStatus: 'new_inquiry',
      assignedSpecialist: 'Rian Sastrawan (Senior Travel Designer)',
      paymentDetails: {
        depositPaid: false,
        balancePaid: false
      },
      itinerary: activeItineraryDays,
      followUps: [
        {
          id: `fu-${Date.now()}`,
          date: new Date().toISOString(),
          specialist: 'System Automation',
          channel: 'email',
          summary: `Automated receipt dispatched to client with booking reference ${newRef}. Multi-tour/destination configuration saved for consultation.`
        }
      ],
      internalNotes: `Client submitted inquiry from ${data.customerCountry}. Multi-destination: ${destName}. Packages requested: ${matchedPkgs.length > 0 ? matchedPkgs.map(p => p.title).join(', ') : 'Custom Route'}. Tier: ${data.serviceTier.toUpperCase()}.`
    };

    setBookings(prev => [newBooking, ...prev]);
    return newRef;
  };

  const updateBooking = (id: string, updates: Partial<BookingInquiry>) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, ...updates } : b));
  };

  const updatePipelineStatus = (id: string, status: PipelineStatus) => {
    setBookings(prev => prev.map(b => {
      if (b.id !== id) return b;
      return {
        ...b,
        pipelineStatus: status,
        followUps: [
          ...b.followUps,
          {
            id: `fu-${Date.now()}`,
            date: new Date().toISOString(),
            specialist: 'Admin Staff',
            channel: 'email',
            summary: `Pipeline status updated to ${status.replace('_', ' ').toUpperCase()}`
          }
        ]
      };
    }));
  };

  const saveQuotation = (bookingId: string, quotation: Quotation) => {
    setBookings(prev => prev.map(b => {
      if (b.id !== bookingId) return b;
      return {
        ...b,
        pipelineStatus: 'quotation_sent',
        quotation,
        followUps: [
          ...b.followUps,
          {
            id: `fu-${Date.now()}`,
            date: new Date().toISOString(),
            specialist: b.assignedSpecialist || 'Admin Staff',
            channel: 'email',
            summary: `Personalized quotation v${quotation.version} created and dispatched (${quotation.currency} ${quotation.totalPriceCurrency.toLocaleString()}).`
          }
        ]
      };
    }));
  };

  const verifyPayment = (
    bookingId: string,
    type: 'deposit' | 'balance',
    reference: string,
    method: 'bank_transfer' | 'electronic_wise' | 'credit_card_gateway'
  ) => {
    setBookings(prev => prev.map(b => {
      if (b.id !== bookingId) return b;
      const paymentDetails = { ...b.paymentDetails, method };

      if (type === 'deposit') {
        paymentDetails.depositPaid = true;
        paymentDetails.depositPaidAt = new Date().toISOString();
        paymentDetails.depositReference = reference;
      } else {
        paymentDetails.balancePaid = true;
        paymentDetails.balancePaidAt = new Date().toISOString();
        paymentDetails.balanceReference = reference;
      }

      // Check if both or deposit paid -> advance pipeline
      const newStatus: PipelineStatus = type === 'deposit' ? 'confirmed' : b.pipelineStatus;

      return {
        ...b,
        pipelineStatus: newStatus,
        paymentDetails,
        followUps: [
          ...b.followUps,
          {
            id: `fu-${Date.now()}`,
            date: new Date().toISOString(),
            specialist: 'Finance Verification',
            channel: 'email',
            summary: `${type.toUpperCase()} payment verified (Ref: ${reference}, Method: ${method}). Status advanced.`
          }
        ]
      };
    }));
  };

  const addFollowUpLog = (
    bookingId: string,
    log: Omit<FollowUpLog, 'id' | 'date'>
  ) => {
    const entry: FollowUpLog = {
      ...log,
      id: `fu-${Date.now()}`,
      date: new Date().toISOString()
    };
    setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, followUps: [entry, ...b.followUps] } : b));
  };

  // Itinerary Management
  const updateBookingItinerary = (bookingId: string, itinerary: ActiveItineraryDay[]) => {
    setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, itinerary } : b));
  };

  const updateItineraryDay = (bookingId: string, dayNumber: number, dayData: Partial<ActiveItineraryDay>) => {
    setBookings(prev => prev.map(b => {
      if (b.id !== bookingId) return b;
      const updatedDays = b.itinerary.map(d => d.dayNumber === dayNumber ? { ...d, ...dayData } : d);
      return { ...b, itinerary: updatedDays };
    }));
  };

  const addItineraryActivity = (bookingId: string, dayNumber: number, activity: Omit<ActiveItineraryActivity, 'id'>) => {
    const newAct: ActiveItineraryActivity = {
      ...activity,
      id: `act-${Date.now()}`
    };
    setBookings(prev => prev.map(b => {
      if (b.id !== bookingId) return b;
      const updatedDays = b.itinerary.map(d => {
        if (d.dayNumber !== dayNumber) return d;
        return {
          ...d,
          activities: [...d.activities, newAct]
        };
      });
      return { ...b, itinerary: updatedDays };
    }));
  };

  const removeItineraryActivity = (bookingId: string, dayNumber: number, activityId: string) => {
    setBookings(prev => prev.map(b => {
      if (b.id !== bookingId) return b;
      const updatedDays = b.itinerary.map(d => {
        if (d.dayNumber !== dayNumber) return d;
        return {
          ...d,
          activities: d.activities.filter(a => a.id !== activityId)
        };
      });
      return { ...b, itinerary: updatedDays };
    }));
  };

  const verifySafetyChecklist = (bookingId: string, dayNumber: number, verified: boolean) => {
    setBookings(prev => prev.map(b => {
      if (b.id !== bookingId) return b;
      const updatedDays = b.itinerary.map(d => d.dayNumber === dayNumber ? { ...d, safetyChecklistVerified: verified } : d);
      return { ...b, itinerary: updatedDays };
    }));
  };

  // Partner Network Management
  const addPartner = (partner: Omit<CertifiedPartner, 'id'>) => {
    const newEntry: CertifiedPartner = {
      ...partner,
      id: `part-${Date.now()}`
    };
    setPartners(prev => [newEntry, ...prev]);
  };

  const updatePartner = (id: string, updates: Partial<CertifiedPartner>) => {
    setPartners(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deletePartner = (id: string) => {
    setPartners(prev => prev.filter(p => p.id !== id));
  };

  const openInquireForPackage = (packageId?: string, destinationId?: string) => {
    setPreselectedPackageId(packageId || null);
    setPreselectedDestinationId(destinationId || null);
    setPreselectedPackageIds(packageId ? [packageId] : []);
    setPreselectedDestinationIds(destinationId ? [destinationId] : []);
    setInquireModalOpen(true);
  };

  const openInquireForMultiPackages = (packageIds: string[], destinationIds?: string[]) => {
    setPreselectedPackageIds(packageIds);
    setPreselectedPackageId(packageIds[0] || null);
    if (destinationIds && destinationIds.length > 0) {
      setPreselectedDestinationIds(destinationIds);
      setPreselectedDestinationId(destinationIds[0] || null);
    } else {
      const derivedDestIds = Array.from(new Set(
        packages
          .filter(p => packageIds.includes(p.id))
          .map(p => p.destinationId)
          .filter(Boolean)
      ));
      setPreselectedDestinationIds(derivedDestIds);
      setPreselectedDestinationId(derivedDestIds[0] || null);
    }
    setInquireModalOpen(true);
  };

  const resetToDefaults = () => {
    localStorage.removeItem(`${STORAGE_KEY_PREFIX}packages`);
    localStorage.removeItem(`${STORAGE_KEY_PREFIX}bookings`);
    localStorage.removeItem(`${STORAGE_KEY_PREFIX}partners`);
    localStorage.removeItem(`${STORAGE_KEY_PREFIX}multi_packages`);
    setSelectedMultiPackageIds([]);
    setPackages(INITIAL_PACKAGES);
    setBookings(INITIAL_BOOKINGS);
    setPartners(INITIAL_PARTNERS);
    setSelectedRegionSlug(null);
    setSelectedDestinationSlug(null);
    setActiveBookingRefForClient(null);
  };

  return (
    <TourContext.Provider
      value={{
        regions,
        destinations,
        selectedRegionSlug,
        selectedDestinationSlug,
        navigateToDestinationRoute,
        packages,
        addPackage,
        updatePackage,
        deletePackage,
        bookings,
        createInquiry,
        updateBooking,
        updatePipelineStatus,
        saveQuotation,
        verifyPayment,
        addFollowUpLog,
        updateBookingItinerary,
        updateItineraryDay,
        addItineraryActivity,
        removeItineraryActivity,
        verifySafetyChecklist,
        partners,
        addPartner,
        updatePartner,
        deletePartner,
        viewMode,
        setViewMode,
        deviceMode,
        setDeviceMode,
        activeBookingRefForClient,
        setActiveBookingRefForClient,
        selectedCurrency,
        setSelectedCurrency,
        selectedLang,
        setSelectedLang,
        clientPage,
        setClientPage,
        selectedTourId,
        setSelectedTourId,
        navigateToTourDetail,
        inquireModalOpen,
        setInquireModalOpen,
        preselectedPackageId,
        preselectedDestinationId,
        preselectedPackageIds,
        preselectedDestinationIds,
        selectedMultiPackageIds,
        toggleSelectMultiPackage,
        clearSelectedMultiPackages,
        isPackageSelectedForMulti,
        openInquireForPackage,
        openInquireForMultiPackages,
        resetToDefaults
      }}
    >
      {children}
    </TourContext.Provider>
  );
};

export const useTour = () => {
  const context = useContext(TourContext);
  if (!context) {
    throw new Error('useTour must be used within a TourProvider');
  }
  return context;
};
