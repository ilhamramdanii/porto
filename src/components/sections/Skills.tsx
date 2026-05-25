"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, SiLaravel, SiPhp, SiPython,
  SiMysql, SiPostgresql,
  SiAndroid, SiKotlin,
  SiPostman, SiGit, SiLinux, SiTensorflow, SiWhatsapp, SiGoogle, SiGo, SiFlutter,
} from "react-icons/si";
import { skills, skillTiers } from "@/data/skills";

const iconMap: Record<string, React.ReactElement> = {
  SiNextdotjs: <SiNextdotjs />,
  SiReact: <SiReact />,
  SiTypescript: <SiTypescript />,
  SiJavascript: <SiJavascript />,
  SiTailwindcss: <SiTailwindcss />,
  SiHtml5: <SiHtml5 />,
  SiCss: <SiCss />,
  SiNodedotjs: <SiNodedotjs />,
  SiExpress: <SiExpress />,
  SiLaravel: <SiLaravel />,
  SiPhp: <SiPhp />,
  SiPython: <SiPython />,
  SiMysql: <SiMysql />,
  SiPostgresql: <SiPostgresql />,
  SiAndroid: <SiAndroid />,
  SiKotlin: <SiKotlin />,
  SiJetpackcompose: <SiAndroid />,
  SiGoogle: <SiGoogle />,
  SiPostman: <SiPostman />,
  SiGit: <SiGit />,
  SiLinux: <SiLinux />,
  SiTensorflow: <SiTensorflow />,
  SiWhatsapp: <SiWhatsapp />,
  SiGo: <SiGo />,
  SiFlutter: <SiFlutter />,
};

const tierAccent = {
  primary: "border-l-blue-500 dark:border-l-blue-400",
  proficient: "border-l-blue-300 dark:border-l-blue-600",
  exploring: "border-l-gray-300 dark:border-l-neutral-600",
} as const;

export default function Skills() {
  return (
    <section id="keahlian" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header — centered with accent line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Tools I rely on and how I use them.
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Not just a list of buzzwords. Here&apos;s what I actually build with, day to day.
          </p>
        </motion.div>

        <div className="grid gap-10">
          {skillTiers.map(({ key, label, description }, tierIndex) => {
            const tierSkills = skills.filter((s) => s.level === key);
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: tierIndex * 0.1 }}
                className={`pl-4 border-l-2 ${tierAccent[key as keyof typeof tierAccent]}`}
              >
                <div className="flex flex-col md:flex-row md:items-end gap-1 md:gap-4 mb-5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {label}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 pb-0.5">
                    {description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {tierSkills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: tierIndex * 0.05 + i * 0.04 }}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-200 cursor-default group"
                    >
                      <span className="text-xl text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {iconMap[skill.icon]}
                      </span>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
