"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { personal } from "@/lib/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16">
      <div className="container-narrow w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95] text-balance"
        >
          Full Stack Developer.
          <br />
          <span className="text-neutral-400">AI Integration Specialist.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-lg sm:text-xl text-neutral-600 max-w-2xl leading-relaxed"
        >
          Hi, I&apos;m {personal.name.split(" ")[0]} I build AI-powered web
          and mobile apps with the MERN stack, Next.js, and React Native.
          Currently at{" "}
          <span className="text-neutral-900 font-medium">Zero Vertical Labs</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-full hover:bg-neutral-700 transition-colors"
          >
            See my work
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-neutral-300 px-6 py-3 rounded-full hover:border-neutral-900 transition-colors"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex items-center gap-2 text-sm text-neutral-500"
        >
          <MapPin size={14} />
          {personal.location}
        </motion.div>
      </div>
    </section>
  );
}
