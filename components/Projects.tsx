"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projects, projectFilters } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [filter, setFilter] =
    useState<(typeof projectFilters)[number]>("All");

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;

    return projects.filter((project) =>
      project.categories.includes(filter)
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

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {projectFilters.map((f) => {
            const active = filter === f;

            const count =
              f === "All"
                ? projects.length
                : projects.filter((p) => p.categories.includes(f)).length;

            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  active
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900"
                }`}
              >
                {f}

                <span className="text-xs font-mono opacity-70">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="space-y-6">
          {filteredProjects.map((project, idx) => {
            const {
              title,
              subtitle,
              description,
              tech,
              liveUrl,
              demoUrl,
              demoLabel,
              githubUrl,
              inProgress,
            } = project;

            return (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                }}
                className="group relative overflow-hidden rounded-3xl border border-neutral-200 p-8 md:p-10 transition-all hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-900/5"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-50/0 via-transparent to-violet-50/0 opacity-0 transition-opacity duration-500 group-hover:from-indigo-50/60 group-hover:to-violet-50/40 group-hover:opacity-100" />

                <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-baseline gap-3">
                      <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                        {title}
                      </h3>

                      <span className="text-sm text-neutral-500">
                        — {subtitle}
                      </span>

                      {inProgress && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-mono uppercase tracking-wider text-amber-700">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
                          In Development
                        </span>
                      )}
                    </div>

                    <p className="mb-6 max-w-2xl leading-relaxed text-neutral-700">
                      {description}
                    </p>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-mono text-neutral-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-5">
                      {liveUrl && (
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 transition-all hover:gap-2.5"
                        >
                          Live Demo
                          <ArrowUpRight size={16} />
                        </a>
                      )}

                      {!liveUrl && demoUrl && (
                        <a
                          href={demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 transition-all hover:gap-2.5"
                        >
                          {demoLabel ?? "View Demo"}
                          <ArrowUpRight size={16} />
                        </a>
                      )}

                      {githubUrl && (
                        <a
                          href={githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                        >
                          <GithubIcon size={14} />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="hidden text-6xl font-mono text-neutral-200 transition-colors group-hover:text-neutral-300 md:block">
                    {String(idx + 1).padStart(2, "0")}
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