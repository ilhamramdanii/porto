import { Skill } from "@/types";

export const skills: Skill[] = [
  // Primary Stack
  { name: "Next.js", icon: "SiNextdotjs", level: "primary" },
  { name: "Node.js", icon: "SiNodedotjs", level: "primary" },
  { name: "MySQL", icon: "SiMysql", level: "primary" },
  { name: "PostgreSQL", icon: "SiPostgresql", level: "primary" },
  { name: "REST API", icon: "SiPostman", level: "primary" },
  { name: "VPS Linux", icon: "SiLinux", level: "primary" },

  // Proficient
  { name: "Laravel", icon: "SiLaravel", level: "proficient" },
  { name: "Express", icon: "SiExpress", level: "proficient" },
  { name: "TypeScript", icon: "SiTypescript", level: "proficient" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", level: "proficient" },
  { name: "Android/Kotlin", icon: "SiAndroid", level: "proficient" },
  { name: "Python", icon: "SiPython", level: "proficient" },

  // Exploring
  { name: "Go", icon: "SiGo", level: "exploring" },
  { name: "Flutter", icon: "SiFlutter", level: "exploring" },
  { name: "TensorFlow", icon: "SiTensorflow", level: "exploring" },
];

export const skillTiers = [
  { key: "primary", label: "Primary Stack", description: "The tools I rely on and use daily for production systems." },
  { key: "proficient", label: "Proficient", description: "Technologies I'm comfortable with and have used in various projects." },
  { key: "exploring", label: "Exploring", description: "New technologies I'm currently learning and excited about." },
] as const;
