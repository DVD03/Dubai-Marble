export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  comment: string;
  initials: string;
}

export const testimonialsData: Testimonial[] = [
  {
    name: "Ahmed Al Rashid",
    role: "Villa Owner, Dubai Marina",
    rating: 5,
    comment: "The team transformed our 10-year-old marble floors in Dubai Marina. The mirror reflection is breathtaking. Professional crew and zero dust throughout the process!",
    initials: "AR"
  },
  {
    name: "Sarah Johnson",
    role: "Operations Manager, Downtown Hotel",
    rating: 5,
    comment: "We contracted them for our hotel lobby and suites. Their work is fast, discreet, and of 5-star quality. Highly recommended for commercial properties in Dubai.",
    initials: "SJ"
  },
  {
    name: "Mohammed Al Farsi",
    role: "Homeowner, Palm Jumeirah",
    rating: 5,
    comment: "Removed severe oil and coffee stains from our kitchen island that others said were permanent. True masters of natural stone care.",
    initials: "MF"
  },
  {
    name: "Fatima Al Sayed",
    role: "Resident, JBR",
    rating: 5,
    comment: "The free inspection gave us complete peace of mind. Transparent quote with no surprise fees. Floors look brand new!",
    initials: "FA"
  },
  {
    name: "Ravi Sharma",
    role: "Facility Manager, Business Bay",
    rating: 5,
    comment: "Repaired major chips along our marble staircase. The color match is so perfect you cannot tell where the crack used to be.",
    initials: "RS"
  },
  {
    name: "Lisa Thompson",
    role: "Property Manager, DIFC",
    rating: 5,
    comment: "Transparent quotation, polite technicians, and impeccable cleanup. We will definitely use them for our yearly maintenance.",
    initials: "LT"
  }
];
