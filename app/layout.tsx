import type { Metadata } from "next";
import { Geist_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { LocaleProvider } from "@/components/locale-provider";
import { m } from "@/lib/messages";

const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://greyout.cc"),
  applicationName: "Greyout",
  title: m.meta.title,
  description:
    m.meta.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: m.meta.title,
    description:
      m.meta.description,
    url: "https://greyout.cc",
    siteName: "Greyout",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: m.meta.title,
    description:
      m.meta.description,
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
        geistMono.variable,
        nunitoSans.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="cloud-bg" aria-hidden="true" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LocaleProvider>
            <SiteHeader />
            {children}
            <SiteFooter />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
