import { Experience, Education } from "@/types";

export const experiences: Experience[] = [
  {
    company: "RS Ummi",
    role: "Fullstack Developer",
    period: "2024 – Sekarang",
    description:
      "Merancang, membangun, dan melakukan deployment Hospital Management System dari nol. Bertanggung jawab penuh atas seluruh siklus pengembangan mulai dari analisis kebutuhan, desain arsitektur sistem, implementasi, testing, hingga deployment ke VPS production.",
    techStack: ["Laravel", "Next.js", "Node.js", "MySQL", "REST API", "VPS"],
    type: "work",
  },
  {
    company: "Bio Farma",
    role: "Backend Engineer",
    period: "Sep – Des 2024",
    description:
      "Membangun layanan API terpusat untuk keperluan integrasi antar sistem internal di lingkungan enterprise. Fokus pada desain modular, keamanan data, dan performa tinggi.",
    techStack: ["Node.js", "Express", "PostgreSQL"],
    type: "work",
  },
  {
    company: "Institusi Pendidikan",
    role: "Fullstack Developer",
    period: "2023 – 2024",
    description:
      "Membangun platform e-learning dan school management system untuk mendukung digitalisasi proses belajar mengajar.",
    techStack: ["Laravel", "MySQL"],
    type: "freelance",
  },
];

export const education: Education[] = [
  {
    institution: "Universitas Widyatama",
    degree: "S1",
    field: "Teknik Informatika",
    period: "2021 – Sekarang",
    status: "active",
  },
];
