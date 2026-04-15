import { Experience, Education } from "@/types";

export const experiences: Experience[] = [
  {
    company: "PT. Duta Graha Afiah (RS Ummi)",
    role: "Fullstack Developer",
    period: "Okt 2025 – Apr 2026",
    description:
      "Membangun beberapa sistem internal rumah sakit secara end-to-end, mulai dari analisis kebutuhan, perancangan solusi, implementasi, hingga deployment ke VPS Linux production. Berkolaborasi langsung dengan stakeholder lintas divisi.",
    techStack: ["Next.js", "Node.js", "MySQL", "WhatsApp API", "VPS Linux"],
    type: "internship",
    highlights: [
      "Document Management System dengan auto-generate 4+ jenis dokumen administratif",
      "Sistem permintaan makan pasien real-time dengan notifikasi ke grup WhatsApp",
      "Modul Manajemen Risiko & K3 berbasis risk matrix 5x5 dengan pelaporan IKP",
      "Sistem manajemen rapat terintegrasi dengan otomatisasi surat undangan via WhatsApp API",
      "Sistem monitoring ketersediaan ruangan real-time untuk manajemen kapasitas pasien",
    ],
  },
  {
    company: "PT. Bio Farma",
    role: "Back-end Engineer",
    period: "Okt – Des 2024",
    description:
      "Membangun API service untuk integrasi komunikasi antar-aplikasi internal PT. Bio Farma. Terlibat dalam analisis kebutuhan sistem dan strategi implementasi berbasis AI untuk pengembangan produk teknologi perusahaan.",
    techStack: ["Node.js", "Express", "PostgreSQL", "REST API"],
    type: "internship",
  },
  {
    company: "Universitas Widyatama",
    role: "Asisten Proyek & Kolaborator Dosen",
    period: "Sep 2021 – Agt 2025",
    description:
      "Mengembangkan berbagai sistem dan aplikasi sebagai bagian dari program pengabdian masyarakat dan kolaborasi dengan dosen, mencakup pengembangan web, mobile, dan analisis data.",
    techStack: ["Next.js", "Laravel", "Android", "Python", "PostgreSQL"],
    type: "freelance",
    highlights: [
      "Website profil & e-learning SDN 162 Warung Jambu Bandung (program pengabdian masyarakat)",
      "Aplikasi reseller Momono Cake (Garut) bersama dosen pembimbing",
      "Sistem deteksi kanker kulit berbasis Android dengan Deep Learning (CNN + TensorFlow Lite)",
      "Sistem tracking keuangan pribadi berbasis web (Next.js + PostgreSQL)",
      "Platform e-commerce clothing brand dengan integrasi pembayaran Midtrans",
      "Self-service ordering system dengan manajemen menu real-time & payment gateway",
      "Analisis data transportasi publik Bandung menggunakan Python (Pandas, Matplotlib)",
    ],
  },
  {
    company: "Siratsemesta",
    role: "Co-Founder & Chief Operating Officer",
    period: "Jan – Agt 2022",
    description:
      "Mengembangkan strategi bisnis berbasis teknologi dan riset pasar untuk startup di bidang kesehatan mental. Berhasil masuk top 200 finalis dari 18.000+ peserta di Indonesia Digital Tribe 2022 dan meyakinkan calon investor hingga memutuskan berinvestasi.",
    techStack: ["Business Strategy", "Market Research", "Tech Product"],
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
