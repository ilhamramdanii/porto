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
            Tech Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Tools I rely on and how I use them.
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Not just a list of buzzwords. Here&apos;s what I actually build with, day to day.
          </p>
        </motion.div>

        <div className="grid gap-12">
          {skillTiers.map(({ key, label, description }, tierIndex) => {
            const tierSkills = skills.filter((s) => s.level === key);
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: tierIndex * 0.1 }}
                className="space-y-6"
              >
                <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {label}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 pb-0.5">
                    {description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  {tierSkills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: tierIndex * 0.1 + i * 0.05 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all duration-200 cursor-default group"
                    >
                      <span className="text-2xl text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
