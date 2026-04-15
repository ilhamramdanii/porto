import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M Ilham Ramdani – Fullstack Developer & Web System Integrator",
  description:
    "Fullstack Developer dengan fokus pada digitalisasi proses bisnis, sistem kesehatan, dan integrasi API enterprise.",
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
      "Berpengalaman membangun sistem untuk sektor kesehatan dan industri, termasuk DMS, manajemen risiko, dan integrasi API.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-950 antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
