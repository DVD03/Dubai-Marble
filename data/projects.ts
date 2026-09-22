export interface Project {
  title: string;
  location: string;
  category: "floor" | "counter" | "repair" | "cleaning";
  categoryLabel: string;
  icon: string;
  gradient: string;
}

export const projectsData: Project[] = [
  {
    title: "Italian Carrara Floor Polishing",
    location: "Dubai Marina Villa",
    category: "floor",
    categoryLabel: "Floor Polishing",
    icon: "💎",
    gradient: "from-[#1b1338] to-[#34206e]"
  },
  {
    title: "Hotel Lobby Diamond Restoration",
    location: "Downtown Dubai Hotel",
    category: "floor",
    categoryLabel: "Floor Polishing",
    icon: "⚙️",
    gradient: "from-[#0e243a] to-[#144973]"
  },
  {
    title: "Kitchen Island Acid Etch Removal",
    location: "Palm Jumeirah Penthouse",
    category: "counter",
    categoryLabel: "Countertops",
    icon: "🔧",
    gradient: "from-[#381f12] to-[#6e3a1f]"
  },
  {
    title: "Crema Marfil Crack Resin Repair",
    location: "Emirates Hills Residence",
    category: "repair",
    categoryLabel: "Crack Repair",
    icon: "🔨",
    gradient: "from-[#381223] to-[#6e2044]"
  },
  {
    title: "Deep Cleaning & Grout Rejuvenation",
    location: "JBR Luxury Apartment",
    category: "cleaning",
    categoryLabel: "Deep Cleaning",
    icon: "🧹",
    gradient: "from-[#112138] to-[#204575]"
  },
  {
    title: "Travertine Polishing & Sealing",
    location: "Arabian Ranches Villa",
    category: "floor",
    categoryLabel: "Floor Polishing",
    icon: "✨",
    gradient: "from-[#193116] to-[#2d5e27]"
  }
];
