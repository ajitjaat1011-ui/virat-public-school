import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { LanguageProvider } from "@/components/site/language-context";
import { SchoolJsonLd } from "@/components/site/school-json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#102A72",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://viratpublicschool.pages.dev"),
  title: {
    default: "Virat Public School — Knowledge. Discipline. Character.",
    template: "%s | Virat Public School",
  },
  description:
    "Virat Public School, Viratnagar (Kotputli-Behror, Rajasthan) — nurturing students with knowledge, discipline, and character. RBSE curriculum, experienced faculty, modern facilities.",
  keywords: [
    "Virat Public School",
    "school in Viratnagar",
    "school in Kotputli-Behror",
    "Rajasthan school",
    "RBSE school Rajasthan",
    "admission Viratnagar",
    "best school near Behror",
  ],
  authors: [{ name: "Virat Public School" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Virat Public School — Knowledge. Discipline. Character.",
    description:
      "A premier school in Viratnagar, Rajasthan, committed to holistic education rooted in values and modern learning.",
    url: "https://viratpublicschool.pages.dev",
    siteName: "Virat Public School",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virat Public School",
    description:
      "A premier school in Viratnagar, Rajasthan — Knowledge. Discipline. Character.",
  },
  alternates: {
    canonical: "https://viratpublicschool.pages.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SchoolJsonLd />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoDevanagari.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <LanguageProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
