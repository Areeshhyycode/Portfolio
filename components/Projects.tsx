"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 border-t border-neutral-200"
    >
      <div className="container-narrow">
        <SectionHeading
          label="04 — Projects"
          title="Selected work."
          description="A few projects I've built — focused on AI integration, real-world utility, and clean UX."
        />

        <div className="space-y-6">
          {projects.map((project, idx) => {
            const inProgress = "inProgress" in project && project.inProgress;
            const liveUrl = "liveUrl" in project ? project.liveUrl : undefined;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative border border-neutral-200 rounded-3xl p-8 md:p-10 hover:border-neutral-300 transition-all hover:shadow-xl hover:shadow-neutral-900/5 hover:-translate-y-1 overflow-hidden"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-50/0 via-transparent to-violet-50/0 opacity-0 group-hover:opacity-100 group-hover:from-indigo-50/60 group-hover:to-violet-50/40 transition-opacity duration-500" />
                <div className="relative">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                      <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                        {project.title}
                      </h3>
                      <span className="text-sm text-neutral-500">
                        — {project.subtitle}
                      </span>
                      {inProgress && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                          In Development
                        </span>
                      )}
                    </div>

                    <p className="text-neutral-700 leading-relaxed mb-6 max-w-2xl">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      {liveUrl && (
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 hover:gap-2.5 transition-all"
                        >
                          Live demo
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                      >
                        <GithubIcon size={14} />
                        Source code
                      </a>
                    </div>
                  </div>

                  <div className="hidden md:block text-6xl font-mono text-neutral-200 group-hover:text-gradient transition-colors">
                    0{idx + 1}
                  </div>
                </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
