/* ------------------------------------------------------------------ */
/*  GKT International — photography library                            */
/* ------------------------------------------------------------------ */

export const pexels = (id: number, _w = 1200, _h = 800) => `/images/photo-${id}.jpg`;

export type Photo = { src: string; alt: string; category: string; caption: string };

/* The 7 signature works — home hero carousel */
export const FEATURED_WORKS: Photo[] = [
  {
    src: pexels(8629127, 1400, 950),
    alt: "Stewarding sink polished bright in a commercial kitchen",
    category: "Kitchen & F&B",
    caption: "Stewarding bay restoration — La Nonna, Bugis",
  },
  {
    src: pexels(34416078, 1400, 950),
    alt: "Stainless steel food warmers gleaming after degreasing",
    category: "Kitchen & F&B",
    caption: "Hot-line degreasing — stainless restored to mill finish",
  },
  {
    src: pexels(5499416, 1400, 950),
    alt: "Technician in protective gear disinfecting an office suite",
    category: "Disinfecting",
    caption: "ULV fogging cycle — Grade A office tower, Raffles Place",
  },
  {
    src: pexels(4483773, 1400, 950),
    alt: "Industrial warehouse aisle cleaned and lines repainted bright",
    category: "Industrial",
    caption: "High-bay aisle pressure wash — logistics hub, Tuas",
  },
  {
    src: pexels(6466496, 1400, 950),
    alt: "Hotel suite attendant dressing a bed to five-star standard",
    category: "Hospitality",
    caption: "Suite turnover programme — YOTEL, Orchard Road",
  },
  {
    src: pexels(36303748, 1400, 950),
    alt: "Janitorial cart staged in a bright commercial corridor",
    category: "Office",
    caption: "Corridor & pantry rota — mixed-use development, Novena",
  },
  {
    src: "/images/restroom.jpg",
    alt: "Marble and brass hotel restroom after deep cleaning",
    category: "Restroom",
    caption: "Washroom descale & polish — boutique hotel, Duxton",
  },
];

/* Master gallery — gallery page */
export const GALLERY: Photo[] = [
  { src: pexels(4099090, 1000, 1250), alt: "Technician in full PPE sanitising floors", category: "Disinfecting", caption: "Floor sanitisation protocol, PPE Level B" },
  { src: pexels(5499416, 1200, 800), alt: "Disinfectant fogging of an interior space", category: "Disinfecting", caption: "ULV fogging — open-plan workplace" },
  { src: pexels(4099466, 1000, 1250), alt: "High-touch surface disinfection with spray", category: "Disinfecting", caption: "High-touch surface programme" },
  { src: pexels(4098000, 1200, 800), alt: "Sanitising guest-room bed frames", category: "Disinfecting", caption: "Guest-room outbreak response" },
  { src: pexels(8629127, 1200, 800), alt: "Commercial kitchen sink bay after cleaning", category: "Kitchen", caption: "Stewarding bay deep clean" },
  { src: pexels(34416078, 1000, 1250), alt: "Stainless steel warmers after degreasing", category: "Kitchen", caption: "Hot-line degreasing, mill finish restored" },
  { src: pexels(29226709, 1200, 800), alt: "Spotless stainless prep counter in a commercial kitchen", category: "Kitchen", caption: "Prep-counter programme — central kitchen" },
  { src: pexels(17509184, 1200, 800), alt: "Restaurant kitchen kept to inspection standard", category: "Kitchen", caption: "Post-service kitchen reset" },
  { src: pexels(4483773, 1200, 800), alt: "Warehouse racking aisles after industrial cleaning", category: "Industrial", caption: "Racking aisle pressure wash" },
  { src: pexels(5953713, 1000, 1250), alt: "Cold-storage facility kept clean and clear", category: "Industrial", caption: "Cold-room hygiene cycle" },
  { src: pexels(4481329, 1200, 800), alt: "High-angle view of a cleaned facility floor", category: "Industrial", caption: "Facility floor scrub & recoat" },
  { src: pexels(36303748, 1200, 800), alt: "Janitorial cart staged in an office corridor", category: "Office", caption: "Corridor care rota" },
  { src: pexels(6197121, 1000, 1250), alt: "Team wiping glass partitions and mopping floors", category: "Office", caption: "Glass & partition programme" },
  { src: pexels(7641347, 1200, 800), alt: "Floor care in a bright pantry and dining space", category: "Office", caption: "Pantry floor care" },
  { src: pexels(7513163, 1200, 800), alt: "Hardwood floor mopping in a bright room", category: "Office", caption: "Hardwood floor maintenance" },
  { src: "/images/restroom.jpg", alt: "Marble restroom with brass fixtures after deep clean", category: "Restroom", caption: "Washroom descale & polish" },
  { src: pexels(3770215, 1000, 1250), alt: "Attendant restocking a luxury hotel bathroom", category: "Restroom", caption: "Washroom restocking & presentation" },
  { src: pexels(6466234, 1200, 800), alt: "Housekeeper stacking fresh linen in a suite", category: "Hospitality", caption: "Linen & turndown support" },
  { src: pexels(9462742, 1200, 800), alt: "Housekeepers dressing hotel bedding", category: "Hospitality", caption: "Suite turnover, five-star standard" },
  { src: pexels(6466219, 1000, 1250), alt: "Folded white towels in an elegant hotel setting", category: "Hospitality", caption: "Amenity presentation" },
];

export const GALLERY_CATEGORIES = ["All", "Disinfecting", "Kitchen", "Industrial", "Office", "Restroom", "Hospitality"];
