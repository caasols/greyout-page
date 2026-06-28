import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/sections/site-footer";

const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://greyout.cc"),
  applicationName: "Greyout",
  title: "Greyout — grey out your screen, kill the distraction",
  description:
    "A macOS menu-bar app that greys out your screen to reduce the pull of colour and notifications. Per-app rules, schedules, one keypress.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Greyout — grey out your screen, kill the distraction",
    description:
      "A macOS menu-bar app that greys out your screen to reduce the pull of colour and notifications. Per-app rules, schedules, one keypress.",
    url: "https://greyout.cc",
    siteName: "Greyout",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Greyout — grey out your screen, kill the distraction",
    description:
      "A macOS menu-bar app that greys out your screen to reduce the pull of colour and notifications. Per-app rules, schedules, one keypress.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Greyout",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "macOS 14+",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: "https://greyout.cc",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full antialiased font-sans",
        geistSans.variable,
        geistMono.variable,
        nunitoSans.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
