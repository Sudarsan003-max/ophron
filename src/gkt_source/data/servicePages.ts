import { pexels } from "./gallery";
import type { IconName } from "../components/ui";

/* ------------------------------------------------------------------ */
/*  GKT International — service page configurations                    */
/* ------------------------------------------------------------------ */

export type SectionBlock =
  | {
      kind: "overview";
      title: string;
      image: string;
      imageAlt: string;
      paragraphs: string[];
      bullets: string[];
    }
  | {
      kind: "value";
      title: string;
      lead?: string;
      items: { title: string; text: string; icon?: IconName }[];
    }
  | {
      kind: "guide";
      title: string;
      intro?: string;
      blocks: { heading: string; text: string }[];
    }
  | {
      kind: "grid";
      title: string;
      intro?: string;
      quote?: string;
      cols?: 2 | 3;
      items: { title: string; text: string; icon?: IconName }[];
    }
  | {
      kind: "features";
      title: string;
      intro?: string;
      items: { title: string; text: string; bullets: string[]; badges?: string[]; icon?: IconName }[];
    }
  | { kind: "faq"; title: string; items: { q: string; a: string }[] }
  | { kind: "gallery"; title: string; intro?: string; images: { src: string; alt: string; caption: string }[] };

export type ServicePageData = {
  slug: string;
  crumb: string;
  heroTitle: string;
  heroLead: string;
  heroImage: string;
  sections: SectionBlock[];
};

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  /* ---------------------------------------------------------------- */
  "commercial-cleaning": {
    slug: "commercial-cleaning",
    crumb: "Commercial Cleaning",
    heroTitle: "Commercial Cleaning Services",
    heroLead:
      "Front-of-house presentation and back-of-house discipline for retail, hospitality and mixed-use premises across Singapore.",
    heroImage: pexels(36303748, 1600, 900),
    sections: [
      {
        kind: "overview",
        title: "Professional Commercial Cleaning Services in Singapore",
        image: pexels(36303748, 1000, 1250),
        imageAlt: "Janitorial cart staged in a bright commercial corridor",
        paragraphs: [
          "Commercial premises are judged at walking pace — the entrance glass, the floor shine, the washroom on the second floor. GKT International designs daily cleaning programmes around how your building is actually used: footfall curves, tenant mix, peak arrival windows and the moments when presentation matters most.",
          "Every contract is delivered by a fixed, trained team under a named site supervisor, working to written checklists and closing each shift with a signed log. When standards are documented, they stop being opinions — and that is the foundation our clients renew on, year after year.",
        ],
        bullets: [
          "Daily janitorial & front-of-house presentation",
          "Hard-floor machine scrubbing and carpet care",
          "Washroom servicing with consumables management",
          "Glass, partition and high-touch surface programmes",
        ],
      },
      {
        kind: "value",
        title: "The Importance of Commercial Cleaning",
        lead: "A commercial property is a continuous broadcast about the businesses inside it. Cleaning is the signal you control every single day.",
        items: [
          {
            title: "First impressions are formed in seconds",
            text: "Visitors read your floors, glass and counters before they read a single word of your signage. A maintained arrival path converts curiosity into confidence.",
          },
          {
            title: "Health protects tenancy",
            text: "Scheduled hygiene reduces the microbial load shared across tenants — fewer sick days, fewer complaints, and a healthier building reputation.",
          },
          {
            title: "Assets last longer when cared for",
            text: "Stone, timber and carpet all fail early under grit and neglect. Correct floor care preserves finishes and defers capital replacement.",
          },
          {
            title: "Compliance stays effortless",
            text: "NEA expectations, landlord covenants and audit trails are built into the programme from day one — inspection day becomes a non-event.",
          },
        ],
      },
      {
        kind: "grid",
        title: "Commercial Cleaning Service In Singapore",
        intro: "Six disciplines, one accountable contract. Each programme can stand alone or compose into a single managed service.",
        items: [
          { title: "Daily Janitorial Programme", text: "Opening and closing rotas tuned to your operating hours, with documented checklists for every zone." },
          { title: "Machine Floor Care", text: "Scrubber-drier, buff and crystallisation programmes that keep stone and vinyl at specification shine." },
          { title: "Glass & Facade Presentation", text: "Entrance glass, partitions and interior glazing kept presentation-bright on schedule." },
          { title: "Washroom Support & Restocking", text: "Consumables management, odour control and presentation checks logged at every visit." },
          { title: "Waste Management", text: "Segregated collection, bin-room hygiene and disposal documentation for ESG reporting." },
          { title: "High-Touch Disinfection", text: "Scheduled sanitisation of rails, switches, lifts and counters with NEA-approved compounds." },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  "disinfecting-services": {
    slug: "disinfecting-services",
    crumb: "Disinfecting Services",
    heroTitle: "Disinfecting Services",
    heroLead:
      "Scheduled and outbreak-response disinfection with NEA-approved compounds — applied, logged and certified by trained technicians.",
    heroImage: pexels(5499416, 1600, 900),
    sections: [
      {
        kind: "overview",
        title: "Professional Disinfecting Services in Singapore",
        image: pexels(4099090, 1000, 1250),
        imageAlt: "Technician in full protective equipment sanitising a floor",
        paragraphs: [
          "Cleaning removes what you can see; disinfection neutralises what you cannot. GKT International's disinfecting programmes pair electrostatic spraying and ULV fogging with disciplined high-touch surface work, using only NEA-approved compounds at validated dilutions and dwell times.",
          "Every cycle closes with documentation — compound batch records, coverage logs and technician sign-off — so your hygiene programme is evidence, not assurance. For confirmed cases, our outbreak-response team deploys within hours, on a pre-negotiated call-out.",
        ],
        bullets: [
          "Electrostatic spraying & ULV fogging",
          "NEA-approved, hospital-grade compounds",
          "High-touch surface programmes on schedule",
          "Outbreak-response deployment, 24/7",
        ],
      },
      {
        kind: "value",
        title: "Why Regular Disinfection Matters",
        lead: "Disinfection is a firewall, not a fire brigade. Scheduled suppression of the microbial baseline is what keeps one incident from becoming an outbreak.",
        items: [
          {
            title: "It prevents transmission windows",
            text: "A suppressed baseline means introduced pathogens meet an environment that resists them — exposure shrinks from days to minutes.",
          },
          {
            title: "It protects your operating calendar",
            text: "One avoided closure pays for years of scheduled disinfection. The economics are not close.",
          },
          {
            title: "It sustains staff confidence",
            text: "Visible, logged disinfection keeps teams at their desks and customers in your spaces during flu season and beyond.",
          },
          {
            title: "It satisfies auditors and landlords",
            text: "Batch records and coverage logs answer the hygiene questions in any tenancy, ESG or regulatory review.",
          },
        ],
      },
      {
        kind: "grid",
        title: "Disinfecting Service In Singapore",
        intro: "Applied with calibrated equipment, verified by log, priced on a schedule you control.",
        items: [
          { title: "Electrostatic Spraying", text: "Charged mist wraps surfaces — ideal for complex furniture, equipment and high-density zones." },
          { title: "ULV Cold Fogging", text: "Fine-particle fogging for whole-room coverage of offices, classrooms and dining floors." },
          { title: "High-Touch Surface Programme", text: "Scheduled wipe-down of switches, rails, handles, devices and counters between fogging cycles." },
          { title: "Outbreak Response", text: "Rapid deployment following a confirmed case, with terminal cleaning and re-entry guidance." },
          { title: "Washroom & Pantry Intensification", text: "Extra cycles for the two highest-load zones in any premises." },
          { title: "Certification & Logging", text: "Compound records, dwell-time logs and completion certificates for your files and your auditors." },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  "office-cleaning": {
    slug: "office-cleaning",
    crumb: "Office Cleaning",
    heroTitle: "Office Cleaning",
    heroLead:
      "Quiet, uniformed teams working around your business hours — corporate cleaning engineered for focus, health and presentation.",
    heroImage: pexels(6195115, 1600, 900),
    sections: [
      {
        kind: "overview",
        title: "Professional Office Cleaning Services in Singapore",
        image: pexels(7641347, 1000, 1250),
        imageAlt: "Floor care underway in a bright office pantry",
        paragraphs: [
          "An office is a productivity instrument, and its calibration is environmental. GKT delivers scheduled office cleaning that your team barely notices and deeply relies on: pre-arrival resets, daytime washroom and pantry rounds, and after-hours floor care that leaves no trace but the shine.",
          "We staff offices with fixed, security-screened crews who learn your layout, your sensitivities and your standards — then prove them nightly in a supervisor-signed log your facilities manager can audit at a glance.",
        ],
        bullets: [
          "Pre-arrival workspace resets",
          "Pantry, meeting-room and boardroom care",
          "Washroom servicing on scheduled rounds",
          "Carpet extraction & hard-floor maintenance",
        ],
      },
      {
        kind: "guide",
        title: "Professional Office Cleaning in Singapore",
        intro: "A modern office programme runs on three layered rhythms. Each is scheduled, staffed and logged independently — and together they keep the workplace at a constant, auditable standard.",
        blocks: [
          {
            heading: "The daily rhythm",
            text: "Before your first arrival: bins emptied, surfaces sanitised, pantries reset, washrooms serviced and stocked. During the day: scheduled rounds for washrooms, pantries and high-touch points. After close: floor care, glass and the detailed work that cannot share space with a working team.",
          },
          {
            heading: "The weekly layer",
            text: "Detailing that exceeds the daily scope — interior glass, door frames, upholstery vacuuming, appliance exteriors, skirting and vents. The weekly layer is what stops the slow accumulation that daily cleaning, by design, cannot address.",
          },
          {
            heading: "The periodic reset",
            text: "Quarterly deep cleaning: carpet extraction, floor strip and re-seal, pantry and fridge interiors, washroom descaling, air-side grilles. Each reset is scoped, quoted and logged as its own project with before-and-after documentation.",
          },
          {
            heading: "Measured, not assumed",
            text: "ATP swab testing, photographic standards and monthly supervisor audits convert cleanliness from a feeling into a score. Your FM receives the same dashboard our supervisors work from.",
          },
        ],
      },
      {
        kind: "value",
        title: "Why Choose GKT International for Office Cleaning?",
        lead: "Four commitments separate a cleaning vendor from a workplace partner.",
        items: [
          {
            title: "Fixed teams, not rotating strangers",
            text: "The same screened crew returns daily — familiar faces who know your premises and your expectations.",
          },
          {
            title: "A supervisor who answers",
            text: "One named site supervisor with a direct line to your FM, accountable for every signed log.",
          },
          {
            title: "Chemistry matched to the space",
            text: "Low-VOC, eco-labelled products as standard; specialist chemistry only where the surface demands it.",
          },
          {
            title: "Auditable standards",
            text: "Checklists, ATP results and monthly audits compiled into a report your leadership can read in two minutes.",
          },
        ],
      },
      {
        kind: "grid",
        title: "Office Cleaning Service In Singapore",
        intro: "Every zone of the modern workplace, covered by one contract.",
        items: [
          { title: "Workspace & Desk Reset", text: "Sanitised surfaces, emptied bins and presentation order before your team arrives." },
          { title: "Meeting & Boardroom Care", text: "Client-facing rooms detailed to a photographic standard between bookings." },
          { title: "Pantry & Appliance Hygiene", text: "Counters, sinks, appliance exteriors and fridge interiors on scheduled rotation." },
          { title: "Washroom Servicing", text: "Consumables, odour control and presentation rounds logged per visit." },
          { title: "Floor & Carpet Programme", text: "Extraction, buffing and re-seal cycles scheduled out of business hours." },
          { title: "Glass & High-Touch Detailing", text: "Partitions, switches, handles and lift interiors on a weekly detailing cycle." },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  "industrial-cleaning": {
    slug: "industrial-cleaning",
    crumb: "Industrial Cleaning",
    heroTitle: "Industrial Cleaning Services",
    heroLead:
      "Facility-scale cleaning for warehouses, production floors and cold storage — delivered safely, scheduled around operations, documented to audit standard.",
    heroImage: pexels(4483773, 1600, 900),
    sections: [
      {
        kind: "overview",
        title: "Professional Industrial Cleaning Services in Singapore",
        image: pexels(4481329, 1000, 1250),
        imageAlt: "High-angle view of a cleaned industrial facility floor",
        paragraphs: [
          "Industrial cleaning is operations support, not housekeeping. Grit on a warehouse floor is a tyre-wear cost; grease under a production line is a downtime risk; dust loading in racking is an audit finding waiting for a date. GKT programmes industrial cleaning the way you programme maintenance — scoped, scheduled, safe and signed off.",
          "Our crews hold the certifications the environment demands: bizSAFE Level 3 framework, chemical handling, working-at-height where required, and cold-room protocols. Every deployment runs under a method statement and closes with a completion record your EHS team can file.",
        ],
        bullets: [
          "High-pressure & hot-water washing",
          "Machine degreasing of production areas",
          "Warehouse, racking & cold-store hygiene",
          "Post-renovation & handover cleans",
        ],
      },
      {
        kind: "value",
        title: "The Importance of Industrial Cleaning",
        lead: "In an industrial setting, cleanliness converts directly into safety, uptime and audit outcomes.",
        items: [
          {
            title: "Safety is a floor condition",
            text: "Slips, trips and contamination incidents trace back to surface state. A maintained floor is the cheapest safety programme you will ever run.",
          },
          {
            title: "Machinery runs cleaner, longer",
            text: "Dust and grease accelerate wear on every moving part. Scheduled degreasing extends service intervals and protects warranties.",
          },
          {
            title: "Audits pass on evidence",
            text: "Food-safety, pharmaceutical and logistics audits all test the same thing: documented control of the environment. We supply the documentation with the cleaning.",
          },
          {
            title: "Operations never stop for us",
            text: "Night shifts, weekend windows, phased zones — our scheduling wraps around your throughput, not the reverse.",
          },
        ],
      },
      {
        kind: "grid",
        title: "Industrial Cleaning Service In Singapore",
        intro: "Purpose-built crews and equipment for each industrial environment.",
        items: [
          { title: "High-Pressure Washing", text: "Floors, loading bays, car parks and external aprons returned to base condition with industrial-grade equipment." },
          { title: "Production Area Degreasing", text: "Polymerised grease removed from machinery zones, coving and drainage using food-safe chemistry where specified." },
          { title: "Warehouse & Racking Hygiene", text: "Aisle scrubbing, racking wipe-downs and dust management scheduled around picking cycles." },
          { title: "Cold-Room & Cold-Store Cleaning", text: "Hygiene cycles executed at temperature with protocols for condensate and ice management." },
          { title: "Post-Renovation Clean", text: "Fine-dust removal, adhesive and paint-spatter treatment, and handover-ready presentation." },
          { title: "Waste & Bin-Centre Management", text: "Compactor areas, bin centres and drainage kept compliant and odour-controlled." },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  "restaurant-cleaning": {
    slug: "restaurant-cleaning",
    crumb: "Restaurant & Kitchen Cleaning",
    heroTitle: "Restaurant & Kitchen Cleaning",
    heroLead:
      "SFA-ready kitchen hygiene for restaurants, cafés, central kitchens and hotel F&B — from nightly close-down to full deep clean and degrease.",
    heroImage: pexels(8629127, 1600, 900),
    sections: [
      {
        kind: "overview",
        title: "Maintain Pristine Standards",
        image: pexels(34416078, 1000, 1250),
        imageAlt: "Stainless steel warmers gleaming after degreasing",
        paragraphs: [
          "At GKT International, we understand that maintaining a clean and hygienic restaurant isn't just about appearances — it's about compliance, safety and your reputation. Our comprehensive cleaning services ensure your kitchen, dining area and facilities are inspection-ready and food-safe, every single day.",
          "Whether you run a small eatery or operate a large F&B franchise, we provide tailored cleaning solutions that align with your needs, your schedule and your compliance regulations — delivered by trained crews who understand how a working kitchen actually runs.",
        ],
        bullets: [
          "Kitchen deep cleaning — grease and grime, corner to corner",
          "Dining area cleaning, scheduled or on-demand",
          "Washroom & staff restroom sanitisation",
          "Stewarding & flexible manpower support",
        ],
      },
      {
        kind: "grid",
        title: "Our Comprehensive Restaurant Cleaning Services",
        intro: "Four disciplines, one accountable standard — each can run on its own schedule or combine into a single managed contract.",
        cols: 2,
        items: [
          { title: "Kitchen Deep Cleaning", text: "Our professional team is trained to clean and sanitise even the hardest-to-reach corners and the most stubborn grease build-up.", icon: "Flame" },
          { title: "Dining Area Cleaning", text: "We help you maintain a sparkling, welcoming dining environment through scheduled and on-demand cleaning services.", icon: "Cutlery" },
          { title: "Washroom & Staff Restroom Sanitisation", text: "Disinfection of every high-touch point — flush handles, faucets, doorknobs — alongside a full washroom deep clean.", icon: "Droplet" },
          { title: "Stewarding & Manpower Support", text: "Our trained stewards and support crew are ready to step in, with flexible staffing plans tailored to your restaurant's pace.", icon: "Users" },
        ],
      },
      {
        kind: "features",
        title: "Every Zone, Its Own Protocol",
        intro: "From the pass to the powder room, here is exactly what each service covers — and the standard it is held to.",
        items: [
          {
            title: "Kitchen Deep Cleaning",
            text: "The kitchen is the heart of your restaurant but also the most exposed to grease, oil and food residue. Over time, these build up in hidden corners, behind equipment and inside exhaust systems — posing serious hygiene and fire risks. Our trained team tackles even the toughest grime using industrial-grade degreasers and food-safe disinfectants, reaching areas that typical routines miss so every inch is spotless and bacteria-free. From prep tables to drains and ducts, the result is a safer, cleaner, inspection-ready workspace for your team.",
            bullets: [
              "Exhaust hood & duct degreasing",
              "Grill, oven, stove & fryer cleaning",
              "Equipment surface sanitation (stainless steel prep tables, countertops)",
              "Floor degreasing and scrubbing",
              "Tile and wall cleaning behind and under appliances",
              "Sink and drainage cleaning with odour control",
            ],
            badges: ["Food-safe chemicals used", "Meets FSSAI, HACCP & local health code standards"],
            icon: "Flame",
          },
          {
            title: "Dining Area Cleaning",
            text: "The dining area is where your guests form their first and lasting impressions. From clean tables to gleaming floors, every detail reflects your commitment to quality. We ensure your front-of-house is spotless, inviting and ready to impress, day after day — handling everything from surface sanitisation and floor polishing to windows, fixtures and décor detailing. Whether you need daily upkeep or weekly deep cleans, we tailor the service to your flow of guests, because a clean dining space is your silent brand ambassador.",
            bullets: [
              "Table and chair sanitation",
              "Carpet vacuuming & shampooing (where applicable)",
              "Floor scrubbing & polishing",
              "Window & glass cleaning",
              "Dusting of ceiling fans, lights, wall fixtures & artwork",
              "Entrance & reception area detailing",
            ],
            icon: "Cutlery",
          },
          {
            title: "Washroom & Staff Restroom Sanitization",
            text: "Washrooms are among the most used — and most judged — areas in any establishment. A clean, well-maintained restroom shows your attention to detail and care for your customers; unpleasant odours, stains or overflowing bins can quickly turn into bad reviews and hygiene violations. We handle washroom cleaning with precision, disinfecting toilets, sinks and partitions alongside high-touch points like flush handles and door locks, so hygiene doesn't stop at the kitchen — it extends to every corner your guests visit.",
            bullets: [
              "Deep cleaning of toilets, urinals & basins",
              "Disinfection of high-touch points (flush handles, faucets, doorknobs)",
              "Mirror cleaning",
              "Partition walls, doors & floor sanitation",
              "Replenishment of toiletries (optional)",
              "Odour neutralisation and pest control (optional)",
            ],
            icon: "Droplet",
          },
          {
            title: "Stewarding & Manpower Support",
            text: "During busy service hours, or after the last plate is served, managing the kitchen's cleanliness and workflow can become overwhelming. From dishwashing and clearing tables to waste segregation and organising kitchen tools, we provide reliable, behind-the-scenes assistance. Whether it's a one-time event or daily kitchen operations, our manpower integrates seamlessly with your team.",
            bullets: [
              "Dishwashing and glassware handling",
              "Clearing and resetting tables",
              "Waste segregation and disposal",
              "Light kitchen duties and porterage",
              "Post-service cleaning (night shift availability)",
            ],
            badges: ["Flexible short-term & long-term contracts available"],
            icon: "Users",
          },
        ],
      },
      {
        kind: "value",
        title: "Why Choose GKT International?",
        lead: "Five commitments that separate a cleaning vendor from a hygiene partner.",
        items: [
          {
            title: "Industry Expertise",
            text: "We specialise in restaurant and hospitality cleaning — our team understands the unique hygiene needs of food service environments.",
            icon: "Shield",
          },
          {
            title: "Trained & Vetted Staff",
            text: "Our cleaners are uniformed, background-verified, and trained in both deep-cleaning techniques and safety protocols.",
            icon: "Check",
          },
          {
            title: "Food-Safe Chemicals",
            text: "All cleaning agents used are non-toxic, eco-friendly, and safe for surfaces that come into contact with food.",
            icon: "Spray",
          },
          {
            title: "Flexible Scheduling",
            text: "We operate during off-hours, overnight, or early mornings — whenever it best suits your business operations.",
            icon: "Clock",
          },
          {
            title: "Regular Audits & Reporting",
            text: "Detailed checklists and before-after photos are provided for every service, ensuring transparency and quality assurance.",
            icon: "Clipboard",
          },
        ],
      },
      {
        kind: "grid",
        title: "Compliance & Safety",
        intro: "We help you stay compliant with every relevant health and hygiene authority, including:",
        quote: "A clean kitchen isn't just an option — it's a legal obligation.",
        items: [
          { title: "FSSAI", text: "The Food Safety and Standards Authority — our protocols are built around its food-contact and hygiene requirements.", icon: "Shield" },
          { title: "HACCP", text: "Hazard Analysis Critical Control Point — critical-control thinking applied to every cleaning cycle, not just the audit binder.", icon: "Check" },
          { title: "Local Municipal & State Bodies", text: "Local municipal and state food-safety regulations, tracked and reflected in every checklist we run.", icon: "Pin" },
        ],
      },
      {
        kind: "gallery",
        title: "Kitchen Work, In Pictures",
        intro: "Selected frames from recent F&B deep cleans across the island.",
        images: [
          { src: pexels(8629127, 1000, 700), alt: "Stewarding bay after deep clean", caption: "Stewarding bay — post deep clean" },
          { src: pexels(34416078, 1000, 700), alt: "Stainless warmers restored", caption: "Hot line — mill finish restored" },
          { src: pexels(29226709, 1000, 700), alt: "Stainless prep counter", caption: "Prep counters — ready for service" },
          { src: pexels(8629081, 1000, 700), alt: "Chef working in a cleaned kitchen", caption: "The morning after a GKT reset" },
        ],
      },
      {
        kind: "faq",
        title: "Frequently Asked Questions",
        items: [
          {
            q: "How often should a restaurant schedule a kitchen deep clean?",
            a: "Most Singapore F&B operators schedule a full deep clean monthly, with a quarterly canopy and exhaust service. High-volume kitchens or charcoal operations often move to fortnightly deep cleans. We will recommend a cadence after a free site assessment — and it is usually cheaper than the enforcement notice it prevents.",
          },
          {
            q: "Do you work around our service hours?",
            a: "Yes. Deep cleans are scheduled after close and completed before your prep team arrives. Our crews are sized to finish the full protocol in a single overnight window for most kitchens.",
          },
          {
            q: "Are your chemicals food-safe?",
            a: "All food-contact surfaces are finished with SFA-recognised sanitisers at validated dilutions, and every compound we deploy carries a safety data sheet on file for your inspection.",
          },
          {
            q: "Can you help us prepare for an SFA inspection?",
            a: "That is the point of the programme. Our checklists are built around the inspection framework — food-contact surfaces, equipment siting, floor and drainage condition, waste and grease-trap logs — so inspection day is just another logged shift.",
          },
          {
            q: "Do you provide grease-trap servicing and documentation?",
            a: "Yes. Scheduled clearing with dated logs you can present to inspectors and landlords, plus odour control as standard.",
          },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  "toilet-deep-cleaning": {
    slug: "toilet-deep-cleaning",
    crumb: "Toilet Deep Cleaning",
    heroTitle: "Deep Toilet Cleaning",
    heroLead:
      "Descaling, grout restoration and odour elimination for washrooms — the room that shapes your reputation more than any other.",
    heroImage: pexels(3770215, 1600, 900),
    sections: [
      {
        kind: "overview",
        title: "Deep Toilet Cleaning Services",
        image: "/images/restroom.jpg",
        imageAlt: "Marble and brass washroom restored to presentation standard",
        paragraphs: [
          "No room in your premises is judged more harshly — or more often — than the washroom. Daily servicing maintains it; deep cleaning restores it. GKT's deep toilet cleaning removes what routine rounds cannot: mineral scale, uric deposits, grout discolouration, biofilm in traps and the odours they generate.",
          "The result is not merely clean — it is presentable. Fixtures recover their original finish, stone and grout return to their intended tone, and the room smells neutral instead of masked. For hotels, offices and F&B, that difference is measurable in guest feedback scores.",
        ],
        bullets: [
          "Mineral scale & uric deposit removal",
          "Grout restoration and recolour assessment",
          "Odour source elimination, not masking",
          "Fixture polish and seal inspection",
        ],
      },
      {
        kind: "guide",
        title: "Deep Toilet Cleaning Services Protocol",
        intro: "A washroom deep clean follows a fixed seven-stage protocol. Every stage is logged; every washroom closes to the same written standard.",
        blocks: [
          {
            heading: "01 — Ventilation & preparation",
            text: "Airflow is established, consumables removed and protected, and surfaces assessed. Existing damage is photographed and reported before any chemical is applied.",
          },
          {
            heading: "02 — Descaling of fixtures",
            text: "Acid-side descalers dissolve mineral and uric scale from bowls, urinals, taps and shower fittings at controlled dwell times that protect chrome and stone.",
          },
          {
            heading: "03 — Grout & tile restoration",
            text: "Alkaline chemistry and mechanical agitation lift embedded discolouration from grout lines and tile faces. Severely degraded grout is flagged for restoration rather than masked.",
          },
          {
            heading: "04 — Biofilm & trap treatment",
            text: "Drains, traps and overflow channels are treated to eliminate the biofilm that causes persistent odour at the source — not cover it with fragrance.",
          },
          {
            heading: "05 — Partition & high-touch detail",
            text: "Cubicle partitions, locks, switches, dispensers and door push-plates are detailed and sanitised — the surfaces hands actually meet.",
          },
          {
            heading: "06 — Polish, seal & finish",
            text: "Fixtures are polished to finish specification, stone surfaces assessed for resealing, and consumables restocked and presented to standard.",
          },
          {
            heading: "07 — Verification & log",
            text: "The supervisor verifies against the written standard, photographs the result and files the log. Your facilities team receives the record the same day.",
          },
        ],
      },
      {
        kind: "guide",
        title: "Deep Toilet Cleaning Services in Singapore — GKT International",
        intro: "Why Singapore's washrooms need more than daily servicing, and how to programme restoration intelligently.",
        blocks: [
          {
            heading: "Hard water, humidity, footfall",
            text: "Singapore's combination of hard water, tropical humidity and high washroom footfall accelerates scale and biofilm formation faster than almost any market we know. Washrooms that look maintained daily can still be accumulating deposits weekly — the deep clean resets that curve.",
          },
          {
            heading: "The reputation economics",
            text: "Guest surveys across hospitality and commercial property consistently rank washroom condition among the top drivers of overall impression. A quarterly deep clean is among the lowest-cost reputation interventions available to a facilities team.",
          },
          {
            heading: "Programming restoration",
            text: "We recommend a baseline deep clean to establish condition, then quarterly restorative cycles layered on your daily servicing contract. Heavy-traffic washrooms — F&B, transport-adjacent, event venues — typically move to eight-week cycles. Each cycle is logged so degradation trends become visible and budgetable.",
          },
          {
            heading: "One accountable partner",
            text: "Deep cleaning works best when delivered by the team that already knows the building. GKT clients on servicing contracts add washroom restoration as a scheduled line item — same supervisor, same log, one accountable standard for the whole premises.",
          },
        ],
      },
    ],
  },
};
