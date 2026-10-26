import { Destination, TourPackage, CertifiedPartner, BookingInquiry, Region } from '../types/tour';
import { REGIONS_DATA, DESTINATIONS_DATA } from './destinationData';

export { REGIONS_DATA, DESTINATIONS_DATA };
export const INITIAL_DESTINATIONS: Destination[] = DESTINATIONS_DATA;

export const INITIAL_PACKAGES: TourPackage[] = [
  {
    id: 'pkg-bromo-classic-2d1n',
    code: 'TT-PKG-00',
    title: 'Classic Bromo Sunrise & Madakaripura Waterfall',
    destinationId: 'dest-bromo',
    destinationName: 'Mount Bromo',
    tourType: 'fixed_package',
    serviceTier: 'essential',
    durationDays: 2,
    durationNights: 1,
    indicativeDuration: '2 Days / 1 Night',
    shortDescription: 'A timeless private overland expedition featuring the iconic Bromo dawn vista, ancient caldera sea-of-sand, and Madakaripura eternal waterfalls departing from Surabaya or Malang.',
    experienceNarrative: 'Crafted for travelers seeking an efficient, seamless volcanic getaway with guaranteed private chauffeuring, dedicated 4x4 Land Cruiser, and certified alpine guidance.',
    highlights: [
      'Timely private airport or railway greeting in Surabaya (SUB) or Malang',
      'Dedicated private 4x4 Toyota Land Cruiser for King Kong Hill sunrise & caldera',
      'Guided exploration of sacred Madakaripura canyon waterfalls',
      'Overnight stay at scenic high-altitude mountain lodge in Cemoro Lawang'
    ],
    inclusions: [
      'Private executive air-conditioned vehicle transfers throughout journey',
      'Private 4x4 Toyota Land Cruiser for Bromo Sunrise & Sea of Sand',
      '1 Night mountain lodge stay overlooking Tengger caldera',
      'Official Bromo Tengger Semeru National Park conservation permits',
      'Certified local mountain guide and safety equipment'
    ],
    exclusions: [
      'Domestic or international flights to Surabaya / Malang',
      'Optional horseback riding across caldera plain',
      'Personal dining, refreshments and gratuities'
    ],
    safetyMandates: [
      'Warm thermal layers and sturdy rubber-soled trekking shoes required',
      'Caldera crater climb (250 steps) requires moderate physical stamina'
    ],
    targetAudience: 'Couples, weekend explorers, and small private parties with limited travel windows.',
    active: true,
    coverImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    indicativePriceIdr: 4800000,
    indicativePriceUsd: 300,
    routeSummary: 'Surabaya / Malang → Madakaripura Canyon → Cemoro Lawang Caldera → King Kong Hill Sunrise → Bromo Crater → Return',
    routeWaypoints: ['Surabaya / Malang', 'Madakaripura Waterfall', 'Cemoro Lawang', 'King Kong Hill (2,600m)', 'Bromo Crater Rim (2,329m)', 'Surabaya / Malang'],
    terrainType: 'Volcanic Caldera Sand Plain & Crater Stairway (250 steps)',
    fitnessLevel: 'Moderate',
    fleetType: 'Private 4x4 Toyota Land Cruiser & Executive AC Chauffeur Van',
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'Chauffeured Pickup & Journey Through Tengger Mist',
        subtitle: 'Surabaya / Malang → Madakaripura Waterfall → Cemoro Lawang',
        schedule: [
          { time: '09:00', activity: 'Private VIP greeting and chauffeured departure', location: 'Surabaya Airport (SUB) / Malang' },
          { time: '12:00', activity: 'Scenic mountain lunch & Madakaripura canyon trek', location: 'Lumbang, Probolinggo' },
          { time: '16:00', activity: 'Check-in to mountain lodge perched on caldera rim', location: 'Cemoro Lawang' }
        ],
        meals: ['Lunch', 'Dinner'],
        stayLocation: 'Lava View Lodge / Bromo Permai'
      },
      {
        dayNumber: 2,
        title: 'Golden Dawn of Bromo & Return Journey',
        subtitle: 'King Kong Hill → Bromo Crater → Surabaya / Malang Drop-off',
        schedule: [
          { time: '03:15', activity: 'Private 4x4 jeep ascent to King Kong Hill for sunrise', location: 'King Kong Hill' },
          { time: '06:30', activity: 'Trekking active caldera rim & Sea of Sand crossing', location: 'Bromo Caldera' },
          { time: '09:00', activity: 'Warm breakfast at lodge & relaxed check-out', location: 'Lodge Dining' },
          { time: '11:00', activity: 'Private chauffeured transit back to Surabaya or Malang', location: 'Surabaya / Malang' }
        ],
        meals: ['Breakfast'],
        stayLocation: 'End of Journey'
      }
    ]
  },
  {
    id: 'pkg-bromo-ijen-3d2n',
    code: 'TT-PKG-01',
    title: 'East Java Fire & Mist Expedition: Bromo & Ijen Crater',
    destinationId: 'dest-bromo',
    destinationName: 'Mount Bromo & Mount Ijen',
    tourType: 'custom_private',
    serviceTier: 'private',
    durationDays: 3,
    durationNights: 2,
    indicativeDuration: '3 Days / 2 Nights',
    shortDescription: 'Witness the ethereal dawn of Mount Bromo and hike the midnight crater rim of Mount Ijen to behold the rare electric-blue flames.',
    experienceNarrative: 'From the whispering volcanic sands of Tengger to the otherworldly sulfur crater of Ijen, this private overland journey combines raw geological grandeur with seamless private logistics, chauffeured 4x4 vehicles, and expert local guides.',
    highlights: [
      'Private 4x4 sunrise excursion to King Kong Hill vantage point',
      'Caldera rim trek and horseback crossing on the Bromo sea-of-sand',
      'Midnight trek into Ijen crater with certified miner guides & military-grade respirators',
      'Scenic crossing through East Java coffee plantations and colonial estate highlands'
    ],
    inclusions: [
      'Private air-conditioned chauffeur throughout East Java route (Surabaya/Malang to Banyuwangi/Bali)',
      'Private 4x4 Toyota Land Cruiser for Bromo Sunrise expedition',
      '2 Nights boutique mountain lodge accommodation (Jiwa Jawa / Dialoog Banyuwangi)',
      'Certified local English-speaking geological & mountain guides',
      'Professional gas respirators & high-lumen headlamps for Ijen crater',
      'All national park entrance fees, volcanic conservation permits & safety levies',
      'Daily artisan breakfasts and selected mineral provisions'
    ],
    exclusions: [
      'International and domestic flights',
      'Personal travel & evacuation insurance',
      'Optional horse rental across Bromo crater plain',
      'Gratuities for private driver and mountain guide'
    ],
    safetyMandates: [
      'Ijen crater trek requires signing of physical health waiver and oxygen check',
      'Proper hiking boots with rugged grip and warm fleece required',
      'Excursion subject to daily geological safety bulletins from local authorities'
    ],
    targetAudience: 'Active adventurers, photography enthusiasts, private couples & small private circles.',
    active: true,
    coverImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80',
    indicativePriceIdr: 9200000,
    routeSummary: 'Surabaya / Malang → Bromo Sunrise & Sand Sea → Ijen Coffee Highlands → Midnight Blue Fire Trekking → Banyuwangi / Bali',
    routeWaypoints: ['Surabaya / Malang', 'King Kong Hill (2,600m)', 'Bromo Caldera Plain', 'Ijen Highland Estates', 'Paltuding Basecamp', 'Ijen Sulfur Crater (2,386m)', 'Ketapang Ferry / Bali'],
    terrainType: 'Volcanic Sand Plain & Alpine Rocky Sulfur Ascent',
    fitnessLevel: 'Moderate Hiking',
    fleetType: 'Dedicated 4x4 Land Cruiser, Executive AC Van, & Gas Respirators',
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'Arrival & Scenic Highlands Ascent',
        subtitle: 'Surabaya / Malang Pickup → Tengger Mountain Lodge',
        schedule: [
          { time: '09:00', activity: 'Private VIP airport / hotel greeting in Surabaya or Malang with chilled towels and refreshment', location: 'Surabaya Airport (SUB)', partnerTypeNeeded: 'driver_transport' },
          { time: '12:30', activity: 'Scenic lunch at historic heritage stop en route to Tengger Caldera', location: 'Pasuruan Regency' },
          { time: '15:30', activity: 'Check-in to mountain lodge perched on the rim; afternoon hot tea overlooking the mist', location: 'Tengger Mountain Lodge', partnerTypeNeeded: 'boutique_stay' },
          { time: '19:00', activity: 'Pre-sunrise briefing with your private expedition specialist & early rest', location: 'Lodge Lounge' }
        ],
        meals: ['Lunch', 'Dinner'],
        stayLocation: 'Jiwa Jawa Resort Bromo / Plataran Bromo'
      },
      {
        dayNumber: 2,
        title: 'Bromo Caldera Sunrise & Overland to Banyuwangi',
        subtitle: '4x4 Sea of Sand → Coffee Plantations → Ijen Foothills',
        schedule: [
          { time: '03:15', activity: 'Board your private 4x4 Land Cruiser to King Kong Hill for breathtaking sunrise above the clouds', location: 'Mount Bromo Viewpoint', partnerTypeNeeded: 'jeep_operator' },
          { time: '06:00', activity: 'Cross the Sea of Sand on foot or private horse mount to climb the 250 crater rim stairs', location: 'Bromo Crater Rim', partnerTypeNeeded: 'mountain_guide' },
          { time: '08:30', activity: 'Return to lodge for gourmet breakfast and hot shower refresh', location: 'Lodge Dining' },
          { time: '10:30', activity: 'Comfortable private transit through lush tea, rubber, and coffee plantations toward Banyuwangi', location: 'East Java Trans-Java Highway', partnerTypeNeeded: 'driver_transport' },
          { time: '17:00', activity: 'Check-in to resort overlooking Bali Strait; evening mineral dinner and early night sleep', location: 'Banyuwangi Resort', partnerTypeNeeded: 'boutique_stay' }
        ],
        meals: ['Breakfast', 'Picnic Lunch', 'Dinner'],
        stayLocation: 'Dialoog Banyuwangi / Ketapang Indah'
      },
      {
        dayNumber: 3,
        title: 'Midnight Ascent to Ijen Blue Fire & Harbor Crossing',
        subtitle: 'Paltuding Basecamp → Sulfur Lake → Ferry to Bali or Airport Drop',
        schedule: [
          { time: '00:30', activity: 'Wake-up call, warm ginger tea and private 45-minute drive to Paltuding basecamp', location: 'Paltuding Basecamp', partnerTypeNeeded: 'driver_transport' },
          { time: '01:45', activity: 'Health verification, respirator fitting, and guided ascent with certified miner guide', location: 'Mount Ijen Trail', partnerTypeNeeded: 'mountain_guide' },
          { time: '04:00', activity: 'Observe mesmerizing blue fire flames in the crater basin followed by turquoise dawn vista', location: 'Ijen Acidic Crater Lake' },
          { time: '07:30', activity: 'Descent back to basecamp; restorative breakfast at lodge', location: 'Paltuding / Resort' },
          { time: '11:00', activity: 'VIP private ferry transfer to West Bali (Gilimanuk) or private drop-off at Banyuwangi Airport (BWX)', location: 'Ketapang Ferry Port / BWX', partnerTypeNeeded: 'driver_transport' }
        ],
        meals: ['Light Refreshment', 'Hearty Breakfast'],
        stayLocation: 'End of Journey or Extension to Bali'
      }
    ]
  },
  {
    id: 'pkg-bali-overland-7d6n',
    code: 'TT-PKG-02',
    title: 'Sacred Volcanoes & Cultural Crossings: Bali to Java Overland',
    destinationId: 'dest-bali',
    destinationName: 'Bali, Bromo, Ijen & Yogyakarta',
    tourType: 'multiday_expedition',
    serviceTier: 'premium_concierge',
    durationDays: 7,
    durationNights: 6,
    indicativeDuration: '7 Days / 6 Nights',
    shortDescription: 'The ultimate bespoke trans-island voyage uniting the royal sultanates of Yogyakarta, volcanic calderas of East Java, and spiritual highlands of Bali.',
    experienceNarrative: 'An extraordinary trans-Indonesian expedition meticulously paced for discerning international travelers who desire seamless connections, luxury mountain lodges, private historians, and breathtaking nature without logistical friction.',
    highlights: [
      'Private dawn spiritual entry to UNESCO Borobudur temple before general public gates',
      'Executive luxury scenic train ride through emerald volcanic valleys to East Java',
      'Private 4x4 Bromo sunrise and midnight Ijen blue fire crater descent',
      'Private helicopter or speed catamaran connection into North Bali sanctuaries'
    ],
    inclusions: [
      'Dedicated THIRTEEN private trip concierge on call 24/7',
      '6 nights in premier hand-picked heritage suites & mountain boutique lodges',
      'Executive class panoramic train journey (Yogyakarta to Jombang/Surabaya)',
      'Private chauffeured luxury vans & high-spec 4x4 mountain cruisers',
      'Curated dining highlighting authentic regional heirloom recipes',
      'Full VIP safety equipment, certified private guides, and fast-track permits'
    ],
    exclusions: [
      'International flights to/from Indonesia',
      'Alcoholic cellar reserves (available à la carte)',
      'Personal concierge shopping expenses'
    ],
    safetyMandates: [
      'Comprehensive pre-trip medical disclosure required',
      'Private oxygen cylinders and trauma kit in all expedition vehicles'
    ],
    targetAudience: 'Discerning couples, luxury families, private executive small groups.',
    active: true,
    coverImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    indicativePriceIdr: 32700000,
    routeSummary: 'Yogyakarta (Borobudur) → Panoramic Rail Voyage → Bromo Sunrise → Ijen Blue Fire → Bali Strait → Munduk & Ubud',
    routeWaypoints: ['Yogyakarta (YIA)', 'Borobudur Sanctuary', 'Tugu Executive Rail', 'Bromo Tengger Caldera', 'Ijen Sulfur Crater', 'VIP Bali Ferry Crossing', 'Munduk Highlands', 'Ubud Valley'],
    terrainType: 'Ancient Temple Grounds, Executive Rail, Volcanic Caldera, Rainforest & Rice Terraces',
    fitnessLevel: 'Moderate',
    fleetType: 'Executive Panoramic Rail, Luxury Chauffeur Van, 4x4 Land Cruiser & VIP Ferry Crossing',
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'Arrival in the Royal Sultanate',
        subtitle: 'Yogyakarta Airport → Heritage Palace Suite',
        schedule: [
          { time: '14:00', activity: 'Private fast-track VIP arrival at Yogyakarta International Airport (YIA)', location: 'YIA Airport', partnerTypeNeeded: 'driver_transport' },
          { time: '16:00', activity: 'Private check-in at Amanjiwo or The Phoenix Hotel; royal high tea on veranda', location: 'Heritage Hotel', partnerTypeNeeded: 'boutique_stay' },
          { time: '19:00', activity: 'Welcome five-course Javanese royal banquet with traditional Gamelan', location: 'Private Pavilion' }
        ],
        meals: ['Afternoon Tea', 'Dinner'],
        stayLocation: 'Amanjiwo / Plataran Borobudur'
      },
      {
        dayNumber: 2,
        title: 'Borobudur Dawn Reflection & Prambanan',
        subtitle: 'Sacred Stone Carvings → Master Historian Guided Tour',
        schedule: [
          { time: '05:30', activity: 'Private sunrise meditation and exclusive entry to Borobudur Temple monuments', location: 'Borobudur Sanctuary', partnerTypeNeeded: 'mountain_guide' },
          { time: '09:00', activity: 'Gourmet champagne breakfast overlooking the Menoreh hills', location: 'Resort Terrace' },
          { time: '14:00', activity: 'Private tour of Prambanan 9th-century Hindu spires with senior archaeologist', location: 'Prambanan Complex', partnerTypeNeeded: 'mountain_guide' }
        ],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        stayLocation: 'Amanjiwo / Plataran Borobudur'
      },
      {
        dayNumber: 3,
        title: 'Panoramic Train to East Java & Bromo Foothills',
        subtitle: 'Luxury Carriage → Coffee Plantation Vista',
        schedule: [
          { time: '08:00', activity: 'Chauffeured transfer to Tugu Station for executive scenic rail voyage across Central Java', location: 'Tugu Station', partnerTypeNeeded: 'driver_transport' },
          { time: '13:00', activity: 'Private vehicle meet at destination station; gentle ascent to Bromo caldera', location: 'Jombang / Tengger Road', partnerTypeNeeded: 'driver_transport' },
          { time: '16:00', activity: 'Check-in to luxury mountain chalet; evening fireside briefing', location: 'Plataran Bromo', partnerTypeNeeded: 'boutique_stay' }
        ],
        meals: ['Breakfast', 'Train Dining', 'Dinner'],
        stayLocation: 'Plataran Bromo'
      },
      {
        dayNumber: 4,
        title: 'Bromo Caldera Exploration & Transit to Ijen',
        subtitle: 'Private 4x4 Expedition → Ijen Rainforest Retreat',
        schedule: [
          { time: '04:00', activity: 'Private sunrise photography expedition at King Kong Hill', location: 'Bromo Caldera', partnerTypeNeeded: 'jeep_operator' },
          { time: '07:30', activity: 'Crater rim walk and private champagne breakfast in the Sea of Sand', location: 'Bromo Sand Sea' },
          { time: '11:00', activity: 'Scenic luxury overland transfer to Ijen rainforest resort', location: 'Banyuwangi Foothills', partnerTypeNeeded: 'driver_transport' }
        ],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        stayLocation: 'Ijen Resort & Villas'
      },
      {
        dayNumber: 5,
        title: 'Ijen Blue Flame Wonder & Bali Strait Crossing',
        subtitle: 'Crater Basin Trek → Private Ferry → Munduk Highlands',
        schedule: [
          { time: '01:00', activity: 'Guided crater descent with certified miner guide and custom safety gear', location: 'Mount Ijen Crater', partnerTypeNeeded: 'mountain_guide' },
          { time: '06:00', activity: 'Sunrise over turquoise acidic lake; scenic descent to rainforest breakfast', location: 'Paltuding Basecamp' },
          { time: '11:30', activity: 'VIP ferry charter crossing to West Bali with private chauffeur meet', location: 'Gilimanuk Harbor', partnerTypeNeeded: 'driver_transport' },
          { time: '15:00', activity: 'Arrive at Munduk mountain retreat overlooking mist-draped valleys', location: 'Munduk Moding Plantation', partnerTypeNeeded: 'boutique_stay' }
        ],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        stayLocation: 'Munduk Moding Plantation'
      },
      {
        dayNumber: 6,
        title: 'Bali Hidden Cascades & Ubud Artisanal Heart',
        subtitle: 'Sekumpul Ravine Waterfall → Ubud Royal Sanctuaries',
        schedule: [
          { time: '08:30', activity: 'Private gentle hike to secret Sekumpul and Banyumala cascades with botanist guide', location: 'North Bali Waterfalls', partnerTypeNeeded: 'mountain_guide' },
          { time: '13:00', activity: 'Farm-to-table organic lunch nestled amid Bedugul strawberry highlands', location: 'Bedugul' },
          { time: '16:00', activity: 'Arrive in Ubud; private blessing ceremony at water temple', location: 'Ubud Heritage Sanctuary', partnerTypeNeeded: 'boutique_stay' }
        ],
        meals: ['Breakfast', 'Organic Lunch', 'Gourmet Dinner'],
        stayLocation: 'Mandapa, a Ritz-Carlton Reserve'
      },
      {
        dayNumber: 7,
        title: 'Dawn Rice Terrace Walk & Departure',
        subtitle: 'Morning Wellness → Airport or South Bali Transfer',
        schedule: [
          { time: '07:00', activity: 'Sunrise walk along Campuhan Ridge and private sound healing meditation', location: 'Ubud Valley' },
          { time: '11:00', activity: 'Leisurely brunch and private chauffeur transfer to Denpasar Airport (DPS) or beach villa', location: 'DPS Airport', partnerTypeNeeded: 'driver_transport' }
        ],
        meals: ['Breakfast', 'Farewell Brunch'],
        stayLocation: 'End of Overland Expedition'
      }
    ]
  },
  {
    id: 'pkg-yogyakarta-heritage-4d3n',
    code: 'TT-PKG-03',
    title: 'The Royal Heritage & Mystical Java: Yogyakarta & Merapi',
    destinationId: 'dest-yogyakarta',
    destinationName: 'Yogyakarta',
    tourType: 'custom_private',
    serviceTier: 'private',
    durationDays: 4,
    durationNights: 3,
    indicativeDuration: '4 Days / 3 Nights',
    shortDescription: 'Delve into thousand-year-old stone temples, descend into the mystical celestial light shaft of Jomblang Cave, and ride private 4x4s across Mount Merapi lava flows.',
    experienceNarrative: 'Crafted for travelers who seek the deep spiritual and archaeological mysteries of Java, paired with curated culinary experiences and thrilling underground cavern exploration.',
    highlights: [
      'Private Borobudur dawn illumination before public gates open',
      'Vertical rappel descent into Jomblang Cave to witness the divine "Light of Heaven"',
      'Mount Merapi private 4x4 lava trail expedition with volcanology specialist',
      'Private royal court dinner inside the private compound of the Sultanate family'
    ],
    inclusions: [
      'Private air-conditioned luxury transport and expert driver throughout',
      '3 nights boutique heritage accommodation in historic Yogyakarta',
      'Certified caving instructors and international-standard vertical safety harnesses for Jomblang',
      'Private 4x4 Jeep for Mount Merapi volcano tour',
      'All VIP temple access passes, conservation permits, and historian guide fees',
      'Curated breakfasts and authentic Javanese culinary tastings'
    ],
    exclusions: [
      'Domestic flights to Yogyakarta (YIA)',
      'Personal spending and optional spa therapies',
      'Guide and driver gratuities'
    ],
    safetyMandates: [
      'Jomblang Cave requires moderate physical capability for vertical rope entry',
      'Boots and safety helmets provided on site'
    ],
    targetAudience: 'Heritage buffs, cultural explorers, caving and geological adventurers.',
    active: true,
    coverImage: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80',
    indicativePriceIdr: 10500000,
    routeSummary: 'Yogyakarta City → Sultan Palace & Taman Sari → Borobudur Sunrise → Merapi 4x4 Lava Trail → Jomblang Cave → Prambanan',
    routeWaypoints: ['YIA International Airport', 'Yogyakarta Royal Palace', 'Punthuk Setumbu', 'Borobudur Sanctuary', 'Merapi 4x4 Lava Trail', 'Jomblang Cave Descent', 'Prambanan Temple Complex'],
    terrainType: 'Ancient Stone Temples, Volcanic Lava Trail, & 60m Vertical Cave Rappel',
    fitnessLevel: 'Moderate Adventure',
    fleetType: 'Open-top 4x4 Merapi Jeep & Executive Private Chauffeur MPV',
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'Arrival & Ancient Royal Capital Welcome',
        subtitle: 'YIA Airport → Heritage Hotel Check-in',
        schedule: [
          { time: '11:00', activity: 'Private meet and greet at YIA Airport; transit via private air-conditioned coach', location: 'YIA Airport', partnerTypeNeeded: 'driver_transport' },
          { time: '13:00', activity: 'Check-in to heritage boutique hotel; welcome herbal Jamu beverage', location: 'Yogyakarta City Center', partnerTypeNeeded: 'boutique_stay' },
          { time: '15:30', activity: 'Private stroll through the Sultan Palace (Kraton) and Taman Sari Water Castle', location: 'Kraton Complex', partnerTypeNeeded: 'mountain_guide' },
          { time: '19:00', activity: 'Authentic Gudeg tasting dinner at an acclaimed royal family kitchen', location: 'Heritage Quarter' }
        ],
        meals: ['Welcome Snack', 'Dinner'],
        stayLocation: 'The Phoenix Hotel Yogyakarta'
      },
      {
        dayNumber: 2,
        title: 'Borobudur Sunrise & Merapi Volcano Lava Trails',
        subtitle: 'Ninth-Century Relics → Active Volcano Excursion',
        schedule: [
          { time: '04:30', activity: 'Depart for private sunrise vantage point overlooking Borobudur emerging through the morning mist', location: 'Punthuk Setumbu / Dagi Hill' },
          { time: '07:00', activity: 'Exclusive temple climb with senior archaeologist to decipher relief stone panels', location: 'Borobudur Monument', partnerTypeNeeded: 'mountain_guide' },
          { time: '12:00', activity: 'Traditional Javanese lunch surrounded by organic bamboo groves', location: 'Muntilan Valley' },
          { time: '14:30', activity: 'Private open-top 4x4 Jeep tour over the 2010 Merapi volcanic eruption path & underground bunker', location: 'Mount Merapi Slopes', partnerTypeNeeded: 'jeep_operator' }
        ],
        meals: ['Breakfast', 'Lunch'],
        stayLocation: 'The Phoenix Hotel Yogyakarta'
      },
      {
        dayNumber: 3,
        title: 'Jomblang Heavenly Light & Prambanan Sunset',
        subtitle: 'Underground Descent → Twilight Temple Spire',
        schedule: [
          { time: '07:30', activity: 'Drive to Gunungkidul karst region with your private chauffeur', location: 'Gunungkidul', partnerTypeNeeded: 'driver_transport' },
          { time: '09:30', activity: 'Vertical rope descent 60 meters into Jomblang Cave sinkhole with certified cavers', location: 'Jomblang Cave', partnerTypeNeeded: 'mountain_guide' },
          { time: '11:30', activity: 'Stand under the spectacular ray of sunlight illuminating Grubug cave chamber', location: 'Grubug Chamber' },
          { time: '15:30', activity: 'Transit to Prambanan Hindu complex for dramatic sunset against Shiva temple', location: 'Prambanan Temple', partnerTypeNeeded: 'mountain_guide' },
          { time: '19:30', activity: 'VIP front-row seats for outdoor Ramayana Ballet performance', location: 'Prambanan Open Theatre' }
        ],
        meals: ['Breakfast', 'Local Caving Lunch', 'Dinner'],
        stayLocation: 'The Phoenix Hotel Yogyakarta'
      },
      {
        dayNumber: 4,
        title: 'Artisanal Batik Mastery & Departure',
        subtitle: 'Hand-waxed Batik Atelier → Airport Transit',
        schedule: [
          { time: '08:30', activity: 'Private workshop with a 3rd-generation batik master craftsperson; create your own keepsake fabric', location: 'Kotagede Heritage Quarter' },
          { time: '12:00', activity: 'Check out and private transfer to Yogyakarta International Airport or rail connection', location: 'YIA Airport', partnerTypeNeeded: 'driver_transport' }
        ],
        meals: ['Breakfast'],
        stayLocation: 'End of Tour'
      }
    ]
  },
  {
    id: 'pkg-bali-highlands-5d4n',
    code: 'TT-PKG-04',
    title: 'Bali Highlands & Artisanal Sanctuaries',
    destinationId: 'dest-bali',
    destinationName: 'Bali',
    tourType: 'modular_tour',
    serviceTier: 'private',
    durationDays: 5,
    durationNights: 4,
    indicativeDuration: '5 Days / 4 Nights',
    shortDescription: 'Unveil the secluded sanctuaries of Bali away from tourist crowds. Hidden waterfalls in Munduk, sacred spring blessings, and private culinary immersions.',
    experienceNarrative: 'Designed for discerning travelers who want to experience the authentic soul of Bali—its verdant mountain ridges, ancient water irrigation systems (Subak), and deeply rooted artisan communities.',
    highlights: [
      'Private Melukat spiritual cleansing ceremony with a Balinese high priest',
      'Private guided trek to hidden Munduk coffee plantations and roaring waterfalls',
      'Sunset herbal cocktail masterclass overlooking Ayung River valley',
      'Artisanal wooden architecture and private master carver studio visits'
    ],
    inclusions: [
      'Private luxury vehicle with dedicated chauffeur for all 5 days',
      '4 nights in luxury pool villas (Ubud & Munduk highlands)',
      'Private English-speaking cultural specialist',
      'All sacred temple donations, ceremonial sarongs, and offerings',
      'Daily gourmet breakfasts and three private fine dining experiences'
    ],
    exclusions: [
      'International flights to Denpasar (DPS)',
      'Personal spa treatments (available on request)',
      'Travel insurance'
    ],
    safetyMandates: [
      'Waterfall treks require non-slip sandals or walking shoes',
      'Respectful dress code mandatory inside sacred water sanctuaries'
    ],
    targetAudience: 'Couples, wellness seekers, honeymooners, culture lovers.',
    active: true,
    coverImage: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
    indicativePriceIdr: 14400000,
    indicativePriceUsd: 900,
    routeSummary: 'Denpasar (DPS) → Ubud River Valley → Sebatu Holy Springs → Jatiluwih UNESCO Terraces → Munduk Cloud Forest → Lake Tamblingan',
    routeWaypoints: ['DPS International Airport', 'Ayung River Valley', 'Sebatu Holy Spring Temple', 'Jatiluwih Rice Terraces', 'Munduk Mountain Waterfalls', 'Sacred Lake Tamblingan', 'Mas Woodcraft Village'],
    terrainType: 'UNESCO Subak Rice Terraces, Misty Mountain Rainforest, & Sacred Volcanic Lakes',
    fitnessLevel: 'Gentle & Accessible',
    fleetType: 'Executive Private Luxury Chauffeur & Traditional Handcrafted Canoe',
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'Arrival into the Island of the Gods',
        subtitle: 'DPS Airport → Secluded Ubud Valley Villa',
        schedule: [
          { time: '13:00', activity: 'Private airport arrival greeting with chilled jasmine towels and private chauffeur', location: 'Ngurah Rai Airport', partnerTypeNeeded: 'driver_transport' },
          { time: '15:30', activity: 'Check-in to private pool villa in Ubud; welcome herbal infusion ceremony', location: 'Ubud Valley Resort', partnerTypeNeeded: 'boutique_stay' },
          { time: '19:00', activity: 'Candlelit dining overlooking the river gorge with Balinese degustation menu', location: 'Resort Terrace' }
        ],
        meals: ['Dinner'],
        stayLocation: 'Four Seasons Resort Bali at Sayan / Mandapa'
      },
      {
        dayNumber: 2,
        title: 'Spiritual Cleansing & Jatiluwih World Heritage Terraces',
        subtitle: 'Ancient Water Temple Melukat → Subak Rice Fields',
        schedule: [
          { time: '08:00', activity: 'Private spiritual Melukat cleansing ritual at Sebatu Holy Spring with private priest', location: 'Sebatu Sacred Spring', partnerTypeNeeded: 'mountain_guide' },
          { time: '11:30', activity: 'Drive through misty mountain roads to Jatiluwih UNESCO rice terraces', location: 'Jatiluwih Terraces', partnerTypeNeeded: 'driver_transport' },
          { time: '13:00', activity: 'Private panoramic picnic amid the emerald rice paddies with organic local dishes', location: 'Jatiluwih Estate' },
          { time: '16:00', activity: 'Visit traditional herbal Jamu preparation house', location: 'Tegallalang' }
        ],
        meals: ['Breakfast', 'Organic Picnic Lunch'],
        stayLocation: 'Ubud Valley Resort'
      },
      {
        dayNumber: 3,
        title: 'Ascent to Munduk Cloud Forest & Hidden Cascades',
        subtitle: 'Twin Lakes Vista → Coffee Estate → Munduk Lodge',
        schedule: [
          { time: '09:00', activity: 'Scenic drive northward past Buyan and Tamblingan volcanic crater lakes', location: 'Bedugul Pass', partnerTypeNeeded: 'driver_transport' },
          { time: '11:00', activity: 'Private trek through clove and coffee plantations to hidden Munduk waterfall', location: 'Munduk Ravine', partnerTypeNeeded: 'mountain_guide' },
          { time: '14:00', activity: 'Check-in to highland boutique plantation villa; afternoon infinity pool above the clouds', location: 'Munduk Highlands', partnerTypeNeeded: 'boutique_stay' }
        ],
        meals: ['Breakfast', 'Highland Lunch', 'Dinner'],
        stayLocation: 'Munduk Moding Plantation'
      },
      {
        dayNumber: 4,
        title: 'Canoe across Lake Tamblingan & Artisanal Craft',
        subtitle: 'Sacred Rainforest Lake → Master Artisan Studios',
        schedule: [
          { time: '07:30', activity: 'Glide silently across pristine Lake Tamblingan on a traditional twin dugout canoe', location: 'Lake Tamblingan', partnerTypeNeeded: 'mountain_guide' },
          { time: '10:30', activity: 'Ancient rainforest walking meditation under century-old banyan trees', location: 'Tamblingan Rainforest' },
          { time: '14:00', activity: 'Return south; visit private silversmith & woodcarving ateliers in Celuk and Mas', location: 'Mas Village', partnerTypeNeeded: 'driver_transport' }
        ],
        meals: ['Breakfast', 'Lunch'],
        stayLocation: 'Four Seasons Sayan'
      },
      {
        dayNumber: 5,
        title: 'Morning Yoga & Private Farewell Transfer',
        subtitle: 'Wellness Reflection → DPS Airport or Beach Extension',
        schedule: [
          { time: '07:30', activity: 'Private open-air yoga session overlooking the misty river gorge', location: 'Yoga Shala' },
          { time: '11:00', activity: 'Leisurely late checkout; private chauffeur transfer to airport or beachfront villa', location: 'DPS Airport', partnerTypeNeeded: 'driver_transport' }
        ],
        meals: ['Artisan Breakfast'],
        stayLocation: 'End of Tour'
      }
    ]
  },
  {
    id: 'pkg-grand-eastjava-tumpaksewu-baluran',
    code: 'TT-PKG-05',
    title: 'The Grand East Java Traverse: Tumpak Sewu, Bromo, Ijen & Baluran Savannah',
    destinationId: 'dest-bromo',
    destinationName: 'Mount Bromo, Tumpak Sewu, Ijen & Baluran',
    tourType: 'multiday_expedition',
    serviceTier: 'private',
    durationDays: 5,
    durationNights: 4,
    indicativeDuration: '5 Days / 4 Nights',
    shortDescription: 'From the roaring thousand-stream amphitheater of Tumpak Sewu to the volcanic calderas of Bromo and Ijen, culminating in the wild savannah of Baluran National Park.',
    experienceNarrative: 'An epic cross-provincial expedition exploring East Java’s most formidable natural wonders. Hike deep into the circular canyon of Tumpak Sewu, watch dawn ignite the Tengger Sand Sea, descend into the blue fire cavern of Mount Ijen, and witness wild banteng and deer roam the Little Africa savannah of Baluran.',
    highlights: [
      'Dramatic descent into Tumpak Sewu amphitheater waterfall and Goa Tetes cave',
      'Private 4x4 Land Cruiser expedition for Bromo sunrise & active crater rim walk',
      'Midnight hike to Mount Ijen electric-blue flames with certified safety gear',
      'Wildlife game drive across Bekol Savannah and coastal mangrove boardwalk in Baluran National Park'
    ],
    inclusions: [
      'Private air-conditioned executive vehicle with dedicated chauffeur throughout all 5 days',
      'Private 4x4 Toyota Land Cruiser for Bromo caldera and Baluran safari trails',
      '4 nights accommodation in handpicked mountain lodges and coastal boutique resorts',
      'Certified local mountain guides, canyon specialists, and park rangers',
      'High-specification gas respirators and high-lumen headlamps for Mount Ijen',
      'All national park admissions, conservation levies, and waterfall entrance tickets',
      'Daily artisanal breakfasts and selected culinary highlights'
    ],
    exclusions: [
      'Domestic flights to Surabaya / from Banyuwangi',
      'Personal travel insurance',
      'Optional horse hire at Bromo',
      'Driver and guide gratuities'
    ],
    safetyMandates: [
      'Tumpak Sewu canyon descent involves wet rocks and bamboo ladders; sturdy water shoes mandatory',
      'Ijen crater trek requires good cardiovascular endurance and medical fitness clearance'
    ],
    targetAudience: 'Adventure seekers, nature photographers, active couples, and overland explorers.',
    active: true,
    coverImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    indicativePriceIdr: 16800000,
    indicativePriceUsd: 1050,
    routeSummary: 'Surabaya / Malang → Tumpak Sewu Waterfall → Bromo Caldera → Ijen Blue Fire → Baluran Little Africa → Banyuwangi',
    routeWaypoints: ['Surabaya / Malang', 'Tumpak Sewu Canyon', 'Cemoro Lawang Caldera', 'King Kong Hill (2,600m)', 'Ijen Crater Basin', 'Baluran Bekol Savannah', 'Bama Mangrove Coast', 'Banyuwangi Port / Airport'],
    terrainType: 'Canyon Ravines, Volcanic Caldera, Alpine Sulfur Trails, & Tropical Savannah',
    fitnessLevel: 'Active & Adventurous',
    fleetType: 'Executive AC Van & Dedicated 4x4 Toyota Land Cruiser',
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'Arrival in East Java & The Roaring Falls of Tumpak Sewu',
        subtitle: 'Malang / Surabaya → Lumajang Canyon Foothills',
        schedule: [
          { time: '08:00', activity: 'Private chauffeur pickup from Surabaya airport (SUB) or Malang station', location: 'Surabaya / Malang', partnerTypeNeeded: 'driver_transport' },
          { time: '11:30', activity: 'Arrive at Pronojiwo; panoramic overview of Tumpak Sewu waterfall curtains', location: 'Tumpak Sewu Panorama', partnerTypeNeeded: 'mountain_guide' },
          { time: '13:00', activity: 'Guided descent to canyon floor and cavernous Goa Tetes waterfall', location: 'Goa Tetes' },
          { time: '17:00', activity: 'Check-in to rustic eco-lodge nestled near the volcano base', location: 'Pronojiwo Lodge', partnerTypeNeeded: 'boutique_stay' }
        ],
        meals: ['Lunch', 'Dinner'],
        stayLocation: 'Artha Cottages / Tumpak Sewu Eco Lodge'
      },
      {
        dayNumber: 2,
        title: 'Overland to Tengger Caldera & Bromo Golden Sunset',
        subtitle: 'Pronojiwo → Cemoro Lawang Caldera Rim',
        schedule: [
          { time: '08:30', activity: 'Hearty highland breakfast with fresh East Java coffee', location: 'Eco Lodge' },
          { time: '10:00', activity: 'Scenic winding drive through lush highlands toward Mount Bromo', location: 'Tengger Range', partnerTypeNeeded: 'driver_transport' },
          { time: '14:30', activity: 'Check-in to mountain lodge overlooking the vast sea-of-sand', location: 'Cemoro Lawang', partnerTypeNeeded: 'boutique_stay' },
          { time: '17:00', activity: 'Sunset viewpoint walk over the mist-filled Tengger caldera', location: 'Seruni Point' }
        ],
        meals: ['Breakfast', 'Dinner'],
        stayLocation: 'Jiwa Jawa Resort Bromo / Plataran Bromo'
      },
      {
        dayNumber: 3,
        title: 'Bromo Dawn Spectacle & Scenic Drive to Ijen Coffee Plantations',
        subtitle: 'King Kong Hill → Bromo Crater → Banyuwangi Rainforest',
        schedule: [
          { time: '03:15', activity: 'Private 4x4 Land Cruiser departure to King Kong Hill for sunrise', location: 'King Kong Hill', partnerTypeNeeded: 'jeep_operator' },
          { time: '06:30', activity: 'Cross the Sea of Sand on foot and climb the 250 stairs to Bromo active crater rim', location: 'Bromo Crater Rim', partnerTypeNeeded: 'mountain_guide' },
          { time: '09:00', activity: 'Warm breakfast at lodge & shower refresh before departure', location: 'Lodge' },
          { time: '11:00', activity: 'Scenic private transit past Jember and coffee plantations toward Banyuwangi', location: 'East Java Highway', partnerTypeNeeded: 'driver_transport' },
          { time: '17:00', activity: 'Check-in to oceanfront or highland resort; early rest for midnight trek', location: 'Banyuwangi Resort', partnerTypeNeeded: 'boutique_stay' }
        ],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        stayLocation: 'Dialoog Banyuwangi / Ijen Resort'
      },
      {
        dayNumber: 4,
        title: 'Ijen Midnight Electric-Blue Flame & Dawn Over Turquoise Lake',
        subtitle: 'Paltuding Basecamp → Acidic Crater → Rest & Recovery',
        schedule: [
          { time: '00:30', activity: 'Private wake-up, warm ginger tea, and 45-minute drive to Paltuding basecamp', location: 'Paltuding Basecamp', partnerTypeNeeded: 'driver_transport' },
          { time: '01:45', activity: 'Ascent to crater rim with certified miner guide and custom safety respirators', location: 'Mount Ijen Trail', partnerTypeNeeded: 'mountain_guide' },
          { time: '04:00', activity: 'Witness otherworldly electric-blue flames followed by sunrise over the world’s largest acidic lake', location: 'Ijen Acidic Lake' },
          { time: '08:00', activity: 'Descend to basecamp; return to resort for gourmet brunch and leisurely spa rest', location: 'Banyuwangi Resort' }
        ],
        meals: ['Light Refreshment', 'Gourmet Brunch', 'Dinner'],
        stayLocation: 'Dialoog Banyuwangi'
      },
      {
        dayNumber: 5,
        title: 'Baluran National Park Little Africa Safari & Farewell',
        subtitle: 'Bekol Savannah → Bama Beach → Airport / Bali Transfer',
        schedule: [
          { time: '06:30', activity: 'Early morning game drive through Baluran National Park savannah', location: 'Bekol Savannah', partnerTypeNeeded: 'mountain_guide' },
          { time: '08:30', activity: 'Spot wild water buffalo (Javan banteng), deer, and green peafowls in natural habitat', location: 'Baluran Watchtower' },
          { time: '10:30', activity: 'Stroll the tranquil mangrove boardwalk and white coral shore at Bama Beach', location: 'Bama Beach' },
          { time: '13:00', activity: 'Private chauffeur transfer to Banyuwangi Airport (BWX) or Ketapang Ferry to Bali', location: 'BWX / Ferry Terminal', partnerTypeNeeded: 'driver_transport' }
        ],
        meals: ['Breakfast', 'Seafood Lunch'],
        stayLocation: 'End of Traverse'
      }
    ]
  },
  {
    id: 'pkg-wild-coast-sukamade-pulaumerah',
    code: 'TT-PKG-06',
    title: 'Wild Java Coast & Sea Turtle Sanctuary: Meru Betiri & Pulau Merah',
    destinationId: 'dest-meru-betiri',
    destinationName: 'Meru Betiri, Sukamade & Pulau Merah',
    tourType: 'custom_private',
    serviceTier: 'private',
    durationDays: 3,
    durationNights: 2,
    indicativeDuration: '3 Days / 2 Nights',
    shortDescription: 'Venture deep into the pristine rainforest of Meru Betiri National Park, witness giant sea turtles laying eggs on secluded Sukamade beach, and catch the sunset at Pulau Merah.',
    experienceNarrative: 'An extraordinary off-grid wilderness expedition for wildlife and nature lovers. Board a modified 4x4 to traverse rocky riverbeds and dense coastal jungle in Meru Betiri, conduct a guided midnight beach patrol with national park rangers, participate in baby turtle ocean release at dawn, and conclude with golden coastal views of Pulau Merah.',
    highlights: [
      'Rugged 4x4 river-crossing expedition into remote Meru Betiri National Park',
      'Night-time beach patrol at Sukamade to observe giant green and olive ridley sea turtles nesting',
      'Morning release of newborn turtle hatchlings into the rolling Indian Ocean surf',
      'Sunset photography and coastal relaxation along the red islet of Pulau Merah (Red Island)'
    ],
    inclusions: [
      'Specialized 4x4 safari expedition vehicle and certified jungle driver for all 3 days',
      '1 Night eco-lodge stay inside Sukamade Turtle Conservation Station',
      '1 Night boutique beachfront stay at Pulau Merah',
      'Official Meru Betiri National Park conservation permits and ranger patrol guidance',
      'Direct contribution to sea turtle hatchery protection programs',
      'All meals freshly prepared in local coastal villages'
    ],
    exclusions: [
      'Domestic flights to Banyuwangi (BWX)',
      'Surfboard rental at Pulau Merah (optional on site)',
      'Personal spending and gratuities'
    ],
    safetyMandates: [
      'Meru Betiri requires crossing several shallow rivers; luggage must be in splash-proof duffels',
      'No flash photography or white torches allowed on Sukamade beach during turtle nesting (red light only)'
    ],
    targetAudience: 'Wildlife conservationists, adventurous families, eco-travelers, and photographers.',
    active: true,
    coverImage: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
    indicativePriceIdr: 8900000,
    indicativePriceUsd: 560,
    routeSummary: 'Banyuwangi → Meru Betiri Jungle 4x4 → Sukamade Beach (Turtle Patrol) → Hatchling Release → Pulau Merah Sunset → Banyuwangi',
    routeWaypoints: ['Banyuwangi Airport / City', 'Sarongan Village', 'Meru Betiri Jungle River Crossing', 'Sukamade Turtle Station', 'Pulau Merah Red Islet', 'Banyuwangi Return'],
    terrainType: 'Dense Coastal Jungle, Rocky River Crossings, Protected Marine Beach, & Surf Coast',
    fitnessLevel: 'Moderate Off-Grid',
    fleetType: 'Heavy-Duty 4x4 Toyota Land Cruiser with Snorkel & Winch',
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'River Crossings & Into the Wilderness of Meru Betiri',
        subtitle: 'Banyuwangi → Sukamade Rainforest Station',
        schedule: [
          { time: '08:30', activity: 'Private 4x4 pickup from Banyuwangi hotel or airport; scenic drive south past cocoa estates', location: 'Banyuwangi', partnerTypeNeeded: 'driver_transport' },
          { time: '11:00', activity: 'Enter Meru Betiri National Park boundary; engage 4x4 4-wheel drive through riverbeds', location: 'Meru Betiri Trails', partnerTypeNeeded: 'jeep_operator' },
          { time: '13:00', activity: 'Picnic lunch alongside secluded Green Bay (Teluk Hijau) turquoise waters', location: 'Teluk Hijau' },
          { time: '16:00', activity: 'Arrive at Sukamade conservation station; orientation with resident marine biologists', location: 'Sukamade Station', partnerTypeNeeded: 'boutique_stay' },
          { time: '20:00', activity: 'Quiet guided patrol on the beach under star canopy; watch female turtles dig nests and lay eggs', location: 'Sukamade Beach', partnerTypeNeeded: 'mountain_guide' }
        ],
        meals: ['Picnic Lunch', 'Home-cooked Javanese Dinner'],
        stayLocation: 'Sukamade Conservation Guest House'
      },
      {
        dayNumber: 2,
        title: 'Ocean Hatchling Release & Golden Sunset at Pulau Merah',
        subtitle: 'Sukamade Marine Sanctuary → Pulau Merah Beachfront',
        schedule: [
          { time: '06:00', activity: 'Release baby turtle hatchlings from conservation nursery into the ocean at sunrise', location: 'Sukamade Shoreline', partnerTypeNeeded: 'mountain_guide' },
          { time: '08:00', activity: 'Simple traditional breakfast at station and pack gear', location: 'Sukamade Dining' },
          { time: '09:30', activity: '4x4 transit back through lush rainforest and traditional rubber plantations', location: 'Meru Betiri Corridor', partnerTypeNeeded: 'jeep_operator' },
          { time: '14:30', activity: 'Arrive at Pulau Merah; check-in to charming coastal lodge facing the iconic red hill', location: 'Pulau Merah', partnerTypeNeeded: 'boutique_stay' },
          { time: '17:15', activity: 'Watch spectacular sunset over the Indian Ocean as low tide reveals the red islet', location: 'Pulau Merah Coast' }
        ],
        meals: ['Breakfast', 'Local Lunch', 'Grilled Seafood Dinner'],
        stayLocation: 'Pulau Merah Beachfront Boutique'
      },
      {
        dayNumber: 3,
        title: 'Morning Coastal Breeze & Return Transit',
        subtitle: 'Pulau Merah → Banyuwangi Transit Hub',
        schedule: [
          { time: '07:30', activity: 'Morning beach stroll or optional beginner surf session with local instructor', location: 'Pulau Merah Surf Beach' },
          { time: '10:30', activity: 'Fresh tropical breakfast and leisurely departure', location: 'Beach Lodge' },
          { time: '11:30', activity: 'Comfortable chauffeured return transit to Banyuwangi Airport (BWX) or Ketapang Port', location: 'Banyuwangi Port / Airport', partnerTypeNeeded: 'driver_transport' }
        ],
        meals: ['Tropical Breakfast'],
        stayLocation: 'End of Expedition'
      }
    ]
  },
  {
    id: 'pkg-bali-grand-circuit-batur-uluwatu',
    code: 'TT-PKG-07',
    title: 'The Grand Bali Circuit: Ubud, Mount Batur Sunrise, Canggu & Uluwatu Cliffs',
    destinationId: 'dest-bali',
    destinationName: 'Ubud, Batur, Canggu & Uluwatu',
    tourType: 'fixed_package',
    serviceTier: 'premium_concierge',
    durationDays: 5,
    durationNights: 4,
    indicativeDuration: '5 Days / 4 Nights',
    shortDescription: 'A complete luxury loop around the Island of the Gods: highland sunrise on Mount Batur, sacred arts in Ubud, beach vibes in Canggu & Seminyak, and cliffside fire dance at Uluwatu.',
    experienceNarrative: 'Crafted for discerning travelers who want to experience the complete spectrum of Bali without the stress of logistics. From the cool alpine breezes of Kintamani volcano caldera to the dramatic 70-meter sea cliffs of Uluwatu and the chic beach clubs of Canggu, this private journey guarantees executive chauffeuring, luxury villas, and exclusive cultural entries.',
    highlights: [
      'Private 4x4 sunrise excursion across Mount Batur black volcanic lava fields in Kintamani',
      'Artisanal private workshops and sacred temple blessing in Ubud',
      'Relaxation and gourmet coastal dining along Seminyak and Canggu beaches',
      'Sunset VIP clifftop amphitheater seats for Uluwatu Temple Kecak fire dance'
    ],
    inclusions: [
      'Dedicated private air-conditioned executive vehicle and professional chauffeur for all 5 days',
      'Private 4x4 Land Cruiser for Mount Batur caldera sunrise',
      '2 Nights luxury pool villa in Ubud + 2 Nights ocean-facing luxury resort in South Bali',
      'All temple donations, sacred sarongs, and conservation passes',
      'Certified local Balinese cultural specialist and guide',
      'VIP tickets to Uluwatu Kecak dance performance',
      'Daily gourmet breakfasts and signature curated dinners'
    ],
    exclusions: [
      'International flights to Denpasar (DPS)',
      'Personal spa treatments (available on request)',
      'Travel insurance and driver gratuities'
    ],
    safetyMandates: [
      'Batur morning excursion requires a light thermal jacket as temperatures drop to 15°C before dawn',
      'Modest shoulder/knee covering required at all Balinese sacred temples'
    ],
    targetAudience: 'Couples, luxury honeymooners, first-time Indonesia travelers, and small families.',
    active: true,
    coverImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    indicativePriceIdr: 18500000,
    indicativePriceUsd: 1150,
    routeSummary: 'Denpasar (DPS) → Ubud Valley → Mount Batur Sunrise (Kintamani) → Canggu / Seminyak Beach → Nusa Dua → Uluwatu Cliffs',
    routeWaypoints: ['DPS International Airport', 'Ubud Royal Palace & Gorge', 'Mount Batur Caldera (1,717m)', 'Canggu Surf Coast', 'Seminyak Pavilions', 'Nusa Dua White Sands', 'Uluwatu Clifftop Temple'],
    terrainType: 'Volcanic Caldera, River Gorges, Coastal Sands, & Oceanic Coral Cliffs',
    fitnessLevel: 'Gentle & Relaxed',
    fleetType: 'Executive Mercedes / Alphard Van & Dedicated 4x4 Batur Jeep',
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'Arrival & Secluded Sanctuary in Ubud',
        subtitle: 'DPS Airport → Ayung River Valley Villa',
        schedule: [
          { time: '13:00', activity: 'VIP airport greeting at DPS with chilled towels and private chauffeur transfer', location: 'DPS Airport', partnerTypeNeeded: 'driver_transport' },
          { time: '15:30', activity: 'Private check-in to luxury pool villa in Ubud; welcome flower blessing', location: 'Ubud Valley Resort', partnerTypeNeeded: 'boutique_stay' },
          { time: '18:30', activity: 'Three-course welcome dinner highlighting contemporary Balinese spice architecture', location: 'Resort Terrace' }
        ],
        meals: ['Dinner'],
        stayLocation: 'Mandapa / Viceroy Bali Ubud'
      },
      {
        dayNumber: 2,
        title: 'Mount Batur 4x4 Dawn Sunrise & Kintamani Highlands',
        subtitle: 'Black Lava Fields → Floating Hot Springs → Ubud Arts',
        schedule: [
          { time: '04:00', activity: 'Private 4x4 Land Cruiser drive up the slopes of Mount Batur for panoramic sunrise above clouds', location: 'Mount Batur Caldera', partnerTypeNeeded: 'jeep_operator' },
          { time: '07:00', activity: 'Off-road exploration across ancient black lava dunes from the 1968 eruption', location: 'Black Lava Field', partnerTypeNeeded: 'mountain_guide' },
          { time: '08:30', activity: 'Rejuvenating soak in mineral hot springs overlooking Lake Batur', location: 'Toya Devasya' },
          { time: '14:00', activity: 'Afternoon private visit to Celuk master silversmiths and Ubud royal palace', location: 'Ubud Center', partnerTypeNeeded: 'driver_transport' }
        ],
        meals: ['Sunrise Breakfast', 'Highland Lunch'],
        stayLocation: 'Viceroy Bali Ubud'
      },
      {
        dayNumber: 3,
        title: 'Descent to South Bali & The Coastal Energy of Canggu & Seminyak',
        subtitle: 'Ubud Valley → Canggu Surf & Cosmopolitan Beachfront',
        schedule: [
          { time: '09:30', activity: 'Leisurely brunch overlooking the river ravine and late check-out', location: 'Ubud Resort' },
          { time: '11:30', activity: 'Private chauffeur transfer south to Canggu and Seminyak coastal enclave', location: 'Canggu Coast', partnerTypeNeeded: 'driver_transport' },
          { time: '14:30', activity: 'Check-in to oceanfront suite in Seminyak; afternoon beachside relaxation', location: 'Seminyak Luxury Resort', partnerTypeNeeded: 'boutique_stay' },
          { time: '17:30', activity: 'Sunset cocktail tasting overlooking the Indian Ocean surf break', location: 'Seminyak Beachfront' }
        ],
        meals: ['Breakfast', 'Sunset Dining'],
        stayLocation: 'The Legian Seminyak / Alila Seminyak'
      },
      {
        dayNumber: 4,
        title: 'Nusa Dua White Sands & Dramatic Uluwatu Clifftop Fire Dance',
        subtitle: 'Water Blow Natural Blowhole → 70m Sea Cliffs → Kecak Chant',
        schedule: [
          { time: '09:00', activity: 'Chauffeured drive to the tranquil white sand beaches and Water Blow of Nusa Dua', location: 'Nusa Dua Peninsula', partnerTypeNeeded: 'driver_transport' },
          { time: '12:30', activity: 'Fresh seafood lunch at seaside pavilion overlooking calm turquoise lagoon', location: 'Jimbaran Bay' },
          { time: '16:00', activity: 'Ascent to ancient 11th-century Uluwatu Temple perched 70 meters above crashing waves', location: 'Uluwatu Temple', partnerTypeNeeded: 'mountain_guide' },
          { time: '18:00', activity: 'VIP amphitheater seats for sacred Kecak and fire dance against flaming sunset horizon', location: 'Uluwatu Amphitheater' }
        ],
        meals: ['Breakfast', 'Seafood Lunch', 'Dinner'],
        stayLocation: 'The Legian Seminyak / Bulgari Resort Bali'
      },
      {
        dayNumber: 5,
        title: 'Tropical Morning & Private Airport Transfer',
        subtitle: 'Farewell Bali → DPS International Departure',
        schedule: [
          { time: '08:00', activity: 'Morning breakfast on the veranda accompanied by sound of ocean surf', location: 'Resort Dining' },
          { time: '11:00', activity: 'Private chauffeur transfer to Denpasar International Airport (DPS) for onward flight', location: 'DPS Airport', partnerTypeNeeded: 'driver_transport' }
        ],
        meals: ['Breakfast'],
        stayLocation: 'End of Journey'
      }
    ]
  }
];

