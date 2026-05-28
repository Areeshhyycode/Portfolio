"use client";

import { motion } from "framer-motion";

type Props = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ label, title, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-16"
    >
      <div className="text-sm font-mono text-neutral-500 mb-3 uppercase tracking-wider">
        {label}
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight max-w-2xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-neutral-600 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
