"use client";

import { motion } from "framer-motion";
import { Project } from "@/types";
import TechBadge from "./TechBadge";
import Badge from "./Badge";
import { FiExternalLink, FiGithub, FiZap } from "react-icons/fi";

const categoryConfig = {
  main: { label: "Main Project", variant: "blue" as const },
  enterprise: { label: "Enterprise", variant: "green" as const },
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
  const categoryKey = project.category as keyof typeof categoryConfig;
  const cat = categoryConfig[categoryKey] || {
    label: project.category.charAt(0).toUpperCase() + project.category.slice(1),
    variant: "default" as const,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 dark:bg-neutral-900 dark:border-neutral-700 dark:hover:border-blue-700"
    >
      {project.featured && (
        <span className="absolute top-4 right-4 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
          ★ Featured
        </span>
      )}

      {/* Header */}
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

      {/* Key highlights */}
      {project.features && project.features.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-mono font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
            Highlights
          </p>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="text-blue-400 mt-0.5 flex-shrink-0">·</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Impact — elevated visual treatment */}
      <div className="mb-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50">
        <div className="flex items-center gap-1.5 mb-1">
          <FiZap className="text-blue-500" size={12} />
          <p className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Impact
          </p>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300">{project.impact}</p>
      </div>

      {/* Tech stack */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>

      {/* Links */}
      {(project.demoUrl || project.githubUrl) && (
        <div className="flex gap-4 mt-auto pt-3 border-t border-gray-100 dark:border-neutral-800">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              <FiExternalLink size={14} /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline"
            >
              <FiGithub size={14} /> GitHub
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
