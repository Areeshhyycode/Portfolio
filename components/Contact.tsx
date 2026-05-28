"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personal } from "@/lib/data";

export default function Contact() {
  const socials = [
    {
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: Mail,
    },
    {
      label: "GitHub",
      value: "Areeshhyycode",
      href: personal.github,
      icon: GithubIcon,
    },
    {
      label: "LinkedIn",
      value: "areesha-rafiq-net",
      href: personal.linkedin,
      icon: LinkedinIcon,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-neutral-200">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="text-sm font-mono text-neutral-500 mb-3 uppercase tracking-wider">
            05 — Contact
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-balance">
            Have a project in mind?
            <br />
            <span className="text-neutral-400">Let&apos;s talk.</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-600 max-w-xl leading-relaxed">
            I&apos;m currently open to freelance projects and remote roles.
            Drop a message and I&apos;ll get back within 24 hours.
          </p>

          <a
            href={`mailto:${personal.email}`}
            className="group mt-10 inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-full hover:bg-neutral-700 transition-colors"
          >
            Send me an email
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16 grid sm:grid-cols-3 gap-4"
        >
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group border border-neutral-200 rounded-2xl p-6 hover:border-neutral-900 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon
                    size={20}
                    className="text-neutral-600 group-hover:text-neutral-900 transition-colors"
                  />
                  <ArrowUpRight
                    size={16}
                    className="text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1">
                  {s.label}
                </div>
                <div className="text-neutral-900 font-medium truncate">
                  {s.value}
                </div>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
