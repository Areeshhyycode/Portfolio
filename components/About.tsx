"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { about } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-neutral-200">
      <div className="container-narrow">
        <SectionHeading label="01 — About" title="A bit about me." />

        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
              {about.summary}
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-4"
          >
            {about.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-neutral-700"
              >
                <span className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200 rounded-3xl overflow-hidden"
        >
          {about.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
              className="bg-white p-6 md:p-8 hover:bg-neutral-50 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-neutral-500 leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
