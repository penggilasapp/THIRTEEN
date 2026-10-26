import { Region, Destination } from '../types/tour';

export const REGIONS_DATA: Region[] = [
  {
    id: 'java',
    name: 'Java',
    slug: 'java',
    description: 'The volcanic and cultural spine of Indonesia, spanning ancient royal capitals, 9th-century UNESCO stone temples, smoking caldera rims, otherworldly electric-blue sulfur flames, roaring canyon waterfalls, and protected coastal wilderness.',
    heroImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'bali',
    name: 'Bali',
    slug: 'bali',
    description: 'An Indonesian island sanctuary renowned for forested volcanic mountains, ancient Hindu clifftop temples, terraced rice paddies, secluded white-sand enclaves, and world-class coastal surf breaks.',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80'
  }
];

export const DESTINATIONS_DATA: Destination[] = [
  // ==========================================
  // JAVA DESTINATIONS (9)
  // ==========================================
  {
    id: 'dest-borobudur',
    regionId: 'java',
    name: 'Borobudur Sanctuary',
    slug: 'borobudur',
    shortDescription: 'The ninth-century UNESCO World Heritage Buddhist monument set against the misty Menoreh volcanic ridge.',
    longDescription: 'Rising majestically above the Kedu Plain in Central Java, Borobudur is the world’s largest Buddhist monument, constructed in the 8th and 9th centuries without mortar. Its stepped pyramid architecture comprises nine stacked platforms adorned with 2,672 detailed relief panels and 504 Buddha statues housed within perforated stupas. Private dawn visits allow quiet contemplation as the sun crests over Mount Merapi.',
    heroImage: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=800&q=80'
    ],
    experiences: [
      'Pre-dawn sunrise meditation from Dagi Hill overlooking the monument',
      'Private art historian walkthrough deciphering Mahayana relief stone narratives',
      'Candirejo traditional horse-drawn Dokar village and organic spice orchard walk',
      'Menoreh hills luxury picnic breakfast with champagne'
    ],
    practicalInformation: 'Located 75 minutes northwest of Yogyakarta city. UNESCO visitor caps require advance reservation. Modest dress and specialized Upanat stone sandals provided for structure ascents.',
    seoTitle: 'Borobudur Temple Private Sunrise & Heritage Expeditions | THIRTEEN',
    seoDescription: 'Experience Borobudur with THIRTEEN: private pre-dawn access, senior art historians, luxury Menoreh suites, and authentic Candirejo village culture.',
    isPublished: true,
    tagline: 'Ninth-century UNESCO Buddhist marvel & serene Menoreh foothill mist',
    description: 'The ninth-century UNESCO World Heritage Buddhist monument set against the misty Menoreh volcanic ridge.',
    highlights: [
      'Exclusive sunrise vantage point over misty temple stupas and volcano silhouettes',
      'Guided stone relief interpretations by resident Javanese archaeologists',
      'Candirejo heritage village artisan encounters and traditional gamelan music',
      'Luxury stays at Amanjiwo and Plataran Borobudur overlooking the sanctuary'
    ],
    climateSafetyNotes: 'Warm tropical morning air. Stone stairs require careful pacing; umbrellas and sun protection recommended.',
    status: 'core',
    statusLabel: 'Approved Primary Destination',
    heroBadge: 'UNESCO Heritage'
  },
  {
    id: 'dest-prambanan',
    regionId: 'java',
    name: 'Prambanan & Ratu Boko',
    slug: 'prambanan',
    shortDescription: 'Towering ninth-century Hindu temple spires dedicated to the Trimurti and the ancient stone gates of Ratu Boko plateau.',
    longDescription: 'Prambanan is the largest Hindu temple compound in Indonesia, celebrated for its soaring 47-meter-high Shiva Temple and intricately carved stone reliefs illustrating the ancient Ramayana epic. Just a short drive away sits Ratu Boko, an enigmatic eighth-century fortified palace plateau commanding sunset panoramas over Mount Merapi and the Prambanan plains. By night, the open-air amphitheater hosts the legendary Ramayana Ballet with illuminated stone spires.',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80'
    ],
    experiences: [
      'Private guided walkthrough of the Shiva, Brahma, and Vishnu sanctuaries',
      'VIP front-row seats for the open-air Ramayana Ballet performance',
      'Ratu Boko plateau sunset aperitif overlooking the Prambanan valley',
      'Candi Sewu and Plaosan twin Buddhist temple cycling route'
    ],
    practicalInformation: 'Located 30 minutes east of central Yogyakarta near the Solo border. Open year-round. Evening ballet performances run Tuesdays, Thursdays, and Saturdays on dry-season open-air stage.',
    seoTitle: 'Prambanan Temple Complex & Ramayana Ballet | THIRTEEN',
    seoDescription: 'Private expeditions to Prambanan Hindu temples, Ratu Boko sunset plateau, and VIP Ramayana ballet performances with THIRTEEN.',
    isPublished: true,
    tagline: 'Towering ninth-century Hindu spires & royal sunset plateaus',
    description: 'Towering ninth-century Hindu temple spires dedicated to the Trimurti and the ancient stone gates of Ratu Boko plateau.',
    highlights: [
      '47-meter Shiva Mahadeva central spire and Ramayana bas-relief galleries',
      'Sunset photography through the monolithic stone gate arches of Ratu Boko',
      'VIP box seats for the traditional 200-dancer Ramayana Ballet production',
      'Candi Plaosan twin temple peaceful dusk explorations'
    ],
    climateSafetyNotes: 'Pleasant evening breezes. Stone temple courtyards become warm at midday; late afternoon visits recommended.',
    status: 'core',
    statusLabel: 'Approved Primary Destination',
    heroBadge: 'UNESCO Hindu Spires'
  },
  {
    id: 'dest-yogyakarta',
    regionId: 'java',
    name: 'Yogyakarta Sultanate & Surrounds',
    slug: 'yogyakarta',
    shortDescription: 'Royal Sultan’s Palace, Tamansari Water Castle, Jomblang 60m vertical cave, and Mount Merapi 4x4 lava trails.',
    longDescription: 'The sovereign heart of Javanese royal culture, Yogyakarta is an active sultanate steeped in living arts, court etiquette, and royal gastronomy. Beyond the Kraton and the subterranean chambers of Tamansari Water Castle lies a dramatic surrounding geography: descend 60 meters on vertical ropes into prehistoric Jomblang Cave to witness the heavenly ray of light ("Cahaya Surga"), or explore active Merapi volcano foothills by open-top 4x4 Land Cruisers.',
    heroImage: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
    ],
    experiences: [
      'Private audience with royal Kraton courtiers and Tamansari secret pools',
      'Jomblang 60m vertical rappel into prehistoric subterranean rainforest',
      'Mount Merapi 4x4 off-road volcanic lava trails and bunker viewpoints',
      'Master class in traditional hand-drawn wax Batik with royal artisans'
    ],
    practicalInformation: 'Served by Yogyakarta International Airport (YIA) with rapid rail connections. Jomblang Cave requires moderate physical fitness and safety harness adherence.',
    seoTitle: 'Yogyakarta Private Cultural & Overland Expeditions | THIRTEEN',
    seoDescription: 'Bespoke cultural expeditions in Yogyakarta: Kraton palace courtiers, Jomblang cave descents, Merapi 4x4 trails, and royal Mataram banquets.',
    isPublished: true,
    tagline: 'Royal Sultanate heritage, mystical sinkhole caves & volcanic lava trails',
    description: 'Royal Sultan’s Palace, Tamansari Water Castle, Jomblang 60m vertical cave, and Mount Merapi 4x4 lava trails.',
    highlights: [
      'Kraton Palace royal pavilions and Tamansari Portuguese underground mosque',
      '60-meter vertical descent into Jomblang Cave to behold the legendary light beam',
      'Open-air 4x4 Jeep trail across the hardened lava fields of active Mount Merapi',
      'Kotagede historic silver workshops and authentic royal gudeg banquets'
    ],
    climateSafetyNotes: 'Tropical urban and highland terrain. Jomblang cave involves mud trails; specialized rubber boots and helmets provided.',
    status: 'core',
    statusLabel: 'Approved Primary Destination',
    heroBadge: 'Royal Heritage & Caves'
  },
  {
    id: 'dest-bromo',
    regionId: 'java',
    name: 'Mount Bromo & Tengger Caldera',
    slug: 'mount-bromo',
    shortDescription: 'Lunar volcanic caldera sunrise, private 4x4 sea-of-sand expeditions, and active steaming crater rim ascents.',
    longDescription: 'Set within the massive Tengger caldera of East Java, Mount Bromo is one of Indonesia’s most revered geological wonders. Rising from a vast sea of volcanic sand at 2,329 meters, the smoking caldera is framed by the conical silhouette of Mount Batok and the distant ash plumes of Mount Semeru. Private expeditions feature pre-dawn 4x4 Land Cruiser ascents to King Kong Hill, caldera crossings, and Madakaripura canyon treks.',
    heroImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    ],
    experiences: [
      'King Kong Hill private sunrise vantage and caldera vista above clouds',
      'Private 4x4 Land Cruiser expedition across the Sea of Sand',
      'Crater rim staircase climb (250 steps) to active smoking volcanic vent',
      'Madakaripura canyon eternal waterfall rainforest trek'
    ],
    practicalInformation: 'Pre-dawn temperatures drop to 3°C–10°C. Warm thermal fleece, windbreaker, and sturdy hiking shoes mandatory. 3–4 hours by private chauffeur from Surabaya or Malang.',
    seoTitle: 'Mount Bromo Private Expeditions & Sunrise Tours | THIRTEEN',
    seoDescription: 'Experience Mount Bromo with THIRTEEN: private 4x4 Toyota Land Cruisers, King Kong Hill sunrise platforms, caldera walks, and luxury mountain lodges.',
    isPublished: true,
    tagline: 'Lunar volcanic caldera sunrise & private 4x4 sea-of-sand expeditions',
    description: 'Witness the sunrise over the ancient Tengger caldera from secluded vantage points away from tourist hordes, followed by a private 4x4 expedition across the whispering volcanic sands.',
    highlights: [
      'King Kong Hill & Penanjakan private sunrise vantage points',
      'Dedicated 4x4 Tengger Land Cruiser driver with local heritage insight',
      'Trek to the smoking volcanic crater rim with certified mountain guide',
      'Stargazing over the mystical caldera under pristine high-altitude skies'
    ],
    climateSafetyNotes: 'High-altitude cold (3°C to 12°C at pre-dawn). Thermal layers, windbreakers, and sturdy footwear mandatory.',
    status: 'core',
    statusLabel: 'Approved Primary Destination',
    heroBadge: 'Volcanic Marvel'
  },
  {
    id: 'dest-tumpak-sewu',
    regionId: 'java',
    name: 'Tumpak Sewu Waterfall',
    slug: 'tumpak-sewu',
    shortDescription: 'A magnificent thousand-stream circular waterfall curtain cascading 120 meters into a lush jungle ravine beneath Mount Semeru.',
    longDescription: 'Widely celebrated as one of the most breathtaking natural wonders in Southeast Asia, Tumpak Sewu (meaning "A Thousand Waterfalls" in Javanese) forms an immense semi-circular curtain of water pouring 120 meters over sheer moss-covered canyon walls. Set against the majestic background of Mount Semeru, private expeditions guide travelers along panoramic cliffside decks and down into the misty ravine basin to visit Goa Tetes cave springs.',
    heroImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80'
    ],
    experiences: [
      'Panoramic upper observation deck sunrise view with Mount Semeru backdrop',
      'Guided canyon descent with waterproof gear to the waterfall amphitheater',
      'Exploration of Goa Tetes natural sulfur cave springs and cascading limestone pools'
    ],
    practicalInformation: 'Located in Pronojiwo, Lumajang, approximately 2 hours south of Malang or 3 hours from Bromo. Sturdy waterproof footwear with rubber grip is essential for canyon stairs.',
    seoTitle: 'Tumpak Sewu Waterfall Guided Expeditions | THIRTEEN',
    seoDescription: 'Witness the 120-meter curtain of Tumpak Sewu Waterfall under Mount Semeru. Private canyon descents, Goa Tetes cave springs, and scenic photography.',
    isPublished: true,
    tagline: 'A thousand-stream circular waterfall curtain in an ancient canyon',
    description: 'A magnificent thousand-stream circular waterfall curtain cascading 120 meters into a lush jungle ravine beneath Mount Semeru.',
    highlights: [
      'Panoramic upper observation deck sunrise view with Mount Semeru backdrop',
      'Guided canyon descent with waterproof gear to the waterfall amphitheater',
      'Exploration of Goa Tetes natural sulfur cave springs and cascading limestone pools'
    ],
    climateSafetyNotes: 'Canyon descent involves wet bamboo stairways. High-traction water shoes and waterproof bags mandatory.',
    status: 'core',
    statusLabel: 'Approved Primary Destination',
    heroBadge: 'Canyon Waterfall'
  },
  {
    id: 'dest-pulau-merah',
    regionId: 'java',
    name: 'Pulau Merah (Red Island)',
    slug: 'pulau-merah',
    shortDescription: 'Red Island coastal beach sanctuary in Banyuwangi, celebrated for its iconic offshore islet, gentle surf breaks, and golden sunsets.',
    longDescription: 'Located on the pristine southern coastline of Banyuwangi, East Java, Pulau Merah (Red Island) is named for its distinctive 200-meter-high conical offshore island with reddish soil, accessible on foot during low tide. Blessed with clean, uncrowded sand, gentle consistent waves ideal for private surf coaching, and dramatic evening skies, it offers a peaceful coastal complement to East Java’s volcano treks.',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80'
    ],
    experiences: [
      'Low-tide walking crossing to the iconic Red Island islet',
      'Private coaching and longboarding on uncrowded south-coast swells',
      'Sunset beachside dining with freshly caught local seafood and young coconuts'
    ],
    practicalInformation: 'Located 2.5 hours southwest of Banyuwangi city center or Ketapang Ferry port. Comfortable executive air-conditioned vehicle transfers provided.',
    seoTitle: 'Pulau Merah Red Island Beach Expeditions | THIRTEEN',
    seoDescription: 'Discover Pulau Merah (Red Island) in Banyuwangi: uncrowded coastal surf, low-tide islet crossings, and radiant Indian Ocean sunsets.',
    isPublished: true,
    tagline: 'Conical reddish offshore islet, uncrowded surf & golden sunsets',
    description: 'Red Island beach sanctuary in Banyuwangi, celebrated for its iconic offshore islet, gentle surf breaks, and fiery golden sunsets.',
    highlights: [
      'Low-tide walking crossing to the iconic Red Island islet',
      'Private coaching and longboarding on uncrowded south-coast swells',
      'Sunset beachside dining with freshly caught local seafood and coconuts'
    ],
    climateSafetyNotes: 'Pleasant coastal climate. Low-tide walks require non-slip reef footwear.',
    status: 'core',
    statusLabel: 'Approved Primary Destination',
    heroBadge: 'Coastal Sanctuary'
  },
  {
    id: 'dest-meru-betiri',
    regionId: 'java',
    name: 'Meru Betiri & Sukamade Turtles',
    slug: 'meru-betiri',
    shortDescription: 'Untamed coastal rainforest wilderness and protected nocturnal giant sea turtle nesting sanctuary at Sukamade beach.',
    longDescription: 'Encompassing over 580 square kilometers of primary coastal rainforest and pristine beaches in southern East Java, Meru Betiri National Park is an extraordinary haven of biodiversity. The secluded beach of Sukamade is a world-renowned conservation station where endangered giant green sea turtles haul ashore by night under the stars to lay eggs. Private expeditions utilize rugged 4x4 vehicles across riverbeds and dense forest trails with morning hatchling releases.',
    heroImage: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=800&q=80'
    ],
    experiences: [
      'Nocturnal beach patrol with rangers to observe nesting giant sea turtles',
      'Morning release of sea turtle hatchlings into the protected ocean waters',
      'Rugged 4x4 off-road riverbed crossing through dense coastal rainforest',
      'Green Bay (Teluk Hijau) secluded emerald cove trek'
    ],
    practicalInformation: 'Remote wilderness terrain requires high-clearance 4x4 vehicles. Basic eco-lodge facilities at Sukamade conservation station. 3.5 hours from Banyuwangi.',
    seoTitle: 'Meru Betiri National Park & Sukamade Turtle Sanctuary | THIRTEEN',
    seoDescription: 'Journey deep into Meru Betiri National Park: Sukamade sea turtle nesting night patrols, Green Bay trekking, and private 4x4 rainforest expeditions.',
    isPublished: true,
    tagline: 'Untamed coastal rainforest & nocturnal sea turtle nesting sanctuary',
    description: 'Untamed coastal rainforest wilderness, sea turtle conservation sanctuaries at Sukamade, and secluded green coves.',
    highlights: [
      'Nocturnal beach patrol with rangers to observe nesting giant sea turtles',
      'Morning release of sea turtle hatchlings into the protected ocean waters',
      'Rugged 4x4 off-road riverbed crossing through dense coastal rainforest',
      'Green Bay (Teluk Hijau) secluded emerald cove trek'
    ],
    climateSafetyNotes: 'Wilderness tropical forest. Insect repellant, flashlight, and eco-friendly behavior strictly mandated.',
    status: 'core',
    statusLabel: 'Approved Primary Destination',
    heroBadge: 'Wildlife & Turtles'
  },
  {
    id: 'dest-baluran',
    regionId: 'java',
    name: 'Baluran National Park',
    slug: 'baluran',
    shortDescription: 'The "Africa of Java": sweeping dry savannah plains, wild water buffalo, Javanese deer, and serene Bama coral beaches.',
    longDescription: 'Dominating the northeastern tip of East Java across from Bali, Baluran National Park is often referred to as "Little Africa in Java" due to its sweeping Bekol savannah plains against the dramatic backdrop of extinct Mount Baluran. Here, wildlife thrives in their natural habitat, including wild banteng (Javanese wild ox), deer, peacocks, ebony leaf monkeys, and over 150 species of birds, culminating in the calm mangrove shores of Bama Beach.',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    ],
    experiences: [
      'Savannah wildlife safari in open 4x4 vehicle through Bekol plain',
      'Observation tower photography over watering holes and grazing banteng herds',
      'Mangrove forest nature trail and quiet snorkeling at Bama coral beach'
    ],
    practicalInformation: 'Located 1 hour north of Banyuwangi and Ketapang Ferry port. Dry season (May to October) is ideal for wildlife viewing. Sun protection and binoculars recommended.',
    seoTitle: 'Baluran National Park Safari & Savannah Expeditions | THIRTEEN',
    seoDescription: 'Explore Baluran National Park with THIRTEEN: private open 4x4 savannah safaris, wild banteng herds, Bekol watchtowers, and peaceful Bama coral shores.',
    isPublished: true,
    tagline: 'Sweeping dry savannah plains, native wildlife & Bama coral beaches',
    description: 'The "Africa of Java": sweeping dry savannah plains, wild water buffalo, Javanese deer, and serene Bama coral beaches.',
    highlights: [
      'Savannah wildlife safari in open 4x4 vehicle through Bekol plain',
      'Observation tower photography over watering holes and grazing banteng herds',
      'Mangrove forest nature trail and quiet snorkeling at Bama coral beach'
    ],
    climateSafetyNotes: 'Hot, dry savannah conditions during daylight hours. Wide-brim sun hat and ample hydration advised.',
    status: 'core',
    statusLabel: 'Approved Primary Destination',
    heroBadge: 'Savannah Safari'
  },
  {
    id: 'dest-ijen',
    regionId: 'java',
    name: 'Ijen Crater & Acidic Lake',
    slug: 'ijen-crater',
    shortDescription: 'Rare electric-blue flame nocturnal trekking, turquoise acidic caldera lake, and historical sulfur miner trails.',
    longDescription: 'Perched at 2,386 meters in East Java’s Ijen volcano complex, Kawah Ijen holds the world’s largest highly acidic crater lake (pH < 0.5) and one of only two natural electric-blue fire phenomena on the planet. Guided by veteran miner guides equipped with certified chemical gas respirators, travelers undertake a midnight alpine ascent under starlit skies before watching the morning sun illuminate the turquoise waters.',
    heroImage: 'https://images.unsplash.com/photo-1601662528567-526cd06f6582?auto=format&fit=crop&w=1200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1601662528567-526cd06f6582?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'
    ],
    experiences: [
      'Midnight alpine crater ascent with certified miner guides',
      'Electric-blue sulfuric fire observation (subject to geological safety clearances)',
      'Panoramic dawn over the 1km-wide turquoise acidic lake',
      'Historic East Java highland coffee plantation overland transit'
    ],
    practicalInformation: 'Health check required prior to midnight ascent. Industrial 3M gas respirators provided. Unsuitable for severe respiratory or cardiac conditions. 1.5 hours from Banyuwangi or 4 hours from Bromo.',
    seoTitle: 'Ijen Crater Blue Flame & Acidic Lake Expeditions | THIRTEEN',
    seoDescription: 'Witness the rare midnight blue fire and turquoise acidic lake at Ijen Crater. Guided by certified alpine miners with professional military-grade respirators.',
    isPublished: true,
    tagline: 'Rare electric-blue flame crater trekking & turquoise acidic caldera',
    description: 'A midnight alpine ascent leading into the otherworldly crater basin. Subject to strict volcanic safety protocols, gas-mask inspections, and daily geological verification before departure.',
    highlights: [
      'Midnight guided crater rim trek led by certified local alpine miners',
      'Mesmerizing natural electric-blue flames (conditioned on safety clearances)',
      'Panoramic sunrise overlooking the world’s largest acidic turquoise lake',
      'Comprehensive safety gear including industrial gas respirators and headlamps'
    ],
    climateSafetyNotes: 'STRICT PROTOCOL: Subject to Center for Volcanology alert levels. Pre-trek health check required. Not suitable for travelers with severe respiratory or heart conditions.',
    status: 'core',
    statusLabel: 'Approved Primary Destination',
    heroBadge: 'Geological Wonder'
  },

  // ==========================================
  // BALI DESTINATIONS (8)
  // ==========================================
  {
    id: 'dest-ubud',
    regionId: 'bali',
    name: 'Ubud',
    slug: 'ubud',
    shortDescription: 'The cultural and spiritual heart of Bali, immersed in sacred river ravines, ancient royal palaces, and emerald rice terrace ridges.',
    longDescription: 'Nestled in the lush central uplands, Ubud has long been the epicentre of Balinese arts, master woodcarving, traditional painting, and holistic healing. Surrounded by the Ayung River gorge, Campuhan Ridge, and centuries-old subak irrigation waterways, Ubud provides secluded private villa retreats and meaningful cultural exchanges.',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    ],
    experiences: [
      'Private Melukat water blessing ceremony with an authentic high priest',
      'Ayung River gorge luxury valley walk & Campuhan Ridge morning stroll',
      'Private master woodcarver and silver atelier visits in Celuk & Mas'
    ],
    practicalInformation: 'Elevated upland climate (22°C–28°C), cooler in evening. 75 minutes from DPS Airport. Modest attire required when visiting village temples.',
    seoTitle: 'Ubud Cultural Sanctuaries & Bespoke Retreats | THIRTEEN',
    seoDescription: 'Experience Ubud with THIRTEEN: private valley villas, Melukat spiritual water blessings, sacred river gorges, and master artisan ateliers.',
    isPublished: true,
    tagline: 'Artisanal culture, sacred temples & untouched highland cascades',
    description: 'The cultural and spiritual heart of Bali, immersed in sacred river ravines, ancient royal palaces, and emerald rice terrace ridges.',
    highlights: [
      'Private Melukat water blessing ceremony with an authentic high priest',
      'Ayung River gorge luxury valley walk & Campuhan Ridge morning stroll',
      'Private master woodcarver and silver atelier visits in Celuk & Mas'
    ],
    climateSafetyNotes: 'Pleasant upland temperatures year-round. Light rain layers advised for tropical forest walks.',
    status: 'core',
    statusLabel: 'Approved Subdestination',
    heroBadge: 'Cultural Heart'
  },
  {
    id: 'dest-uluwatu',
    regionId: 'bali',
    name: 'Uluwatu & Bukit Bluffs',
    slug: 'uluwatu',
    shortDescription: 'Dramatic 100-meter ocean limestone cliffs, sacred Pura Luhur Uluwatu, sunset Kecak Fire Dance, and white-sand surf coves.',
    longDescription: 'Perched atop the rugged limestone cliffs of Bali’s southern Bukit Peninsula, Uluwatu is renowned for sacred Pura Luhur Uluwatu commanding the Indian Ocean horizon, vibrant sunset Kecak fire performances in the clifftop amphitheater, secluded white-sand surf coves including Padang Padang and Bingin, and ultra-luxury clifftop pool villas.',
    heroImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80'
    ],
    experiences: [
      'VIP front-row Uluwatu clifftop temple & Kecak fire dance',
      'Hidden white-sand cove explorations at Padang Padang and Bingin',
      'Private sunset yacht charter along Bukit limestone cliffs'
    ],
    practicalInformation: 'Located 45 minutes south of DPS Airport. Cliffside walkways require careful footstep discipline; protective sarongs are mandatory inside Uluwatu temple perimeters.',
    seoTitle: 'Uluwatu & Bukit Clifftop Expeditions | THIRTEEN',
    seoDescription: 'Bespoke clifftop journeys in Uluwatu: Private Kecak performances, luxury villas, and secluded limestone beach coves with THIRTEEN.',
    isPublished: true,
    tagline: 'Towering ocean limestone cliffs, sacred temples & Kecak sunset dance',
    description: 'Dramatic limestone cliffs and world-class clifftop pavilions overlooking the sapphire waters of the Bukit Peninsula and sacred Uluwatu.',
    highlights: [
      'VIP front-row Uluwatu clifftop temple & Kecak fire dance',
      'Hidden white-sand cove explorations at Padang Padang and Bingin',
      'Private sunset yacht charter along Bukit limestone cliffs'
    ],
    climateSafetyNotes: 'Breezy coastal cliff climate. Sturdy footwear recommended on limestone paths.',
    status: 'core',
    statusLabel: 'Approved Subdestination',
    heroBadge: 'Clifftop & Ocean'
  },
  {
    id: 'dest-nusa-dua',
    regionId: 'bali',
    name: 'Nusa Dua',
    slug: 'nusa-dua',
    shortDescription: 'Gleaming white-sand coastline, tranquil turquoise swimming lagoons, dramatic Water Blow blowhole, and private 5-star beachfront resorts.',
    longDescription: 'Curated as an elite seaside enclave on Bali’s southeastern peninsula, Nusa Dua is celebrated for its manicured tropical gardens, calm reef-protected turquoise bays, and world-class luxury beachfront resorts. The natural ocean blowhole at Water Blow showcases the raw power of the Indian Ocean crashing against limestone reefs, while quiet dawn beach walks offer sublime sunrises.',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80'
    ],
    experiences: [
      'Private dawn beach stroll and Water Blow marine geyser observation',
      'Reef catamaran sailing and calm lagoon paddleboarding',
      'Private beachfront seafood dining under starlit tropical skies'
    ],
    practicalInformation: 'Located 25 minutes from DPS International Airport via the Mandara toll road over the bay. Ideal for families and couples seeking serene ocean swimming.',
    seoTitle: 'Nusa Dua Luxury Coastal Sanctuary | THIRTEEN',
    seoDescription: 'Discover Nusa Dua with THIRTEEN: private beachfront pavilions, Water Blow natural spectacles, and serene reef-protected turquoise bays.',
    isPublished: true,
    tagline: 'Pristine white-sand beaches, ocean blowholes & tranquil lagoons',
    description: 'Gleaming white-sand coastline, tranquil turquoise swimming lagoons, dramatic Water Blow blowhole, and private 5-star beachfront resorts.',
    highlights: [
      'Reef-protected calm swimming waters safe for private leisure and swimming',
      'Water Blow natural marine spray amphitheater on limestone bluffs',
      'Direct access to Bali National Golf Club and premier coastal spas'
    ],
    climateSafetyNotes: 'Warm tropical maritime climate. High sun exposure; reef shoes recommended near corals.',
    status: 'core',
    statusLabel: 'Approved Subdestination',
    heroBadge: 'Luxury Coastline'
  },
  {
    id: 'dest-seminyak',
    regionId: 'bali',
    name: 'Seminyak',
    slug: 'seminyak',
    shortDescription: 'Sophisticated coastal dining, stylish sunset beach pavilions at Petitenget, and secluded private villa sanctuaries.',
    longDescription: 'Seminyak is Bali’s premier cosmopolitan beachside haven, where refined design, world-class gastronomy, and legendary golden-hour sunsets converge. Lined with stylish beach clubs like Ku De Ta and Potato Head, high-end fashion boutiques, and secluded luxury private pool villa compounds, it offers discerning travelers an energetic yet exclusive beachside escape.',
    heroImage: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80'
    ],
    experiences: [
      'VIP sunset cabana reservations at premier beachfront pavilions',
      'Private tasting menus curated by award-winning resident culinary chefs',
      'Bespoke shopping chauffeuring to premier fashion and interior design ateliers'
    ],
    practicalInformation: 'Located 30–45 minutes north of DPS Airport. Beach walking is excellent at low tide; private driver recommended for evening dining transfers.',
    seoTitle: 'Seminyak Luxury Beach Villas & Culinary Expeditions | THIRTEEN',
    seoDescription: 'Bespoke stays in Seminyak with THIRTEEN: private pool villas, VIP sunset cabanas, award-winning fine dining, and boutique coastal living.',
    isPublished: true,
    tagline: 'Sophisticated beachside dining, legendary sunsets & boutique villas',
    description: 'Sophisticated coastal dining, stylish sunset beach pavilions at Petitenget, and secluded private villa sanctuaries.',
    highlights: [
      'Legendary golden-hour Indian Ocean sunsets along Petitenget Beach',
      'Exclusive private villa compounds with 24-hour butler and private plunge pools',
      'World-class farm-to-table and modern Indonesian fine dining restaurants'
    ],
    climateSafetyNotes: 'Breezy coastal climate. Mind red flags for ocean surf currents.',
    status: 'core',
    statusLabel: 'Approved Subdestination',
    heroBadge: 'Cosmopolitan Coast'
  },
  {
    id: 'dest-kuta',
    regionId: 'bali',
    name: 'Kuta',
    slug: 'kuta',
    shortDescription: 'Historic broad golden-sand surf crescent, gentle rolling breaks, vibrant coastal promenade, and radiant Indian Ocean sunsets.',
    longDescription: 'The birthplace of modern Bali travel, Kuta features a vast sweeping crescent of golden sand facing the Indian Ocean. Its gently sloping sandy bottom generates consistent, forgiving rolling waves that have made it legendary worldwide for private beginner and intermediate surf lessons. Stroll the palm-lined beachfront promenade or watch the sky transform into fiery amber at dusk.',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80'
    ],
    experiences: [
      'Private 1-on-1 surf coaching on gentle sandy-bottom rolling waves',
      'Sunset coconut walks along the broad golden-sand beach crescent',
      'Bespoke city transits to historic Kuta sea turtle conservation stations'
    ],
    practicalInformation: 'Located just 15 minutes north of DPS Airport. Broad beach provides easy walking access throughout the day.',
    seoTitle: 'Kuta Surf Coastline & Heritage Beach | THIRTEEN',
    seoDescription: 'Experience Kuta’s iconic golden beach with THIRTEEN: private surf coaching, sunset strolls, and seamless airport transit connections.',
    isPublished: true,
    tagline: 'Sweeping golden-sand surf crescent & vibrant Indian Ocean sunsets',
    description: 'Historic broad golden-sand surf crescent, gentle rolling breaks, vibrant coastal promenade, and radiant Indian Ocean sunsets.',
    highlights: [
      'World-renowned gently sloping beach break ideal for private surf coaching',
      'Expansive golden sand beachfront promenade with unobstructed ocean horizon',
      'Local sea turtle conservation center releasing baby hatchlings at dusk'
    ],
    climateSafetyNotes: 'Sunny coastal beach. Swim strictly within designated lifeguard flag zones.',
    status: 'core',
    statusLabel: 'Approved Subdestination',
    heroBadge: 'Classic Surf Coast'
  },
  {
    id: 'dest-canggu',
    regionId: 'bali',
    name: 'Canggu',
    slug: 'canggu',
    shortDescription: 'Vibrant coastal enclave celebrated for black-sand surf breaks, bohemian beach clubs, artisanal coffee culture, and sunset ocean vistas.',
    longDescription: 'Canggu blends authentic Balinese coastal village rhythm with contemporary lifestyle aesthetics. Situated along Bali’s southwest shoreline, it offers rolling surf breaks at Echo Beach and Batu Bolong, verdant pocket rice terraces, serene wellness sanctuaries, and vibrant sunset pavilions.',
    heroImage: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80'
    ],
    experiences: [
      'Echo Beach sunset relaxation & coastal walking',
      'Private surf coaching on gentle black-sand breaks',
      'Artisanal wellness & farm-to-table culinary masterclasses'
    ],
    practicalInformation: 'Best visited May through October for dry, sunny weather. Approximately 60–90 minutes by private chauffeur from Ngurah Rai International Airport (DPS).',
    seoTitle: 'Canggu Private Travel & Guided Expeditions | THIRTEEN',
    seoDescription: 'Explore Canggu with THIRTEEN: private coastal transfers, boutique villa retreats, surf coaching, and authentic Balinese culinary experiences.',
    isPublished: true,
    tagline: 'Black-sand surf breaks, coastal cafes & relaxed coastal retreats',
    description: 'Vibrant coastal enclave celebrated for black-sand surf breaks, bohemian beach clubs, artisanal coffee culture, and sunset ocean vistas.',
    highlights: [
      'Echo Beach sunset relaxation & coastal walking',
      'Private surf coaching on gentle black-sand breaks',
      'Artisanal wellness & farm-to-table culinary masterclasses'
    ],
    climateSafetyNotes: 'Warm tropical maritime climate (27°C–31°C). Ocean currents require attentiveness when swimming.',
    status: 'core',
    statusLabel: 'Approved Subdestination',
    heroBadge: 'Coastal & Surf'
  },
  {
    id: 'dest-batur',
    regionId: 'bali',
    name: 'Mount Batur & Kintamani',
    slug: 'batur',
    shortDescription: 'High-altitude volcanic caldera panoramic vistas, sacred Lake Batur, private 4x4 black-lava trails, and mountain Arabica plantations.',
    longDescription: 'Perched 1,500 meters above sea level on the rim of Mount Batur’s ancient caldera, Kintamani commands sweeping views of Mount Batur’s active black-lava flows and the crescent-shaped Lake Batur. The highland terroir produces Bali’s renowned single-origin Arabica coffee, nurtured by mineral-rich volcanic soil and cool mountain mist. Private 4x4 Land Cruiser trails ascend the rugged basalt flows for sunrise.',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80'
    ],
    experiences: [
      'Sunrise panoramic coffee tasting overlooking Batur crater and lake',
      'Private 4x4 black-lava geological trail expedition',
      'Traditional wooden canoe crossing to sacred lakeside villages',
      'Soaking in natural volcanic thermal hot springs overlooking Mount Abang'
    ],
    practicalInformation: 'Cool alpine weather (15°C–22°C). Light fleece or windbreaker recommended. 2 hours north from Denpasar or 1 hour from Ubud.',
    seoTitle: 'Mount Batur Volcanic Caldera & Highland Expeditions | THIRTEEN',
    seoDescription: 'Witness Mount Batur and Lake Batur in Kintamani. High-altitude coffee plantations, private 4x4 black-lava excursions, and traditional lakeside culture.',
    isPublished: true,
    tagline: 'Volcanic caldera vistas, sacred crater lakes & mountain coffee',
    description: 'High-altitude volcanic caldera panoramic vistas, sacred Lake Batur, and ancient Arabica coffee plantation highlands.',
    highlights: [
      'Sunrise panoramic coffee tasting overlooking Batur crater',
      'Private lakeside traditional wooden canoe crossing to ancient Trunyan',
      'Private 4x4 black-lava geological trail expedition'
    ],
    climateSafetyNotes: 'Cool mountain air (15°C–22°C). Warm layer recommended for early morning visits.',
    status: 'core',
    statusLabel: 'Approved Subdestination',
    heroBadge: 'Volcanic Highlands'
  },
  {
    id: 'dest-nusa-penida',
    regionId: 'bali',
    name: 'Nusa Penida',
    slug: 'nusa-penida',
    shortDescription: 'Wild limestone sea cliffs, prehistoric T-Rex rock formations at Kelingking, and pristine marine sanctuaries with resident manta rays.',
    longDescription: 'Separated from mainland Bali by the deep Badung Strait, Nusa Penida is an unspoiled island sanctuary defined by towering coastal cliffs, turquoise coves, and world-renowned marine biodiversity. From the dramatic T-Rex crest of Kelingking to the crystal bay waters of Broken Beach and Angel’s Billabong, private expeditions explore this rugged paradise by private speedboat and dedicated 4x4 vehicles.',
    heroImage: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=1200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80'
    ],
    experiences: [
      'Private yacht or speedboat crossing from Sanur harbour',
      'Kelingking T-Rex cliff viewpoint & Diamond Beach staircase',
      'Private chartered snorkeling with resident oceanic manta rays'
    ],
    practicalInformation: 'Speedboat crossing takes 40 minutes from Sanur. Island road terrain is winding and rugged; all THIRTEEN tours utilize dedicated private high-clearance vehicles.',
    seoTitle: 'Nusa Penida Island & Manta Ray Expeditions | THIRTEEN',
    seoDescription: 'Discover Nusa Penida with THIRTEEN: private speedboat charters, Kelingking cliff views, Diamond Beach, and private snorkeling with oceanic manta rays.',
    isPublished: true,
    tagline: 'Prehistoric coastal sea cliffs, turquoise lagoons & manta rays',
    description: 'Wild limestone sea cliffs, prehistoric T-Rex rock formations at Kelingking, and pristine marine sanctuaries with resident manta rays.',
    highlights: [
      'Private yacht or speedboat crossing from Sanur harbour',
      'Kelingking T-Rex cliff viewpoint & Diamond Beach staircase',
      'Private chartered snorkeling with resident oceanic manta rays'
    ],
    climateSafetyNotes: 'Sunny coastal weather. Sun protection, non-slip sandals, and hydration essential.',
    status: 'core',
    statusLabel: 'Approved Subdestination',
    heroBadge: 'Island Wilderness'
  }
];