export const INITIAL_PARTNERS: CertifiedPartner[] = [
  {
    id: 'part-01',
    name: 'Tengger 4x4 Land Cruiser Alliance',
    type: 'jeep_operator',
    destination: 'Mount Bromo',
    verified: true,
    licenseNumber: 'DISPAR-TGR-4X4-2026/042',
    contactPerson: 'Budi Waluyo (Fleet Operations Lead)',
    phone: '+62 812-3456-7890',
    email: 'tengger.jeep@thirteen-partner.id',
    safetyRating: 4.9,
    lastAuditDate: '2026-09-15',
    rateCardSummary: 'IDR 850,000 / Sunrise trip / Private 4x4 Jeep with certified high-altitude driver',
    vehicleFleetOrEquipment: 'Fleet of 8 renovated Toyota FJ40 / Land Cruisers with winch & first aid',
    notes: 'Rigorous brake and roll-cage inspections completed semi-annually. All drivers native Tengger residents.'
  },
  {
    id: 'part-02',
    name: 'Ijen Alpine Miner Guild & Safety Station',
    type: 'mountain_guide',
    destination: 'Mount Ijen',
    verified: true,
    licenseNumber: 'BKSDA-IJN-GUIDE-8819',
    contactPerson: 'Supardi (Chief Mountain Ranger)',
    phone: '+62 821-9876-5432',
    email: 'supardi.ijen@thirteen-partner.id',
    safetyRating: 5.0,
    lastAuditDate: '2026-10-02',
    rateCardSummary: 'IDR 750,000 / Night ascent / Private guide + 2 military-grade gas respirators',
    vehicleFleetOrEquipment: '30x 3M 6200 Half Facepiece Gas Respirators with 6003 acid gas cartridges',
    notes: 'Certified first aid response. Daily liaison with Ijen Volcanological Observatory.'
  },
  {
    id: 'part-03',
    name: 'East Java Luxury Trans & Chauffeur Services',
    type: 'driver_transport',
    destination: 'Bromo & Ijen Overland',
    verified: true,
    licenseNumber: 'DISHUB-JATIM-VIP-1104',
    contactPerson: 'Hendra Setiawan',
    phone: '+62 813-2233-4455',
    email: 'trans.jatim@thirteen-partner.id',
    safetyRating: 4.8,
    lastAuditDate: '2026-08-20',
    rateCardSummary: 'IDR 1,400,000 / Day / Luxury Toyota Innova Zenix / HiAce Commuter VIP with English chauffeur',
    vehicleFleetOrEquipment: 'Toyota Innova Zenix Hybrid & Toyota HiAce Premio Luxury with Wi-Fi & coolbox',
    notes: 'Drivers undergo background check, English conversational training, and defensive driving certification.'
  },
  {
    id: 'part-04',
    name: 'Yogyakarta Mataram Cultural Guides Association',
    type: 'mountain_guide',
    destination: 'Yogyakarta',
    verified: true,
    licenseNumber: 'HPI-DIY-2026-302',
    contactPerson: 'Dr. Raden Ayu Retno (Historian)',
    phone: '+62 811-9988-7766',
    email: 'retno.heritage@thirteen-partner.id',
    safetyRating: 4.9,
    lastAuditDate: '2026-09-01',
    rateCardSummary: 'IDR 900,000 / Half-day / Senior archaeological historian Borobudur & Prambanan',
    vehicleFleetOrEquipment: 'Heritage archival tablets and whisper audio tour systems',
    notes: 'Official permission holder for Borobudur monument sunrise conservation walks.'
  },
  {
    id: 'part-05',
    name: 'Munduk Mountain Guides & Ecological Stewards',
    type: 'mountain_guide',
    destination: 'Bali',
    verified: true,
    licenseNumber: 'DISPAR-BLI-ECO-009',
    contactPerson: 'Wayan Sudiarta',
    phone: '+62 819-3344-5566',
    email: 'wayan.munduk@thirteen-partner.id',
    safetyRating: 4.9,
    lastAuditDate: '2026-09-28',
    rateCardSummary: 'IDR 600,000 / Private waterfall and twin lake expedition guide',
    vehicleFleetOrEquipment: 'Trekking poles, emergency satellite messenger, herbal knowledge booklet',
    notes: 'Deep indigenous botany expertise and traditional Subak water stewardship.'
  }
];

