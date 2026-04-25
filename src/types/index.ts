export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  techStack: string[];
  features: string[];
  impact: string;
  category: "main" | "backend" | "fullstack" | "ai" | "mobile";
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "infrastructure" | "mobile";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  techStack: string[];
  type: "work" | "internship" | "freelance" | "organization";
  highlights?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  gpa?: string;
  status: "active" | "graduated";
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  description?: string;
}

export interface Organization {
  name: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
}
