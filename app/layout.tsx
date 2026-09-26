import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "Dubai Marble Polishing | Professional Stone Restoration & Cleaning Services | GridsPro International",
    template: "%s | Dubai Marble Polishing"
  },
  description: "Expert marble polishing, restoration, grinding, sealing & cleaning services in Dubai. 16+ years experience, 5-star hotel quality, free inspection. Serving all Dubai areas including Marina, Downtown, Palm Jumeirah. Call +971 56 188 7300.",
  keywords: [
    "Dubai marble polishing",
    "marble restoration Dubai",
    "marble floor polishing",
    "stone cleaning UAE",
    "marble grinding Dubai",
    "crystallization Dubai",
    "marble maintenance",
    "floor restoration",
    "marble sealing",
    "granite polishing",
    "travertine restoration",
    "countertop polishing",
    "stain removal Dubai",
    "crack repair marble",
    "hotel marble services",
    "commercial marble cleaning",
    "residential marble care",
    "Italian diamond polishing",
    "dustless marble grinding",
    "natural stone restoration",
    "Dubai marble contractors",
    "marble cleaning services",
    "stone floor restoration",
    "marble repair Dubai",
    "marble shine restoration",
    "professional marble polishing",
    "marble crystallization UAE",
    "marble maintenance Dubai",
    "marble floor restoration Dubai",
    "marble polishing contractors",
    "stone polishing services Dubai",
    "marble treatment Dubai",
    "marble care services UAE"
  ],
  authors: [{ name: "GridsPro International" }],
  creator: "GridsPro International",
  publisher: "GridsPro International",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dubaimarblepolishing.ae'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'ar-AE': '/ar',
      'x-default': '/',
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/logo_preview.png",
    apple: "/logo_preview.png",
  },
  openGraph: {
    title: "Dubai Marble Polishing | Professional Stone Restoration & Cleaning Services",
    description: "5-Star Marble Floor Polishing, Restoration & Cleaning Services in Dubai by GridsPro International. 16+ years experience, free inspection, Italian diamond technology.",
    url: "https://dubaimarblepolishing.ae",
    siteName: "GridsPro International",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/luxury_lobby_marble.jpg",
        width: 1200,
        height: 630,
        alt: "Dubai Marble Polishing Services - Professional Stone Restoration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Marble Polishing | Professional Stone Restoration & Cleaning Services",
    description: "Expert marble polishing and restoration services in Dubai. 16+ years experience, 5-star hotel quality. Call +971 56 188 7300.",
    images: ["/images/luxury_lobby_marble.jpg"],
    creator: "@GridsProIntl",
  },
  other: {
    "theme-color": "#123B6D",
    "msapplication-TileColor": "#123B6D",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <StructuredData />
        <TopBar />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
