/* ------------------------------------------------------------------ */
/*  GKT International — central site data                              */
/* ------------------------------------------------------------------ */

export const CONTACT = {
  hotlineRaw: "92951155",
  hotlineDisplay: "+65 9295 1155",
  hotlineSecondary: "+65 9646 6300",
  whatsappDisplay: "+65 9295 1155",
  whatsappSecondary: "+65 9646 6300",
  telHref: "tel:+6592951155",
  telSecondaryHref: "tel:+6596466300",
  waHref: "https://wa.me/6592951155",
  waSecondaryHref: "https://wa.me/6596466300",
  email: "kelvin@gkt-intel.com.sg",
  emailSecondary: "admin@gkt-intel.com.sg",
  address: "26 Sin Ming Lane, #05 124 Midview city, Singapore 573971",
  schedule: {
    operatingDays: "Monday – Sunday",
    hours: "10:00 AM – 10:00 PM (Flexible hours available)",
    breakTime: "3:00 PM – 5:00 PM",
  },
  hours: [
    { day: "Operating Days", time: "Monday – Sunday" },
    { day: "Operating Hours", time: "10:00 AM – 10:00 PM" },
    { day: "Schedule Flexibility", time: "Flexible hours available" },
    { day: "Break Time", time: "3:00 PM – 5:00 PM" },
  ],
};

export type Service = {
  slug: string;
  route: string;
  index: string;
  name: string;
  short: string;
  desc: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "commercial-cleaning",
    route: "/services/commercial-cleaning",
    index: "01",
    name: "Commercial Cleaning",
    short: "Retail, lobbies & mixed-use premises",
    desc: "Daily janitorial programmes, floor care and front-of-house presentation for commercial premises that are judged the moment a customer walks in.",
    image: "/images/photo-36303748.jpg",
  },
  {
    slug: "disinfecting-services",
    route: "/services/disinfecting-services",
    index: "02",
    name: "Disinfecting Services",
    short: "NEA-approved compounds & fogging",
    desc: "Electrostatic spraying, ULV fogging and high-touch surface programmes using NEA-approved disinfectants — documented, logged and certified.",
    image: "/images/photo-5499416.jpg",
  },
  {
    slug: "office-cleaning",
    route: "/services/office-cleaning",
    index: "03",
    name: "Office Cleaning",
    short: "Corporate workplaces & co-working",
    desc: "Scheduled office care from pantries to boardrooms — quiet, uniformed teams who work around your business hours, not the other way round.",
    image: "/images/photo-6195115.jpg",
  },
  {
    slug: "industrial-cleaning",
    route: "/services/industrial-cleaning",
    index: "04",
    name: "Industrial Cleaning",
    short: "Warehouses, plants & cold rooms",
    desc: "High-pressure washing, degreasing and facility-scale cleaning for warehouses, production floors and cold-storage environments.",
    image: "/images/photo-4483773.jpg",
  },
  {
    slug: "restaurant-cleaning",
    route: "/services/restaurant-cleaning",
    index: "05",
    name: "Restaurant & Kitchen Cleaning",
    short: "F&B, hawker & central kitchens",
    desc: "Kitchen deep cleaning, degreasing and exhaust hygiene that keeps you on the right side of SFA inspections — and your pass mark in the green.",
    image: "/images/photo-8629127.jpg",
  },
  {
    slug: "toilet-deep-cleaning",
    route: "/services/toilet-deep-cleaning",
    index: "06",
    name: "Toilet Deep Cleaning",
    short: "Restrooms & washroom restoration",
    desc: "Descaling, grout restoration and odour elimination for washrooms — the small room that leaves the loudest impression.",
    image: "/images/restroom.jpg",
  },
];

export type Client = { name: string; style: string; sector: string };

