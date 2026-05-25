"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-neutral-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header — centered with large decorative number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            What stakeholders say.
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Social proof from mentors and stakeholders I&apos;ve worked with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={`${item.author}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-3xl border border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
            >
              {/* Large decorative quotation mark */}
              <div className="absolute top-5 right-7 font-display text-8xl leading-none text-blue-100 dark:text-blue-900/40 select-none pointer-events-none">
                &ldquo;
              </div>

              <div className="relative">
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                    {item.author[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{item.author}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.role} {item.company && `· ${item.company}`}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
