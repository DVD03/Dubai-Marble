import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Dubai Marble Polishing | تلميع الرخام دبي",
  description: "Professional marble polishing, restoration, grinding, sealing & cleaning services in Dubai. Free inspection, affordable prices from AED 35/sqm & 5-star results.",
  keywords: ["Dubai Marble Polishing", "Marble Restoration Dubai", "Marble Cleaning UAE", "Floor Grinding Dubai", "Crystallization"],
  authors: [{ name: "Dubai Marble Polishing" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Dubai Marble Polishing | تلميع الرخام دبي",
    description: "5-Star Marble Floor Polishing, Restoration & Cleaning Services in Dubai.",
    url: "https://dubaimarblepolishing.ae",
    siteName: "Dubai Marble Polishing",
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
