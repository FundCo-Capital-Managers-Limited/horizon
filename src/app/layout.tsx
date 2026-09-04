import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://horizonenergy.org";
const SITE_DESCRIPTION =
  "Horizon Energy Company (SL) Limited is a Sierra Leone-registered engineering, procurement and construction company delivering solar mini-grids and electrical infrastructure across West Africa.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Horizon Energy | Solar Mini-Grid EPC, Sierra Leone & West Africa",
    template: "%s | Horizon Energy",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "solar mini-grid Sierra Leone",
    "EPC renewable energy West Africa",
    "NABCEP certified installer",
    "solar PV installation Sierra Leone",
    "rural electrification West Africa",
    "distribution grid infrastructure",
    "Horizon Energy Freetown",
    "off-grid power Sierra Leone",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Horizon Energy",
    title: "Horizon Energy | Solar Mini-Grid EPC, Sierra Leone & West Africa",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Horizon Energy",
      },
    ],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizon Energy | Solar Mini-Grid EPC, Sierra Leone & West Africa",
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Horizon Energy Company (SL) Limited",
  url: SITE_URL,
  logo: `${SITE_URL}/images/horizon-logo.svg`,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
