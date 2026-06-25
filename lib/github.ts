import { projects as manualProjects, type Project } from "./data";

// GitHub username to source repos from (derived from the profile URL in data.ts).
const GITHUB_USER = "Areeshhyycode";

// How often (seconds) to re-fetch from GitHub. New Vercel deploys appear within this window.
const REVALIDATE = 3600; // 1 hour

// Repos to never auto-import (lowercase names). Add throwaway/test repos here to hide them.
const EXCLUDED_REPOS = new Set<string>([
  "portfolio", // this site itself
  GITHUB_USER.toLowerCase(), // the profile README repo
]);

type GithubRepo = {
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  topics?: string[];
  language: string | null;
  fork: boolean;
  archived: boolean;
  disabled: boolean;
  pushed_at: string;
};

function authHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  // Optional: set GITHUB_TOKEN in Vercel env vars to lift the 60 req/hr anon limit to 5000.
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

/** Normalize a URL for de-duplication: drop protocol, www, and trailing slash. */
function normalizeUrl(url?: string | null): string {
  if (!url) return "";
  return url
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");
}

/** Pretty-print a repo slug into a project title: "cold-mail-bot" -> "Cold Mail Bot". */
function prettifyName(name: string): string {
  const acronyms: Record<string, string> = {
    ai: "AI",
    api: "API",
    ui: "UI",
    ux: "UX",
    seo: "SEO",
    saas: "SaaS",
    mern: "MERN",
    pdf: "PDF",
  };
  return name
    .replace(/[-_]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((word) => {
      const lower = word.toLowerCase();
      if (acronyms[lower]) return acronyms[lower];
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

/**
 * Pull the first meaningful paragraph out of a README, stripping markdown noise
 * (headings, badges, images, html, links) so it reads as plain prose on a card.
 */
function descriptionFromReadme(readme: string): string {
  const lines = readme.split(/\r?\n/);
  const paragraph: string[] = [];

  for (const raw of lines) {
    const line = raw.trim();

    if (paragraph.length && line === "") break; // end of first paragraph

    if (line === "") continue;
    if (line.startsWith("#")) continue; // headings
    if (line.startsWith("![") || line.startsWith("<img")) continue; // images
    if (/^\[!\[/.test(line)) continue; // badge: [![...](...)](...)
    if (/^<.*>$/.test(line)) continue; // standalone html tag (e.g. <p align="center">)
    if (/^(-|\*|\d+\.)\s/.test(line)) continue; // list items
    if (line.startsWith(">")) continue; // blockquotes
    if (line.startsWith("```") || line.startsWith("---")) continue; // fences / rules

    paragraph.push(line);
  }

  let text = paragraph.join(" ");
  // Strip inline markdown: images, links (keep text), bold/italic/code markers.
  text = text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`]+/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length > 320) text = text.slice(0, 317).trimEnd() + "…";
  return text;
}

async function fetchReadmeDescription(fullName: string): Promise<string> {
  try {
    const res = await fetch(`https://api.github.com/repos/${fullName}/readme`, {
      headers: { ...authHeaders(), Accept: "application/vnd.github.raw" },
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return "";
    const text = await res.text();
    return descriptionFromReadme(text);
  } catch {
    return "";
  }
}

function repoToProject(repo: GithubRepo, description: string): Project {
  const topics = (repo.topics ?? []).filter((t) => t !== "portfolio");
  const tech = topics.length
    ? topics.map(prettifyName)
    : repo.language
    ? [repo.language]
    : [];

  return {
    title: prettifyName(repo.name),
    subtitle: repo.description?.trim() || "Live project",
    description:
      description || repo.description?.trim() || "Auto-imported from GitHub.",
    tech,
    liveUrl: repo.homepage!.trim(),
    githubUrl: repo.html_url,
    featured: true,
    auto: true,
  };
}

/** Fetch deployed repos (those with a Website/homepage URL) and map them to project cards. */
async function fetchAutoProjects(): Promise<Project[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`,
      { headers: authHeaders(), next: { revalidate: REVALIDATE } }
    );
    if (!res.ok) return [];

    const repos = (await res.json()) as GithubRepo[];

    const deployed = repos.filter(
      (r) =>
        r.homepage &&
        r.homepage.trim().startsWith("http") &&
        !r.fork &&
        !r.archived &&
        !r.disabled &&
        !EXCLUDED_REPOS.has(r.name.toLowerCase())
    );

    const withDescriptions = await Promise.all(
      deployed.map(async (repo) => {
        const description = await fetchReadmeDescription(repo.full_name);
        return repoToProject(repo, description);
      })
    );

    return withDescriptions;
  } catch {
    return [];
  }
}

/**
 * Curated projects from data.ts come first (they stay pinned/ordered), followed by
 * any auto-discovered deployed repos that aren't already represented manually.
 * De-dupes on both the live URL and the GitHub repo URL so nothing shows twice.
 */
export async function getProjects(): Promise<Project[]> {
  const auto = await fetchAutoProjects();

  const seen = new Set<string>();
  for (const p of manualProjects) {
    if (p.liveUrl) seen.add(normalizeUrl(p.liveUrl));
    const repoUrl = normalizeUrl(p.githubUrl);
    // Only treat as a repo key if it points at a specific repo (user/repo), not the profile.
    if (repoUrl.split("/").length >= 3) seen.add(repoUrl);
  }

  const fresh = auto.filter((p) => {
    const liveKey = normalizeUrl(p.liveUrl);
    const repoKey = normalizeUrl(p.githubUrl);
    if (liveKey && seen.has(liveKey)) return false;
    if (repoKey && seen.has(repoKey)) return false;
    return true;
  });

  return [...manualProjects, ...fresh];
}
