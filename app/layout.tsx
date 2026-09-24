import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "GridsPro International | Dubai Marble Polishing & Restoration",
  description: "GridsPro International - Professional marble polishing, restoration, grinding, sealing & cleaning services in Dubai. Located at Villa 34, Street 27 B, Al Quoz 1, Dubai.",
  keywords: ["GridsPro International", "Dubai Marble Polishing", "Marble Restoration Dubai", "Marble Cleaning UAE", "Floor Grinding Dubai", "Crystallization Dubai"],
  authors: [{ name: "GridsPro International" }],
  icons: {
    icon: "/logo_preview.png",
    apple: "/logo_preview.png",
  },
  openGraph: {
    title: "GridsPro International | Dubai Marble Polishing & Restoration",
    description: "5-Star Marble Floor Polishing, Restoration & Cleaning Services in Dubai by GridsPro International.",
    url: "https://dubaimarblepolishing.ae",
    siteName: "GridsPro International",
    locale: "en_US",
    type: "website",
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
        <TopBar />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
