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
    gradient: "from-[#123B6D] to-[#3333FF]"
  },
  {
    title: "Hotel Lobby Diamond Restoration",
    location: "Downtown Dubai Hotel",
    category: "floor",
    categoryLabel: "Floor Polishing",
    icon: "⚙️",
    gradient: "from-[#0000CC] to-[#123B6D]"
  },
  {
    title: "Kitchen Island Acid Etch Removal",
    location: "Palm Jumeirah Penthouse",
    category: "counter",
    categoryLabel: "Countertops",
    icon: "🔧",
    gradient: "from-[#FF8C00] to-[#FFA500]"
  },
  {
    title: "Crema Marfil Crack Resin Repair",
    location: "Emirates Hills Residence",
    category: "repair",
    categoryLabel: "Crack Repair",
    icon: "🔨",
    gradient: "from-[#FF8C00] to-[#CC7000]"
  },
  {
    title: "Deep Cleaning & Grout Rejuvenation",
    location: "JBR Luxury Apartment",
    category: "cleaning",
    categoryLabel: "Deep Cleaning",
    icon: "🧹",
    gradient: "from-[#0000CC] to-[#123B6D]"
  },
  {
    title: "Travertine Polishing & Sealing",
    location: "Arabian Ranches Villa",
    category: "floor",
    categoryLabel: "Floor Polishing",
    icon: "✨",
    gradient: "from-[#111827] to-[#1F2937]"
  }
];
