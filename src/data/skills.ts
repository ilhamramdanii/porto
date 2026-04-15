import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "Next.js", icon: "SiNextdotjs", category: "frontend" },
  { name: "React", icon: "SiReact", category: "frontend" },
  { name: "TypeScript", icon: "SiTypescript", category: "frontend" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "SiNodedotjs", category: "backend" },
  { name: "Express", icon: "SiExpress", category: "backend" },
  { name: "Laravel", icon: "SiLaravel", category: "backend" },
  { name: "PHP", icon: "SiPhp", category: "backend" },
  { name: "Python", icon: "SiPython", category: "backend" },

  // Database
  { name: "MySQL", icon: "SiMysql", category: "database" },
  { name: "PostgreSQL", icon: "SiPostgresql", category: "database" },

  // Infrastructure
  { name: "REST API", icon: "SiPostman", category: "infrastructure" },
  { name: "Git", icon: "SiGit", category: "infrastructure" },
  { name: "VPS Deployment", icon: "SiLinux", category: "infrastructure" },
  { name: "TensorFlow", icon: "SiTensorflow", category: "infrastructure" },
  { name: "Android", icon: "SiAndroid", category: "infrastructure" },
];

export const skillCategories = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "infrastructure", label: "Infrastruktur & Lainnya" },
] as const;
