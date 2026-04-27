import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "rs-ummi",
    title: "Hospital Management System",
    subtitle: "Digitalisasi Ekosistem Internal RS Ummi",
    description:
      "Transformasi proses manual rumah sakit menjadi ekosistem digital terintegrasi. Mencakup otomasi dokumen administratif, manajemen risiko, dan monitoring kapasitas pasien secara real-time.",
    role: "Fullstack Developer (Analisis, Desain, Develop, Deployment)",
    techStack: ["Next.js", "Node.js", "MySQL", "WhatsApp API", "VPS Linux"],
    features: [
      "Document Management System dengan auto-generate 4+ jenis dokumen administratif",
      "Sistem permintaan makan pasien real-time dengan notifikasi ke grup WhatsApp",
      "Modul Manajemen Risiko & K3 berbasis risk matrix 5x5 dengan pelaporan IKP",
      "Sistem manajemen rapat dengan otomatisasi surat undangan via WhatsApp API",
      "Monitoring ketersediaan ruangan real-time untuk manajemen kapasitas pasien",
    ],
    impact:
      "Memangkas waktu birokrasi antar unit, mengurangi miskomunikasi, dan meningkatkan efisiensi operasional rumah sakit.",
    category: "main",
    featured: true,
  },
  {
    id: "bio-farma",
    title: "Enterprise API Integration",
    subtitle: "PT. Bio Farma (Persero)",
    description:
      "Pembangunan jembatan komunikasi antar-aplikasi internal perusahaan farmasi nasional menggunakan arsitektur API yang aman dan efisien.",
    role: "Back-end Engineer",
    techStack: ["Node.js", "Express", "PostgreSQL", "REST API"],
    features: [
      "Modular REST API endpoints untuk integrasi berbagai sistem internal",
      "Data processing dan transformasi lintas platform",
      "Partisipasi dalam analisis kebutuhan sistem berbasis AI",
    ],
    impact:
      "Meningkatkan efisiensi alur data lintas sistem dan mengurangi ketergantungan pada proses sinkronisasi manual di PT. Bio Farma.",
    category: "backend",
    featured: true,
  },
  {
    id: "face-recognition-attendance",
    title: "Aplikasi Absensi Face Recognition",
    subtitle: "Bangkit Academy Capstone Project – Android + ML Kit",
    description:
      "Aplikasi absensi berbasis Android yang mengotomasi proses presensi dengan verifikasi wajah secara real-time menggunakan ML Kit. Dibangun sebagai capstone project Bangkit Academy.",
    role: "Mobile Developer (Android)",
    techStack: ["Android", "Kotlin", "Jetpack Compose", "ML Kit", "TensorFlow Lite"],
    features: [
      "Face recognition real-time menggunakan ML Kit untuk verifikasi presensi",
      "Antarmuka modern dengan Jetpack Compose",
      "Proses absensi otomatis tanpa input manual",
    ],
    impact:
      "Mengotomasi proses presensi dan mengurangi potensi kecurangan absensi melalui verifikasi wajah real-time.",
    category: "mobile",
    featured: true,
  },
  {
    id: "skin-cancer",
    title: "Early Skin Cancer Detection App",
    subtitle: "Deep Learning – CNN + TensorFlow Lite",
    description:
      "Aplikasi mobile Android untuk deteksi dini kanker kulit menggunakan Deep Learning (CNN) dengan TensorFlow Lite, memungkinkan klasifikasi gambar lesi kulit secara offline di perangkat.",
    role: "ML Engineer / Android Developer",
    techStack: ["Python", "TensorFlow", "TensorFlow Lite", "Android", "CNN"],
    features: [
      "Model CNN untuk klasifikasi lesi kulit, berjalan offline di perangkat Android",
      "Deteksi real-time menggunakan kamera Android",
      "Output probabilitas per kelas kanker kulit",
    ],
    impact:
      "Membantu masyarakat melakukan deteksi dini kanker kulit secara mandiri tanpa koneksi internet.",
    category: "ai",
    featured: true,
  },
  {
    id: "news-app",
    title: "NewsApp – Flutter & BLoC",
    subtitle: "Mobile Application with JWT & Push Notification",
    description:
      "Aplikasi berita modern yang dibangun menggunakan Flutter dengan state management BLoC. Fitur utama mencakup integrasi News API publik, pembacaan offline, autentikasi JWT, dan notifikasi push FCM.",
    role: "Mobile Developer",
    techStack: ["Flutter", "Dart", "BLoC", "REST API", "JWT", "Firebase FCM"],
    features: [
      "State management menggunakan BLoC untuk alur data yang terstruktur",
      "Integrasi News API untuk berita real-time",
      "Fitur offline reading untuk akses konten tanpa internet",
      "Autentikasi aman dengan JWT",
      "Push notifications menggunakan Firebase Cloud Messaging (FCM)",
    ],
    impact:
      "Memberikan pengalaman membaca berita yang mulus dengan performa tinggi dan fitur notifikasi yang dipersonalisasi.",
    category: "mobile",
    featured: true,
  },
  {
    id: "ecommerce-clothing",
    title: "Platform E-Commerce Clothing Brand",
    subtitle: "Next.js + Midtrans Payment Gateway",
    description:
      "Platform e-commerce end-to-end untuk clothing brand mencakup katalog produk, keranjang belanja, manajemen pesanan, dan integrasi pembayaran Midtrans.",
    role: "Fullstack Developer",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Midtrans", "Tailwind CSS"],
    features: [
      "Katalog produk dengan manajemen stok",
      "Keranjang belanja & alur checkout multi-step",
      "Integrasi payment gateway Midtrans untuk transaksi digital",
      "Dashboard manajemen pesanan",
    ],
    impact:
      "Memungkinkan clothing brand menjalankan penjualan online secara mandiri dengan sistem pembayaran digital yang terintegrasi.",
    category: "fullstack",
    featured: false,
  },
  {
    id: "ordering-system",
    title: "Self-Service Ordering System",
    subtitle: "Web-based F&B Ordering",
    description:
      "Sistem pemesanan mandiri berbasis web dengan manajemen menu real-time, alur pemesanan multi-step, dan integrasi payment gateway untuk transaksi digital.",
    role: "Fullstack Developer",
    techStack: ["Next.js", "Node.js", "MySQL", "Payment Gateway"],
    features: [
      "Manajemen menu real-time oleh admin",
      "Alur pemesanan multi-step yang intuitif",
      "Integrasi payment gateway untuk pembayaran digital",
    ],
    impact:
      "Mempercepat proses pemesanan dan mengurangi kesalahan order melalui sistem self-service digital.",
    category: "fullstack",
    featured: false,
  },
  {
    id: "finance-tracker",
    title: "Personal Finance Tracking System",
    subtitle: "Next.js + PostgreSQL",
    description:
      "Sistem tracking keuangan pribadi berbasis web dengan fitur pencatatan transaksi, kategorisasi, dan visualisasi laporan keuangan bulanan.",
    role: "Fullstack Developer",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Pencatatan pemasukan & pengeluaran dengan kategorisasi",
      "Visualisasi laporan keuangan bulanan dalam bentuk grafik",
      "Ringkasan kondisi keuangan secara real-time",
    ],
    impact:
      "Membantu pengguna memantau dan menganalisis kondisi keuangan pribadi secara sistematis.",
    category: "fullstack",
    featured: false,
  },
  {
    id: "transportasi-bandung",
    title: "Analisis Data Transportasi Publik Bandung",
    subtitle: "Python – Data Analysis & Visualization",
    description:
      "Analisis data sistem transportasi publik Kota Bandung menggunakan Python untuk menghasilkan insight pola pergerakan penumpang dan rekomendasi optimasi rute.",
    role: "Data Analyst",
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    features: [
      "Pembersihan dan preprocessing data transportasi",
      "Analisis pola pergerakan penumpang per rute",
      "Visualisasi data & rekomendasi optimasi rute",
    ],
    impact:
      "Menghasilkan insight berbasis data untuk mendukung pengambilan keputusan optimasi layanan transportasi publik Bandung.",
    category: "ai",
    featured: false,
  },
];