export const CLIENTS: Client[] = [
  { name: "ATLAS", style: "font-display font-bold tracking-[0.3em] text-2xl", sector: "Hospitality & Bars" },
  { name: "Pan Pacific", style: "font-display font-bold text-2xl", sector: "Hotels & Hospitality" },
  { name: "YOTEL", style: "font-mono font-semibold tracking-[0.3em] text-xl", sector: "Hotels & Hospitality" },
  { name: "Bengawan Solo", style: "font-display font-bold text-xl", sector: "Bakeries & Cafes" },
  { name: "Un-Yang Kor-Dai", style: "font-display italic font-semibold text-xl", sector: "F&B" },
  { name: "WILD HONEY", style: "font-display font-bold tracking-wider text-xl", sector: "F&B" },
  { name: "baker & cook", style: "font-display italic text-2xl", sector: "Bakeries" },
  { name: "Mazak", style: "font-body font-black tracking-tight text-2xl", sector: "Industrial" },
  { name: "la nonna", style: "font-display italic text-2xl", sector: "F&B" },
  { name: "spizza", style: "font-body font-bold text-2xl italic", sector: "F&B" },
  { name: "Fool", style: "font-body font-black text-2xl", sector: "F&B" },
  { name: "晴月 HAZUKI", style: "font-display font-medium text-xl", sector: "Fine Dining" },
  { name: "ANATTA", style: "font-body font-bold tracking-[0.25em] text-lg", sector: "Culinary" },
  { name: "BREWHAUS", style: "font-mono font-bold tracking-[0.2em] text-lg", sector: "F&B" },
  { name: "hayop", style: "font-display italic text-2xl", sector: "F&B" },
  { name: "PappaRich", style: "font-display font-bold text-xl", sector: "F&B" },
  { name: "GoNoodle", style: "font-body font-bold text-xl", sector: "F&B" },
  { name: "Hathaway", style: "font-display italic text-xl", sector: "F&B" },
  { name: "bread yard", style: "font-body font-bold text-lg", sector: "Bakeries" },
  { name: "BĀCARO", style: "font-body font-black tracking-widest text-lg", sector: "F&B" },
  { name: "LION BREWERY", style: "font-body font-bold tracking-wider text-lg", sector: "F&B" },
  { name: "GRANARY", style: "font-display font-extrabold text-xl", sector: "Catering" },
  { name: "OSHO", style: "font-body font-black tracking-widest text-xl", sector: "Corporate" },
  { name: "KAFE UTU", style: "font-body font-black tracking-widest text-lg", sector: "Cafes" },
];

export const STATS = [
  { value: 20, suffix: "+", label: "Years of expertise" },
  { value: 140, suffix: "+", label: "Active contracts" },
  { value: 85, suffix: "", label: "Trained specialists" },
  { value: 24, suffix: "/7", label: "Hotline response" },
];

export const PILLARS = [
  {
    index: "I",
    title: "20+ Years of Expertise",
    text: "Two decades of delivering spotless outcomes across Singapore's kitchens, healthcare facilities, hotels and corporate towers — a track record measured in renewals, not promises.",
  },
  {
    index: "II",
    title: "NEA Licensed Operator",
    text: "Fully licensed by the National Environment Agency. Every compound we deploy and every protocol we run complies with Singapore's environmental public health regulations.",
  },
  {
    index: "III",
    title: "bizSAFE Level 3",
    text: "Workplace Safety & Health Council certified. Our risk-management framework is audited, documented and drilled into every team before they step onto your site.",
  },
  {
    index: "IV",
    title: "Certified Workforce",
    text: "WSQ-trained, security-screened, uniformed and supervisor-led crews. Chemical handling, height safety and infection control are certified — not assumed.",
  },
];

export const OPERATIONS_POINTS = [
  {
    title: "Supervised, documented shifts",
    text: "Every deployment runs to a written checklist and closes with a supervisor sign-off you can audit.",
  },
  {
    title: "Fixed teams, familiar faces",
    text: "The same trained crew returns to your site — they learn your premises, your standards, your rhythm.",
  },
  {
    title: "NEA-approved chemistry",
    text: "Hospital-grade, food-safe where required, and logged by batch so you always know what touched your surfaces.",
  },
  {
    title: "Rapid-response hotline",
    text: "One number — +65 9295 1155 — for ad-hoc deep cleans, outbreak disinfection and urgent call-outs.",
  },
];

export const WORKFORCE_STANDARDS = [
  "WSQ cleaning operations certification pathway",
  "bizSAFE-compliant tool-box meetings before every shift",
  "Colour-coded microfibre system to prevent cross-contamination",
  "Uniformed, badged and security-screened personnel",
  "Dedicated site supervisor with direct client line",
  "Monthly quality audits scored against your SLA",
];

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services", children: SERVICES.map((s) => ({ label: s.name, to: s.route })) },
  { label: "Why Us", to: "/why-us" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const COMPANY_LINKS = [
  { label: "About GKT International", to: "/about" },
  { label: "Why Choose Us", to: "/why-us" },
  { label: "Photo & Work Gallery", to: "/gallery" },
  { label: "Blog & Insights", to: "/blog" },
  { label: "Get a Quote", to: "/contact" },
];
