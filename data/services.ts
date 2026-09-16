export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  arTitle: string;
  icon: string;
  description: string;
  startingPrice: string;
  gradient: string;
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
}

export const servicesData: Service[] = [
  {
    slug: "marble-floor-polishing",
    title: "Marble Floor Polishing",
    subtitle: "5-Stage Diamond Polishing & Italian Crystallization",
    arTitle: "تلميع أرضيات الرخام",
    icon: "💎",
    gradient: "from-[#1b1338] to-[#34206e]",
    startingPrice: "AED 35/sqm",
    description: "Restores dull, high-traffic marble flooring to a flawless, mirror-like factory finish. Removes scratches, scuffs, and etching using micro-abrasive diamond technology.",
    benefits: [
      "Restores true deep mirror reflection and clarity",
      "Eliminates micro-scratches and dull traffic patterns",
      "Hardens the stone surface against future scuffs",
      "100% dustless wet diamond polishing technology",
      "Includes protective crystallization treatment"
    ],
    process: [
      { step: "01", title: "Stone Assessment", desc: "Detailed inspection to identify stone type, scratch depth, and required diamond grit sequence." },
      { step: "02", title: "Surface Prep", desc: "Masking walls, skirtings, and adjacent areas to ensure clean, dust-free work." },
      { step: "03", title: "Diamond Honing", desc: "Progressive mechanical diamond polishing from 400 to 3000 grit for maximum smoothness." },
      { step: "04", title: "Crystallization", desc: "Chemical thermos-reaction providing a durable, glass-like shine and stone protection." }
    ]
  },
  {
    slug: "deep-cleaning",
    title: "Deep Marble Cleaning",
    subtitle: "pH-Neutral Deep Sanitization & Grout Rejuvenation",
    arTitle: "تنظيف عميق للرخام والجرانيت",
    icon: "🧹",
    gradient: "from-[#0e243a] to-[#144973]",
    startingPrice: "AED 25/sqm",
    description: "Deep extraction of embedded dirt, grease, and discoloration from porous natural stones and grout lines using safe pH-balanced biological solutions.",
    benefits: [
      "Extracts stubborn dirt and ground-in grime from pores",
      "Brightens and sanitizes discolored grout lines",
      "Safe for sensitive marble, limestone, and travertine",
      "Eco-friendly, child and pet-safe products",
      "Ideal for pre/post-tenancy and annual deep maintenance"
    ],
    process: [
      { step: "01", title: "Pre-Treatment", desc: "Application of pH-neutral active foaming solution to loosen dirt inside stone capillaries." },
      { step: "02", title: "Rotary Scrubbing", desc: "Soft-bristle rotary mechanical scrubbing that penetrates texture without scratching." },
      { step: "03", title: "Slurry Extraction", desc: "High-powered wet vacuuming extracting all emulsified dirt and water." },
      { step: "04", title: "Grout Detailing", desc: "Manual detailing and cleaning of all joint lines for uniform cleanliness." }
    ]
  },
  {
    slug: "grinding-buffing",
    title: "Grinding & Buffing Services",
    subtitle: "Precision Lippage Removal & Heavy Floor Leveling",
    arTitle: "جلي وصقل الرخام وتسويه الأرضيات",
    icon: "⚙️",
    gradient: "from-[#193116] to-[#2d5e27]",
    startingPrice: "AED 45/sqm",
    description: "Heavy planetary grinding removes tile height differences (lippage), deep gouges, and stubborn burns to create a seamless, perfectly flat stone surface.",
    benefits: [
      "Eliminates uneven tile edges (lippage) across the floor",
      "Removes deep gouges, burns, and severe surface damage",
      "Creates a monolithic, smooth continuous floor surface",
      "Prepares stone for ultra-high gloss crystallization",
      "Enhances property value and floor lifespan"
    ],
    process: [
      { step: "01", title: "Level Check", desc: "Laser leveling and measurement of highest tile offsets across the room." },
      { step: "02", title: "Coarse Grinding", desc: "Heavy metal-bonded diamond grinding discs shave high edges flush." },
      { step: "03", title: "Resin Smoothing", desc: "Intermediate resin-bonded abrasives remove grinding swirls." },
      { step: "04", title: "Fine Buffing", desc: "High-speed thermal buffing pads prepare surface for final polish." }
    ]
  },
  {
    slug: "countertop-polishing",
    title: "Countertop & Surface Polishing",
    subtitle: "Kitchen Islands, Vanity Tops & Staircases",
    arTitle: "تلميع كاونترات المطبخ والمغاسل",
    icon: "🔧",
    gradient: "from-[#381f12] to-[#6e3a1f]",
    startingPrice: "AED 120/piece",
    description: "Specialized hand-held diamond polishing restoring bathroom vanities, kitchen islands, and vertical claddings damaged by acidic foods and cosmetics.",
    benefits: [
      "Removes dull etch rings caused by lemon, vinegar, and acids",
      "Restores smooth, touchable high-gloss luster",
      "Includes food-grade stain-resistant penetrating sealer",
      "Precision care for bevels, edges, and sink cutouts",
      "Fast, convenient same-day completion"
    ],
    process: [
      { step: "01", title: "Area Masking", desc: "Full protective masking of sinks, taps, appliances, and surrounding cabinets." },
      { step: "02", title: "Hand Honing", desc: "Variable-speed hand polishers remove surface etching and water stains." },
      { step: "03", title: "Gloss Restoration", desc: "Diamond buffing paste restores rich color and glass-like shine." },
      { step: "04", title: "Food-Safe Seal", desc: "Application of certified food-safe oleophobic stone barrier." }
    ]
  },
  {
    slug: "stain-removal",
    title: "Stain Removal & Sealing",
    subtitle: "Chemical Poultice Extraction & Oleophobic Impregnation",
    arTitle: "إزالة البقع العنيدة وعزل الرخام",
    icon: "✨",
    gradient: "from-[#112138] to-[#204575]",
    startingPrice: "AED 30/sqm",
    description: "Scientific poultice extraction of oil, coffee, wine, hard water, and rust stains followed by deep penetrating nano-impregnation.",
    benefits: [
      "Draws out deep-seated oil, rust, coffee, and wine stains",
      "Nano-impregnator prevents future liquid penetration",
      "Leaves stone breathable while actively repelling liquids",
      "Prevents humidity-related discoloration and efflorescence",
      "Extends stone life by over 5+ years"
    ],
    process: [
      { step: "01", title: "Stain Analysis", desc: "Determining whether the stain is organic, oil-based, metallic, or biological." },
      { step: "02", title: "Poultice Application", desc: "Custom chemical paste applied and wrapped under micro-porous membrane." },
      { step: "03", title: "Absorption Period", desc: "Chemical reaction wicks the stain out of the stone capillary structure." },
      { step: "04", title: "Nano-Sealing", desc: "Deep penetrating hydro/oleophobic sealant applied to lock out liquids." }
    ]
  },
  {
    slug: "crack-repair",
    title: "Crack Filling & Joint Repair",
    subtitle: "Color-Matched Resin Bonding for Chipped & Broken Stone",
    arTitle: "تعبئة وإصلاح تشققات وفواصل الرخام",
    icon: "🔨",
    gradient: "from-[#381223] to-[#6e2044]",
    startingPrice: "AED 50/repair",
    description: "Structural repair of cracks, chips, and damaged grout lines using Italian epoxy/polyester resins custom color-blended to the stone's vein structure.",
    benefits: [
      "Seamless color-matched epoxy blended to stone veining",
      "Reinforces structural integrity and stops crack expansion",
      "Polished flush so repairs are virtually invisible",
      "Complete regrouting of deteriorated tile joints",
      "Save thousands over expensive tile replacement"
    ],
    process: [
      { step: "01", title: "Crack Cleaning", desc: "Diamond grooving and clearing debris from the fracture cavity." },
      { step: "02", title: "Color Matching", desc: "Custom tinting epoxy resin with pigments matching the stone matrix." },
      { step: "03", title: "Resin Injection", desc: "Deep filling of the fissure and curing to rock-hard density." },
      { step: "04", title: "Flush Polishing", desc: "Diamond sanding flush with the floor surface for a seamless finish." }
    ]
  }
];
