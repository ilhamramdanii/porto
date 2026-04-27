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
            className="space-y-8"
          >
            {/* Foto profil with decorative background */}
            <div className="relative w-56 h-56 mx-auto md:mx-0">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 opacity-20 animate-pulse" />
              <div className="absolute inset-0 bg-blue-400 rounded-2xl -rotate-3 opacity-10" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800 bg-white dark:bg-gray-800">
                <Image
                  src="/images/M Ilham Ramdani (1).png"
                  alt="M Ilham Ramdani"
                  fill
                  className="object-cover object-top hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            {/* Quick info badges */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                { icon: <FiMapPin />, text: "Cianjur, ID" },
                { icon: <FiBook />, text: "Techno-Enthusiast" },
                { icon: <FiCode />, text: "System Architect" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-600 dark:text-gray-400 shadow-sm">
                  <span className="text-blue-600 dark:text-blue-400">{icon}</span>
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
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                Ketertarikan saya pada dunia pemrograman dimulai dari rasa penasaran: <span className="text-blue-600 dark:text-blue-400 font-medium">"Gimana sih cara sebuah aplikasi bisa mempermudah pekerjaan manusia?"</span>
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Sejak itu, saya mendedikasikan waktu saya untuk mempelajari cara membangun sistem yang bukan cuma "jalan", tapi juga efisien dan enak digunakan. Saya senang mengeksplorasi teknologi baru, mulai dari <strong className="text-gray-900 dark:text-white">Next.js</strong> untuk tampilan yang interaktif, sampai <strong className="text-gray-900 dark:text-white">Node.js</strong> dan <strong className="text-gray-900 dark:text-white">Go</strong> untuk logika back-end yang tangguh.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Diluar urusan kode, saya adalah orang yang senang berkolaborasi dan bertukar ide. Bagi saya, komunikasi yang baik sama pentingnya dengan menulis kode yang bersih. Saat ini, saya fokus membangun solusi digital untuk sektor kesehatan dan farmasi, mengubah proses manual yang rumit menjadi sistem yang serba otomatis.
              </p>
            </div>

            {/* Education card */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-5">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">
                Pendidikan
              </p>
              <div className="space-y-4">
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
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className="text-xs text-gray-500 dark:text-gray-500">{edu.period}</span>
                        {edu.gpa && (
                          <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                            IPK {edu.gpa}
                          </span>
                        )}
                        {edu.status === "graduated" && (
                          <span className="text-xs text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                            Lulus
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
