"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 border-t border-neutral-200"
    >
      <div className="container-narrow">
        <SectionHeading
          label="03 — Experience"
          title="Where I've worked."
        />

        <div className="space-y-12">
          {experience.map((job, idx) => (
            <motion.div
              key={job.company + job.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="grid md:grid-cols-12 gap-6 pb-12 border-b border-neutral-200 last:border-b-0 last:pb-0"
            >
              <div className="md:col-span-4">
                <div className="text-sm font-mono text-neutral-500 mb-2">
                  {job.period}
                </div>
                <div className="text-xs text-neutral-400">{job.location}</div>
              </div>

              <div className="md:col-span-8">
                <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                  {job.role}
                </h3>
                <div className="text-neutral-600 mb-4">{job.company}</div>
                <ul className="space-y-2">
                  {job.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-neutral-700 leading-relaxed flex gap-3"
                    >
                      <span className="text-neutral-400 mt-2 flex-shrink-0">
                        —
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
