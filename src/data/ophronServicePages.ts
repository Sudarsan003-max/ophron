/* ------------------------------------------------------------------ */
/*  OPHRON Platform — Central Specialized Service Configurations      */
/*  Covering all Official Business Pillars, Sub-Categories & Services  */
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
      items: { title: string; text: string; icon?: string }[];
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
      items: { title: string; text: string; icon?: string }[];
    }
  | {
      kind: "features";
      title: string;
      intro?: string;
      items: { title: string; text: string; bullets: string[]; badges?: string[]; icon?: string }[];
    }
  | { kind: "faq"; title: string; items: { q: string; a: string }[] }
  | { kind: "gallery"; title: string; intro?: string; images: { src: string; alt: string; caption: string }[] };

export type ServicePageData = {
  slug: string;
  crumb: string;
  pillarId: "people" | "hygiene" | "facilities" | "technology" | "intelligence";
  pillarName: string;
  category: string;
  heroTitle: string;
  heroLead: string;
  heroImage: string;
  badge?: string;
  sections: SectionBlock[];
};

export interface ServiceSubItem {
  id: string;
  name: string;
  slug: string;
  pillarId: "people" | "hygiene" | "facilities" | "technology";
  category: string;
  tagline: string;
  description: string;
  image: string;
  badge: string;
  features: string[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  pillarId: "people" | "hygiene" | "facilities" | "technology";
  description: string;
  image: string;
  services: ServiceSubItem[];
}

export interface BusinessPillarTaxonomy {
  id: "people" | "hygiene" | "facilities" | "technology";
  name: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  categories: ServiceCategory[];
}

/* ------------------------------------------------------------------ */
/*  STRUCTURED BUSINESS PILLAR TAXONOMY                               */
/* ------------------------------------------------------------------ */

export const BUSINESS_PILLARS_DATA: BusinessPillarTaxonomy[] = [
  /* ---------------------------------------------------------------- */
  /*  PILLAR 1: OPHRON PEOPLE                                         */
  /* ---------------------------------------------------------------- */
  {
    id: "people",
    name: "OPHRON PEOPLE",
    title: "Manpower & Workforce Solutions",
    tagline: "WSQ-Certified, Supervisor-Led Hospitality & Back-of-House Staffing",
    description:
      "Vetted, reliable, and compliant manpower solutions engineered for luxury hotels, high-volume F&B establishments, event venues, and commercial facilities across Singapore.",
    image: "/images/services/fnb_stewarding_manpower.jpg",
    categories: [
      {
        id: "manpower-workforce",
        name: "Manpower & Workforce Solutions",
        pillarId: "people",
        description:
          "End-to-end back-of-house, kitchen stewarding, dishwashing, and utility staffing with on-site supervisory oversight.",
        image: "/images/services/fnb_stewarding_manpower.jpg",
        services: [
          {
            id: "fnb-stewarding-manpower",
            name: "F&B Stewarding Manpower",
            slug: "fnb-stewarding-manpower",
            pillarId: "people",
            category: "Manpower & Workforce Solutions",
            tagline: "Professional shift-ready stewarding teams for luxury hotels & dining establishments.",
            description:
              "Dedicated, WSQ-trained stewarding crews handling high-capacity dish-pits, glassware polishing, cutlery burnishing, and chemical sanitation dosing with zero service interruption.",
            image: "/images/services/fnb_stewarding_manpower.jpg",
            badge: "WSQ Certified",
            features: [
              "Flight & rack conveyor dishwasher operation",
              "Automated chemical dosing & temperature control",
              "Cutlery sorting & silverware de-tarnishing",
              "100% SLA compliance & supervisor attendance",
            ],
          },
          {
            id: "kitchen-helpers",
            name: "Kitchen Helpers",
            slug: "kitchen-helpers",
            pillarId: "people",
            category: "Manpower & Workforce Solutions",
            tagline: "Essential culinary preparation & hygiene support for commercial kitchens.",
            description:
              "Trained culinary support assistants ready for basic ingredient prep, station restocking, stainless steel sanitization, and continuous kitchen cleanliness during peak covers.",
            image: "/images/services/kitchen_helpers.jpg",
            badge: "Food Hygiene SFA",
            features: [
              "Basic prep & mise-en-place assistance",
              "Continuous cookline degreasing & wipe-down",
              "Trash segregation & kitchen bin rotation",
              "Full compliance with Singapore Food Agency (SFA) rules",
            ],
          },
          {
            id: "dishwasher-manpower",
            name: "Dishwasher Manpower",
            slug: "dishwashing-kitchen",
            pillarId: "people",
            category: "Manpower & Workforce Solutions",
            tagline: "High-throughput warewashing and plate clearing specialists.",
            description:
              "Dependable dishwashing personnel trained in heavy commercial dishwashing machinery, chemical descaling, pot scrubbing, and hygienic tableware storage.",
            image: "/images/services/dishwasher_manpower.jpg",
            badge: "24/7 Deployment",
            features: [
              "Heavy pot, pan & GN container scrubbing",
              "Low-breakage handling protocols",
              "Sanitizing rinse monitoring (82°C+)",
              "HACCP-compliant dry storage stacking",
            ],
          },
          {
            id: "stewarding-staff",
            name: "Stewarding Staff",
            slug: "fnb-stewarding-manpower",
            pillarId: "people",
            category: "Manpower & Workforce Solutions",
            tagline: "Supervisor-led back-of-house stewarding crews for premier venues.",
            description:
              "Experienced banquet and F&B stewarding staff capable of handling major hotel turnarounds, private dining resets, and live event back-of-house logistics.",
            image: "/images/services/stewarding_staff.jpg",
            badge: "Hotel Standard",
            features: [
              "Banquet equipment logistics & transport",
              "Glassware spark checking & polishing",
              "Chafing dish & banquet ware cleaning",
              "Rapid turnaround between service meals",
            ],
          },
          {
            id: "venue-utility-personnel",
            name: "Venue Utility Personnel",
            slug: "venue-utility-personnel",
            pillarId: "people",
            category: "Manpower & Workforce Solutions",
            tagline: "Versatile back-of-house utility and porterage teams.",
            description:
              "Dynamic utility staff managing heavy goods movement, continuous waste removal, pantry maintenance, and backstage cleanliness across venues and exhibitions.",
            image: "/images/services/venue_utility_personnel.jpg",
            badge: "Multi-Skilled",
            features: [
              "Continuous venue replenishment & porterage",
              "Spill response & rapid floor dry-cleaning",
              "Restroom supply rotation during high traffic",
              "Backstage & logistics lane clearance",
            ],
          },
          {
            id: "kitchen-boh-support",
            name: "Kitchen & Back-of-House Support",
            slug: "fnb-stewarding-manpower",
            pillarId: "people",
            category: "Manpower & Workforce Solutions",
            tagline: "Holistic back-of-house workforce for seamless hospitality operations.",
            description:
              "Comprehensive BOH staffing covering dry goods storage management, walk-in chiller upkeep, loading bay clearance, and kitchen floor sanitation.",
            image: "/images/services/kitchen_boh_support.jpg",
            badge: "Turnkey Staffing",
            features: [
              "Walk-in chiller & freezer organization",
              "Floor drain chemical flushing",
              "Loading bay cleanliness & pallet clearance",
              "Daily operational hygiene checklists",
            ],
          },
          {
            id: "outsourced-cleaning-manpower",
            name: "Outsourced Cleaning Manpower",
            slug: "commercial-cleaning",
            pillarId: "people",
            category: "Manpower & Workforce Solutions",
            tagline: "Dedicated, NEA-licensed outsourced cleaning personnel for corporate & retail.",
            description:
              "Uniformed, security-cleared cleaning professionals deployed on customized shifts for daily corporate office, retail mall, and commercial facility upkeep.",
            image: "/images/services/outsourced_cleaning_manpower.jpg",
            badge: "NEA Licensed",
            features: [
              "Fixed-team deployment with supervisor oversight",
              "Security-cleared and background-vetted personnel",
              "Custom daytime or night-shift schedules",
              "Uniformed, professional customer-facing appearance",
            ],
          },
          {
            id: "facility-operations-support",
            name: "Facility Operations Support",
            slug: "facilities",
            pillarId: "people",
            category: "Manpower & Workforce Solutions",
            tagline: "On-site utility, handyman, and property operations support teams.",
            description:
              "Operational personnel providing essential building management assistance, consumable restocking, minor repairs, and continuous facility monitoring.",
            image: "/images/services/facility_operations_support.jpg",
            badge: "IFM Integrated",
            features: [
              "Building utility rounds & preventive checks",
              "Tenant request dispatch & coordination",
              "Waste management & recycling monitoring",
              "Incident escalation & digital logging",
            ],
          },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /*  PILLAR 2: OPHRON HYGIENE                                        */
  /* ---------------------------------------------------------------- */
  {
    id: "hygiene",
    name: "OPHRON HYGIENE",
    title: "Cleaning, Sanitation & Specialized Hygiene",
    tagline: "Clinical-Grade Sanitation, SFA Compliance & Specialized Surface Care",
    description:
      "A complete spectrum of physical hygiene services spanning commercial offices, commercial kitchens, healthcare institutions, indoor air quality, and luxury architectural stone.",
    image: "/images/services/commercial_kitchen_deep_cleaning.jpg",
    categories: [
      /* Category 2.1: Commercial Hygiene */
      {
        id: "commercial-hygiene",
        name: "Commercial Hygiene",
        pillarId: "hygiene",
        description:
          "Daily janitorial, office presentation, retail showroom cleaning, and washroom sanitization.",
        image: "/images/services/commercial_office_cleaning.jpg",
        services: [
          {
            id: "commercial-office-cleaning",
            name: "Commercial Office Cleaning",
            slug: "office-cleaning",
            pillarId: "hygiene",
            category: "Commercial Hygiene",
            tagline: "Quiet, uniformed teams delivering pristine corporate workplace standards.",
            description:
              "Pre-arrival desk resets, meeting room sanitization, executive suite detailing, and daily trash removal engineered for focus, health, and corporate prestige.",
            image: "/images/services/commercial_office_cleaning.jpg",
            badge: "Daily Janitorial",
            features: ["Pre-arrival workspace resets", "Boardroom & pantry care", "High-touch surface sanitization", "Carpet vacuuming & hard-floor polishing"],
          },
          {
            id: "showroom-cleaning",
            name: "Showroom Cleaning",
            slug: "commercial-cleaning",
            pillarId: "hygiene",
            category: "Commercial Hygiene",
            tagline: "Flawless presentation for luxury automotive, retail, and design showrooms.",
            description:
              "Streak-free glass polishing, high-gloss floor buffering, spotlight fixture dusting, and immaculate architectural presentation that elevates customer brand experience.",
            image: "/images/services/showroom_cleaning.jpg",
            badge: "Luxury Retail",
            features: ["High-spec streak-free glass cleaning", "Buffing of polished concrete & porcelain floors", "Dust-free showcase display care", "Spotless customer reception presentation"],
          },
          {
            id: "daily-janitorial-cleaning",
            name: "Daily Janitorial Cleaning",
            slug: "commercial-cleaning",
            pillarId: "hygiene",
            category: "Commercial Hygiene",
            tagline: "Systematic, structured day-to-day cleaning programs for commercial premises.",
            description:
              "Dedicated cleaners assigned to building common areas, corridors, lift lobbies, and stairwells working to supervisor-signed digital checklists.",
            image: "/images/services/daily_janitorial_cleaning.jpg",
            badge: "Core Service",
            features: ["Lift lobby & entrance glass polishing", "Corridor mopping & auto-scrubbing", "Waste sorting and bin liners rotation", "Supervisor audit logs signed per shift"],
          },
          {
            id: "retail-commercial-cleaning",
            name: "Retail & Commercial Cleaning",
            slug: "commercial-cleaning",
            pillarId: "hygiene",
            category: "Commercial Hygiene",
            tagline: "High-traffic mall and retail store cleaning maintaining pristine public spaces.",
            description:
              "Rapid daytime spill response, automated scrubber-drier operation, escalator glass cleaning, and after-hours deep floor sanitization.",
            image: "/images/services/retail_commercial_cleaning.jpg",
            badge: "High Footfall",
            features: ["Escalator handrail & glass cleaning", "Auto scrubber-drier deep floor recovery", "Spill containment & anti-slip protocols", "After-hours retail store turnaround"],
          },
          {
            id: "toilet-washroom-deep-cleaning",
            name: "Toilet & Washroom Deep Cleaning",
            slug: "restroom-deep-cleaning",
            pillarId: "hygiene",
            category: "Commercial Hygiene",
            tagline: "Chemical descaling, microbial suppression, and washroom odor eradication.",
            description:
              "High-pressure steam sanitization of urinals, toilet bowls, tile grout lines, and vanity sinks, coupled with continuous biological odor neutralizing systems.",
            image: "/images/services/toilet_washroom_deep_cleaning.jpg",
            badge: "NEA Standard",
            features: ["Uric acid and limescale chemical descaling", "4-zone color-coded microfibre sanitization", "Tile grout deep steam extraction", "Consumables replenishment & odor control"],
          },
        ],
      },

      /* Category 2.2: F&B & Kitchen Hygiene */
      {
        id: "fnb-kitchen-hygiene",
        name: "F&B & Kitchen Hygiene",
        pillarId: "hygiene",
        description:
          "SFA & HACCP-compliant kitchen deep cleans, exhaust canopy degreasing, grease trap maintenance, and floor descaling.",
        image: "/images/services/commercial_kitchen_deep_cleaning.jpg",
        services: [
          {
            id: "commercial-kitchen-deep-cleaning",
            name: "Commercial Kitchen Deep Cleaning",
            slug: "dishwashing-kitchen",
            pillarId: "hygiene",
            category: "F&B & Kitchen Hygiene",
            tagline: "Nightly and periodic top-to-bottom culinary decontamination.",
            description:
              "Complete degreasing and sanitization of cooklines, stainless steel tables, ceiling grids, walk-in chillers, and floor drainage channels meeting SFA Grade-A standards.",
            image: "/images/services/commercial_kitchen_deep_cleaning.jpg",
            badge: "SFA Grade-A Ready",
            features: ["Top-to-bottom cookline stripdown", "High-temperature steam sanitization", "Stainless steel wall panel degreasing", "Full SFA audit certification report"],
          },
          {
            id: "kitchen-line-cleaning",
            name: "Kitchen Line Cleaning",
            slug: "dishwashing-kitchen",
            pillarId: "hygiene",
            category: "F&B & Kitchen Hygiene",
            tagline: "Intensive chemical degreasing of primary cooking lines and prep stations.",
            description:
              "Dissolving baked-on grease, carbon buildup, and food residues from stoves, ranges, char-grills, salamanders, and prep tables.",
            image: "/images/services/kitchen_line_cleaning.jpg",
            badge: "Fire Safe",
            features: ["Heavy carbon dissolver immersion", "Burner head & flame cap descaling", "Under-counter refrigeration coils wipe-down", "No-rinse food contact sanitization"],
          },
          {
            id: "cooking-appliance-degreasing",
            name: "Cooking Appliance Degreasing",
            slug: "dishwashing-kitchen",
            pillarId: "hygiene",
            category: "F&B & Kitchen Hygiene",
            tagline: "Deep carbon stripping for combi-ovens, fryers, griddles & rotisseries.",
            description:
              "Specialized alkali cleaning and thermal steam pressure stripping restoring heavy cooking equipment to optimal efficiency and sanitary conditions.",
            image: "/images/services/cooking_appliance_degreasing.jpg",
            badge: "Equipment Care",
            features: ["Deep fryer boil-out and oil vat flushing", "Combi-oven interior chamber descaling", "Griddle & flat-top plate restoration", "Gasket and seal sanitization"],
          },
          {
            id: "exhaust-hood-cleaning",
            name: "Exhaust Hood Cleaning",
            slug: "dishwashing-kitchen",
            pillarId: "hygiene",
            category: "F&B & Kitchen Hygiene",
            tagline: "Canopy grease stripping and baffle filter soaking preventing fire hazards.",
            description:
              "Scraping, chemical foam application, and high-pressure hot water rinsing of kitchen exhaust canopies, gutters, and stainless steel baffle filters.",
            image: "/images/services/exhaust_hood_cleaning.jpg",
            badge: "SCDF Fire Code",
            features: ["Baffle filter soaking & degreasing", "Hood canopy interior scrape & chemical wash", "Grease collection gutter flushing", "Fire safety compliance certificate"],
          },
          {
            id: "exhaust-duct-cleaning-degreasing",
            name: "Exhaust Duct Cleaning & Degreasing",
            slug: "dishwashing-kitchen",
            pillarId: "hygiene",
            category: "F&B & Kitchen Hygiene",
            tagline: "Full duct riser degreasing up to roof exhaust fans for fire prevention.",
            description:
              "Certified technicians cleaning horizontal and vertical exhaust ductwork using rotary brush shafts and foam degreasers, complete with before/after photo documentation.",
            image: "/images/services/exhaust_duct_cleaning_degreasing.jpg",
            badge: "Full Duct Riser",
            features: ["Rotary brush chemical foam scrub", "Horizontal & vertical riser access", "Rooftop exhaust fan impeller cleaning", "Detailed photographic audit logs"],
          },
          {
            id: "grease-trap-cleaning-maintenance",
            name: "Grease Trap Cleaning & Maintenance",
            slug: "dishwashing-kitchen",
            pillarId: "hygiene",
            category: "F&B & Kitchen Hygiene",
            tagline: "Scheduled solid waste skimming, enzyme dosing, and FOG removal.",
            description:
              "Removal of Fats, Oils, and Grease (FOG), bio-enzyme dosing to digest organic matter, and sealing of traps to eliminate foul sewer odors.",
            image: "/images/services/grease_trap_cleaning_maintenance.jpg",
            badge: "PUB & NEA Compliant",
            features: ["FOG skimming and legal waste disposal", "Biological enzyme maintenance dosing", "Odor gasket inspection and sealing", "Periodic suction and deep washdown"],
          },
          {
            id: "kitchen-floor-descaling",
            name: "Kitchen Floor Descaling",
            slug: "dishwashing-kitchen",
            pillarId: "hygiene",
            category: "F&B & Kitchen Hygiene",
            tagline: "Rotary scrubbing and deep descaling of quarry tiles and safety flooring.",
            description:
              "High-alkali emulsification of animal fats, grout line rotary scrubbing, and high-pressure vacuum extraction eliminating slip hazards.",
            image: "/images/services/kitchen_floor_descaling.jpg",
            badge: "Anti-Slip",
            features: ["Quarry tile & epoxy floor scrubbing", "Grout line organic scum dissolution", "Wet vacuum extraction leaving floors dry", "Anti-slip coefficient restoration"],
          },
          {
            id: "dishwashing-kitchen-hygiene",
            name: "Dishwashing & Kitchen Hygiene",
            slug: "dishwashing-kitchen",
            pillarId: "hygiene",
            category: "F&B & Kitchen Hygiene",
            tagline: "End-to-end dish-pit chemical management and operational hygiene.",
            description:
              "Full warewashing integration, automated chemical dispenser calibration, cutlery burnishing, and daily kitchen hygiene oversight.",
            image: "/images/services/dishwashing_kitchen_hygiene.jpg",
            badge: "End-to-End",
            features: ["Detergent & rinse-aid dosing audit", "Glassware mineral descaling", "Sanitizer test strip compliance logs", "Pest-repellent drain treatment"],
          },
        ],
      },

      /* Category 2.3: Disinfection & Decontamination */
      {
        id: "disinfection-decontamination",
        name: "Disinfection & Decontamination",
        pillarId: "hygiene",
        description:
          "Hospital-grade electrostatic spraying, ULV cold fogging, surface sanitization, and rapid outbreak remediation.",
        image: "/images/services/disinfection_services.jpg",
        services: [
          {
            id: "disinfection-services",
            name: "Disinfection Services",
            slug: "disinfecting-services",
            pillarId: "hygiene",
            category: "Disinfection & Decontamination",
            tagline: "Broad-spectrum pathogen eradication using NEA-approved biocides.",
            description:
              "Targeted chemical application neutralizing bacteria, viruses, and microbial bio-loads across commercial, dining, and educational facilities.",
            image: "/images/services/disinfection_services.jpg",
            badge: "NEA Registered",
            features: ["Hospital-grade broad-spectrum biocides", "Electrostatic 360-degree surface wrap", "Safe for food prep and delicate equipment", "Complete batch treatment certificates"],
          },
          {
            id: "decontamination-services",
            name: "Decontamination Services",
            slug: "disinfecting-services",
            pillarId: "hygiene",
            category: "Disinfection & Decontamination",
            tagline: "Terminal decontamination following confirmed viral or pathogen exposure.",
            description:
              "Rapid emergency containment protocols isolating infected zones, full PPE deployment, and multi-stage chemical decontamination.",
            image: "/images/services/decontamination_services.jpg",
            badge: "24/7 Rapid Response",
            features: ["Immediate 2-hour emergency dispatch", "Full biological hazard containment", "Strict chemical contact dwell-time tracking", "Post-treatment ATP swab verification"],
          },
          {
            id: "surface-sanitization",
            name: "Surface Sanitization",
            slug: "disinfecting-services",
            pillarId: "hygiene",
            category: "Disinfection & Decontamination",
            tagline: "Scheduled sanitization forming an active anti-microbial protective shield.",
            description:
              "Microfibre application of non-corrosive, long-lasting antimicrobial coatings that inhibit pathogen colonization on touch surfaces.",
            image: "/images/services/surface_sanitization.jpg",
            badge: "Long-Lasting Protection",
            features: ["Non-leaching antimicrobial barrier", "Safe on lacquer, brass, and screens", "Maintains active protection between cleans", "Documented application intervals"],
          },
          {
            id: "high-touch-point-disinfection",
            name: "High-Touch Point Disinfection",
            slug: "disinfecting-services",
            pillarId: "hygiene",
            category: "Disinfection & Decontamination",
            tagline: "Rigorous hourly wiping of lift buttons, door handles, and POS terminals.",
            description:
              "Targeted microfibre wipe-down of all high-frequency contact zones in hotels, offices, and restaurants using fast-acting virucidal solutions.",
            image: "/images/services/high_touch_point_disinfection.jpg",
            badge: "High-Risk Shield",
            features: ["Lift buttons, handrails & door handles", "POS payment terminals & touchscreens", "Shared pantry coffee machines & taps", "Hourly audit checklist logs"],
          },
          {
            id: "ulv-cold-fogging",
            name: "ULV Cold Fogging",
            slug: "disinfecting-services",
            pillarId: "hygiene",
            category: "Disinfection & Decontamination",
            tagline: "Sub-micron aerosol misting penetrating ceilings, vents, and fabric voids.",
            description:
              "Ultra-Low Volume (ULV) cold misting generating micro-droplets (5-20 microns) that remain airborne to neutralize airborne and settled pathogens.",
            image: "/images/services/ulv_cold_fogging.jpg",
            badge: "Aerosol Misting",
            features: ["Uniform 3D room volumetric coverage", "Penetrates upholstery and air grilles", "Zero moisture residue on paper or tech", "Quick 30-minute re-entry window"],
          },
          {
            id: "bio-burden-reduction",
            name: "Bio-Burden Reduction",
            slug: "disinfecting-services",
            pillarId: "hygiene",
            category: "Disinfection & Decontamination",
            tagline: "Systematic reduction of microbial counts on high-risk surfaces.",
            description:
              "Deep enzymatic cleaning combined with chemical biocides reducing overall colony-forming units (CFUs) below stringent healthcare thresholds.",
            image: "/images/services/bio_burden_reduction.jpg",
            badge: "Clinical Standard",
            features: ["Enzyme pre-treatment dissolving biofilm", "Biocide wipe-down targeting spores", "Luminometer baseline benchmarking", "Progressive monthly audit tracking"],
          },
          {
            id: "infection-control-cleaning",
            name: "Infection-Control Cleaning",
            slug: "disinfecting-services",
            pillarId: "hygiene",
            category: "Disinfection & Decontamination",
            tagline: "Strict infection control regimes for clinics, eldercare, and wellness centres.",
            description:
              "Color-coded single-use microfiber wipes, hospital disinfectants, and specialized waste handling preventing cross-transmission of illnesses.",
            image: "/images/services/infection_control_cleaning.jpg",
            badge: "MOH Standards",
            features: ["Single-use microfiber barrier protocols", "Quaternary & peracetic acid biocides", "Eldercare & clinic certified teams", "Bio-hazard waste containment"],
          },
        ],
      },

      /* Category 2.4: Healthcare & Cleanroom */
      {
        id: "healthcare-cleanroom",
        name: "Healthcare & Cleanroom",
        pillarId: "hygiene",
        description:
          "ISO Class 5-8 controlled cleanrooms, medical clinic cleaning, hospital-grade disinfection, and sterile facility care.",
        image: "/images/services/cleanroom_maintenance.jpg",
        services: [
          {
            id: "cleanroom-maintenance",
            name: "Cleanroom Maintenance",
            slug: "cleanroom-healthcare",
            pillarId: "hygiene",
            category: "Healthcare & Cleanroom",
            tagline: "ISO 14644 Class 5 to 8 certified controlled environment cleaning.",
            description:
              "Specialized cleanroom technicians utilizing non-shedding lint-free equipment, HEPA vacuuming, and sporicidal chemistries under strict chain-of-custody protocols.",
            image: "/images/services/cleanroom_maintenance.jpg",
            badge: "ISO 14644",
            features: ["Class 5 to 8 particulate compliance", "Lint-free non-shedding micro-wipes", "ESD conductive flooring maintenance", "Daily particulate count verification"],
          },
          {
            id: "healthcare-institution-maintenance",
            name: "Healthcare Institution Maintenance",
            slug: "cleanroom-healthcare",
            pillarId: "hygiene",
            category: "Healthcare & Cleanroom",
            tagline: "Hospital ward, surgical day centre, and diagnostic lab sanitization.",
            description:
              "Terminal cleaning of medical procedure rooms, patient holding areas, consultation suites, and sterile corridors adhering to MOH guidelines.",
            image: "/images/services/healthcare_institution_maintenance.jpg",
            badge: "MOH Guidelines",
            features: ["Terminal room sterilization protocols", "Sharps & clinical waste coordination", "HEPA air grille vacuuming", "Traceable swab test documentation"],
          },
          {
            id: "clinic-cleaning",
            name: "Clinic Cleaning",
            slug: "cleanroom-healthcare",
            pillarId: "hygiene",
            category: "Healthcare & Cleanroom",
            tagline: "Specialized daily cleaning for private medical, dental, and aesthetic clinics.",
            description:
              "Disinfection of patient examination couches, dental chairs, autoclave preparation rooms, and waiting lounges with medical-grade biocides.",
            image: "/images/services/clinic_cleaning.jpg",
            badge: "Medical Grade",
            features: ["Examination couch & dental chair sanitization", "Waiting room high-touch disinfection", "Bio-medical trash bag handling", "After-hours keyholder service"],
          },
          {
            id: "medical-facility-cleaning",
            name: "Medical Facility Cleaning",
            slug: "cleanroom-healthcare",
            pillarId: "hygiene",
            category: "Healthcare & Cleanroom",
            tagline: "Comprehensive environmental hygiene for dialysis, radiology & surgical centres.",
            description:
              "High-level disinfection of specialized medical equipment housing, recovery bays, and scrub sinks minimizing hospital-acquired infections (HAIs).",
            image: "/images/services/medical_facility_cleaning.jpg",
            badge: "Zero Infection Target",
            features: ["Scrub sink descaling & biocide flush", "Recovery bay terminal resets", "Conductive anti-static floor waxing", "ATP luminometer verified cleanliness"],
          },
          {
            id: "hospital-grade-disinfection",
            name: "Hospital-Grade Disinfection",
            slug: "cleanroom-healthcare",
            pillarId: "hygiene",
            category: "Healthcare & Cleanroom",
            tagline: "Tuberculocidal, virucidal, and sporicidal environmental treatments.",
            description:
              "Deploying EPA-registered and NEA-approved hospital disinfectants that neutralize difficult pathogens including MRSA, Norovirus, and C. difficile.",
            image: "/images/services/hospital_grade_disinfection.jpg",
            badge: "Sporicidal Biocides",
            features: ["EPA & NEA listed disinfectants", "Tested against MRSA, Norovirus & Spores", "Strict dwell-time stopwatch logging", "Safe on sensitive medical monitors"],
          },
          {
            id: "outpatient-clinic-bio-hygiene",
            name: "Outpatient Clinic Bio-Hygiene",
            slug: "cleanroom-healthcare",
            pillarId: "hygiene",
            category: "Healthcare & Cleanroom",
            tagline: "Daily bio-hygiene routines tailored for high-patient-turnover practices.",
            description:
              "Systematic decontamination of reception counters, queue terminals, doctor consultation suites, and clinical washrooms.",
            image: "/images/services/outpatient_clinic_bio_hygiene.jpg",
            badge: "Continuous Protocol",
            features: ["Consultation desk biocide wipe-down", "Phlebotomy & blood draw station care", "Washroom continuous disinfection", "Disposal of regulated medical consumables"],
          },
          {
            id: "cleanroom-surface-sanitation",
            name: "Cleanroom Surface Sanitation",
            slug: "cleanroom-healthcare",
            pillarId: "hygiene",
            category: "Healthcare & Cleanroom",
            tagline: "Sterile wipe-down of stainless steel laminar flow hoods and pass-through boxes.",
            description:
              "IPA (Isopropanol 70/30) sterile wiping of walls, ceilings, fixtures, and pass-through airlocks inside pharmaceutical and semiconductor cleanrooms.",
            image: "/images/services/cleanroom_surface_sanitation.jpg",
            badge: "Sterile 70/30 IPA",
            features: ["Laminar flow hood sterile wipe-down", "Pass-through box airlock detailing", "Sticky mat maintenance & logbooks", "Particle-free chemical application"],
          },
        ],
      },

      /* Category 2.5: Carpet & Upholstery */
      {
        id: "carpet-upholstery",
        name: "Carpet & Upholstery",
        pillarId: "hygiene",
        description:
          "Deep 80°C hot-water extraction, low-moisture encapsulation, spot removal, and luxury fabric restoration.",
        image: "/images/services/carpet_cleaning.jpg",
        services: [
          {
            id: "carpet-cleaning",
            name: "Carpet Cleaning",
            slug: "carpet-upholstery",
            pillarId: "hygiene",
            category: "Carpet & Upholstery",
            tagline: "Restorative deep cleaning for hotel ballrooms, lobbies, and office suites.",
            description:
              "High-power commercial shampooing, pile lifting, and high-CFM extraction removing embedded grit, dust mites, and beverage stains.",
            image: "/images/services/carpet_cleaning.jpg",
            badge: "Deep Restoration",
            features: ["High-pressure soil injection and vacuuming", "Targeted stain pre-treatment", "Carpet pile lifting and alignment", "Rapid drying turnaround times"],
          },
          {
            id: "carpet-steam-extraction",
            name: "Carpet Steam Extraction",
            slug: "carpet-upholstery",
            pillarId: "hygiene",
            category: "Carpet & Upholstery",
            tagline: "80°C thermal water extraction flushing deep-seated allergens and bacteria.",
            description:
              "Dual-motor extraction machines injecting hot water deep into wool and nylon fibers, killing bacteria and extracting dissolved grime instantly.",
            image: "/images/services/carpet_steam_extraction.jpg",
            badge: "80°C Thermal Wash",
            features: ["80°C thermal water breakdown", "Kills dust mites & fungal spores", "Deep sub-surface soil extraction", "Zero sticky chemical residues"],
          },
          {
            id: "carpet-maintenance",
            name: "Carpet Maintenance",
            slug: "carpet-upholstery",
            pillarId: "hygiene",
            category: "Carpet & Upholstery",
            tagline: "Scheduled low-moisture encapsulation preventing traffic lane wear.",
            description:
              "Polymeric crystallizing shampoo capturing dirt in microscopic crystals for vacuum recovery within 2 hours, perfect for busy offices.",
            image: "/images/services/carpet_maintenance.jpg",
            badge: "2-Hour Dry Time",
            features: ["Low-moisture encapsulation chemistry", "Preserves wool & nylon fiber elasticity", "Scheduled quarterly traffic lane plans", "Zero down-time for office workers"],
          },
          {
            id: "upholstery-cleaning",
            name: "Upholstery Cleaning",
            slug: "carpet-upholstery",
            pillarId: "hygiene",
            category: "Carpet & Upholstery",
            tagline: "Hand-tooled extraction for banquet chairs, sofas, and acoustic wall panels.",
            description:
              "Delicate fabric cleaning removing body oils, cosmetic marks, and food stains from luxury hospitality seating and executive furniture.",
            image: "/images/services/upholstery_cleaning.jpg",
            badge: "Hospitality Seating",
            features: ["Banquet chair deep shampooing", "Leather & faux leather conditioning", "Velvet and wool delicate fabric care", "Acoustic wall panel dusting & extraction"],
          },
          {
            id: "upholstery-steam-extraction",
            name: "Upholstery Steam Extraction",
            slug: "carpet-upholstery",
            pillarId: "hygiene",
            category: "Carpet & Upholstery",
            tagline: "Thermal steam sanitization of mattresses, bed heads, and lounge suites.",
            description:
              "Pressurized dry steam penetrating upholstery foam to neutralize bedbugs, dust mites, and biological odors without soaking the inner core.",
            image: "/images/services/upholstery_steam_extraction.jpg",
            badge: "Dry Steam Tech",
            features: ["Pressurized dry steam injection", "Eliminates dust mites and bedbugs", "Neutralizes sweat & organic odor", "Safe on luxury hotel mattresses"],
          },
          {
            id: "fabric-care",
            name: "Fabric Care",
            slug: "carpet-upholstery",
            pillarId: "hygiene",
            category: "Carpet & Upholstery",
            tagline: "Fluoropolymer fabric protector application repelling water and oil spills.",
            description:
              "Invisible hydrophobic and oleophobic nano-coating applied to carpets and seating, creating an active barrier against future wine and coffee stains.",
            image: "/images/services/fabric_care.jpg",
            badge: "Stain Shield",
            features: ["Fluoropolymer spill repellent", "Prevents stain binding into fibers", "Extends lifespan of luxury textiles", "Certified eco-friendly formulation"],
          },
          {
            id: "odour-treatment",
            name: "Odour Treatment",
            slug: "carpet-upholstery",
            pillarId: "hygiene",
            category: "Carpet & Upholstery",
            tagline: "Enzymatic bio-digestion of humidity mold, food spills, and pet odors.",
            description:
              "Active microbial enzymes consuming the organic root causes of foul smells in carpets, drapery, and air ducts rather than masking them with perfume.",
            image: "/images/services/odour_treatment.jpg",
            badge: "Bio-Enzyme Action",
            features: ["Enzymatic organic digestion", "Eradicates tropical humidity mildew smell", "Safe around pets, guests, and food", "Permanent odor elimination"],
          },
        ],
      },

      /* Category 2.6: Marble & Surface Care */
      {
        id: "marble-surface-care",
        name: "Marble & Surface Care",
        pillarId: "hygiene",
        description:
          "Planetary diamond grinding, crystallization, oxalic powder honing, and stone restoration for Italian marble, granite, and terrazzo.",
        image: "/images/services/marble_polishing.jpg",
        services: [
          {
            id: "marble-cleaning",
            name: "Marble Cleaning",
            slug: "marble-polishing",
            pillarId: "hygiene",
            category: "Marble & Surface Care",
            tagline: "pH-neutral rotary scrubbing of luxury architectural stone.",
            description:
              "Removing surface grime, grease buildup, and atmospheric discoloration from polished marble without etching the delicate calcium carbonate matrix.",
            image: "/images/services/marble_cleaning.jpg",
            badge: "pH-Neutral Care",
            features: ["Zero-acid stone safe detergents", "Rotary nylon pad scrubbing", "Deep extraction of porous surface soils", "Restores original stone luminosity"],
          },
          {
            id: "marble-polishing",
            name: "Marble Polishing",
            slug: "marble-polishing",
            pillarId: "hygiene",
            category: "Marble & Surface Care",
            tagline: "Multi-stage polishing restoring depth of reflection and clarity.",
            description:
              "Utilizing weighted rotary machines and fine polishing pads to buff out micro-scratches and restore a high-specular reflective gloss.",
            image: "/images/services/marble_polishing.jpg",
            badge: "Mirror Gloss",
            features: ["High-specular gloss enhancement", "Micro-scratch buffing", "Enhances natural stone veining depth", "Pendulum slip resistance compliant"],
          },
          {
            id: "powder-polishing",
            name: "Powder Polishing",
            slug: "marble-polishing",
            pillarId: "hygiene",
            category: "Marble & Surface Care",
            tagline: "Traditional Italian oxalic polishing powders creating deep crystal shine.",
            description:
              "Thermochemical reaction between premium oxalic polishing powders and natural marble calcium, forming a hardened, mirror-bright surface layer.",
            image: "/images/services/powder_polishing.jpg",
            badge: "Italian Oxalic Powder",
            features: ["Oxalic chemical reaction hardening", "Unmatched high-depth mirror gloss", "Removes light etching and cup rings", "Non-yellowing natural finish"],
          },
          {
            id: "diamond-polishing",
            name: "Diamond Polishing",
            slug: "marble-polishing",
            pillarId: "hygiene",
            category: "Marble & Surface Care",
            tagline: "Planetary resin-bonded diamond abrasives from 50 to 3000 grit.",
            description:
              "Precision mechanical grinding eliminating deep scratches, lippage between tile joints, and dull traffic lanes before progressive diamond honing.",
            image: "/images/services/diamond_polishing.jpg",
            badge: "Diamond 50-3000 Grit",
            features: ["Resin-bonded diamond disc grits", "Tile lippage and uneven joint leveling", "Mechanical flaw and deep scratch removal", "Restores factory-grade stone smoothness"],
          },
          {
            id: "marble-restoration",
            name: "Marble Restoration",
            slug: "marble-polishing",
            pillarId: "hygiene",
            category: "Marble & Surface Care",
            tagline: "Crack repair, epoxy color-matching, and complete stone surface resuscitation.",
            description:
              "Master stone masons repairing chipped marble corners, filling open grout voids with tinted polyester resin, and complete floor leveling.",
            image: "/images/services/marble_restoration.jpg",
            badge: "Master Stonemasons",
            features: ["Color-matched epoxy resin patch repair", "Grout line renewal and regrouting", "Etch mark and chemical burn removal", "Complete surface resurfacing"],
          },
          {
            id: "stone-floor-care",
            name: "Stone Floor Care",
            slug: "marble-polishing",
            pillarId: "hygiene",
            category: "Marble & Surface Care",
            tagline: "Deep penetrating sealers protecting granite, travertine, and limestone.",
            description:
              "Sub-surface fluorochemical impregnators preventing red wine, coffee, and oil penetration into porous stone while maintaining vapor breathability.",
            image: "/images/services/stone_floor_care.jpg",
            badge: "Penetrating Sealer",
            features: ["Hydrophobic & oleophobic sealers", "Granite, travertine & limestone maintenance", "Vapor-permeable breathable protection", "Extends polishing lifecycle by years"],
          },
        ],
      },

      /* Category 2.7: Air & Environmental Hygiene */
      {
        id: "air-environmental-hygiene",
        name: "Air & Environmental Hygiene",
        pillarId: "hygiene",
        description:
          "Indoor Air Quality (IAQ) testing, HVAC chemical washing, kitchen duct hygiene, and UV-C air sterilizer installation.",
        image: "/images/services/air_quality_testing.jpg",
        services: [
          {
            id: "air-quality-testing",
            name: "Air Quality Testing",
            slug: "air-quality-testing",
            pillarId: "hygiene",
            category: "Air & Environmental Hygiene",
            tagline: "Calibrated sensor monitoring for PM2.5, VOCs, CO2, and airborne bacteria.",
            description:
              "Comprehensive indoor environmental baseline testing with calibrated digital air monitors generating compliance reports for BCA Green Mark audits.",
            image: "/images/services/air_quality_testing.jpg",
            badge: "BCA Green Mark",
            features: ["PM2.5, PM10 & particulate logging", "Total Volatile Organic Compounds (TVOCs)", "CO2, humidity & temperature profiling", "BCA Green Mark certified IAQ reports"],
          },
          {
            id: "indoor-air-quality-iaq-services",
            name: "Indoor Air Quality (IAQ) Services",
            slug: "air-quality-testing",
            pillarId: "hygiene",
            category: "Air & Environmental Hygiene",
            tagline: "Holistic indoor atmospheric remediation and allergen reduction.",
            description:
              "Targeted filtration upgrades, microbial air duct treatments, and air exchange optimization enhancing building tenant wellness and productivity.",
            image: "/images/services/indoor_air_quality_iaq_services.jpg",
            badge: "Healthy Workplace",
            features: ["Air exchange rate optimization", "HEPA & carbon filtration upgrades", "Elimination of Sick Building Syndrome", "Continuous environmental monitoring"],
          },
          {
            id: "kitchen-duct-hygiene",
            name: "Kitchen Duct Hygiene",
            slug: "dishwashing-kitchen",
            pillarId: "hygiene",
            category: "Air & Environmental Hygiene",
            tagline: "Airflow optimization and odor trap sanitation for F&B exhaust ducts.",
            description:
              "Degreasing internal exhaust duct walls, cleaning inline exhaust fans, and maintaining electrostatic precipitators (ESP) to ensure pure air discharge.",
            image: "/images/services/kitchen_duct_hygiene.jpg",
            badge: "Airflow & Odor Control",
            features: ["Electrostatic precipitator (ESP) cell cleaning", "Inline exhaust fan impeller degreasing", "Eliminates kitchen cooking odor escape", "Prevents grease accumulation fires"],
          },
          {
            id: "hvac-chemical-washing",
            name: "HVAC Chemical Washing",
            slug: "air-quality-testing",
            pillarId: "hygiene",
            category: "Air & Environmental Hygiene",
            tagline: "Deep chemical coil cleaning and drain pan sterilization for FCU & AHU units.",
            description:
              "Biodegradable alkaline chemical flushing of air handling cooling coils, removing thick biofilm slime, dust clogs, and mold colonies for 25% better energy efficiency.",
            image: "/images/services/hvac_chemical_washing.jpg",
            badge: "AHU / FCU Care",
            features: ["Cooling coil high-pressure chemical foam", "Condensate drain pan biocide tablets", "Blower wheel and motor degreasing", "Improves cooling power & cuts energy cost"],
          },
          {
            id: "air-hygiene-treatment",
            name: "Air Hygiene Treatment",
            slug: "air-quality-testing",
            pillarId: "hygiene",
            category: "Air & Environmental Hygiene",
            tagline: "Aerosolized enzyme and botanical biocide fogging inside central air ducts.",
            description:
              "Neutralizing airborne fungal spores, mold mustiness, and stale bacteria within central air conditioning distribution ductwork.",
            image: "/images/services/air_hygiene_treatment.jpg",
            badge: "Anti-Microbial Fog",
            features: ["Air duct interior aerosolization", "Kills black mold (Aspergillus) spores", "Long-lasting bacteriostatic barrier", "Non-toxic food-safe formulations"],
          },
          {
            id: "uv-c-air-sterilizer-installation",
            name: "UV-C Air Sterilizer Installation",
            slug: "air-quality-testing",
            pillarId: "hygiene",
            category: "Air & Environmental Hygiene",
            tagline: "254nm germicidal ultraviolet lamp integration inside AHU plenums.",
            description:
              "Installing commercial-grade UV-C irradiation lamps inside air handling units to continuously destroy 99.9% of viral and bacterial DNA in recirculated air.",
            image: "/images/services/uv_c_air_sterilizer_installation.jpg",
            badge: "254nm UV-C Germicidal",
            features: ["Continuous viral & bacterial DNA destruction", "Keeps AHU cooling coils permanently sterile", "Zero ozone emission certified bulbs", "Turnkey electrical installation & maintenance"],
          },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /*  PILLAR 3: OPHRON FACILITIES                                     */
  /* ---------------------------------------------------------------- */
  {
    id: "facilities",
    name: "OPHRON FACILITIES",
    title: "Facility, Property & Venue Services",
    tagline: "Integrated Facility Management, Rope Access, Post-Renovation & Specialized Detailing",
    description:
      "Comprehensive physical property care spanning skyscraper facades, high-capacity event venues, turnkey IFM Lite coordination, post-construction handovers, and luxury yacht detailing.",
    image: "/images/services/integrated_facility_management_ifm_lite.jpg",
    categories: [
      /* Category 3.1: Building & Exterior */
      {
        id: "building-exterior",
        name: "Building & Exterior",
        pillarId: "facilities",
        description:
          "IRATA rope access abseiling, BMU cradle operations, facade cladding restoration, and architectural glass detailing.",
        image: "/images/services/high_rise_facade_cleaning.jpg",
        services: [
          {
            id: "high-rise-facade-cleaning",
            name: "High-Rise Façade Cleaning",
            slug: "facade-cleaning",
            pillarId: "facilities",
            category: "Building & Exterior",
            tagline: "IRATA industrial rope access and BMU cradle facade maintenance.",
            description:
              "MOM-registered abseiling crews restoring architectural glass, aluminum composite panels, and exterior cladding from carbon fallout and tropical rain etching.",
            image: "/images/services/high_rise_facade_cleaning.jpg",
            badge: "IRATA Certified",
            features: ["Industrial rope access & abseiling crews", "BMU and motorized gondola operations", "Aluminum composite panel restoration", "MOM Work-At-Height (WAH) safety plan"],
          },
          {
            id: "high-rise-window-cleaning",
            name: "High-Rise Window Cleaning",
            slug: "facade-cleaning",
            pillarId: "facilities",
            category: "Building & Exterior",
            tagline: "Streak-free exterior window cleaning for commercial towers and penthouses.",
            description:
              "De-ionized pure water systems and precision squeegee techniques leaving crystalline, spot-free exterior glazing under direct sunlight.",
            image: "/images/services/high_rise_window_cleaning.jpg",
            badge: "Zero-Spot Glazing",
            features: ["Pure de-ionized water filtration", "Streak-free mineral spot removal", "Glass sealant protection application", "Scheduled quarterly facade programs"],
          },
          {
            id: "exterior-glass-cleaning",
            name: "Exterior Glass Cleaning",
            slug: "facade-cleaning",
            pillarId: "facilities",
            category: "Building & Exterior",
            tagline: "Ground and telescopic pole glass detailing up to 6 storeys.",
            description:
              "Carbon-fiber water-fed poles delivering spot-free rinse water to external canopies, skylights, and storefront glass without requiring scaffolding.",
            image: "/images/services/exterior_glass_cleaning.jpg",
            badge: "Water-Fed Pole Tech",
            features: ["Telescopic pole access up to 20 metres", "Zero scaffolding quick deployment", "Canopy and glass atrium cleaning", "Cost-effective exterior maintenance"],
          },
          {
            id: "high-level-cleaning",
            name: "High-Level Cleaning",
            slug: "facade-cleaning",
            pillarId: "facilities",
            category: "Building & Exterior",
            tagline: "Internal atrium dust removal, beam vacuuming, and high ceiling care.",
            description:
              "Boom lift and scissor lift operations detailing high interior rafters, lighting fixtures, acoustic ceiling baffles, and lobby chandeliers.",
            image: "/images/services/high_level_cleaning.jpg",
            badge: "Boom & Scissor Lift",
            features: ["MEWP certified boom lift operators", "High rafter & HVAC duct exterior vacuuming", "Lobby chandelier and skylight dusting", "Drop-zone safety cordons and nets"],
          },
          {
            id: "rope-access-cleaning",
            name: "Rope Access Cleaning",
            slug: "facade-cleaning",
            pillarId: "facilities",
            category: "Building & Exterior",
            tagline: "Dual-rope safety systems engineered for complex building geometries.",
            description:
              "Specialized abseiling for cantilevered structures, curved architectural domes, and tight light-wells where cradles cannot reach.",
            image: "/images/services/rope_access_cleaning.jpg",
            badge: "Complex Geometries",
            features: ["Dual-rope redundancy safety systems", "Access to tight light-wells & overhangs", "Full anchor bolt inspection and testing", "Zero ground obstruction or crane footprint"],
          },
        ],
      },

      /* Category 3.2: Events & Venues */
      {
        id: "events-venues",
        name: "Events & Venues",
        pillarId: "facilities",
        description:
          "Exhibition hall turnaround, live event porterage, pre-event detailing, and overnight venue turnover.",
        image: "/images/services/events_venue_maintenance.jpg",
        services: [
          {
            id: "events-venue-maintenance",
            name: "Events Venue Maintenance",
            slug: "events-venue",
            pillarId: "facilities",
            category: "Events & Venues",
            tagline: "Complete lifecycle hygiene for convention centres, ballrooms, and arenas.",
            description:
              "Rapid turnaround crews resetting 1000+ seat ballrooms in under 60 minutes with wide-area sweepers, carpet extractors, and live washroom attendants.",
            image: "/images/services/events_venue_maintenance.jpg",
            badge: "Turnkey Event Care",
            features: ["Rapid 60-minute ballroom resets", "Pre-event presentation polish", "Live attendee porterage & spill response", "Post-event heavy waste clearance"],
          },
          {
            id: "event-cleaning",
            name: "Event Cleaning",
            slug: "events-venue",
            pillarId: "facilities",
            category: "Events & Venues",
            tagline: "Dedicated uniformed teams supporting corporate galas, concerts, and festivals.",
            description:
              "Continuous waste bin clearance, VIP area upkeep, food court busing, and rapid spot cleaning throughout live event operating hours.",
            image: "/images/services/event_cleaning.jpg",
            badge: "Live Operations",
            features: ["Continuous trash bin clearing & liner change", "VIP lounge & media room attendants", "Rapid spill containment", "Uniformed, courteous on-site crews"],
          },
          {
            id: "exhibition-hall-cleaning",
            name: "Exhibition Hall Cleaning",
            slug: "events-venue",
            pillarId: "facilities",
            category: "Events & Venues",
            tagline: "Industrial scrubber-drier operation for mega trade shows and conventions.",
            description:
              "Managing booth setup cardboard recycling, aisle sweeping, trade show floor maintenance, and rapid post-exhibition strip-down.",
            image: "/images/services/exhibition_hall_cleaning.jpg",
            badge: "Mega Conventions",
            features: ["Ride-on industrial floor scrubbers", "Exhibition booth trash management", "Aisle carpet vacuuming & tape removal", "Loading dock traffic area clearing"],
          },
          {
            id: "post-event-cleanup",
            name: "Post-Event Cleanup",
            slug: "events-venue",
            pillarId: "facilities",
            category: "Events & Venues",
            tagline: "Heavy waste segregation, breakdown assistance, and full floor restoration.",
            description:
              "Night-shift teams dismantling trash volumes, sorting recyclables for ESG compliance, and performing deep carpet and floor restoration.",
            image: "/images/services/post_event_cleanup.jpg",
            badge: "ESG Waste Sorting",
            features: ["Bulk waste segregation & compacting", "Adhesive floor tape & scuff removal", "Carpet thermal hot-water extraction", "Signed venue handover checklist"],
          },
          {
            id: "overnight-venue-turnover",
            name: "Overnight Venue Turnover",
            slug: "events-venue",
            pillarId: "facilities",
            category: "Events & Venues",
            tagline: "High-speed overnight turnaround between consecutive booking dates.",
            description:
              "Intensive night-shift crews resetting multi-hall venues with deep floor scrubbing, stage buffing, and washroom restocking ready for 7:00 AM doors.",
            image: "/images/services/overnight_venue_turnover.jpg",
            badge: "Overnight Blitz",
            features: ["Full venue reset by 07:00 AM", "Stage polishing and chair realignment", "Complete washroom deep sanitization", "Supervisor quality inspection guarantee"],
          },
          {
            id: "venue-sanitization",
            name: "Venue Sanitization",
            slug: "disinfecting-services",
            pillarId: "facilities",
            category: "Events & Venues",
            tagline: "Whole-facility misting between massive public gatherings.",
            description:
              "ULV fogging and antimicrobial misting across seats, armrests, handrails, and turnstiles protecting thousands of incoming attendees.",
            image: "/images/services/venue_sanitization.jpg",
            badge: "Mass Gathering Safety",
            features: ["Whole-arena volumetric misting", "Seating & armrest antimicrobial spray", "Turnstile & ticketing kiosk disinfection", "Public health compliant certification"],
          },
        ],
      },

      /* Category 3.3: Facility Management */
      {
        id: "facility-management",
        name: "Facility Management",
        pillarId: "facilities",
        description:
          "Integrated Facility Management (IFM Lite), contractor coordination, waste management, and minor handyman maintenance.",
        image: "/images/services/integrated_facility_management_ifm_lite.jpg",
        services: [
          {
            id: "integrated-facility-management-ifm-lite",
            name: "Integrated Facility Management (IFM) Lite",
            slug: "facilities",
            pillarId: "facilities",
            category: "Facility Management",
            tagline: "Single-contract operational management unifying cleaning, repairs, and vendors.",
            description:
              "Streamlining vendor management, contract administration, SLA tracking, and building upkeep under one transparent monthly agreement.",
            image: "/images/services/integrated_facility_management_ifm_lite.jpg",
            badge: "Single Vendor SLA",
            features: ["Consolidated single-point billing", "Daily facility supervisor oversight", "Digital SLA ticketing & audit logs", "Significant operational cost savings"],
          },
          {
            id: "facility-maintenance-coordination",
            name: "Facility Maintenance Coordination",
            slug: "facilities",
            pillarId: "facilities",
            category: "Facility Management",
            tagline: "Scheduling and supervising specialist MEP, lift, and HVAC contractors.",
            description:
              "On-site supervisors managing sub-contractor permits, hot work licenses, security sign-ins, and inspection sign-offs on behalf of building owners.",
            image: "/images/services/facility_maintenance_coordination.jpg",
            badge: "Contractor Oversight",
            features: ["Work permit & risk assessment verification", "Escorting MEP & elevator technicians", "Contractor performance validation", "Digital work order completion logs"],
          },
          {
            id: "waste-management-coordination",
            name: "Waste Management Coordination",
            slug: "facilities",
            pillarId: "facilities",
            category: "Facility Management",
            tagline: "General waste hauling, cardboard recycling, and food compost logistics.",
            description:
              "Managing bin center hygiene, scheduled refuse compaction, licensed waste hauler pickups, and tenant recycling initiatives.",
            image: "/images/services/waste_management_coordination.jpg",
            badge: "Licensed Hauling",
            features: ["Bin center daily high-pressure washdown", "Cardboard baling & recycling sorting", "NEA licensed waste hauler scheduling", "ESG waste diversion metrics reporting"],
          },
          {
            id: "pest-control-coordination",
            name: "Pest Control Coordination",
            slug: "facilities",
            pillarId: "facilities",
            category: "Facility Management",
            tagline: "Partnered NEA-licensed vector control and scheduled baiting.",
            description:
              "Coordinating monthly rodent, cockroach, fly, and mosquito prevention programs with certified vector control partners, maintaining 100% audit pass rates.",
            image: "/images/services/pest_control_coordination.jpg",
            badge: "NEA Vector Control",
            features: ["Rodent bait station monitoring", "Cockroach gel baiting & misting", "Drain larval oiling & mosquito control", "SFA/NEA pest audit compliance file"],
          },
          {
            id: "minor-handyman-maintenance",
            name: "Minor Handyman Maintenance",
            slug: "facilities",
            pillarId: "facilities",
            category: "Facility Management",
            tagline: "Rapid response for lighting replacement, door hinges, and plumbing leaks.",
            description:
              "Skilled on-site handyworkers resolving cosmetic wall defects, fixture loose screws, silicon re-caulking, and sanitary plumbing fixes immediately.",
            image: "/images/services/minor_handyman_maintenance.jpg",
            badge: "Rapid Response",
            features: ["Light tube & ballast replacements", "Door closer adjustment & hinge oiling", "Silicon sealant touch-ups in washrooms", "Drywall patch & spot painting"],
          },
          {
            id: "daily-facility-cleaning",
            name: "Daily Facility Cleaning",
            slug: "commercial-cleaning",
            pillarId: "facilities",
            category: "Facility Management",
            tagline: "Structured daily housekeeping for commercial lobbies, car parks, and walkways.",
            description:
              "Sweeping, mechanical scrubbing, glass buffing, and landscaped walkway cleaning preserving building asset value and tenant satisfaction.",
            image: "/images/services/daily_facility_cleaning.jpg",
            badge: "Asset Preservation",
            features: ["Car park sweeping & oil stain degreasing", "Lobby turnstile and glass door care", "Mailroom & lift car maintenance", "Daily supervisor inspection walk"],
          },
        ],
      },

      /* Category 3.4: Post-Construction */
      {
        id: "post-construction",
        name: "Post-Construction",
        pillarId: "facilities",
        description:
          "Post-renovation deep cleaning, construction dust removal, paint/cement stripping, and handover sanitization.",
        image: "/images/services/post_renovation_deep_cleaning.jpg",
        services: [
          {
            id: "post-renovation-deep-cleaning",
            name: "Post-Renovation Deep Cleaning",
            slug: "post-renovation-cleaning",
            pillarId: "facilities",
            category: "Post-Construction",
            tagline: "Transforming raw renovation sites into pristine move-in-ready spaces.",
            description:
              "Top-to-bottom removal of fine drywall dust, sawdust, packaging materials, and chemical fumes across newly fitted hotels, offices, and homes.",
            image: "/images/services/post_renovation_deep_cleaning.jpg",
            badge: "Move-In Ready",
            features: ["Top-to-bottom fine dust vacuuming", "Cabinet interior and drawer wiping", "Sanitization of brand new appliances", "Complete move-in presentation standard"],
          },
          {
            id: "construction-dust-removal",
            name: "Construction Dust Removal",
            slug: "post-renovation-cleaning",
            pillarId: "facilities",
            category: "Post-Construction",
            tagline: "HEPA-filtered extraction capturing microscopic silica and gypsum dust.",
            description:
              "Multi-pass HEPA air scrubbers and microfibre damp wiping preventing fine construction dust from recirculating into air conditioning channels.",
            image: "/images/services/construction_dust_removal.jpg",
            badge: "HEPA Filtration",
            features: ["Industrial 3-stage HEPA vacuums", "Ceiling void and cable tray vacuuming", "Air grille and diffuser dusting", "Prevents HVAC filter clogging"],
          },
          {
            id: "paint-spot-removal",
            name: "Paint Spot Removal",
            slug: "post-renovation-cleaning",
            pillarId: "facilities",
            category: "Post-Construction",
            tagline: "Precision solvent removal of paint overspray and lacquer splatters.",
            description:
              "Specialized safe solvents and razor scraping techniques removing paint spots from architectural glass, aluminum window frames, and marble floors without scratching.",
            image: "/images/services/paint_spot_removal.jpg",
            badge: "Scratch-Free Method",
            features: ["Paint overspray razor removal from glass", "Solvent wiping of aluminum window frames", "Tile and stone safe stripping solutions", "Protective masking tape residue removal"],
          },
          {
            id: "cement-residue-cleaning",
            name: "Cement Residue Cleaning",
            slug: "post-renovation-cleaning",
            pillarId: "facilities",
            category: "Post-Construction",
            tagline: "Acid-free descaling of grout haze, cement splashes, and adhesive deposits.",
            description:
              "Buffered organic descalers breaking down stubborn cement slurry and grout haze on porcelain, ceramic, and homogeneous tiles without damaging grout lines.",
            image: "/images/services/cement_residue_cleaning.jpg",
            badge: "Grout Haze Removal",
            features: ["Organic buffered cement descaler", "Rotary tile machine scouring", "Safe on textured architectural tiles", "Eliminates white powdery grout haze"],
          },
          {
            id: "final-handover-cleaning",
            name: "Final Handover Cleaning",
            slug: "post-renovation-cleaning",
            pillarId: "facilities",
            category: "Post-Construction",
            tagline: "Flawless presentation for landlord, developer, and tenant key handovers.",
            description:
              "Meticulous quality inspection pass checking every window pane, polished floor, sanitary fitting, and joinery surface for 100% defect-free handover.",
            image: "/images/services/final_handover_cleaning.jpg",
            badge: "Defect-Free Guarantee",
            features: ["Joint inspection with main contractors", "Streak-free polishing on all fixtures", "Protective blue film removal from fittings", "Signed client handover certificate"],
          },
          {
            id: "handover-sanitization",
            name: "Handover Sanitization",
            slug: "disinfecting-services",
            pillarId: "facilities",
            category: "Post-Construction",
            tagline: "Terminal microbial fogging and air purification before tenant occupancy.",
            description:
              "Whole-premise ULV biocide fogging eliminating odors, chemical VOC off-gassing, and germs before the new tenants move in.",
            image: "/images/services/handover_sanitization.jpg",
            badge: "Pure Occupancy",
            features: ["Whole-unit ULV biocide fogging", "Formaldehyde & VOC odor neutralization", "Ready for immediate VIP occupancy", "Health & hygiene certificate issued"],
          },
        ],
      },

      /* Category 3.5: Specialized Facilities (Marina & Yacht) */
      {
        id: "specialized-facilities",
        name: "Specialized Facilities (Marina & Yacht)",
        pillarId: "facilities",
        description:
          "Marina & luxury yacht detailing, teak wood restoration, hull descaling, and marine upholstery care.",
        image: "/images/services/marina_yacht_detailing.jpg",
        services: [
          {
            id: "marina-yacht-detailing",
            name: "Marina & Yacht Detailing",
            slug: "yacht-marina-detailing",
            pillarId: "facilities",
            category: "Specialized Facilities",
            tagline: "Premium marine-grade detailing for superyachts and marina vessels in Singapore.",
            description:
              "Topside gelcoat polishing, stainless steel chrome brightening, salt descaling, and high-gloss marine ceramic sealant applications at ONE°15 Marina and Keppel Bay.",
            image: "/images/services/marina_yacht_detailing.jpg",
            badge: "Marine Grade",
            features: ["Topside gelcoat compounding & polishing", "Stainless steel railing chrome buffing", "Salt crust descaling & spot-free wash", "Marine ceramic coating protection"],
          },
          {
            id: "yacht-interior-deep-cleaning",
            name: "Yacht Interior Deep Cleaning",
            slug: "yacht-marina-detailing",
            pillarId: "facilities",
            category: "Specialized Facilities",
            tagline: "Luxury cabin detailing, salon leather conditioning, and galley sanitization.",
            description:
              "High-spec detailing of master staterooms, salon woodwork, marble ensuite heads, and galley refrigeration with marine-safe eco-biocides.",
            image: "/images/services/yacht_interior_deep_cleaning.jpg",
            badge: "Superyacht Cabin",
            features: ["Fine high-gloss wood lacquer polishing", "Ensuite marble bathroom descaling", "Mattress and berth steam extraction", "Marine galley deep sanitization"],
          },
          {
            id: "teak-wood-treatment",
            name: "Teak Wood Treatment",
            slug: "yacht-marina-detailing",
            pillarId: "facilities",
            category: "Specialized Facilities",
            tagline: "2-stage teak restoration, gentle sanding, brightening, and marine sealing.",
            description:
              "Non-destructive chemical washing of weathered silvered teak decks, restorative wood brightening, and natural marine teak oil sealing.",
            image: "/images/services/teak_wood_treatment.jpg",
            badge: "Teak Deck Master",
            features: ["Acid-free 2-stage teak cleaning", "Grain-safe restorative brightening", "Caulking seam inspection and detailing", "Deep penetrating marine teak oil seal"],
          },
          {
            id: "hull-descaling",
            name: "Hull Descaling",
            slug: "yacht-marina-detailing",
            pillarId: "facilities",
            category: "Specialized Facilities",
            tagline: "Waterline scum, barnacle scale, and marine growth acid-safe removal.",
            description:
              "Safe removal of yellow waterline stains, mineral salt deposits, and exhaust carbon from gelcoat and fiberglass hulls.",
            image: "/images/services/hull_descaling.jpg",
            badge: "Gelcoat Safe",
            features: ["Waterline yellow stain removal", "Algae and mineral scale descaling", "Biodegradable marine-safe chemicals", "High-gloss protective wax finish"],
          },
          {
            id: "yacht-upholstery-maintenance",
            name: "Yacht Upholstery Maintenance",
            slug: "yacht-marina-detailing",
            pillarId: "facilities",
            category: "Specialized Facilities",
            tagline: "Sunbed mildew treatment, marine vinyl conditioning, and canvas care.",
            description:
              "Restoring outdoor marine vinyl cushions, sunbeds, and bimini canvas from salt damage, mold mildew, and UV fading.",
            image: "/images/services/yacht_upholstery_maintenance.jpg",
            badge: "Marine Vinyl & Canvas",
            features: ["Mildew stain removal from sunbeds", "UV inhibitor marine vinyl conditioner", "Waterproofing canvas & bimini tops", "Corrosion-resistant zipper maintenance"],
          },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /*  PILLAR 4: OPHRON TECHNOLOGY                                     */
  /* ---------------------------------------------------------------- */
  {
    id: "technology",
    name: "OPHRON TECHNOLOGY",
    title: "SaaS, AI Automation & Operations Software",
    tagline: "Intelligent Operations Software, Smart POS, AI Workforce & Real-Time Dashboards",
    description:
      "Next-generation digital infrastructure turning operational chaos into transparent data with AI shift scheduling, IoT washroom monitors, and automated compliance reporting.",
    image: "/images/services/digital_reporting_systems.jpg",
    categories: [
      {
        id: "technology-solutions",
        name: "Hospitality & Facility Operations Technology",
        pillarId: "technology",
        description:
          "Proprietary smart hardware, AI automated dispatch, digital auditing systems, and live operations command dashboards.",
        image: "/images/services/digital_reporting_systems.jpg",
        services: [
          {
            id: "smart-restaurant-hotel-tech",
            name: "Smart Restaurant & Hotel Technology",
            slug: "technology",
            pillarId: "technology",
            category: "Technology Solutions",
            tagline: "Modern touchscreen POS systems, kitchen display units, and guest kiosks.",
            description:
              "Integrated point-of-sale hardware, cloud kitchen order dispatch, and self-service hotel check-in kiosks accelerating guest turnaround and table turnover.",
            image: "/images/services/smart_restaurant_hotel_tech.jpg",
            badge: "Smart POS & KDS",
            features: ["Cloud-connected dual-screen POS registers", "Kitchen Display System (KDS) order routing", "Automated table turnover analytics", "Integrated EFTPOS payment gateway"],
          },
          {
            id: "ai-operations-automation",
            name: "AI Automation & Operations Software",
            slug: "technology",
            pillarId: "technology",
            category: "Technology Solutions",
            tagline: "Predictive AI roster optimization and automated workflow dispatch.",
            description:
              "Machine-learning algorithms forecasting banquet covers, optimizing cleaner deployments, and auto-dispatching work orders to prevent facility bottlenecks.",
            image: "/images/services/ai_operations_automation.jpg",
            badge: "AI Shift Engine",
            features: ["Predictive footfall & cover forecasting", "Automated cleaner dispatch algorithms", "Equipment anomaly alert integration", "Real-time cost per labor hour tracking"],
          },
          {
            id: "digital-reporting-systems",
            name: "Digital Reporting Systems & Compliance",
            slug: "technology",
            pillarId: "technology",
            category: "Technology Solutions",
            tagline: "Paperless supervisor inspection checklists with photo timestamps.",
            description:
              "Mobile audit apps replacing clipboards with digital checklists, GPS-stamped photo logs, and automated PDF compliance reports ready for SFA & NEA audits.",
            image: "/images/services/digital_reporting_systems.jpg",
            badge: "Digital Audit Trail",
            features: ["Paperless mobile inspection forms", "Timestamped before/after photo capture", "Instant SFA/NEA audit-ready PDF export", "Supervisor digital signature sign-offs"],
          },
          {
            id: "workforce-management-solutions",
            name: "Workforce Management & Dispatch",
            slug: "technology",
            pillarId: "technology",
            category: "Technology Solutions",
            tagline: "Biometric mobile clock-in, shift allocation, and SLA tracking.",
            description:
              "Full workforce scheduling software with facial recognition clock-in, live GPS site geofencing, and automatic overtime calculations for hospitality staff.",
            image: "/images/services/workforce_management_solutions.jpg",
            badge: "Biometric Attendance",
            features: ["Facial recognition mobile clock-in", "GPS geofenced site attendance verification", "Automated shift swapping & roster notifications", "Overtime & payroll integration export"],
          },
          {
            id: "real-time-customer-dashboards",
            name: "Real-Time GM & Customer Dashboards",
            slug: "technology",
            pillarId: "technology",
            category: "Technology Solutions",
            tagline: "Live multi-property KPI monitoring and SLA performance screens.",
            description:
              "Executive web portal providing General Managers and Asset Owners with live visibility into clean scores, incident resolution times, and vendor SLAs.",
            image: "/images/services/real_time_customer_dashboards.jpg",
            badge: "Executive Command",
            features: ["Multi-property live operations map", "SLA contract compliance percentages", "Instant work order escalation button", "Quarterly cost savings benchmark data"],
          },
          {
            id: "sales-marketing-technology",
            name: "Sales & Marketing Hospitality Tech",
            slug: "technology",
            pillarId: "technology",
            category: "Technology Solutions",
            tagline: "Automated guest CRM loyalty terminals and digital menu analytics.",
            description:
              "Customer relationship management tools tracking diner preferences, automated SMS feedback surveys, and dynamic digital menu displays.",
            image: "/images/services/sales_marketing_technology.jpg",
            badge: "Guest CRM Engine",
            features: ["Guest loyalty & repeat diner recognition", "Automated 5-star review collection prompts", "Digital menu item profitability analysis", "Direct reservation marketing campaigns"],
          },
          {
            id: "iot-facility-monitoring",
            name: "IoT Sensor & Facility Monitoring",
            slug: "technology",
            pillarId: "technology",
            category: "Technology Solutions",
            tagline: "Smart washroom traffic counters and environmental odor sensors.",
            description:
              "Connected wireless IoT sensors detecting washroom footfall thresholds, ammonia levels, and soap dispenser levels to trigger on-demand cleaner dispatch.",
            image: "/images/services/iot_facility_monitoring.jpg",
            badge: "Smart Restroom IoT",
            features: ["People-counter infrared door sensors", "Ammonia & VOC odor spike detection", "Consumables auto-refill alert triggers", "Dynamic cleaning on-demand routing"],
          },
        ],
      },
    ],
  },
];

/* Flat catalog helper of all 45+ specialized services */
export const ALL_SERVICES_CATALOG: ServiceSubItem[] = BUSINESS_PILLARS_DATA.flatMap((pillar) =>
  pillar.categories.flatMap((cat) => cat.services)
);

/* ------------------------------------------------------------------ */
/*  FULL STANDALONE SERVICE PAGES (Interactive Modal / Detail Routes) */
/* ------------------------------------------------------------------ */

export const OPHRON_SERVICE_PAGES: Record<string, ServicePageData> = {
  /* 01. DISINFECTING AND DECONTAMINATING SERVICES */
  "disinfecting-services": {
    slug: "disinfecting-services",
    crumb: "Disinfecting & Decontamination",
    pillarId: "hygiene",
    pillarName: "OPHRON HYGIENE",
    category: "Disinfection & Decontamination",
    heroTitle: "Disinfecting And Decontaminating Services",
    heroLead:
      "Scheduled and emergency microbial suppression, electrostatic spraying, and NEA-certified terminal decontamination for healthcare, hospitality, and corporate environments.",
    heroImage: "/images/services/disinfection_services.jpg",
    badge: "NEA Certified",
    sections: [
      {
        kind: "overview",
        title: "Hospital-Grade Disinfection & Decontamination Protocols",
        image: "/images/services/disinfection_services.jpg",
        imageAlt: "Technician in protective gear performing electrostatic disinfection",
        paragraphs: [
          "Cleaning removes visible debris; decontamination neutralizes invisible pathogens, bacteria, and viral bio-loads. OPHRON pairs electrostatic sprayers, thermal foggers, and ULV cold fogging systems with hospital-grade, NEA-approved broad-spectrum biocides.",
          "Every decontamination cycle closes with certified documentation — chemical batch logs, contact dwell-time records, and supervisor sign-offs — providing an unshakeable audit trail for SFA, MOH, and NEA compliance inspections.",
        ],
        bullets: [
          "Electrostatic spraying & whole-facility ULV cold fogging",
          "NEA-approved hospital-grade broad spectrum biocides",
          "High-touch surface sanitisation on calibrated schedules",
          "24/7 rapid emergency outbreak containment response",
        ],
      },
      {
        kind: "value",
        title: "Why Scheduled Decontamination Matters",
        lead: "Decontamination is a continuous operational firewall protecting your business against health incidents, customer churn, and mandatory closure orders.",
        items: [
          {
            title: "Microbial Suppression",
            text: "Maintains an active pathogen-resistant baseline across high-traffic touchpoints and airborne recirculated volumes.",
          },
          {
            title: "Zero Operational Downtime",
            text: "Scheduled off-peak applications ensure safe re-entry windows without interrupting customer service hours.",
          },
          {
            title: "Full Regulatory Compliance",
            text: "Complete technician logs and chemical safety data sheets satisfy statutory health requirements instantly.",
          },
          {
            title: "Staff & Guest Reassurance",
            text: "Visible hygiene certification badges elevate guest confidence in luxury dining and hotel environments.",
          },
        ],
      },
      {
        kind: "grid",
        title: "Decontamination Delivery Protocols",
        intro: "Calibrated chemical delivery engineered for maximum surface dwell and zero residue.",
        cols: 3,
        items: [
          { title: "Electrostatic Spraying", text: "Positively charged droplets wrap 360 degrees around fixtures and shadow areas." },
          { title: "ULV Cold Fogging", text: "Aerosolized micro-droplets penetrate ceiling voids, upholstery, and air conditioning channels." },
          { title: "High-Touch Surface Detailing", text: "Targeted wipe-down of lift buttons, handles, POS terminals, and handrails." },
          { title: "Emergency Bio-Remediation", text: "Immediate terminal sterilisation following confirmed viral or pathogen exposures." },
          { title: "Food-Safe Sanitisation", text: "No-rinse formulations approved for culinary prep counters and dish-pits." },
          { title: "ATP Swab Verification", text: "Luminometer swab testing generating objective cleanliness scores before and after treatment." },
        ],
      },
    ],
  },

  /* 02. MICROFIBRE CONCEPT CLEANING */
  "microfibre-cleaning": {
    slug: "microfibre-cleaning",
    crumb: "Microfibre Concept",
    pillarId: "hygiene",
    pillarName: "OPHRON HYGIENE",
    category: "Commercial Hygiene",
    heroTitle: "Microfibre Concept Cleaning",
    heroLead:
      "Advanced 4-zone colour-coded microfibre technology capturing 99% of surface bio-load without chemical cross-contamination across luxury hotels, corporate towers, and clinics.",
    heroImage: "/images/services/surface_sanitization.jpg",
    badge: "4-Zone Color Code",
    sections: [
      {
        kind: "overview",
        title: "Zoned Microfibre Hygiene Architecture",
        image: "/images/services/surface_sanitization.jpg",
        imageAlt: "Colour-coded microfibre cleaning system in luxury hospitality venue",
        paragraphs: [
          "Traditional mop-and-bucket cleaning often spreads contaminants from one surface to another. OPHRON's Microfibre Concept Cleaning implements a strict 4-zone colour-coded system that isolates washrooms, kitchens, executive suites, and general areas.",
          "Our split-fiber ultra-microfibre materials mechanically trap microscopic dirt particles and bacteria without over-relying on aggressive chemicals, preserving delicate luxury surfaces, marble, and woodwork while achieving clinical-grade cleanliness.",
        ],
        bullets: [
          "Strict 4-colour zoning protocol preventing cross-contamination",
          "High-density split-microfibre capturing 99.4% of surface microbes",
          "Reduced chemical footprint and streak-free finish on architectural glass & stone",
          "Thermal laundering disinfection cycles exceeding 70°C for all textiles",
        ],
      },
      {
        kind: "grid",
        title: "The 4-Zone Colour Coding Discipline",
        intro: "Zero tolerance for cross-zone tool contamination across commercial operations.",
        cols: 2,
        items: [
          { title: "🔴 Red Protocol — High-Risk Restroom Fixtures", text: "Exclusively reserved for toilets, urinals, and sanitary disposal zones to eliminate cross-spread." },
          { title: "🟡 Yellow Protocol — Specialized & Washroom Surfaces", text: "Designated for vanity sinks, mirrors, tiles, partitions, and washroom dispensers." },
          { title: "🔵 Blue Protocol — General Areas & Executive Desks", text: "Utilized for boardroom tables, office desks, reception counters, and guestroom furniture." },
          { title: "🟢 Green Protocol — Kitchen & Food Prep Zones", text: "Certified for culinary prep lines, dining tables, buffet counters, and bar stations." },
        ],
      },
    ],
  },

  /* 03. CLEANROOM & HEALTHCARE INSTITUTION MAINTENANCE */
  "cleanroom-healthcare": {
    slug: "cleanroom-healthcare",
    crumb: "Cleanroom & Healthcare",
    pillarId: "hygiene",
    pillarName: "OPHRON HYGIENE",
    category: "Healthcare & Cleanroom",
    heroTitle: "Cleanroom And Healthcare Institution Maintenance",
    heroLead:
      "ISO Class 5–8 controlled environment maintenance, sterile surgical facility cleaning, and clinical institutional support meeting rigorous MOH and HSA standards.",
    heroImage: "/images/services/cleanroom_maintenance.jpg",
    badge: "ISO 14644 Compliant",
    sections: [
      {
        kind: "overview",
        title: "Clinical Environment & Cleanroom Maintenance",
        image: "/images/services/cleanroom_maintenance.jpg",
        imageAlt: "Cleanroom technician in full sterile PPE maintaining medical facility",
        paragraphs: [
          "Healthcare institutions, surgical day centres, biomedical laboratories, and pharmaceutical cleanrooms require zero tolerance for airborne particulates or microbial colonies. OPHRON deploys specially certified cleanroom personnel trained in ISO 14644 standards.",
          "Our technicians utilize non-shedding lint-free equipment, HEPA-filtered vacuum containment, and validated sporicidal chemistries to maintain positive and negative pressure environments under strict chain-of-custody logging.",
        ],
        bullets: [
          "ISO 14644 Class 5 to 8 cleanroom certified maintenance protocols",
          "HEPA particulate vacuuming and sterile barrier wipe-downs",
          "Terminal cleaning for surgical suites, endoscopy rooms & day clinics",
          "Daily particulate counts and bio-burden logging compliance",
        ],
      },
      {
        kind: "grid",
        title: "Sterile Facility Disciplines",
        cols: 3,
        items: [
          { title: "Terminal Suite Sterilisation", text: "Complete top-to-bottom bio-decontamination between medical procedures." },
          { title: "Air Grille & HEPA Care", text: "Specialized vacuuming and sanitising of laminar flow hoods and ceiling HEPA grilles." },
          { title: "Conductive & Anti-Static Floor Care", text: "Specialized ESD wax and neutral conductive cleaning avoiding static charge buildup." },
          { title: "Sterile Air Lock Management", text: "Sticky mat replacements, gowning area sanitisation, and pressure differential checks." },
          { title: "Sharps & Clinical Waste Coordination", text: "Secure handling protocols coordinating with certified bio-hazardous waste haulers." },
          { title: "Traceable Audit Documentation", text: "Pre-printed batch and swab verification sheets stored for regulatory review." },
        ],
      },
    ],
  },

  /* 04. CARPET & UPHOLSTERY MAINTENANCE SERVICES */
  "carpet-upholstery": {
    slug: "carpet-upholstery",
    crumb: "Carpet & Upholstery",
    pillarId: "hygiene",
    pillarName: "OPHRON HYGIENE",
    category: "Carpet & Upholstery",
    heroTitle: "Carpet And Upholstery Maintenance Services",
    heroLead:
      "Deep hot-water thermal extraction, encapsulation shampooing, stain removal, and fabric protection restoring luxury hotel suites, ballrooms, and corporate offices.",
    heroImage: "/images/services/carpet_cleaning.jpg",
    badge: "80°C Thermal Extraction",
    sections: [
      {
        kind: "overview",
        title: "Industrial Fabric & Carpet Restoration",
        image: "/images/services/carpet_cleaning.jpg",
        imageAlt: "Professional industrial carpet steam extraction on luxury carpet",
        paragraphs: [
          "Commercial carpets and luxury upholstery bear the daily brunt of foot traffic, beverage spills, and humidity. Without periodic deep extraction, grit settles into fiber roots, causing premature abrasion, mold spores, and persistent odors.",
          "OPHRON's restorative fabric care utilizes heavy-duty truck-mount and dual-motor extraction equipment operating at 80°C thermal water temperatures to flush out deep-seated grime and allergens without over-wetting fibers.",
        ],
        bullets: [
          "Deep thermal hot-water extraction flushing fiber roots",
          "Low-moisture encapsulation technology for rapid 2-hour drying turnaround",
          "Targeted stain removal for tannins, wine, coffee, grease, and ink",
          "Fluoropolymer fabric protector application resisting future spills",
        ],
      },
      {
        kind: "grid",
        title: "Specialized Fabric Care Methodologies",
        cols: 3,
        items: [
          { title: "Thermal Extraction", text: "High-pressure injection of conditioned rinse water paired with immediate high-CFM vacuum recovery." },
          { title: "Dry Encapsulation Shampooing", text: "Polymeric crystallising chemistry capturing soil in micro-crystals for rapid commercial turnaround." },
          { title: "Velvet & Fine Fabric Detailing", text: "Hand-tooled extraction for delicate hospitality banquet chairs and acoustic wall panels." },
          { title: "Anti-Microbial & Odour Neutralisation", text: "Enzymatic treatments targeting humidity mildew, spills, and organic bacteria." },
          { title: "Carpet Pile Grooming", text: "Mechanical rake realignment restoring high-density wool and nylon pile fullness." },
          { title: "Fabric Shield Sealing", text: "Invisible hydrophobic barrier preventing liquid penetration into fibers." },
        ],
      },
    ],
  },

  /* 05. POWDER & DIAMOND POLISHING ON ALL TYPES OF MARBLES */
  "marble-polishing": {
    slug: "marble-polishing",
    crumb: "Marble & Stone Polishing",
    pillarId: "hygiene",
    pillarName: "OPHRON HYGIENE",
    category: "Marble & Surface Care",
    heroTitle: "Powder And Diamond Polishing On All Types Of Marbles",
    heroLead:
      "Planetary diamond grinding, crystallization, and oxalic powder polishing restoring mirror-like reflection, scratch-free brilliance, and slip resistance on luxury natural stone.",
    heroImage: "/images/services/marble_polishing.jpg",
    badge: "Diamond 50-3000 Grit",
    sections: [
      {
        kind: "overview",
        title: "Master Stone Restoration & Mirror Crystallization",
        image: "/images/services/marble_polishing.jpg",
        imageAlt: "High gloss diamond polished luxury marble floor in 5-star hotel lobby",
        paragraphs: [
          "Natural stone surfaces such as Italian marble, travertine, terrazzo, and granite are signature statements in luxury hotels and flagship offices. High foot traffic causes dull traffic lanes, micro-scratches, and chemical etching that ordinary mopping cannot fix.",
          "OPHRON's master stone masons deploy planetary weighted rotary machines utilizing resin-bonded diamond abrasives ranging from 50 to 3000 grit, followed by thermochemical crystallization and Italian oxalic powder honing to achieve high-depth specular gloss.",
        ],
        bullets: [
          "Multi-stage resin-bonded diamond disc honing (50 to 3000 grit)",
          "Thermochemical crystallization creating a hardened, scratch-resistant fluorosilicate layer",
          "Lippage leveling and precision grout joint restoration",
          "Hydrophobic and oleophobic deep penetrating stone sealers",
        ],
      },
      {
        kind: "grid",
        title: "Stone Types & Restorative Solutions",
        cols: 3,
        items: [
          { title: "Italian Marble (Carrara, Statuario)", text: "Low-acid diamond honing and micro-powder finishing achieving reflective mirror shine." },
          { title: "Granite & Dense Igneous Stone", text: "Heavy planetary diamond grinding and resin pad polishing for long-lasting hardness." },
          { title: "Terrazzo & Agglomerate", text: "Coarse grinding to expose pristine aggregate, seamless patch repair, and crystallization." },
          { title: "Travertine & Limestone", text: "Cavity filling with matching resin epoxies followed by matte or semi-gloss diamond honing." },
          { title: "Slip-Resistance Certification", text: "Ensuring polished surfaces meet international pendulum slip resistance standards." },
          { title: "Deep Penetrating Sealers", text: "Sub-surface impregnators preventing oil, red wine, and coffee stain absorption." },
        ],
      },
    ],
  },

  /* 06. HIGH-RISE FACADE CLEANING */
  "facade-cleaning": {
    slug: "facade-cleaning",
    crumb: "High-Rise Facade",
    pillarId: "facilities",
    pillarName: "OPHRON FACILITIES",
    category: "Building & Exterior",
    heroTitle: "High-Rise Facade Cleaning",
    heroLead:
      "IRATA-certified industrial rope access (abseiling), BMU cradle systems, and elevated boom lifts for architectural glass, aluminum cladding, and building exterior restoration.",
    heroImage: "/images/services/high_rise_facade_cleaning.jpg",
    badge: "IRATA Certified",
    sections: [
      {
        kind: "overview",
        title: "High-Access Architectural Glass & Cladding Detailing",
        image: "/images/services/high_rise_facade_cleaning.jpg",
        imageAlt: "High-rise modern skyscraper glass facade under blue sky",
        paragraphs: [
          "External facades are subjected to Singapore's tropical rain, industrial carbon fallout, and intense UV rays, causing mineral etching and dull oxidisation on glass panels and aluminum composite cladding.",
          "OPHRON's exterior maintenance team comprises MOM-registered, IRATA-certified rope access specialists, cradle operators, and boom lift teams equipped with ultra-pure de-ionized water filtration systems that leave spotless, hydrophobic architectural surfaces.",
        ],
        bullets: [
          "IRATA-certified industrial rope access and abseiling crews",
          "BMU (Building Maintenance Unit) and motorized gondola operations",
          "Purified water-fed telescopic pole systems up to 6 storeys without scaffolding",
          "Mineral calcium descaling and aluminum cladding protective sealing",
        ],
      },
      {
        kind: "grid",
        title: "Safety & High-Access Methodologies",
        cols: 3,
        items: [
          { title: "IRATA Rope Access", text: "Dual-rope backup systems engineered for complex building geometries and cantilevered structures." },
          { title: "Pure Water De-Ionisation", text: "Zero-TDS water spot-free rinse that prevents mineral deposit marks under direct sunlight." },
          { title: "Aluminium Cladding Restoration", text: "pH-neutral degreasing and UV-inhibitor coating restoring vibrant architectural colors." },
          { title: "Glass Scratch & Stain Honing", text: "Cerium oxide glass polishing buffing out hard-water staining and superficial scratches." },
          { title: "Comprehensive Risk Assessment", text: "MOM Work-At-Height (WAH) safety plans, wind-speed monitoring, and ground drop-zone cordons." },
          { title: "Post-Construction Facade Handover", text: "Heavy silicon, plaster, and protective film removal readying new developments for opening." },
        ],
      },
    ],
  },

  /* 07. DISHWASHING AND KITCHEN MAINTENANCE */
  "dishwashing-kitchen": {
    slug: "dishwashing-kitchen",
    crumb: "Dishwashing & Kitchen",
    pillarId: "hygiene",
    pillarName: "OPHRON HYGIENE",
    category: "F&B & Kitchen Hygiene",
    heroTitle: "Dishwashing And Kitchen Maintenance",
    heroLead:
      "End-to-end stewarding manpower, chemical dosing management, conveyor dishwashing, exhaust hood degreasing, and SFA-compliant kitchen deep hygiene.",
    heroImage: "/images/services/commercial_kitchen_deep_cleaning.jpg",
    badge: "SFA Grade-A Ready",
    sections: [
      {
        kind: "overview",
        title: "Comprehensive Back-of-House Stewarding & Kitchen Operations",
        image: "/images/services/commercial_kitchen_deep_cleaning.jpg",
        imageAlt: "Commercial kitchen stainless steel prep line and dishwashing station",
        paragraphs: [
          "Back-of-house kitchen operations are the engine of any food service establishment. A breakdown in dishwashing flow or greasy cooklines can bring service to a standstill and invite regulatory fines from SFA.",
          "OPHRON delivers full stewarding solutions — operating flight and rack conveyor machines, managing automated chemical wash dosing, descaling glassware, and performing nightly high-temperature grease strip-downs of cooklines and exhaust filters.",
        ],
        bullets: [
          "Full-shift stewarding teams managing dish-pit flow, cutlery polishing & sorting",
          "Automated chemical dosing calibration and rinse-aid temperature monitoring",
          "Exhaust hood, baffle filter, and canopy grease removal to prevent fire hazards",
          "Nightly deep chemical washdown of stainless steel cooklines, fryers, and drains",
        ],
      },
      {
        kind: "grid",
        title: "Kitchen Maintenance Modules",
        cols: 3,
        items: [
          { title: "Conveyor Stewarding Management", text: "Trained operators sorting, pre-rinsing, racking, and inspecting 100% of plates and glassware." },
          { title: "Cutlery & Silverware Burnishing", text: "Specialized rotary vibratory burnishing and electrolytic de-tarnishing." },
          { title: "Grease Trap Maintenance", text: "Scheduled solid waste skimming, biological enzyme dosing, and odour trap maintenance." },
          { title: "Heavy Line Degreasing", text: "Carbon solvent immersion of burners, stovetops, deep fryers, and salamander racks." },
          { title: "Walk-in Chiller Detailing", text: "Evaporator coil cleaning, food-safe shelving sanitisation, and floor drain biocides." },
          { title: "SFA Audit Readiness", text: "Pre-service swab inspections guaranteeing Grade-A food hygiene certification." },
        ],
      },
    ],
  },

  /* 08. EVENTS VENUE MAINTENANCE */
  "events-venue": {
    slug: "events-venue",
    crumb: "Events Venue Maintenance",
    pillarId: "facilities",
    pillarName: "OPHRON FACILITIES",
    category: "Events & Venues",
    heroTitle: "Events Venue Maintenance",
    heroLead:
      "Rapid turnaround between banquet sessions, live attendee porterage, pre-event detailing, and post-event waste management for convention centres, ballrooms, and exhibition spaces.",
    heroImage: "/images/services/events_venue_maintenance.jpg",
    badge: "Rapid 60-Min Resets",
    sections: [
      {
        kind: "overview",
        title: "High-Volume Event Space & Ballroom Operations",
        image: "/images/services/events_venue_maintenance.jpg",
        imageAlt: "Grand banquet ballroom with round tables and ambient crystal lighting",
        paragraphs: [
          "Major corporate galas, international conferences, and wedding banquets operate on tight scheduling windows. A ballroom holding 800 guests may require a complete reset and carpet vacuuming in under 60 minutes before the next function.",
          "OPHRON deploys flexible, high-density event porter teams equipped with wide-area industrial sweepers, carpet extractors, and live washroom attendants to keep event spaces pristine before, during, and after major gatherings.",
        ],
        bullets: [
          "Rapid-turnaround crews resetting 500+ seat ballrooms in under 60 minutes",
          "Dedicated live-event porters maintaining VIP holding suites and public foyers",
          "Continuous washroom servicing and consumables replenishment during peak traffic",
          "Post-event breakdown, heavy waste segregation, and exhibition booth cleanup",
        ],
      },
      {
        kind: "grid",
        title: "Event Lifecycle Maintenance Disciplines",
        cols: 3,
        items: [
          { title: "Pre-Event Presentation Detailing", text: "Stage buffing, crystal chandelier dusting, chair alignment, and carpet extraction." },
          { title: "Live Porterage & Table Bussing", text: "Unobtrusive uniformed crews managing beverage spills, plate clearance, and foyer cleanliness." },
          { title: "Dynamic Washroom Monitoring", text: "Dedicated attendants stationed to clean, restock, and refresh luxury washrooms constantly." },
          { title: "Rapid Turnaround Resets", text: "High-speed vacuuming, linen strip-downs, and table reconfiguration between sessions." },
          { title: "Waste Sorting & ESG Reporting", text: "Compostable, recyclable, and general waste separation fulfilling venue ESG audits." },
          { title: "Post-Exhibition Deep Recovery", text: "Tape adhesive removal, heavy forklift scuff removal, and full floor restoration." },
        ],
      },
    ],
  },

  /* 09. COMMERCIAL CLEANING */
  "commercial-cleaning": {
    slug: "commercial-cleaning",
    crumb: "Commercial Cleaning",
    pillarId: "hygiene",
    pillarName: "OPHRON HYGIENE",
    category: "Commercial Hygiene",
    heroTitle: "Commercial Cleaning Services",
    heroLead:
      "Front-of-house presentation and back-of-house discipline for retail, hospitality, and mixed-use premises across Singapore.",
    heroImage: "/images/services/daily_janitorial_cleaning.jpg",
    badge: "Front & Back-of-House",
    sections: [
      {
        kind: "overview",
        title: "Professional Commercial Cleaning Services in Singapore",
        image: "/images/services/daily_janitorial_cleaning.jpg",
        imageAlt: "Luxury Singapore commercial building lobby with gleaming marble floors",
        paragraphs: [
          "Commercial premises are judged at walking pace — the entrance glass, the floor shine, the washroom on the second floor. OPHRON Platform designs daily cleaning programmes around footfall curves, tenant mix, and peak arrival windows.",
          "Every contract is delivered by a fixed, trained team under a named site supervisor, working to written checklists and closing each shift with a signed digital log.",
        ],
        bullets: [
          "Daily janitorial & front-of-house presentation",
          "Hard-floor machine scrubbing and carpet care",
          "Washroom servicing with consumables management",
          "Glass, partition and high-touch surface programmes",
        ],
      },
    ],
  },

  /* 10. OFFICE CLEANING */
  "office-cleaning": {
    slug: "office-cleaning",
    crumb: "Office Cleaning",
    pillarId: "hygiene",
    pillarName: "OPHRON HYGIENE",
    category: "Commercial Hygiene",
    heroTitle: "Office Cleaning",
    heroLead:
      "Quiet, uniformed teams working around your business hours — corporate cleaning engineered for focus, health, and presentation.",
    heroImage: "/images/services/commercial_office_cleaning.jpg",
    badge: "Corporate CBD Standard",
    sections: [
      {
        kind: "overview",
        title: "Professional Office Cleaning Services in Singapore",
        image: "/images/services/commercial_office_cleaning.jpg",
        imageAlt: "Executive corporate boardroom and workplace in Singapore CBD",
        paragraphs: [
          "An office is a productivity instrument. OPHRON delivers scheduled office cleaning that your team barely notices and deeply relies on: pre-arrival resets, daytime pantry rounds, and after-hours floor care.",
          "We staff offices with fixed, security-screened crews who learn your layout, your sensitivities, and your standards.",
        ],
        bullets: [
          "Pre-arrival workspace resets",
          "Pantry, meeting-room and boardroom care",
          "Washroom servicing on scheduled rounds",
          "Carpet extraction & hard-floor maintenance",
        ],
      },
    ],
  },

  /* 11. MARINA & YACHT DETAILING */
  "yacht-marina-detailing": {
    slug: "yacht-marina-detailing",
    crumb: "Marina & Yacht Detailing",
    pillarId: "facilities",
    pillarName: "OPHRON FACILITIES",
    category: "Specialized Facilities",
    heroTitle: "Marina & Luxury Yacht Detailing",
    heroLead:
      "Superyacht gelcoat compounding, 2-stage teak deck restoration, hull waterline descaling, and luxury cabin interior hygiene for Singapore's premier marinas.",
    heroImage: "/images/services/marina_yacht_detailing.jpg",
    badge: "Superyacht Standard",
    sections: [
      {
        kind: "overview",
        title: "Marine-Grade Detailing & Exterior Preservation",
        image: "/images/services/marina_yacht_detailing.jpg",
        imageAlt: "Professional detailing technician polishing pristine teak wood deck on luxury yacht in Singapore",
        paragraphs: [
          "Marine environments present the harshest operational conditions: intense UV degradation, saltwater crystallization, and rapid mold growth on delicate teak wood and leather upholstery.",
          "OPHRON delivers master-level yacht detailing at ONE°15 Marina, Marina at Keppel Bay, and Raffles Marina. We deploy acid-safe teak brighteners, marine ceramic polymer sealants, and thermal upholstery extractors tailored for private and charter superyachts.",
        ],
        bullets: [
          "Non-destructive 2-stage teak deck cleaning, brightening & oiling",
          "Gelcoat oxidation compounding and marine ceramic sealant coatings",
          "Waterline salt scum, hull descaling, and stainless steel chrome polishing",
          "Luxury cabin leather conditioning, bilge deodorization & ensuite marble care",
        ],
      },
      {
        kind: "grid",
        title: "Marine Detailing Disciplines",
        cols: 3,
        items: [
          { title: "2-Stage Teak Wood Restorations", text: "Gentle chemical wash followed by restorative brighteners and deep-penetrating marine oils." },
          { title: "Topside Gelcoat Buffing", text: "Rotary high-speed compounding removing chalky oxidation and UV weathering." },
          { title: "Waterline & Hull Descaling", text: "Safe removal of yellow tannin stains, marine growth, and salt crystals without gelcoat damage." },
          { title: "Stainless Steel & Chrome Brightening", text: "Electrolytic de-oxidation and hydrophobic sealing for all marine railings and deck hardware." },
          { title: "Salon Leather & Fabric Care", text: "pH-balanced leather rejuvenation and mold-repellent upholstery extraction." },
          { title: "Turnkey Pre-Charter Readiness", text: "Complete interior and exterior detailing ensuring VIP presentation before every voyage." },
        ],
      },
    ],
  },

  /* 12. POST-RENOVATION & POST-CONSTRUCTION CLEANING */
  "post-renovation-cleaning": {
    slug: "post-renovation-cleaning",
    crumb: "Post-Renovation & Construction",
    pillarId: "facilities",
    pillarName: "OPHRON FACILITIES",
    category: "Post-Construction",
    heroTitle: "Post-Renovation & Construction Deep Cleaning",
    heroLead:
      "Transforming raw renovation and handover sites into pristine, move-in-ready spaces with HEPA silica dust extraction, paint spot removal, and defect-free handover inspections.",
    heroImage: "/images/services/post_renovation_deep_cleaning.jpg",
    badge: "Move-In Handover Ready",
    sections: [
      {
        kind: "overview",
        title: "Defect-Free Handover Cleaning & Particulate Extraction",
        image: "/images/services/post_renovation_deep_cleaning.jpg",
        imageAlt: "Technician inspecting spotless floor-to-ceiling glass in luxury post-construction handover",
        paragraphs: [
          "Post-construction and renovation handover cleans require far more than cosmetic mopping. Construction dust contains fine gypsum, silica, and sawdust particles that settle in HVAC plenums, electrical sockets, and window tracks.",
          "OPHRON deploys multi-stage HEPA air filtration vacuums, safe chemical solvents for paint overspray and cement residue, and multi-point handover checklists satisfying commercial landlords, architects, and luxury interior designers.",
        ],
        bullets: [
          "Multi-stage industrial HEPA vacuuming capturing 99.97% of fine silica dust",
          "Paint spot, silicon sealant, and cement residue stripping from glass and stone",
          "Complete interior cabinetry, drawer, and joinery damp-wipe decontamination",
          "Joint sign-off inspection guaranteeing move-in ready handover certification",
        ],
      },
      {
        kind: "grid",
        title: "Handover Detailing Protocols",
        cols: 3,
        items: [
          { title: "HEPA Dust Vacuuming", text: "Triple-stage industrial vacuums clearing high rafters, ceiling voids, and electrical trunking." },
          { title: "Architectural Glass Detailing", text: "Razor scraping and solvent washing removing paint splatters and sticker adhesives." },
          { title: "Cement & Grout Haze Removal", text: "Organic buffered acid descaling of tile floors without harming new grout lines." },
          { title: "Joinery & Cabinetry Care", text: "Interior and exterior wipe-down of all wardrobes, kitchen pantries, and vanity units." },
          { title: "Sanitary Fixture Polishing", text: "De-scaling chrome taps, acrylic baths, and ceramic toilets with protective sealing." },
          { title: "Terminal Handover Fogging", text: "ULV biocide misting neutralizing chemical fumes and VOC off-gassing before occupancy." },
        ],
      },
    ],
  },

  /* 13. AIR QUALITY TESTING & ENVIRONMENTAL HYGIENE */
  "air-quality-testing": {
    slug: "air-quality-testing",
    crumb: "Air Quality & Environmental Hygiene",
    pillarId: "hygiene",
    pillarName: "OPHRON HYGIENE",
    category: "Air & Environmental Hygiene",
    heroTitle: "Indoor Air Quality (IAQ) & Environmental Hygiene",
    heroLead:
      "BCA Green Mark compliant IAQ testing, commercial HVAC coil chemical washing, central duct decontamination, and 254nm UV-C germicidal air sterilizer installation.",
    heroImage: "/images/services/air_quality_testing.jpg",
    badge: "BCA Green Mark Compliant",
    sections: [
      {
        kind: "overview",
        title: "Atmospheric Hygiene & HVAC Environmental Remediation",
        image: "/images/services/air_quality_testing.jpg",
        imageAlt: "Technicians performing IAQ testing and UV-C sterilization installation on commercial air handling unit",
        paragraphs: [
          "Indoor air in Singapore's tropical climate frequently harbors elevated CO2, volatile organic compounds (VOCs), black mold spores, and airborne viral particles recirculated through central air conditioning.",
          "OPHRON delivers end-to-end atmospheric engineering: certified IAQ sensor auditing, high-pressure biodegradable chemical coil cleaning for AHU/FCU units, and in-duct 254nm UV-C germicidal irradiation that permanently sterilizes cooling coils and reduces HVAC energy draw by up to 25%.",
        ],
        bullets: [
          "Calibrated sensor testing for PM2.5, PM10, TVOCs, CO2, and bacterial counts",
          "High-pressure biodegradable chemical coil cleaning restoring AHU heat transfer",
          "In-duct 254nm UV-C germicidal sterilization destroying 99.9% of microbial DNA",
          "BCA Green Mark certified IAQ compliance reports and energy savings audits",
        ],
      },
      {
        kind: "grid",
        title: "Environmental IAQ Solutions",
        cols: 3,
        items: [
          { title: "BCA Green Mark IAQ Audits", text: "Digital logging of particulate matter and chemical gases for statutory building certifications." },
          { title: "AHU & FCU Chemical Washing", text: "Biodegradable foam flushing cooling coils, drain pans, and blower fans." },
          { title: "UV-C Coil Disinfection", text: "Continuous germicidal irradiation preventing bio-slime buildup on cooling fins." },
          { title: "Air Duct Bio-Fogging", text: "Aerosolized botanical biocides sanitizing internal ductwork against mildew." },
          { title: "Filter Upgrade Programs", text: "Retrofitting MERV 13 to HEPA filtration media into existing HVAC plenum frames." },
          { title: "Mold Spore Remediation", text: "Thermal eradication of Aspergillus and Penicillium colonies in damp ceiling voids." },
        ],
      },
    ],
  },

  /* 14. F&B STEWARDING & MANPOWER WORKFORCE SOLUTIONS */
  "fnb-stewarding-manpower": {
    slug: "fnb-stewarding-manpower",
    crumb: "F&B Stewarding & Manpower",
    pillarId: "people",
    pillarName: "OPHRON PEOPLE",
    category: "Manpower & Workforce Solutions",
    heroTitle: "F&B Stewarding Manpower & Kitchen Workforce",
    heroLead:
      "Deployment-ready, WSQ-certified stewarding staff, kitchen helpers, dishwasher manpower, and venue utility personnel with 100% on-site supervisory SLA fulfillment.",
    heroImage: "/images/services/fnb_stewarding_manpower.jpg",
    badge: "100% SLA Guarantee",
    sections: [
      {
        kind: "overview",
        title: "Vetted, Certified Back-of-House Hospitality Manpower",
        image: "/images/services/fnb_stewarding_manpower.jpg",
        imageAlt: "Professional stewarding staff and kitchen helpers operating commercial dishwasher in Singapore hotel",
        paragraphs: [
          "Staffing shortages and unpredictable turnover can severely disrupt hotel operations and commercial kitchen workflows. OPHRON PEOPLE maintains an active, WSQ-trained workforce ready for permanent rosters and event surge deployments.",
          "Every crew is led by an experienced on-site supervisor who manages shift roll-calls, chemical safety adherence, flight conveyor dish-pit throughput, and SFA food hygiene compliance, eliminating HR headaches for GMs and Executive Chefs.",
        ],
        bullets: [
          "WSQ Food Hygiene and Stewarding certified personnel",
          "Dedicated site supervisors ensuring attendance and zero service downtime",
          "Expertise in flight conveyor, rack washers, and heavy kitchen line maintenance",
          "Flexible shift arrangements covering breakfast rush, dinner covers, and banquets",
        ],
      },
      {
        kind: "grid",
        title: "Workforce Deployment Modules",
        cols: 3,
        items: [
          { title: "F&B Stewarding Teams", text: "Operating dishwashing flight machines, plate clearing, and cutlery burnishing." },
          { title: "Kitchen Helpers", text: "Assisting chefs with basic prep, cookline wipe-downs, and continuous trash rotation." },
          { title: "Dishwasher Manpower", text: "High-throughput warewashing and heavy pot scrubbing during peak service hours." },
          { title: "Venue Utility Personnel", text: "Dynamic porterage, spill cleanup, and consumable replenishment across ballrooms." },
          { title: "Outsourced Cleaning Crews", text: "Daily uniformed janitorial staff maintaining corporate and retail properties." },
          { title: "Emergency Surge Staffing", text: "Rapid 4-hour roster reinforcement for large unexpected banquets or events." },
        ],
      },
    ],
  },

  /* 15. PILLAR 1: OPHRON PEOPLE */
  "people": {
    slug: "people",
    crumb: "OPHRON People",
    pillarId: "people",
    pillarName: "OPHRON PEOPLE",
    category: "Master Pillar",
    heroTitle: "Hospitality Manpower & Workforce Infrastructure",
    heroLead:
      "Vetted, WSQ-trained, and supervisor-led workforce supplying hospitality manpower, stewarding, kitchen helpers, housekeeping, and back-of-house staffing across Singapore.",
    heroImage: "/images/services/fnb_stewarding_manpower.jpg",
    badge: "Pillar 01",
    sections: [
      {
        kind: "overview",
        title: "End-to-End Hospitality Manpower & Back-of-House Staffing",
        image: "/images/services/fnb_stewarding_manpower.jpg",
        imageAlt: "Hotel suite attendant dressing a bed to five-star standard",
        paragraphs: [
          "Labor shortages and staffing turnover can paralyze commercial kitchens and hotels during peak operational windows. OPHRON PEOPLE eliminates staffing friction by maintaining a deployment-ready roster of WSQ-certified hospitality personnel.",
          "Whether you need permanent daily stewarding crews, banquet setup teams, or seasonal surge staffing, every OPHRON team member is supervised on-site and committed to 100% SLA fulfillment.",
        ],
        bullets: [
          "F&B Stewarding Manpower & Stewarding Staff",
          "Kitchen Helpers & Dishwasher Manpower",
          "Venue Utility Personnel & Back-of-House Support",
          "Outsourced Cleaning Manpower & Facility Operations Support",
        ],
      },
    ],
  },

  /* 16. PILLAR 2: OPHRON HYGIENE */
  "hygiene": {
    slug: "hygiene",
    crumb: "OPHRON Hygiene",
    pillarId: "hygiene",
    pillarName: "OPHRON HYGIENE",
    category: "Master Pillar",
    heroTitle: "Hygiene & Regulatory Compliance Infrastructure",
    heroLead:
      "SFA, HACCP, and NEA-compliant commercial cleaning, kitchen deep cleans, exhaust duct degreasing, hospital-grade disinfection, cleanrooms, carpet extraction, marble polishing, and IAQ air hygiene.",
    heroImage: "/images/services/commercial_kitchen_deep_cleaning.jpg",
    badge: "Pillar 02",
    sections: [
      {
        kind: "overview",
        title: "Comprehensive Physical Hygiene & Compliance Management",
        image: "/images/services/commercial_kitchen_deep_cleaning.jpg",
        imageAlt: "Commercial kitchen stainless steel prep bay with SFA compliance standard",
        paragraphs: [
          "Hygiene compliance in Singapore is a non-negotiable operational baseline. OPHRON HYGIENE protects your license to operate with structured, supervisor-signed cleaning programs that keep kitchens, air ducts, and dining floors audit-ready 24/7.",
          "Our technicians utilize NEA-approved compounds, electrostatic sprayers, and thermal degreasers to remove carbonized grease, airborne pathogens, and bio-hazards.",
        ],
        bullets: [
          "Commercial & Office Hygiene (Daily Janitorial, Showroom, Restroom Deep Cleans)",
          "F&B & Kitchen Hygiene (Kitchen Deep Cleans, Exhaust Canopy & Ducts, Grease Traps)",
          "Disinfection & Decontamination (Electrostatic, ULV Fogging, Bio-Burden Reduction)",
          "Healthcare & Cleanrooms (ISO Class 5-8, Clinics, Surgical Suites, Bio-Hygiene)",
          "Carpet & Upholstery (80°C Thermal Extraction, Low-Moisture Encapsulation)",
          "Marble & Surface Care (Planetary Diamond Polishing, Italian Oxalic Powder Honing)",
          "Air & Environmental Hygiene (IAQ Sensor Testing, HVAC Chemical Wash, UV-C Sterilization)",
        ],
      },
    ],
  },

  /* 17. PILLAR 3: OPHRON FACILITY SERVICES */
  "facilities": {
    slug: "facilities",
    crumb: "OPHRON Facility Services",
    pillarId: "facilities",
    pillarName: "OPHRON FACILITIES",
    category: "Master Pillar",
    heroTitle: "Facility Services & IFM Lite Operations",
    heroLead:
      "Integrated Facility Management (IFM Lite), IRATA high-rise facade cleaning, events venue turnover, post-renovation handovers, pest & waste management, and luxury yacht detailing.",
    heroImage: "/images/services/integrated_facility_management_ifm_lite.jpg",
    badge: "Pillar 03",
    sections: [
      {
        kind: "overview",
        title: "Integrated Facility Operations & Specialized Maintenance",
        image: "/images/services/integrated_facility_management_ifm_lite.jpg",
        imageAlt: "Commercial facility operations and maintenance infrastructure",
        paragraphs: [
          "Managing multiple separate contracts for facade abseiling, pest control, waste collection, minor repairs, and cleaning creates vendor friction and administrative bloat. OPHRON unifies building operations under an IFM Lite structure.",
          "From IRATA-certified industrial rope access abseiling to 60-minute banquet hall resets, turnkey move-in handovers, and superyacht teak detailing, we deliver total facility excellence under a single accountable SLA.",
        ],
        bullets: [
          "Building & Exterior (High-Rise Façade, Abseiling Rope Access, Pure-Water Window Cleans)",
          "Events & Venues (Rapid 60-Min Ballroom Resets, Live Porterage, Overnight Turnovers)",
          "Integrated Facility Management (IFM Lite, Pest Control, Waste Hauling, Handyman)",
          "Post-Construction (Post-Renovation Deep Cleans, HEPA Silica Dust Removal, Handover)",
          "Specialized Facilities (Marina & Superyacht Detailing, Teak Deck Restorations, Hull Descaling)",
        ],
      },
    ],
  },

  /* 18. PILLAR 4: OPHRON TECHNOLOGY */
  "technology": {
    slug: "technology",
    crumb: "OPHRON Technology",
    pillarId: "technology",
    pillarName: "OPHRON TECHNOLOGY",
    category: "Advisory & Software",
    heroTitle: "SaaS, AI Automation & Operations Software",
    heroLead:
      "Smart restaurant and hotel technology, AI automation, operations software, digital reporting systems, workforce management solutions, customer dashboards, and sales & marketing technology.",
    heroImage: "/images/services/digital_reporting_systems.jpg",
    badge: "Pillar 04",
    sections: [
      {
        kind: "overview",
        title: "Digital Infrastructure & Operations Automation",
        image: "/images/services/digital_reporting_systems.jpg",
        imageAlt: "Digital operations dashboard and shift monitoring portal",
        paragraphs: [
          "Physical operations run best when backed by intelligent technology. OPHRON TECHNOLOGY provides proprietary software and AI automation tools that digitize shift logging, track live workforce attendance, and deliver real-time compliance dashboards to general managers.",
          "From digital reporting systems that satisfy regulatory inspections to automated workforce dispatch and customer-facing portals, our tech stack turns operational chaos into transparent data.",
        ],
        bullets: [
          "Restaurant and hotel technology",
          "AI automation",
          "Operations software",
          "Digital reporting systems",
          "Workforce management solutions",
          "Customer dashboards",
          "Sales and marketing technology",
        ],
      },
    ],
  },

  /* 19. PILLAR 5: COMMERCIAL INTELLIGENCE */
  "intelligence": {
    slug: "intelligence",
    crumb: "Commercial Intelligence",
    pillarId: "intelligence",
    pillarName: "COMMERCIAL INTELLIGENCE",
    category: "Advisory & Software",
    heroTitle: "Revenue & Efficiency Optimization Advisory",
    heroLead:
      "Data-driven cost reduction programs, labor optimization, hygiene compliance management, operational reporting, and revenue & efficiency optimization for hospitality executives.",
    heroImage: "/images/commercial_intelligence_4k.jpg",
    badge: "Pillar 05",
    sections: [
      {
        kind: "overview",
        title: "Turning Operational Data into Bottom-Line Profitability",
        image: "/images/commercial_intelligence_4k.jpg",
        imageAlt: "Executive reporting and business intelligence data charts",
        paragraphs: [
          "Operating margins in hospitality are tight. COMMERCIAL INTELLIGENCE analyses shift data, chemical consumption, energy loads, and labor productivity to identify waste and drive direct cost reduction.",
          "Our advisory team delivers quarterly operational audits, labor optimization schedules, and automated compliance reports that empower C-suite leaders and financial controllers to maximize profitability.",
        ],
        bullets: [
          "Cost reduction programs",
          "Labor optimization",
          "Hygiene compliance management",
          "Operational reporting",
          "Revenue and efficiency optimization",
        ],
      },
    ],
  },
};
