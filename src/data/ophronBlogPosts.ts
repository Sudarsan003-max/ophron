/* ------------------------------------------------------------------ */
/*  OPHRON Platform — Central Editorial & Research Article Data       */
/* ------------------------------------------------------------------ */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  author: string;
  body: BlogBlock[];
  takeaways: string[];
};

export const OPHRON_BLOG_POSTS: BlogPost[] = [
  {
    slug: "restaurant-cleaning-in-singapore-keeping-kitchens-safe-and-customers-happy",
    title: "Restaurant & Kitchen Deep Cleaning in Singapore: SFA Compliance Guide",
    category: "OPHRON Hygiene · Kitchens",
    date: "19 Mar 2026",
    readTime: "8 min read",
    author: "Marcus Chen (OPHRON Technical Operations)",
    image: "/images/photo-8629127.jpg",
    excerpt:
      "Between SFA inspection grades, grease trap maintenance, and canopy fire safety, a Singapore kitchen's cleaning program is its license to operate. Here is how OPHRON ensures inspectable kitchens 24/7.",
    body: [
      {
        type: "p",
        text: "In Singapore's food service sector, hygiene is not a background operation — it is the core condition of doing business. The Singapore Food Agency (SFA) grading system, regular municipal health inspections, and strict licensing conditions mean a single slip in kitchen hygiene can lead to demotions, demerit points, or suspension.",
      },
      { type: "h2", text: "The anatomy of an inspectable kitchen" },
      {
        type: "p",
        text: "Daily wipe-downs clear the pass, but they do not clear the grease layer building inside exhaust ducts, under fryers, and along drainage coving. True inspection readiness requires a two-tier cleaning system: daily operational close-downs by trained stewards, paired with scheduled deep cleaning by specialized crews using industrial degreasers and food-safe chemistry.",
      },
      {
        type: "quote",
        text: "A kitchen that passes inspection at any hour is a kitchen that treats hygiene as an operational platform — scheduled like prep and logged like inventory.",
      },
      { type: "h2", text: "Critical hygiene zones requiring deep cleaning" },
      {
        type: "p",
        text: "High-risk zones in a commercial kitchen accumulate deposits that standard night-shift teams cannot safely address:",
      },
      {
        type: "list",
        items: [
          "Exhaust Hoods & Ducting: Heavy grease loading poses a fire hazard and compromises airflow.",
          "Cooking Line Equipment: Grills, stoves, fryers, and ovens require non-toxic chemical degreasing to prevent carbonised buildup.",
          "Under-Equipment & Floor Coving: Food particles collect under heavy appliances, creating pest attraction points.",
          "Grease Traps & Drainage: Organic sludge buildup causes persistent odours and backup risks if not cleared on a verified log.",
        ],
      },
      { type: "h2", text: "Aligning with SFA, HACCP, and FSSAI standards" },
      {
        type: "p",
        text: "OPHRON's kitchen hygiene protocols are built around the SFA regulatory framework and international HACCP critical control points. Every deep clean closes with a signed checklist, photographic documentation, and chemical batch records filed to your compliance folder for immediate inspector presentation.",
      },
    ],
    takeaways: [
      "SFA compliance demands both daily stewarding and scheduled deep cleaning.",
      "Canopy exhaust and duct degreasing are essential for fire prevention and ventilation.",
      "Documentation — dated logs and checklists — turns cleanliness into provable evidence during audits.",
    ],
  },
  {
    slug: "why-singapore-businesses-should-invest-in-regular-disinfection-services",
    title: "Why Singapore Hospitality Businesses Need NEA-Certified Disinfection",
    category: "OPHRON Hygiene · Compliance",
    date: "07 Mar 2026",
    readTime: "6 min read",
    author: "Dr. Kelvin Tan (OPHRON Hygiene Desk)",
    image: "/images/photo-4099466.jpg",
    excerpt:
      "Reactive fogging is too late. Scheduled electrostatic suppression keeps pathogen loads baseline low so hotels and F&B venues never face unscheduled closures.",
    body: [
      {
        type: "p",
        text: "In high-traffic commercial environments across Singapore — from hotel lobbies and convention halls to crowded dining spaces — airborne and surface pathogens circulate rapidly. Relying on ad-hoc cleaning after an outbreak occurs puts guest trust and business continuity at risk.",
      },
      { type: "h2", text: "Electrostatic technology vs traditional wipe-down" },
      {
        type: "p",
        text: "Standard manual cleaning touches only accessible flat surfaces, missing underside edges and intricate fixtures. OPHRON deploys electrostatic spraying and ULV cold fogging, imparting a positive charge to NEA-approved hospital-grade disinfectants so micro-droplets wrap 360 degrees around all objects and surfaces.",
      },
      {
        type: "quote",
        text: "Proactive baseline suppression costs a fraction of an unscheduled facility shutdown or public health warning.",
      },
      { type: "h2", text: "Compliance and auditing peace of mind" },
      {
        type: "p",
        text: "Every disinfection cycle carried out by OPHRON technicians comes with full certification: chemical dilution validation, dwell-time confirmation, and worker safety sign-off. This audit trail reassures corporate clients, health inspectors, and building management.",
      },
    ],
    takeaways: [
      "Scheduled electrostatic disinfection suppresses microbial baselines continuously.",
      "NEA-approved hospital-grade compounds protect against viral and bacterial threats.",
      "Detailed coverage logs answer all tenancy and public health compliance reviews.",
    ],
  },
  {
    slug: "eco-friendly-cleaning-solutions-for-sustainable-businesses",
    title: "Eco-Friendly Cleaning Solutions for Singapore Green Mark & ESG Compliance",
    category: "OPHRON Facilities · ESG",
    date: "21 Feb 2026",
    readTime: "7 min read",
    author: "Rachel Yeo (OPHRON Sustainability Desk)",
    image: "/images/photo-4098000.jpg",
    excerpt:
      "Green cleaning is auditable. How closed-loop microfibre, low-VOC chemistry, and automated dilution support Singapore Green Mark certifications.",
    body: [
      {
        type: "p",
        text: "Sustainability is no longer optional for commercial real estate and hotel operators in Singapore. With the Building and Construction Authority (BCA) Green Mark certification requiring strict environmental performance, facility cleaning must align with ESG goals.",
      },
      { type: "h2", text: "Low-VOC chemistry & indoor air quality" },
      {
        type: "p",
        text: "Harsh chemical cleaners off-gas volatile organic compounds (VOCs), degrading Indoor Air Quality (IAQ) and triggering respiratory discomfort among building occupants. OPHRON utilizes biodegradable, low-VOC, eco-labelled chemicals that achieve sterile sanitization without compromising indoor air excellence.",
      },
      { type: "h2", text: "Water preservation & microfibre technology" },
      {
        type: "p",
        text: "By pairing color-coded microfibre systems with automated chemical-dilution dispensers, OPHRON reduces chemical waste and water consumption while preventing cross-contamination between restrooms, offices, and food preparation areas.",
      },
    ],
    takeaways: [
      "Eco-friendly cleaning directly supports BCA Green Mark and corporate ESG scoring.",
      "Low-VOC chemistry improves Indoor Air Quality (IAQ) for office tenants and hotel guests.",
      "Closed-loop microfibre rotas prevent cross-contamination across facility zones.",
    ],
  },
  {
    slug: "why-first-impressions-matter-how-professional-cleaning-shapes-your-brand-image",
    title: "Why First Impressions Matter: Physical Environment as Brand Equity",
    category: "Commercial Intelligence",
    date: "09 Feb 2026",
    readTime: "6 min read",
    author: "OPHRON Editorial Desk",
    image: "/images/photo-6466219.jpg",
    excerpt:
      "Your building is the one channel with 100% visitor reach. How documented, supervisor-signed cleaning preserves brand reputation across commercial properties.",
    body: [
      {
        type: "p",
        text: "Long before a visitor speaks to your reception team or evaluates your services, they hold a physical conversation with your environment. The clarity of the entrance glass, the sheen of the lobby stone, and the scent neutral in the washroom immediately convey your operational standards.",
      },
      { type: "h2", text: "Cleanliness as a proxy for operational competence" },
      {
        type: "p",
        text: "Visitors extrapolate physical presentation to core business competence. A well-maintained facility communicates rigor and care; stained carpets or neglected washrooms create subconscious doubt that transfers to your core product.",
      },
      {
        type: "quote",
        text: "Your building makes a promise before your team does. Cleanliness is what keeps that promise.",
      },
    ],
    takeaways: [
      "Physical environment is the only brand channel with 100% visitor exposure.",
      "Washroom presentation strongly influences guest retention and online reviews.",
      "Supervisor-signed daily logs ensure consistent brand standards across all properties.",
    ],
  },
  {
    slug: "how-deep-cleaning-boosts-workplace-hygiene-and-employee-productivity",
    title: "How Deep Cleaning Boosts Workplace Hygiene & Employee Attendance",
    category: "OPHRON People · Office",
    date: "28 Jan 2026",
    readTime: "6 min read",
    author: "Lim Hui Ting (OPHRON Operations)",
    image: "/images/photo-7641347.jpg",
    excerpt:
      "Daily cleaning maintains appearance; quarterly deep cleaning resets high-touch contamination and air vent loading, reducing sick days by 30%.",
    body: [
      {
        type: "p",
        text: "Daily janitorial rounds keep offices tidy, but deep cleaning targets hidden microbial reservoirs — keyboards, desk undersides, HVAC grilles, and pantry appliance seals — that daily wipes miss.",
      },
      { type: "h2", text: "Reducing absenteeism & afternoon fatigue" },
      {
        type: "p",
        text: "Dust accumulation and allergen loading in carpets and upholstery contribute to eye irritation and fatigue. Periodic deep carpet extraction and air vent descaling significantly improve workplace health metrics.",
      },
    ],
    takeaways: [
      "Deep cleaning addresses high-touch microbial reservoirs that daily cleaning misses.",
      "Improved indoor air hygiene directly reduces sick leave and workplace fatigue.",
      "Quarterly deep resets protect facility assets from premature wear.",
    ],
  },
  {
    slug: "the-role-of-commercial-cleaning-in-shaping-customer-impressions",
    title: "The Role of Commercial Cleaning in Shaping Guest Impressions in Singapore",
    category: "OPHRON Operations",
    date: "12 Jan 2026",
    readTime: "7 min read",
    author: "OPHRON Operations Desk",
    image: "/images/photo-36303748.jpg",
    excerpt:
      "Visitors judge commercial premises within the first seven seconds. Why lobby shine, glass clarity, and washroom neutrals drive guest retention.",
    body: [
      {
        type: "p",
        text: "Commercial properties in Singapore win tenant trust through disciplined daily upkeep. Scheduled floor scrubbing, glass detailing, and washroom restocks ensure every visitor experience reflects excellence.",
      },
    ],
    takeaways: [
      "First impressions in commercial lobbies are formed within seven seconds.",
      "Washroom hygiene is a major driver of tenant and guest retention.",
      "Documented janitorial rotas keep commercial properties audit-ready.",
    ],
  },
];
