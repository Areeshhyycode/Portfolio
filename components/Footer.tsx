import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-10">
      <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-neutral-500">
          © {new Date().getFullYear()} {personal.name}. Built with Next.js &
          Tailwind.
        </div>
        <div className="flex items-center gap-6 text-sm text-neutral-500">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="hover:text-neutral-900 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
