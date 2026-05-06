"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";
import { experiences } from "@/data/experience";
import TechBadge from "@/components/ui/TechBadge";
import Badge from "@/components/ui/Badge";

const typeConfig = {
  work: { label: "Full-time", variant: "blue" as const },
  internship: { label: "Internship", variant: "purple" as const },
  freelance: { label: "Freelance / Kolaborasi", variant: "green" as const },
  organization: { label: "Organisasi", variant: "orange" as const },
};

export default function Experience() {
  return (
    <section id="pengalaman" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Where I&apos;ve built, shipped, and delivered.
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const type = typeConfig[exp.type];
              return (
                <motion.div
                  key={`${exp.company}-${index}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative sm:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="hidden sm:flex absolute left-0 top-5 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 border-4 border-gray-50 dark:border-gray-900 items-center justify-center">
                    <FiBriefcase className="text-blue-600 dark:text-blue-400" size={16} />
                  </div>

                  {/* Card */}
                  <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-6 hover:shadow-md transition-shadow duration-200">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Badge variant={type.variant}>{type.label}</Badge>
                        <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
                          <FiCalendar size={12} /> {exp.period}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="mb-4 space-y-1">
                        {exp.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-blue-500 mt-1 flex-shrink-0">–</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
