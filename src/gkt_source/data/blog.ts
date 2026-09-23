import { pexels } from "./gallery";

/* ------------------------------------------------------------------ */
/*  GKT International — editorial library                              */
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

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "the-role-of-commercial-cleaning-in-shaping-customer-impressions",
    title: "The Role of Commercial Cleaning in Shaping Customer Impressions",
    category: "Commercial Cleaning",
    date: "12 Jan 2026",
    readTime: "7 min read",
    author: "GKT Editorial Desk",
    image: pexels(36303748, 1200, 800),
    excerpt:
      "Customers form a verdict about your business within seconds of walking in — and most of that verdict is written by your floors, glass and washrooms.",
    body: [
      {
        type: "p",
        text: "Long before a customer speaks to your staff or samples your product, they have already held a silent conversation with your premises. The smudge on the entrance glass, the tide mark in the washroom mirror, the dull film over a retail floor — each of these details is read as a statement about how seriously you take your own business. Commercial cleaning is therefore not a utility expense; it is a form of non-verbal branding that runs every hour your doors are open.",
      },
      { type: "h2", text: "The first seven seconds" },
      {
        type: "p",
        text: "Retail and hospitality researchers consistently find that visitors form durable impressions within the first few seconds of entry, and that scent, shine and order dominate those impressions. A lobby that smells neutral and reads bright tells the customer that operations are under control. A neglected corridor tells them the opposite — and that doubt quietly transfers to everything else you sell.",
      },
      {
        type: "quote",
        text: "Your premises make a promise before your people do. Cleaning is what keeps that promise.",
      },
      { type: "h2", text: "Cleanliness is a proxy for competence" },
      {
        type: "p",
        text: "Customers rarely inspect your accounts or your SOPs; they inspect your surfaces. In food and beverage, a spotless pass and gleaming washroom are taken as evidence of kitchen discipline. In professional services, an immaculate meeting floor signals operational rigour. The inference is unfair but universal: if the visible is cared for, the invisible must be too.",
      },
      { type: "h2", text: "Repeat visits are won in the washroom" },
      {
        type: "p",
        text: "Of all the spaces in a commercial property, the washroom carries the heaviest reputational load. It is the one room every guest visits and remembers. Descaling, odour control, consumables restocked on schedule — these are not janitorial details, they are retention mechanics. A consistently presented washroom converts a first-time visitor into a returning one more reliably than almost any marketing spend of equivalent size.",
      },
      {
        type: "list",
        items: [
          "Audit the arrival path: entrance glass, reception counter, floor shine.",
          "Treat the washroom as your most-viewed brand asset.",
          "Schedule cleaning to your footfall peaks, not to convenience.",
          "Log every shift so standards are provable, not anecdotal.",
        ],
      },
      {
        type: "p",
        text: "The businesses that win on impression management treat cleaning as a scheduled discipline with named owners and written checklists — not as something that happens after closing. That discipline is precisely what a professional partner installs: fixed teams, documented shifts and a supervisor who answers for the result.",
      },
    ],
    takeaways: [
      "Customers judge your business through its surfaces within seconds of arrival.",
      "Cleanliness is read as a proxy for operational competence.",
      "The washroom is the highest-stakes room in any commercial property.",
      "Impression management requires scheduled, documented cleaning — not ad-hoc effort.",
    ],
  },
  {
    slug: "how-deep-cleaning-boosts-workplace-hygiene-and-employee-productivity",
    title: "How Deep Cleaning Boosts Workplace Hygiene and Employee Productivity",
    category: "Office Cleaning",
    date: "28 Jan 2026",
    readTime: "6 min read",
    author: "Lim Hui Ting",
    image: pexels(7641347, 1200, 800),
    excerpt:
      "A deep clean does more than restore shine — it removes the microbial load and visual clutter that quietly drain focus, attendance and morale.",
    body: [
      {
        type: "p",
        text: "Daily cleaning keeps a workplace presentable; deep cleaning keeps it healthy. The difference matters because the threats to productivity are rarely visible. Bacteria on shared keyboards, dust loading in air vents, biofilm in pantry sinks — these accumulate precisely where daily routines cannot reach, and they tax your team in ways no one attributes to the building.",
      },
      { type: "h2", text: "The hidden cost of a tired environment" },
      {
        type: "p",
        text: "Studies of office environments link elevated dust, poor air quality and contaminated high-touch surfaces to increased sick leave, allergy symptoms and afternoon fatigue. In Singapore's climate, where humidity accelerates microbial growth, the accumulation curve is steeper than in temperate markets. A quarterly deep clean resets that curve rather than merely flattening it.",
      },
      { type: "h2", text: "What a proper deep clean reaches" },
      {
        type: "list",
        items: [
          "High-touch surfaces — switches, handles, lift buttons, shared devices.",
          "Air-side hygiene — vent grilles, diffusers and accessible duct faces.",
          "Pantry and fridge interiors, including seal gaskets and drip trays.",
          "Carpet extraction and hard-floor strip, scrub and re-seal.",
          "Washroom descaling and grout restoration.",
        ],
      },
      { type: "h2", text: "Focus is an environmental input" },
      {
        type: "quote",
        text: "People do their best thinking in rooms that look like someone cares about them.",
      },
      {
        type: "p",
        text: "There is also a psychological channel. Visual order reduces low-level cognitive load; a bright, neutral-smelling workspace lowers the friction of returning to the desk. Teams consistently report sharper Monday mornings after a weekend deep clean — not because the work changed, but because the setting stopped asking for attention.",
      },
      {
        type: "p",
        text: "The practical cadence for most Singapore offices is a structured daily rota layered with a quarterly deep clean and an annual full reset. Planned that way, deep cleaning becomes a predictable line item with a measurable return in attendance and focus — not a reaction to a problem that has already arrived.",
      },
    ],
    takeaways: [
      "Daily cleaning maintains appearance; deep cleaning removes the microbial load underneath.",
      "Humidity makes Singapore workplaces accumulate contamination faster.",
      "High-touch surfaces, vents, pantries and grout need periodic professional reset.",
      "Visual order measurably reduces cognitive load and supports focus.",
    ],
  },
  {
    slug: "why-first-impressions-matter-how-professional-cleaning-shapes-your-brand-image",
    title: "Why First Impressions Matter: How Professional Cleaning Shapes Your Brand Image",
    category: "Brand & Facilities",
    date: "09 Feb 2026",
    readTime: "6 min read",
    author: "GKT Editorial Desk",
    image: pexels(6466496, 1200, 800),
    excerpt:
      "You spend months engineering a brand — and a visitor tests it against your floor in under a minute. Here is how professional cleaning closes that gap.",
    body: [
      {
        type: "p",
        text: "Brand teams agonise over logos, tone of voice and packaging, yet the physical environment — the one channel with one hundred percent reach among visitors — is often left to whoever closes up at night. The disconnect is expensive. A brand that promises precision while presenting a tired reception is making two contradictory statements, and visitors believe the floor.",
      },
      { type: "h2", text: "The premises are the final brand touchpoint" },
      {
        type: "p",
        text: "Every touchpoint before arrival — website, brochure, review — is a claim. The premises are the verification. Hospitality groups understood this earliest: the scent of a lobby, the mirror finish of a lift car, the crease of a bed runner are all engineered to a standard. The same discipline translates directly to offices, clinics, showrooms and restaurants.",
      },
      {
        type: "quote",
        text: "A brand is a promise; a building is the proof. Cleaning keeps the proof legible.",
      },
      { type: "h2", text: "Consistency beats intensity" },
      {
        type: "p",
        text: "One spectacular spring clean a year impresses no one who visits in October. Brand-grade environments are built on rhythm: the same trained team, the same checklist, the same supervisor sign-off, week after week. Consistency is what converts cleaning from maintenance into identity — the point at which visitors begin to associate your name with a feeling of order.",
      },
      {
        type: "list",
        items: [
          "Define the three surfaces guests touch first, and standardise them.",
          "Align cleaning schedules with arrival and peak-traffic windows.",
          "Give the cleaning programme a named owner and a written SLA.",
          "Photograph and log standards so 'spotless' has a definition.",
        ],
      },
      {
        type: "p",
        text: "When cleaning is engineered like a brand channel — with standards, owners and measurement — it becomes one of the cheapest reputation assets a company owns. It compounds daily, it never goes out of date, and competitors cannot copy it with an advertising budget.",
      },
    ],
    takeaways: [
      "The premises are the only brand channel with 100% visitor reach.",
      "Visitors verify brand claims against the physical environment.",
      "Weekly consistency outperforms occasional intensity.",
      "A documented cleaning standard turns hygiene into brand equity.",
    ],
  },
  {
    slug: "eco-friendly-cleaning-solutions-for-sustainable-businesses",
    title: "Eco-Friendly Cleaning Solutions for Sustainable Businesses",
    category: "Sustainability",
    date: "21 Feb 2026",
    readTime: "7 min read",
    author: "Rachel Yeo",
    image: pexels(7513163, 1200, 800),
    excerpt:
      "Green cleaning is no longer a marketing line — Singapore's buildings are measured on it. Here is what a genuinely sustainable cleaning programme looks like.",
    body: [
      {
        type: "p",
        text: "Sustainability reporting has moved from aspiration to obligation. Green Mark certifications, ESG disclosures and landlord covenants now routinely ask how a building is cleaned — what chemicals enter it, what waste leaves it, and whether the programme can be evidenced. A cleaning partner who cannot produce that evidence becomes a liability in your next audit.",
      },
      { type: "h2", text: "Chemistry first: what 'green' actually means" },
      {
        type: "p",
        text: "Credible eco-friendly cleaning starts with certified chemistry — products carrying recognised eco-labels, with biodegradable surfactants and no chlorine, phosphates or volatile solvents in the everyday programme. It continues with dosing: automated dilution systems eliminate the guesswork that sends excess chemical down the drain and excess cost onto the invoice.",
      },
      {
        type: "list",
        items: [
          "Eco-labelled concentrates with automated dilution control.",
          "Colour-coded microfibre, laundered and reused on closed loops.",
          "HEPA-filtered vacuums that trap rather than redistribute dust.",
          "Measured water budgets per square metre of floor.",
          "Segregated waste streams with disposal documentation.",
        ],
      },
      { type: "h2", text: "The business case beyond compliance" },
      {
        type: "quote",
        text: "A sustainable cleaning programme is simply a precise one — nothing wasted, nothing left behind.",
      },
      {
        type: "p",
        text: "Precision is where sustainability and performance meet. Concentrates reduce storage and transport; microfibre out-cleans cotton at lower chemical load; scheduled dosing removes the variance that causes rework. Tenants notice too — indoor air quality is now a surveyed dimension of employee satisfaction, and low-VOC cleaning is a direct lever on it.",
      },
      {
        type: "p",
        text: "The transition does not require a leap. A sensible sequence is to green the daily programme first, substitute specialist chemicals where certified equivalents exist, and build the paper trail — SDS sheets, dilution logs, waste manifests — from day one. Six months later, your cleaning programme is an asset in the ESG file rather than a question mark.",
      },
    ],
    takeaways: [
      "Green cleaning is now auditable — evidence matters more than claims.",
      "Certified concentrates plus automated dosing cut chemical and cost waste.",
      "Microfibre and HEPA systems improve outcomes while lowering load.",
      "A documented green programme strengthens ESG and Green Mark submissions.",
    ],
  },
  {
    slug: "why-singapore-businesses-should-invest-in-regular-disinfection-services",
    title: "Why Singapore Businesses Should Invest in Regular Disinfection Services",
    category: "Disinfecting",
    date: "07 Mar 2026",
    readTime: "6 min read",
    author: "Dr. Kelvin Tan",
    image: pexels(4099466, 1200, 800),
    excerpt:
      "Outbreaks do not check the calendar. Scheduled disinfection — not reactive fogging — is how resilient Singapore businesses keep their doors open.",
    body: [
      {
        type: "p",
        text: "The last few years taught Singapore's businesses an expensive lesson: closure is the most expensive line item in any P&L. Yet many premises still treat disinfection as an emergency measure — summoned after a case is confirmed, when exposure has already occurred and staff confidence has already dropped. The mature approach inverts the sequence.",
      },
      { type: "h2", text: "Scheduled defence beats reactive fogging" },
      {
        type: "p",
        text: "Regular disinfection keeps the microbial baseline of a premises permanently suppressed, so that an introduced pathogen meets an environment that resists it. Reactive fogging does the opposite: it responds after transmission windows have opened. The difference is the difference between a firewall and a fire brigade — both are necessary, but only one prevents the loss.",
      },
      { type: "h2", text: "What a professional programme covers" },
      {
        type: "list",
        items: [
          "High-touch surface cycles: lifts, rails, switches, counters, devices.",
          "Electrostatic or ULV application with NEA-approved compounds.",
          "Washroom and pantry intensification at set intervals.",
          "Documented dwell times and compound batch records.",
          "Rapid outbreak-response deployment within hours, not days.",
        ],
      },
      { type: "h2", text: "Confidence is an operating metric" },
      {
        type: "quote",
        text: "Disinfection protects two things at once: your people's health and your operating calendar.",
      },
      {
        type: "p",
        text: "The second benefit of scheduled disinfection is rarely priced and constantly felt: confidence. Staff who see logged, visible hygiene protocols take fewer precautionary sick days, and customers in visibly managed spaces linger longer. In hospitality and F&B, that confidence is directly legible in dwell time and table turns.",
      },
      {
        type: "p",
        text: "For most commercial premises, the right architecture is a monthly scheduled cycle layered on daily cleaning, plus a pre-negotiated outbreak-response clause. Priced annually, it costs a fraction of a single day of disruption — and unlike disruption, it arrives on a schedule you control.",
      },
    ],
    takeaways: [
      "Reactive disinfection responds after exposure; scheduled disinfection prevents it.",
      "High-touch surfaces are the highest-value targets in any programme.",
      "NEA-approved compounds and logged dwell times are non-negotiable.",
      "A pre-negotiated outbreak clause converts panic into procedure.",
    ],
  },
  {
    slug: "restaurant-cleaning-in-singapore-keeping-kitchens-safe-and-customers-happy",
    title: "Restaurant Cleaning in Singapore: Keeping Kitchens Safe and Customers Happy",
    category: "Restaurant & Kitchen",
    date: "19 Mar 2026",
    readTime: "8 min read",
    author: "Marcus Chen",
    image: pexels(8629127, 1200, 800),
    excerpt:
      "Between SFA grading, grease traps and the merciless court of public opinion, a Singapore kitchen's cleaning programme is its most important recipe.",
    body: [
      {
        type: "p",
        text: "In Singapore, a restaurant's hygiene record is public property. SFA inspection grades hang on the wall, enforcement notices make the news, and a single photograph of a neglected kitchen can end a brand faster than any bad review cycle. Cleaning in F&B is therefore not housekeeping — it is licence protection, performed nightly under time pressure.",
      },
      { type: "h2", text: "The anatomy of a compliant kitchen clean" },
      {
        type: "p",
        text: "A compliant nightly close covers the sequence inspectors actually trace: food-contact surfaces sanitised with approved compounds, equipment pulled from walls for behind-unit cleaning, floors degreased and drained, grease traps cleared and logged, and waste rooms sealed and deodorised. Miss one link and the chain fails — most enforcement actions cite exactly these basics.",
      },
      {
        type: "list",
        items: [
          "Sanitise all food-contact surfaces with SFA-recognised compounds.",
          "Pull and clean behind and under heavy equipment on a set rota.",
          "Degrease floors, coving and drainage before they accumulate.",
          "Clear and log grease traps on schedule — not when they block.",
          "Run a documented pest-prevention watch alongside cleaning.",
        ],
      },
      { type: "h2", text: "Deep cleaning is where the grade is won" },
      {
        type: "quote",
        text: "Daily cleaning keeps a kitchen running; deep cleaning keeps a kitchen licensed.",
      },
      {
        type: "p",
        text: "Carbon build-up on ranges, polymerised grease in canopy filters, biofilm inside walk-in seals — these defeat daily routines by design. A scheduled kitchen deep clean with degreasing chemistry, steam and mechanical agitation resets the kitchen to inspectable condition, and it protects assets too: equipment stripped of carbon runs cooler, burns less energy and lives longer.",
      },
      { type: "h2", text: "Customers taste the clean" },
      {
        type: "p",
        text: "None of this stays backstage. Diners in open kitchens watch the pass; every guest visits the washroom; smells travel. The restaurants that hold an A-grade year after year treat cleaning as part of the product, scheduled like prep and staffed like service. That is the standard GKT builds with its F&B clients — a kitchen that passes inspection at any hour, because it is never waiting for one.",
      },
    ],
    takeaways: [
      "SFA grades and enforcement make kitchen hygiene a licence-level risk.",
      "The nightly close must follow the sequence inspectors trace.",
      "Scheduled deep cleaning defeats carbon and grease that daily routines cannot.",
      "An inspectable kitchen at any hour is a competitive advantage diners can sense.",
    ],
  },
];

export const getPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);
