/* ------------------------------------------------------------------ */
/*  OPHRON Platform — Central Hospitality Infrastructure Data          */
/* ------------------------------------------------------------------ */

export const GKT_COMPANY = {
  name: "OPHRON Platform",
  subtitle: "Hospitality Operational Infrastructure Platform",
  fullName: "OPHRON Hospitality Operational Infrastructure Platform",
  tagline: "Singapore's NEA Licensed & bizSAFE Level 3 Hospitality & Facility Operations",
  hotline: "+65 9295 1155",
  hotlineSecondary: "+65 9646 6300",
  whatsapp: "+65 9295 1155",
  email: "admin@ophronsystems.com",
  emailOfficial: "admin@ophronsystems.com",
  address: "26 Sin Ming Lane, #05-124 Midview City, Singapore 573971",
  licensing: [
    "NEA Licensed Cleaning Operator (Singapore)",
    "bizSAFE Level 3 Certified (WSH Council)",
    "WSQ Workforce Operations Certified",
    "SFA & HACCP Kitchen Hygiene Standards"
  ]
};

export type ClientVenue = {
  name: string;
  sector: string;
  image?: string;
};

export const GKT_CLIENTS: ClientVenue[] = [
  { name: "ATLAS Bar", sector: "Hospitality & Iconic Bars", image: "/images/venue-atlas.jpg" },
  { name: "Pan Pacific", sector: "Hotels & Luxury Resorts", image: "/images/venue-panpacific.jpg" },
  { name: "YOTEL Singapore", sector: "Hotels & Hospitality", image: "/images/venue-yotel.jpg" },
  { name: "Bengawan Solo", sector: "Bakeries & Confectionery", image: "/images/venue-solo.jpg" },
  { name: "Un-Yang Kor-Dai", sector: "Michelin F&B", image: "/images/venue-uykd.jpg" },
  { name: "WILD HONEY", sector: "Premium F&B Chains" },
  { name: "Baker & Cook", sector: "Artisanal Bakeries", image: "/images/venue-bakercook.jpg" },
  { name: "Mazak Corporation", sector: "Industrial & Manufacturing" },
  { name: "La Nonna", sector: "Fine Dining F&B" },
  { name: "Spizza", sector: "Restaurant Chains" },
  { name: "Fool", sector: "Wine Bars & F&B", image: "/images/venue-fool.jpg" },
  { name: "晴月 HAZUKI", sector: "Japanese Fine Dining" },
  { name: "Kafe Utu", sector: "Specialty Cafes", image: "/images/venue-utucafe.jpg" },
  { name: "Lion Brewery", sector: "Craft Breweries & Taprooms", image: "/images/venue-lionbrewery.jpg" },
  { name: "Anatta", sector: "Culinary Concepts" },
  { name: "Brewhaus", sector: "F&B Establishments" },
  { name: "Hayop", sector: "Contemporary F&B" },
  { name: "PappaRich", sector: "F&B Franchise Groups" },
  { name: "GoNoodle", sector: "Dining Chains" },
  { name: "Hathaway", sector: "Fine Dining" },
  { name: "Bread Yard", sector: "Bakeries & Cafes" },
  { name: "Bācaro", sector: "Italian Hospitality" },
  { name: "Granary", sector: "Catering & Events" },
  { name: "Osho", sector: "Corporate Towers" }
];

export const GKT_SERVICES = [
  {
    id: "commercial-cleaning",
    title: "Commercial Cleaning",
    short: "Retail, lobbies & mixed-use premises",
    desc: "Daily janitorial programmes, hard-floor machine scrubbing, and front-of-house presentation for commercial premises across Singapore.",
    image: "/images/photo-36303748.jpg",
    bullets: [
      "Daily janitorial & front-of-house presentation",
      "Hard-floor machine scrubbing & carpet care",
      "Washroom servicing & consumables management",
      "Glass, partition & high-touch surface programmes"
    ]
  },
  {
    id: "disinfecting-services",
    title: "Disinfecting Services",
    short: "NEA-approved compounds & fogging",
    desc: "Electrostatic spraying, ULV fogging, and high-touch surface programmes using NEA-approved disinfectants — documented and certified.",
    image: "/images/photo-5499416.jpg",
    bullets: [
      "Electrostatic spraying & ULV cold fogging",
      "NEA-approved, hospital-grade compounds",
      "High-touch surface sanitization schedules",
      "24/7 Rapid outbreak-response deployment"
    ]
  },
  {
    id: "office-cleaning",
    title: "Office Cleaning",
    short: "Corporate workplaces & co-working",
    desc: "Scheduled office care from pantries to boardrooms — quiet, uniformed WSQ teams working around your business hours.",
    image: "/images/photo-6195115.jpg",
    bullets: [
      "Pre-arrival workspace resets",
      "Pantry, meeting-room & boardroom care",
      "Washroom servicing on scheduled rounds",
      "Carpet extraction & hard-floor maintenance"
    ]
  },
  {
    id: "industrial-cleaning",
    title: "Industrial Cleaning",
    short: "Warehouses, plants & cold rooms",
    desc: "High-pressure washing, degreasing, and facility-scale cleaning for warehouses, production floors, and cold-storage environments.",
    image: "/images/photo-4483773.jpg",
    bullets: [
      "High-pressure & hot-water washing",
      "Machine degreasing of production areas",
      "Warehouse, racking & cold-store hygiene",
      "Post-renovation & handover cleans"
    ]
  },
  {
    id: "restaurant-cleaning",
    title: "Restaurant & Kitchen Deep Clean",
    short: "F&B, hawker & central kitchens",
    desc: "SFA-ready kitchen deep cleaning, canopy exhaust degreasing, and stewarding support that keeps you on the right side of SFA inspections.",
    image: "/images/photo-8629127.jpg",
    bullets: [
      "Kitchen deep cleaning — grease & grime",
      "Exhaust hood & duct degreasing",
      "Stewarding & flexible manpower support",
      "Food-safe chemistry meeting FSSAI/SFA standards"
    ]
  },
  {
    id: "toilet-deep-cleaning",
    title: "Restroom & Toilet Deep Cleaning",
    short: "Restrooms & washroom restoration",
    desc: "Descaling, grout restoration, and odour elimination for washrooms — the room that shapes your establishment's reputation.",
    image: "/images/restroom.jpg",
    bullets: [
      "Mineral scale & uric deposit removal",
      "Grout restoration & tile recolour",
      "Odour source elimination at trap level",
      "Fixture polishing & seal inspection"
    ]
  }
];

