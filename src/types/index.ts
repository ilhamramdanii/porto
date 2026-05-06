export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  techStack: string[];
  features: string[];
  impact: string;
  category: "main" | "backend" | "fullstack" | "ai" | "mobile" | "healthcare" | "enterprise";
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: "primary" | "proficient" | "exploring";
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
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
