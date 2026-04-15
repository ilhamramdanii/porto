"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiLaravel, SiPhp, SiPython,
  SiMysql, SiPostgresql,
  SiPostman, SiGit, SiLinux, SiTensorflow, SiAndroid,
} from "react-icons/si";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ReactElement> = {
  SiNextdotjs: <SiNextdotjs />,
  SiReact: <SiReact />,
  SiTypescript: <SiTypescript />,
  SiTailwindcss: <SiTailwindcss />,
  SiNodedotjs: <SiNodedotjs />,
  SiExpress: <SiExpress />,
  SiLaravel: <SiLaravel />,
  SiPhp: <SiPhp />,
  SiPython: <SiPython />,
  SiMysql: <SiMysql />,
  SiPostgresql: <SiPostgresql />,
  SiPostman: <SiPostman />,
  SiGit: <SiGit />,
  SiLinux: <SiLinux />,
  SiTensorflow: <SiTensorflow />,
  SiAndroid: <SiAndroid />,
};

const skillsGrouped = {
  frontend: [
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "React", icon: "SiReact" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
  ],
  backend: [
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Express", icon: "SiExpress" },
    { name: "Laravel", icon: "SiLaravel" },
    { name: "PHP", icon: "SiPhp" },
    { name: "Python", icon: "SiPython" },
  ],
  database: [
    { name: "MySQL", icon: "SiMysql" },
    { name: "PostgreSQL", icon: "SiPostgresql" },
  ],
  infrastructure: [
    { name: "REST API", icon: "SiPostman" },
    { name: "Git", icon: "SiGit" },
    { name: "VPS / Linux", icon: "SiLinux" },
    { name: "TensorFlow", icon: "SiTensorflow" },
    { name: "Android", icon: "SiAndroid" },
  ],
};

export default function Skills() {
  return (
    <section id="keahlian" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
            Keahlian
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Tech Stack
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Teknologi yang saya gunakan untuk membangun sistem yang efisien dan scalable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map(({ key, label }, catIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-6"
            >
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-4">
                {label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillsGrouped[key as keyof typeof skillsGrouped].map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + i * 0.05 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm transition-all duration-200 cursor-default group"
                  >
                    <span className="text-lg text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {iconMap[skill.icon]}
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