export const GKT_ARTICLES = [
  {
    slug: "restaurant-cleaning-in-singapore-keeping-kitchens-safe-and-customers-happy",
    title: "Restaurant & Kitchen Deep Cleaning in Singapore: SFA Compliance Guide",
    category: "OPHRON Hygiene · Kitchens",
    date: "19 Mar 2026",
    readTime: "8 min read",
    author: "Marcus Chen (OPHRON Technical Operations)",
    image: "/images/photo-8629127.jpg",
    excerpt: "Between SFA grading, grease traps, and canopy fire safety, a Singapore kitchen's cleaning program is its license to operate. Here is how OPHRON ensures inspectable kitchens 24/7."
  },
  {
    slug: "why-singapore-businesses-should-invest-in-regular-disinfection-services",
    title: "Why Singapore Hospitality Businesses Need NEA-Certified Disinfection",
    category: "OPHRON Hygiene · Compliance",
    date: "07 Mar 2026",
    readTime: "6 min read",
    author: "Dr. Kelvin Tan (OPHRON Hygiene Desk)",
    image: "/images/photo-4099466.jpg",
    excerpt: "Reactive fogging is too late. Scheduled electrostatic suppression keeps pathogen loads baseline low so hotels and F&B venues never face unscheduled closures."
  },
  {
    slug: "eco-friendly-cleaning-solutions-for-sustainable-businesses",
    title: "Eco-Friendly Cleaning Solutions for Singapore Green Mark & ESG Compliance",
    category: "OPHRON Facilities · ESG",
    date: "21 Feb 2026",
    readTime: "7 min read",
    author: "Rachel Yeo (OPHRON Sustainability Desk)",
    image: "/images/photo-7513163.jpg",
    excerpt: "Green cleaning is auditable. How closed-loop microfibre, low-VOC chemistry, and automated dilution support Singapore Green Mark certifications."
  },
  {
    slug: "why-first-impressions-matter-how-professional-cleaning-shapes-your-brand-image",
    title: "Why First Impressions Matter: Physical Environment as Brand Equity",
    category: "Commercial Intelligence",
    date: "09 Feb 2026",
    readTime: "6 min read",
    author: "OPHRON Editorial Desk",
    image: "/images/photo-6466496.jpg",
    excerpt: "Your building is the one channel with 100% visitor reach. How documented, supervisor-signed cleaning preserves brand reputation across commercial properties."
  },
  {
    slug: "how-deep-cleaning-boosts-workplace-hygiene-and-employee-productivity",
    title: "How Deep Cleaning Boosts Workplace Hygiene & Employee Attendance",
    category: "OPHRON People · Office",
    date: "28 Jan 2026",
    readTime: "6 min read",
    author: "Lim Hui Ting (OPHRON Operations)",
    image: "/images/photo-7641347.jpg",
    excerpt: "Daily cleaning maintains appearance; quarterly deep cleaning resets high-touch contamination and air vent loading, reducing sick days by 30%."
  },
  {
    slug: "the-role-of-commercial-cleaning-in-shaping-customer-impressions",
    title: "The Role of Commercial Cleaning in Shaping Guest Impressions in Singapore",
    category: "OPHRON Operations",
    date: "12 Jan 2026",
    readTime: "7 min read",
    author: "OPHRON Operations Desk",
    image: "/images/photo-36303748.jpg",
    excerpt: "Visitors judge commercial premises within the first seven seconds. Why lobby shine, glass clarity, and washroom neutrals drive guest retention."
  }
];

