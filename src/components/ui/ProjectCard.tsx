"use client";

import { motion } from "framer-motion";
import { Project } from "@/types";
import TechBadge from "./TechBadge";
import Badge from "./Badge";
import { FiExternalLink, FiGithub, FiCheckCircle } from "react-icons/fi";

const categoryConfig = {
  main: { label: "Proyek Utama", variant: "blue" as const },
  backend: { label: "Backend / API", variant: "green" as const },
  fullstack: { label: "Fullstack", variant: "purple" as const },
  ai: { label: "AI / ML", variant: "orange" as const },
  mobile: { label: "Mobile", variant: "purple" as const },
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cat = categoryConfig[project.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 dark:bg-gray-900 dark:border-gray-700 dark:hover:border-blue-700"
    >
      {project.featured && (
        <span className="absolute top-4 right-4 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
          ★ Featured
        </span>
      )}

      <div className="mb-4">
        <Badge variant={cat.variant} className="mb-3">
          {cat.label}
        </Badge>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
          {project.subtitle}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="mb-4">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">
          Peran
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300">{project.role}</p>
      </div>

      <div className="mb-4">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">
          Fitur Utama
        </p>
        <ul className="space-y-1.5">
          {project.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <FiCheckCircle className="mt-0.5 flex-shrink-0 text-green-500" size={14} />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900">
        <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
          Impact
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300">{project.impact}</p>
      </div>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>

      {(project.demoUrl || project.githubUrl) && (
        <div className="flex gap-3 mt-auto pt-2 border-t border-gray-100 dark:border-gray-800">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              <FiExternalLink size={14} /> Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline"
            >
              <FiGithub size={14} /> GitHub
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
