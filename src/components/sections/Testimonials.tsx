"use client";

import { motion } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
            Testimonials
          </p>
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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="absolute top-6 right-8 text-blue-100 dark:text-blue-900/30">
                <FiMessageSquare size={48} />
              </div>
              
              <div className="relative">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic">
                  &quot;{item.quote}&quot;
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl">
                    {item.author[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{item.author}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.role} {item.company && `at ${item.company}`}
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
