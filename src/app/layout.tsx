import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "M Ilham Ramdani – Fullstack Developer & Web System Integrator",
  description:
    "Fullstack Developer focused on digitizing business processes, healthcare systems, and enterprise API integration.",
  keywords: [
    "Fullstack Developer",
    "Web Developer",
    "Laravel",
    "Next.js",
    "Node.js",
    "Indonesia",
    "Bandung",
    "M Ilham Ramdani",
  ],
  authors: [{ name: "M Ilham Ramdani" }],
  openGraph: {
    title: "M Ilham Ramdani – Fullstack Developer",
    description:
      "Building systems for healthcare, industry, and enterprise — DMS, risk management, and API integration.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${syne.variable} font-sans bg-white dark:bg-neutral-950 antialiased`}
      >
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'system';var d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',t==='dark'||(t==='system'&&d))}catch(e){}})()`,
          }}
        />
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
