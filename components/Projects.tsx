"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projects, projectFilters } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter(
      (p) => "categories" in p && p.categories?.includes(filter),
    );
  }, [filter]);

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

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {projectFilters.map((f) => {
            const active = filter === f;
            const count =
              f === "All"
                ? projects.length
                : projects.filter(
                    (p) => "categories" in p && p.categories?.includes(f),
                  ).length;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full border transition-all ${
                  active
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900"
                }`}
              >
                {f}
                <span
                  className={`text-xs font-mono ${
                    active ? "text-neutral-400" : "text-neutral-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => {
              const inProgress =
                "inProgress" in project && project.inProgress;
              const liveUrl =
                "liveUrl" in project ? project.liveUrl : undefined;
              const demoUrl =
                "demoUrl" in project ? project.demoUrl : undefined;
              const demoLabel =
                "demoLabel" in project ? project.demoLabel : "View demo";
              const githubUrl =
                "githubUrl" in project ? project.githubUrl : undefined;

              return (
                <motion.article
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
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
                          {!liveUrl && demoUrl && (
                            <a
                              href={demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 hover:gap-2.5 transition-all"
                            >
                              {demoLabel}
                              <ArrowUpRight size={16} />
                            </a>
                          )}
                          {githubUrl && (
                            <a
                              href={githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                            >
                              <GithubIcon size={14} />
                              Source code
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="hidden md:block text-6xl font-mono text-neutral-200 group-hover:text-gradient transition-colors">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
