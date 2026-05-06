import { Experience, Education, Certification, Organization } from "@/types";

export const experiences: Experience[] = [
  {
    company: "RS Ummi Bogor",
    role: "Fullstack Developer",
    period: "2024 – 2025",
    description:
      "Embedded within the hospital's IT team, I designed and shipped 6 internal systems end-to-end from stakeholder requirements to production deployment on a Linux VPS. Every system replaced a manual, paper-heavy process that real hospital staff dealt with daily, covering areas like patient meal management, document generation, meeting automation, room monitoring, and patient safety incident tracking.",
    techStack: [
      "Laravel 12",
      "CodeIgniter 3",
      "Node.js + TypeScript",
      "Livewire",
      "Socket.io",
      "WhatsApp API",
      "Prisma",
      "MySQL",
      "PostgreSQL",
      "Alpine.js",
      "Tailwind CSS",
      "TCPDF",
      "Linux VPS",
    ],
    type: "internship",
  },
  {
    company: "PT. Bio Farma (Persero)",
    role: "Back-end Engineer",
    period: "2024",
    description:
      "Worked within the engineering team at one of Indonesia's largest state-owned pharmaceutical companies, focusing on designing and building modular REST API services to bridge communication between internal enterprise applications. The role involved cross-team requirements analysis and technical strategy discussions around AI adoption in product development giving me direct exposure to how engineering decisions get made at scale inside a major BUMN.",
    techStack: ["REST API", "Modular Architecture", "Enterprise Integration", "TypeScript"],
    type: "internship",
  },
  {
    company: "Siratsemesta",
    role: "Co-Founder & COO",
    period: "2022 – 2023",
    description:
      "Co-founded a mental health tech startup from scratch, handling business strategy, market research, investor pitching, and product direction. Reached Top 200 of 18,000+ participants at Indonesia Digital Tribe 2022 and secured early investor commitment proof that I can think well beyond just writing code.",
    techStack: ["Business Strategy", "Market Research", "Product Direction"],
    type: "freelance",
  },
];

export const education: Education[] = [
  {
    institution: "Universitas Widyatama",
    degree: "S1",
    field: "Teknik Informatika",
    period: "Sep 2021 – Agt 2025",
    gpa: "3.52 / 4.00",
    status: "graduated",
  },
  {
    institution: "Bangkit Academy",
    degree: "Mobile Development (Android)",
    field: "Google, GoTo, Traveloka",
    period: "Feb 2024 – Jun 2024",
    status: "graduated",
  },
];

export const certifications: Certification[] = [
  {
    title: "Junior Web Programming",
    issuer: "BNSP (National Professional Certification Agency)",
    year: "2025",
  },
  {
    title: "Mobile Development (Android)",
    issuer: "Bangkit Academy — Google, GoTo, Traveloka",
    year: "2024",
  },
  {
    title: "Programming Essentials in C",
    issuer: "Cisco Networking Academy",
    year: "2023",
  },
];

export const organizations: Organization[] = [
  {
    name: "Google Developer Student Club (GDSC) — Widyatama University",
    role: "Activity Secretary",
    period: "Sep 2023 – Jul 2024",
    description: "Mengelola operasional administratif dan pelaksanaan event teknologi.",
    highlights: [
      "Merencanakan dan mengeksekusi 50+ event teknologi (TechTalks, workshop, hackathon)",
      "Meningkatkan kehadiran TechTalk sebesar 20% melalui akuisisi partner strategis",
      "Membawa GDSC Widyatama menjadi chapter teraktif ke-2 di Indonesia dari 86 chapter",
    ],
  },
  {
    name: "Informatics Engineering Student Association — Widyatama University",
    role: "Public Relations",
    period: "Nov 2021 – Aug 2022",
    description: "Membangun hubungan eksternal dan keterlibatan mahasiswa.",
    highlights: [
      "Menginisiasi kolaborasi lintas komunitas yang meningkatkan engagement mahasiswa sebesar 30%",
      "Memimpin penyusunan proposal dan rencana presentasi untuk event Techno 2022",
    ],
  },
  {
    name: "Saka SBH National — Jakarta, Indonesia",
    role: "Event Organizer",
    period: "May 2021 – Jan 2022",
    description: "Mengorganisir event kesehatan berskala nasional.",
    highlights: [
      "Memimpin event Sharing United More Information dan SBH Leadership Training di BBPK Ciloto",
      "Berkolaborasi dengan Kementerian Kesehatan RI dalam edukasi teknologi kesehatan",
      "Berhasil mereduksi biaya logistik sebesar 30% dari estimasi awal",
    ],
  },
];
