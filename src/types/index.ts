export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  techStack: string[];
  features: string[];
  impact: string;
  category: "main" | "backend" | "fullstack" | "ai";
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "infrastructure";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  techStack: string[];
  type: "work" | "internship" | "freelance";
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  status: "active" | "graduated";
}
