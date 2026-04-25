import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "Next.js", icon: "SiNextdotjs", category: "frontend" },
  { name: "React.js", icon: "SiReact", category: "frontend" },
  { name: "TypeScript", icon: "SiTypescript", category: "frontend" },
  { name: "JavaScript", icon: "SiJavascript", category: "frontend" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", category: "frontend" },
  { name: "HTML5", icon: "SiHtml5", category: "frontend" },
  { name: "CSS3", icon: "SiCss3", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "SiNodedotjs", category: "backend" },
  { name: "Express", icon: "SiExpress", category: "backend" },
  { name: "Laravel", icon: "SiLaravel", category: "backend" },
  { name: "PHP", icon: "SiPhp", category: "backend" },
  { name: "Python", icon: "SiPython", category: "backend" },

  // Database
  { name: "MySQL", icon: "SiMysql", category: "database" },
  { name: "PostgreSQL", icon: "SiPostgresql", category: "database" },

  // Mobile
  { name: "Android", icon: "SiAndroid", category: "mobile" },
  { name: "Kotlin", icon: "SiKotlin", category: "mobile" },
  { name: "Flutter", icon: "SiFlutter", category: "mobile" },
  { name: "Jetpack Compose", icon: "SiJetpackcompose", category: "mobile" },
  { name: "ML Kit", icon: "SiGoogle", category: "mobile" },
  { name: "TensorFlow Lite", icon: "SiTensorflow", category: "mobile" },

  // Infrastructure & Tools
  { name: "Git", icon: "SiGit", category: "infrastructure" },
  { name: "VPS Linux", icon: "SiLinux", category: "infrastructure" },
  { name: "REST API", icon: "SiPostman", category: "infrastructure" },
  { name: "WhatsApp API", icon: "SiWhatsapp", category: "infrastructure" },
  { name: "TensorFlow", icon: "SiTensorflow", category: "infrastructure" },
];

export const skillCategories = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "mobile", label: "Mobile" },
  { key: "infrastructure", label: "Tools & Infrastruktur" },
] as const;
