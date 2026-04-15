import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "rs-ummi",
    title: "Hospital Management System",
    subtitle: "RS Ummi – Digitalisasi Operasional Rumah Sakit",
    description:
      "Sistem internal rumah sakit yang dibangun dari nol untuk mendigitalisasi proses operasional, manajemen risiko, dan komunikasi antar unit medis secara terpusat.",
    role: "Fullstack Developer (Design, Develop, Testing, Deployment)",
    techStack: ["Laravel", "Next.js", "Node.js", "MySQL", "REST API", "VPS"],
    features: [
      "Manajemen rapat & auto-generate surat undangan via integrasi WhatsApp",
      "Sistem permintaan makan pasien secara real-time",
      "Document Management System (Upload, pencarian cepat, access control)",
      "Manajemen risiko & Insiden Keselamatan Pasien (IKP) dengan Risk Matrix 5x5",
    ],
    impact:
      "Mengurangi proses manual, mempercepat komunikasi antar unit medis secara terpusat, dan meningkatkan efisiensi pelaporan administrasi.",
    category: "main",
    featured: true,
  },
  {
    id: "bio-farma",
    title: "API Service – Enterprise Integration",
    subtitle: "Bio Farma – Integrasi Sistem Internal Enterprise",
    description:
      "Membangun layanan API terpusat untuk integrasi antar sistem internal di lingkungan enterprise skala besar.",
    role: "Backend Engineer",
    techStack: ["Node.js", "Express", "PostgreSQL"],
    features: [
      "Modular REST API endpoints untuk berbagai sistem internal",
      "Data processing dan transformasi lintas platform",
      "Validasi data dan error handling yang konsisten",
    ],
    impact:
      "Meningkatkan efisiensi dan keamanan pertukaran data antar sistem, serta memangkas ketergantungan proses sinkronisasi manual.",
    category: "backend",
    featured: true,
  },
  {
    id: "elearning",
    title: "E-Learning & School Management Platform",
    subtitle: "Digitalisasi Proses Belajar Mengajar",
    description:
      "Platform digitalisasi proses belajar mengajar untuk institusi pendidikan dengan manajemen multi-user.",
    role: "Fullstack Developer",
    techStack: ["Laravel", "MySQL"],
    features: [
      "Manajemen materi pembelajaran (upload, kategorisasi, distribusi)",
      "Sistem autentikasi multi-user: Guru & Siswa",
      "Tracking progres pembelajaran per siswa",
    ],
    impact:
      "Mendukung digitalisasi sekolah dan menyediakan media informasi serta pembelajaran yang terpusat.",
    category: "fullstack",
    featured: false,
  },
  {
    id: "sentimen-transportasi",
    title: "Sentimen Analisis Transportasi Bandung",
    subtitle: "NLP & Data Processing",
    description:
      "Proyek analisis sentimen terhadap layanan transportasi publik Kota Bandung menggunakan teknik NLP.",
    role: "Data Scientist / ML Engineer",
    techStack: ["Python", "NLP", "Pandas", "Scikit-learn"],
    features: [
      "Text preprocessing & cleaning data ulasan transportasi",
      "Klasifikasi sentimen positif/negatif/netral",
      "Visualisasi distribusi sentimen per rute/layanan",
    ],
    impact:
      "Memberikan insight berbasis data tentang persepsi masyarakat terhadap transportasi publik Bandung.",
    category: "ai",
    featured: false,
  },
  {
    id: "skin-cancer",
    title: "Early Skin Cancer Detection App",
    subtitle: "Deep Learning – CNN MobileNetV3",
    description:
      "Aplikasi mobile berbasis Android untuk deteksi dini kanker kulit menggunakan model Deep Learning Convolutional Neural Networks (CNN) dengan arsitektur MobileNetV3.",
    role: "ML Engineer / Android Developer",
    techStack: ["Python", "TensorFlow", "MobileNetV3", "Android", "CNN"],
    features: [
      "Implementasi model CNN berbasis MobileNetV3 untuk klasifikasi lesi kulit",
      "Deteksi real-time menggunakan kamera Android",
      "Output probabilitas per kelas dengan tingkat akurasi tinggi",
    ],
    impact:
      "Membantu masyarakat melakukan deteksi dini kanker kulit secara mandiri, mempercepat rujukan medis.",
    category: "ai",
    featured: true,
  },
];
