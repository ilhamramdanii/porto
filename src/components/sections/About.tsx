"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiMapPin, FiBook, FiCode } from "react-icons/fi";
import { education } from "@/data/experience";

export default function About() {
  return (
    <section
      id="tentang"
      className="py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
            Tentang Saya
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Siapa Saya?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Photo & quick info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Foto profil */}
            <div className="relative w-48 h-48 mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-xl shadow-blue-600/20 ring-4 ring-blue-100 dark:ring-blue-900/50">
              <Image
                src="/images/M Ilham Ramdani (1).png"
                alt="M Ilham Ramdani"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Quick info */}
            <div className="space-y-3">
              {[
                { icon: <FiMapPin />, text: "Bandung, Indonesia" },
                { icon: <FiBook />, text: "S1 Teknik Informatika – Universitas Widyatama" },
                { icon: <FiCode />, text: "Fullstack Developer & Web System Integrator" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">{icon}</span>
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Description & Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Saya adalah Fullstack Developer dengan fokus pada pengembangan sistem berbasis web
                dan digitalisasi proses bisnis. Berpengalaman membangun sistem untuk sektor{" "}
                <strong className="text-gray-900 dark:text-white">kesehatan</strong> dan{" "}
                <strong className="text-gray-900 dark:text-white">industri</strong>, termasuk
                Document Management System, sistem manajemen risiko, dan integrasi API.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Saya terbiasa mengembangkan solusi{" "}
                <strong className="text-gray-900 dark:text-white">end-to-end</strong> mulai dari
                analisis kebutuhan hingga deployment.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Selain pengalaman industri, saat ini saya merupakan{" "}
                <strong className="text-gray-900 dark:text-white">mahasiswa tingkat akhir</strong>{" "}
                S1 Teknik Informatika di Universitas Widyatama. Kombinasi antara fondasi akademis
                yang kuat dan pengalaman praktis membuat saya mampu merancang arsitektur sistem yang
                efisien dan <strong className="text-gray-900 dark:text-white">scalable</strong>.
              </p>
            </div>

            {/* Education card */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-5">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">
                Pendidikan
              </p>
              {education.map((edu) => (
                <div key={edu.institution} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                    <FiBook className="text-blue-600 dark:text-blue-400" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{edu.institution}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.degree} {edu.field}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500 dark:text-gray-500">{edu.period}</span>
                      {edu.status === "active" && (
                        <span className="text-xs text-green-600 dark:text-green-400 font-medium bg-green-50 dark:bg-green-950/50 px-2 py-0.5 rounded-full">
                          Aktif
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
