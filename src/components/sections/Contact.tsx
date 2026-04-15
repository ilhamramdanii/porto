"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheckCircle } from "react-icons/fi";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Format email tidak valid"),
  subject: z.string().min(5, "Subject minimal 5 karakter"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

type FormValues = z.infer<typeof schema>;

const contactLinks = [
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: "mas.ilhamramdani@gmail.com",
    href: "mailto:mas.ilhamramdani@gmail.com",
  },
  {
    icon: <FiLinkedin size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/m-ilham-ramdani",
    href: "https://www.linkedin.com/in/m-ilham-ramdani-396025218/",
  },
  {
    icon: <FiGithub size={20} />,
    label: "GitHub",
    value: "github.com/ilhamramdanii",
    href: "https://github.com/ilhamramdanii",
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kontak" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
            Kontak
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Mari Berdiskusi
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Mari berdiskusi tentang bagaimana saya bisa memberikan{" "}
            <strong className="text-gray-700 dark:text-gray-300">impact</strong> untuk perusahaan Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-4"
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Saya terbuka untuk peluang baru, baik full-time, freelance, maupun kolaborasi proyek.
              Jangan ragu untuk menghubungi saya!
            </p>

            <div className="space-y-3 pt-2">
              {contactLinks.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm transition-all duration-200 group"
                >
                  <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">{icon}</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500">{label}</p>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-16 text-center"
              >
                <FiCheckCircle className="text-green-500" size={48} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Pesan Terkirim!
                </h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-sm">
                  Terima kasih telah menghubungi saya. Saya akan segera membalas pesan Anda.
                </p>
                <Button variant="outline" onClick={() => setStatus("idle")}>
                  Kirim Pesan Lain
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Nama
                    </label>
                    <input
                      {...register("name")}
                      placeholder="Nama Anda"
                      className={cn(
                        "w-full px-4 py-2.5 rounded-lg border text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none transition-colors",
                        errors.name
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500"
                      )}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Email
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="email@example.com"
                      className={cn(
                        "w-full px-4 py-2.5 rounded-lg border text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none transition-colors",
                        errors.email
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500"
                      )}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    {...register("subject")}
                    placeholder="Topik diskusi"
                    className={cn(
                      "w-full px-4 py-2.5 rounded-lg border text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none transition-colors",
                      errors.subject
                        ? "border-red-400 focus:border-red-500"
                        : "border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500"
                    )}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Pesan
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tulis pesan Anda di sini..."
                    className={cn(
                      "w-full px-4 py-2.5 rounded-lg border text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none transition-colors resize-none",
                      errors.message
                        ? "border-red-400 focus:border-red-500"
                        : "border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500"
                    )}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
                  )}
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500">
                    Gagal mengirim pesan. Silakan coba lagi atau hubungi via email langsung.
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    "Mengirim..."
                  ) : (
                    <>
                      <FiSend /> Kirim Pesan
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