export const INITIAL_BOOKINGS: BookingInquiry[] = [
  {
    id: 'INQ-2026-104',
    bookingRef: 'TT-2026-081',
    createdAt: '2026-10-16T14:30:00Z',
    leadSource: 'website_seo',
    customer: {
      name: 'James & Sarah Cooper',
      email: 'james.cooper@pacifictravel.au',
      phone: '+61 412 345 678',
      country: 'Australia',
      preferredLanguage: 'en'
    },
    tripDetails: {
      destinationId: 'dest-bromo',
      destinationName: 'Mount Bromo & Mount Ijen',
      packageId: 'pkg-bromo-ijen-3d2n',
      packageTitle: 'East Java Fire & Mist Expedition: Bromo & Ijen Crater',
      serviceTier: 'private',
      tourType: 'custom_private',
      startDate: '2026-11-12',
      endDate: '2026-11-14',
      paxCount: 2,
      adults: 2,
      children: 0,
      fitnessLevel: 'active_adventurous',
      specialRequests: 'Keen on photography, sunrise at King Kong Hill rather than crowded main terrace. Requesting private English-speaking volcanology guide.',
      dietaryRestrictions: 'Vegetarian for Sarah, Gluten-conscious.'
    },
    pipelineStatus: 'quotation_sent',
    assignedSpecialist: 'Rian Sastrawan (Senior Travel Designer)',
    quotation: {
      version: 1,
      currency: 'USD',
      exchangeRateIdrToCurrency: 16000,
      baseCostIdr: 14400000, // ~900 USD base cost
      markupPercent: 28,
      totalPriceIdr: 18432000,
      totalPriceCurrency: 1150, // 1150 USD total for 2 pax
      depositPercent: 30,
      depositAmountCurrency: 345,
      balanceAmountCurrency: 805,
      validUntil: '2026-10-25',
      notes: 'Includes dedicated private luxury chauffeur throughout, 4x4 Land Cruiser Bromo sunrise, Ijen gas masks & alpine miner guide, 2 nights boutique lodge accommodation, and all VIP national park permits.',
      lineItems: [
        { id: 'li-1', description: 'Private luxury chauffeur & fuel (Surabaya → Bromo → Ijen → Ketapang)', costIdr: 4200000, category: 'transport' },
        { id: 'li-2', description: 'Private 4x4 Land Cruiser sunrise tour at Bromo King Kong Hill', costIdr: 850000, category: 'transport' },
        { id: 'li-3', description: '2 Nights boutique lodges (Jiwa Jawa Bromo + Dialoog Banyuwangi)', costIdr: 6000000, category: 'accommodation' },
        { id: 'li-4', description: 'Certified Ijen miner guides + dual 3M gas respirators & permits', costIdr: 1850000, category: 'guide_permits' },
        { id: 'li-5', description: 'VIP national park foreign entry fees, safety levy & concierge snacks', costIdr: 1500000, category: 'activities' }
      ],
      sentAt: '2026-10-17T09:00:00Z'
    },
    paymentDetails: {
      method: 'electronic_wise',
      depositPaid: false,
      balancePaid: false
    },
    itinerary: [
      {
        dayNumber: 1,
        date: '2026-11-12',
        title: 'Arrival in Surabaya & Scenic Bromo Highland Ascent',
        subtitle: 'Pickup → Pasuruan → Tengger Caldera Lodge',
        stayLocation: 'Jiwa Jawa Resort Bromo',
        activities: [
          { id: 'act-101', time: '09:00', activity: 'Private airport meet at Surabaya Terminal 2; cold towel greeting & departure', location: 'Surabaya Airport', partnerId: 'part-03', partnerName: 'East Java Luxury Trans' },
          { id: 'act-102', time: '13:00', activity: 'Scenic local lunch in Pasuruan plantation valley', location: 'Rawon Nguling Heritage' },
          { id: 'act-103', time: '15:30', activity: 'Check-in to Jiwa Jawa Bromo; hot ginger tea overlooking the mist', location: 'Jiwa Jawa Bromo', completed: false }
        ],
        driverNotes: 'Flight GA312 arriving 08:45 AM. Chauffeur Hendra holding THIRTEEN nameboard.',
        safetyChecklistVerified: true,
        emergencyContact: '+62 813-2233-4455'
      },
      {
        dayNumber: 2,
        date: '2026-11-13',
        title: 'Bromo 4x4 Caldera Sunrise & Transit to Banyuwangi',
        subtitle: 'King Kong Hill → Whispering Sands → Ijen Foothills',
        stayLocation: 'Dialoog Banyuwangi',
        activities: [
          { id: 'act-201', time: '03:15', activity: 'Private 4x4 Land Cruiser pickup for King Kong Hill sunrise photography', location: 'King Kong Hill', partnerId: 'part-01', partnerName: 'Tengger 4x4 Alliance' },
          { id: 'act-202', time: '06:15', activity: 'Cross Sea of Sand on foot to volcanic crater rim stairs', location: 'Bromo Crater Rim' },
          { id: 'act-203', time: '10:30', activity: 'Private transit through coffee estate route towards Banyuwangi coast', location: 'Trans-Java route', partnerId: 'part-03', partnerName: 'East Java Luxury Trans' },
          { id: 'act-204', time: '17:00', activity: 'Check in to Dialoog Banyuwangi overlooking Bali Strait; early night rest', location: 'Dialoog Banyuwangi' }
        ],
        driverNotes: 'Jeep driver Budi Waluyo confirmed. Warm thermal fleece verified in client preparation.',
        safetyChecklistVerified: true,
        emergencyContact: '+62 812-3456-7890'
      },
      {
        dayNumber: 3,
        date: '2026-11-14',
        title: 'Ijen Blue Flame Midnight Ascent & Ketapang Ferry Drop',
        subtitle: 'Paltuding Basecamp → Sulfur Lake → Bali Strait',
        stayLocation: 'Ketapang Port / Transfer to Bali',
        activities: [
          { id: 'act-301', time: '01:00', activity: 'Midnight drive to Paltuding basecamp; health questionnaire and respirator briefing', location: 'Paltuding Basecamp', partnerId: 'part-02', partnerName: 'Ijen Alpine Miner Guild' },
          { id: 'act-302', time: '03:45', activity: 'Witness electric-blue fire flames with certified guide Supardi', location: 'Ijen Crater Basin' },
          { id: 'act-303', time: '06:00', activity: 'Sunrise panorama over turquoise acidic lake; descent to breakfast', location: 'Ijen Rim' },
          { id: 'act-304', time: '11:00', activity: 'VIP ferry charter crossing to Gilimanuk, West Bali', location: 'Ketapang Ferry Port', partnerId: 'part-03', partnerName: 'East Java Luxury Trans' }
        ],
        driverNotes: 'Gas respirators inspected & certified. Weather condition green per BKSDA report.',
        safetyChecklistVerified: true,
        emergencyContact: '+62 821-9876-5432'
      }
    ],
    followUps: [
      {
        id: 'fu-1',
        date: '2026-10-16T15:00:00Z',
        specialist: 'Rian Sastrawan',
        channel: 'email',
        summary: 'Inquiry received via website. Clarified Sarah dietary needs and photography focus. Drafted bespoke 3D2N quotation.',
        nextFollowUpDate: '2026-10-18'
      },
      {
        id: 'fu-2',
        date: '2026-10-17T09:10:00Z',
        specialist: 'Rian Sastrawan',
        channel: 'whatsapp',
        summary: 'Sent official quotation PDF link via WhatsApp (+61412345678). Client acknowledged and will discuss with partner tonight.',
        nextFollowUpDate: '2026-10-19'
      }
    ],
    internalNotes: 'Client is an Australian creative director. Values high reliability, avoiding big crowds, and wants pristine photography vantage points.'
  },
  {
    id: 'INQ-2026-102',
    bookingRef: 'TT-2026-079',
    createdAt: '2026-10-14T08:15:00Z',
    leadSource: 'partner_agency',
    customer: {
      name: 'Lukas & Marloes Van Dijk',
      email: 'lukas.vandijk@amsterdamtravel.nl',
      phone: '+31 6 12345678',
      country: 'Netherlands',
      preferredLanguage: 'nl'
    },
    tripDetails: {
      destinationId: 'dest-yogyakarta',
      destinationName: 'Yogyakarta',
      packageId: 'pkg-yogyakarta-heritage-4d3n',
      packageTitle: 'The Royal Heritage & Mystical Java: Yogyakarta & Merapi',
      serviceTier: 'private',
      tourType: 'custom_private',
      startDate: '2026-11-20',
      endDate: '2026-11-23',
      paxCount: 2,
      adults: 2,
      children: 0,
      fitnessLevel: 'moderate',
      specialRequests: 'Keen on Dutch colonial history connections, Jomblang cave light photography, and private batik immersion.',
      dietaryRestrictions: 'None'
    },
    pipelineStatus: 'payment_pending',
    assignedSpecialist: 'Maya Kusuma',
    quotation: {
      version: 2,
      currency: 'EUR',
      exchangeRateIdrToCurrency: 17200,
      baseCostIdr: 16800000,
      markupPercent: 25,
      totalPriceIdr: 21000000,
      totalPriceCurrency: 1220,
      depositPercent: 30,
      depositAmountCurrency: 366,
      balanceAmountCurrency: 854,
      validUntil: '2026-10-22',
      notes: 'Includes Borobudur dawn historian, Jomblang caving gear & permits, Merapi 4x4 lava tour, and 3 nights heritage suite at The Phoenix.',
      lineItems: [
        { id: 'li-y1', description: 'Chauffeured VIP transport for 4 days in Yogyakarta & Gunungkidul', costIdr: 4800000, category: 'transport' },
        { id: 'li-y2', description: '3 Nights Heritage Suite at The Phoenix Hotel Yogyakarta', costIdr: 5400000, category: 'accommodation' },
        { id: 'li-y3', description: 'Borobudur & Prambanan private archaeologist guide and conservation fees', costIdr: 2800000, category: 'guide_permits' },
        { id: 'li-y4', description: 'Jomblang cave vertical harness, instructor crew, and Merapi 4x4 Jeep', costIdr: 3800000, category: 'activities' }
      ],
      sentAt: '2026-10-15T11:00:00Z'
    },
    paymentDetails: {
      method: 'bank_transfer',
      depositPaid: false,
      depositReference: 'Pending SEPA Wire Transfer',
      balancePaid: false,
      paymentNotes: 'Client sent proof of SWIFT / SEPA wire on Oct 17. Awaiting bank clearance into BCA IDR account.'
    },
    itinerary: [],
    followUps: [
      {
        id: 'fu-y1',
        date: '2026-10-15T11:30:00Z',
        specialist: 'Maya Kusuma',
        channel: 'email',
        summary: 'Sent revised quotation v2 with added Kotagede artisanal batik atelier.',
        nextFollowUpDate: '2026-10-17'
      }
    ],
    internalNotes: 'Payment pending bank verification. Once verified, move to Confirmed status and dispatch voucher.'
  },
  {
    id: 'INQ-2026-098',
    bookingRef: 'TT-2026-064',
    createdAt: '2026-10-05T10:00:00Z',
    leadSource: 'direct_referral',
    customer: {
      name: 'Marcus & Claire Beaumont',
      email: 'm.beaumont@lyon-invest.fr',
      phone: '+33 6 8877 6655',
      country: 'France',
      preferredLanguage: 'fr'
    },
    tripDetails: {
      destinationId: 'dest-bali',
      destinationName: 'Bali to Java Overland',
      packageId: 'pkg-bali-overland-7d6n',
      packageTitle: 'Sacred Volcanoes & Cultural Crossings: Bali to Java Overland',
      serviceTier: 'premium_concierge',
      tourType: 'multiday_expedition',
      startDate: '2026-10-28',
      endDate: '2026-11-03',
      paxCount: 2,
      adults: 2,
      children: 0,
      fitnessLevel: 'active_adventurous',
      specialRequests: 'French or fluent English guide. Luxury stays only. Champagne breakfast at Bromo sand sea.',
      dietaryRestrictions: 'Pescatarian, no dairy for Claire.'
    },
    pipelineStatus: 'confirmed',
    assignedSpecialist: 'Rian Sastrawan',
    quotation: {
      version: 1,
      currency: 'USD',
      exchangeRateIdrToCurrency: 16000,
      baseCostIdr: 49600000,
      markupPercent: 32,
      totalPriceIdr: 65472000,
      totalPriceCurrency: 4092,
      depositPercent: 30,
      depositAmountCurrency: 1228,
      balanceAmountCurrency: 2864,
      validUntil: '2026-10-12',
      notes: 'Full VIP overland expedition across 7 days. Luxury suites at Amanjiwo, Plataran Bromo, Dialoog Banyuwangi, and Mandapa Ubud.',
      lineItems: [
        { id: 'li-b1', description: '7 Days private executive van + 4x4 Land Cruiser Bromo + private ferry', costIdr: 16000000, category: 'transport' },
        { id: 'li-b2', description: '6 Nights luxury resort suites (Amanjiwo, Plataran, Dialoog, Mandapa)', costIdr: 24000000, category: 'accommodation' },
        { id: 'li-b3', description: 'Senior French/English historian, Bromo & Ijen alpine guides', costIdr: 5600000, category: 'guide_permits' },
        { id: 'li-b4', description: 'VIP experiences: Borobudur dawn, Jomblang, Champagne Bromo, Melukat priest', costIdr: 4000000, category: 'activities' }
      ],
      sentAt: '2026-10-06T10:00:00Z'
    },
    paymentDetails: {
      method: 'bank_transfer',
      depositPaid: true,
      depositPaidAt: '2026-10-07T14:20:00Z',
      depositReference: 'TRX-BCA-98110294',
      balancePaid: true,
      balancePaidAt: '2026-10-15T09:30:00Z',
      balanceReference: 'TRX-BCA-99381021',
      paymentNotes: 'Fully paid in advance via international wire. Verified by accounting.'
    },
    itinerary: [
      {
        dayNumber: 1,
        date: '2026-10-28',
        title: 'VIP Arrival in Yogyakarta & Amanjiwo Retreat',
        subtitle: 'Airport Fast Track → Menoreh Hills Check-in',
        stayLocation: 'Amanjiwo Borobudur',
        activities: [
          { id: 'act-m1', time: '14:00', activity: 'VIP airport meet at YIA; private greeting with chilled towels and fresh young coconut', location: 'YIA Airport', partnerId: 'part-04', partnerName: 'Yogyakarta Cultural Guides' },
          { id: 'act-m2', time: '16:00', activity: 'Private check-in at Amanjiwo; royal high tea on private suite terrace', location: 'Amanjiwo' },
          { id: 'act-m3', time: '19:30', activity: 'Five-course Javanese degustation dinner under the stars', location: 'Amanjiwo Pavilion' }
        ],
        driverNotes: 'Flight GA206 arriving 13:40. Luxury HiAce Premio ready with luggage assistance.',
        safetyChecklistVerified: true,
        emergencyContact: '+62 811-9988-7766'
      },
      {
        dayNumber: 2,
        date: '2026-10-29',
        title: 'Private Borobudur Sunrise Reflection & Prambanan Sunset',
        subtitle: 'Exclusive Dawn Access → Heritage Archaeologist',
        stayLocation: 'Amanjiwo Borobudur',
        activities: [
          { id: 'act-m4', time: '05:00', activity: 'Private sunrise meditation on Borobudur monument before general opening', location: 'Borobudur Temple' },
          { id: 'act-m5', time: '14:00', activity: 'Prambanan Hindu complex tour with Dr. Raden Ayu Retno', location: 'Prambanan', partnerId: 'part-04', partnerName: 'Yogyakarta Cultural Guides' }
        ],
        driverNotes: 'Temple conservation permits prepared and verified.',
        safetyChecklistVerified: true
      }
    ],
    followUps: [
      {
        id: 'fu-b1',
        date: '2026-10-15T10:00:00Z',
        specialist: 'Rian Sastrawan',
        channel: 'email',
        summary: 'Received full balance payment receipt. Issued official THIRTEEN Expedition Voucher and detailed travel brief.',
        nextFollowUpDate: '2026-10-27'
      }
    ],
    internalNotes: 'VIP clients celebrating 15th wedding anniversary. Wine preferences shared with Amanjiwo and Dialoog concierges.'
  },
  {
    id: 'INQ-2026-108',
    bookingRef: 'TT-2026-085',
    createdAt: '2026-10-17T10:45:00Z',
    leadSource: 'instagram_social',
    customer: {
      name: 'Dr. Michael Chen & Family',
      email: 'm.chen@singapore-health.sg',
      phone: '+65 9123 4567',
      country: 'Singapore',
      preferredLanguage: 'en'
    },
    tripDetails: {
      destinationId: 'dest-bali',
      destinationName: 'Bali',
      packageId: 'pkg-bali-highlands-5d4n',
      packageTitle: 'Bali Highlands & Artisanal Sanctuaries',
      serviceTier: 'private',
      tourType: 'modular_tour',
      startDate: '2026-12-10',
      endDate: '2026-12-14',
      paxCount: 4,
      adults: 2,
      children: 2,
      fitnessLevel: 'easy',
      specialRequests: 'Traveling with children aged 9 and 12. Gentle walks, cultural workshops, scenic infinity pool stays.',
      dietaryRestrictions: 'Mild spices for children.'
    },
    pipelineStatus: 'new_inquiry',
    assignedSpecialist: 'Unassigned',
    paymentDetails: {
      depositPaid: false,
      balancePaid: false
    },
    itinerary: [],
    followUps: [],
    internalNotes: 'Fresh lead from Instagram campaign "Secret Bali Cascades". Needs quotation within 2 hours per CS SLA.'
  }
];
