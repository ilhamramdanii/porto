"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import { FiPlus, FiMinus } from "react-icons/fi";
import { cn } from "@/lib/utils";

const filters = [
  { key: "all", label: "Semua" },
  { key: "main", label: "Proyek Utama" },
  { key: "backend", label: "Backend / API" },
  { key: "fullstack", label: "Fullstack" },
  { key: "ai", label: "AI / ML" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const displayedProjects = showAll ? filtered : filtered.slice(0, 2);

  return (
    <section id="portofolio" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
            Portofolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Proyek yang Pernah Dibangun
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Kumpulan proyek nyata yang berdampak langsung pada digitalisasi proses bisnis dan
            otomatisasi sistem.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => {
                setActiveFilter(key);
                setShowAll(false); // Reset showAll saat ganti filter
              }}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                activeFilter === key
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
              )}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length > 2 && (
          <motion.div 
            layout
            className="flex justify-center"
          >
            <Button 
              variant="outline" 
              onClick={() => setShowAll(!showAll)}
              className="gap-2"
            >
              {showAll ? (
                <>Tampilkan Lebih Sedikit <FiMinus /></>
              ) : (
                <>Lihat Semua Proyek <FiPlus /></>
              )}
            </Button>
          </motion.div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400 dark:text-gray-600">
            Tidak ada proyek dalam kategori ini.
          </div>
        )}
      </div>
    </section>
  );
}
