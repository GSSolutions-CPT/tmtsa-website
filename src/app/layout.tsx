import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google"; // High-end Geometric Sans
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { Analytics } from "@/components/analytics/Analytics";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope", // Replaces Inter for Body
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit", // Replaces Space Grotesk for Headings
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    template: '%s | The Maintenance Team Cape Town',
    default: 'The Maintenance Team | Waterproofing & Painting Specialists',
  },
  description: "Cape Town's No.1 specialists for waterproofing, painting, and structural repairs. Serving Durbanville, Blouberg, and greater Cape Town.",
  keywords: ["Waterproofing Cape Town", "Painters Cape Town", "Roof Repairs", "Spalling Repair", "Damp Proofing", "Torch-on Waterproofing", "Roof Painting", "Concrete Repairs", "Industrial Coatings"],
  authors: [{ name: "The Maintenance Team" }],
  metadataBase: new URL('https://tmtsa.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://tmtsa.vercel.app/',
    siteName: 'The Maintenance Team',
    images: [
      {
        url: '/images/tmt-og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Maintenance Team - Cape Town Property Specialists',
      },
    ],
  },
  icons: {
    icon: '/favicon.png',
  },
  other: {
    "google-site-verification": "YOUR_VERIFICATION_CODE", // Placeholder
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-18066268218" strategy="afterInteractive" />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18066268218');
          `}
        </Script>
      </head>
      <body
        className={`${manrope.variable} ${outfit.variable} antialiased`}
      >
        <SchemaMarkup />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
        <Analytics />
        <VercelAnalytics />
      </body>
    </html>
  );
}
