"use client";

import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import Button from "@/components/ui/Button";

export default function Hero() {
  const handleScrollToPortfolio = () => {
    const element = document.getElementById("portofolio");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const targetPosition = elementPosition + startPosition - offset;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;
      const duration = 1000;

      const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const nextScrollY = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, nextScrollY);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />

      {/* Blue glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for work
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4"
        >
          Building Scalable Systems for
          <br />
          <span className="text-blue-600 dark:text-blue-400">Real-World Problems</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10"
        >
          Saya seorang <span className="text-gray-900 dark:text-white font-medium">Fullstack Developer</span> yang berfokus pada digitalisasi proses bisnis di sektor kesehatan & farmasi. Mengubah logika kompleks menjadi solusi digital yang elegan dan efisien.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Button size="lg" onClick={handleScrollToPortfolio}>
            Lihat Portofolio <FiArrowRight />
          </Button>
          <a href="/docs/CV-M%20ILHAM%20RAMDANI.pdf" download="CV-M Ilham Ramdani.pdf">
            <Button variant="outline" size="lg">
              <FiDownload /> Unduh CV
            </Button>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-sm mx-auto"
        >
          {[
            { value: "10+", label: "Sistem & Aplikasi" },
            { value: "5+", label: "Tech Stack" },
            { value: "1+", label: "Tahun Pengalaman" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 dark:text-gray-600">Scroll ke bawah</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border-2 border-gray-300 dark:border-gray-700 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-gray-400 dark:bg-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
