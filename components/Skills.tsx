"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-neutral-200">
      <div className="container-narrow">
        <SectionHeading
          label="02 — Skills"
          title="Tools I use to ship."
          description="From frontend frameworks to AI integrations and DevOps — here's the stack I work with daily."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group border border-neutral-200 rounded-2xl p-6 hover:border-neutral-900 transition-colors"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-4">
                {group.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 bg-neutral-100 text-neutral-800 rounded-full group-hover:bg-neutral-900 group-hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
