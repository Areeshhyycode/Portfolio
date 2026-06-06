export const personal = {
  name: "Areesha Rafiq",
  title: "MERN Stack & AI Developer",
  tagline: "Building AI-powered web & mobile apps with the MERN stack.",
  location: "Karachi, Pakistan",
  email: "areeshazv@gmail.com",
  phone: "+92 322 3007388",
  github: "https://github.com/Areeshhyycode",
  linkedin: "https://linkedin.com/in/areesha-rafiq-net",
  resumeUrl: "/Areesha_Rafiq_CV.pdf",
  availability: "Open to remote work",
};

export const about = {
  summary:
    "I'm a full-stack developer with a year of focused, hands-on experience shipping real products — from AI-powered web apps to React Native mobile apps live on the App Store and Play Store. I specialize in building AI-driven platforms using the MERN stack, Next.js, and modern LLMs like Groq AI, OpenAI, and LLaMA 3.3 70B. Currently working as a Junior MERN Stack Developer at Zero Vertical Labs.",
  highlights: [
    "React Native apps shipped live to App Store & Play Store",
    "AI integrations with Groq AI, OpenAI APIs, and LLaMA 3.3 70B",
    "Comfortable with async, remote, cross-timezone collaboration",
    "End-to-end ownership — from API design to deployment",
  ],
  stats: [
    { value: "1+", label: "Year of hands-on experience" },
    { value: "7", label: "AI-powered platforms shipped" },
    { value: "20+", label: "Technologies in my stack" },
    { value: "3", label: "Companies + freelance clients" },
  ],
};

export const skills = [
  {
    category: "Languages",
    items: ["TypeScript (strict)", "JavaScript (ES2022+)", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    items: [
      "Next.js 14 (App Router)",
      "React 18",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "clsx + tailwind-merge",
    ],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo", "React Navigation", "AsyncStorage"],
  },
  {
    category: "Backend & APIs",
    items: [
      "Node.js",
      "Next.js API Routes",
      "Express.js",
      "REST APIs",
      "Socket.io",
    ],
  },
  {
    category: "AI / LLM Models",
    items: [
      "Groq SDK",
      "OpenAI APIs",
      "Google Gemini API",
      "LLaMA 3.3 70B",
      "Hugging Face",
    ],
  },
  {
    category: "AI Frameworks & Search",
    items: [
      "LangChain",
      "Pinecone",
      "MongoDB Atlas Vector Search",
      "Prompt Engineering",
      "RAG Pipelines",
      "Resume Parsing",
    ],
  },
  {
    category: "Voice AI & Automation",
    items: ["Whisper (STT)", "ElevenLabs", "n8n", "Zapier", "Make.com"],
  },
  {
    category: "Database & Caching",
    items: [
      "MongoDB Atlas",
      "Mongoose",
      "PostgreSQL",
      "Firebase Firestore",
      "Upstash Redis",
    ],
  },
  {
    category: "Auth & Validation",
    items: ["NextAuth.js", "Clerk", "JWT", "bcryptjs", "Zod"],
  },
  {
    category: "CMS",
    items: [
      "WordPress",
      "Theme Customization",
      "Plugin Integration",
      "Elementor",
    ],
  },
  {
    category: "Integrations & APIs",
    items: [
      "Gmail API",
      "Notion API",
      "Slack Webhooks",
      "WhatsApp Cloud API",
      "Cloudinary",
      "Resend",
      "Google OAuth 2.0",
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      "Git + GitHub",
      "GitHub Actions",
      "Vercel",
      "ESLint",
      "PostCSS + Autoprefixer",
      "Postman",
      "Docker",
    ],
  },
];

export const experience = [
  {
    role: "Junior MERN Stack Developer",
    company: "Zero Vertical Labs",
    location: "Onsite",
    period: "Nov 2025 — Present",
    bullets: [
      "Delivered WordPress websites for live clients including Baitulmaal and Bowtie — theme customization, plugin integration, and client-specific feature delivery.",
      "Contributed to React Native mobile apps published on the App Store and Play Store, working on UI screens and API integration.",
      "Built dynamic UIs in React and Next.js using hooks, Context API, and Redux Toolkit for multiple web applications.",
      "Developed REST APIs with Node.js and Express, integrated with MongoDB and third-party services.",
      "Worked on a ClickUp-style project management tool with task boards and team collaboration features.",
      "Built an AI automation project using OpenAI APIs for smart workflows and content generation.",
      "Integrated Firebase for auth, push notifications, and real-time data across mobile and web projects.",
    ],
  },
  {
    role: "Client Operations & Communication",
    company: "HQ 360",
    location: "Remote",
    period: "May 2026 — Present",
    bullets: [
      "Coordinate client meetings and lead follow-ups across multiple time zones in a fully remote, async-first environment.",
      "Manage cross-team communication and onboarding workflows for clients and new team members.",
      "Built strong written and verbal client-handling skills — directly transferable to remote freelance collaboration.",
    ],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Lokhandwala Web Solutions",
    location: "Remote",
    period: "Aug 2025 — Oct 2025",
    bullets: [
      "Built 6+ RESTful API endpoints in Node.js and Express with JWT-based authentication.",
      "Improved React Native app performance via lazy loading and bundle-size reduction.",
      "Wrote unit tests with Jest and React Testing Library, catching bugs before production.",
      "Documented APIs and components in Notion for team reuse.",
    ],
  },
];

export const projects = [
  {
    title: "Cold Mail Bot",
    subtitle: "AI cold-email outreach + lead finder with auto follow-ups",
    description:
      "An end-to-end cold outreach engine: scrape business leads with Playwright, extract emails from their websites, generate fully personalized pitches with the Groq LLM API, then auto-send and sequence follow-ups over SMTP — all on free tiers. Models each lead as a finite-state machine (new → ready → sent → follow-up → replied) in MongoDB, enforces daily send caps to protect deliverability, and runs unattended on cron via GitHub Actions (9AM sends, 2PM follow-ups). Ships a Next.js dashboard for open tracking and unsubscribes. Built deliverability- and compliance-first (SPF/DKIM/DMARC, opt-out in every message, CAN-SPAM/GDPR).",
    tech: [
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Groq AI",
      "Playwright",
      "Nodemailer",
      "SMTP",
      "Next.js",
      "node-cron",
      "GitHub Actions",
    ],
    liveUrl: "https://cold-mail-bot.vercel.app",
    githubUrl: "https://github.com/Areeshhyycode",
    featured: true,
  },
  {
    title: "WhatsApp AI Bot Builder",
    subtitle: "Multi-tenant SaaS with RAG-powered chatbots",
    description:
      "A SaaS where users sign up, upload a PDF/text document, and get a WhatsApp chatbot that answers messages from that content. Built with end-to-end RAG: documents are chunked, embedded via Google text-embedding-004, stored in MongoDB Atlas Vector Search, and queried at chat-time to ground Groq LLM responses. Supports both whatsapp-web.js (QR-code linking) and the official WhatsApp Cloud API webhook for production.",
    tech: [
      "Next.js 16",
      "MongoDB Atlas Vector Search",
      "Groq SDK",
      "LLaMA 3.3 70B",
      "Google Embeddings",
      "RAG",
      "JWT + bcrypt",
      "WhatsApp Cloud API",
    ],
    liveUrl: "https://whatsappbot-peach-nine.vercel.app",
    githubUrl: "https://github.com/Areeshhyycode",
    inProgress: true,
    featured: true,
  },
  {
    title: "AI Meeting Automation",
    subtitle: "Transcribe, summarize, and auto-draft follow-ups",
    description:
      "Upload a meeting recording (mp3 / mp4 / wav / webm) or paste a Loom link — get a full transcript, structured summary, extracted action items with assignees and deadlines, plus an auto-drafted follow-up email ready to send via Resend. Pipeline uses Groq Whisper for fast transcription, OpenAI gpt-4o-mini for Zod-validated structured analysis, and MongoDB for persistence. Includes a live dashboard with meeting history and per-meeting detail pages.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "Groq Whisper",
      "OpenAI gpt-4o-mini",
      "MongoDB",
      "Mongoose",
      "Zod",
      "Resend",
      "Tailwind CSS",
    ],
    liveUrl: "https://ai-meeting-automate.vercel.app",
    githubUrl: "https://github.com/Areeshhyycode",
    featured: true,
  },
  {
    title: "AI Customer Support Agent",
    subtitle: "E-commerce store with RAG-powered AI support + admin dashboard",
    description:
      "A full-stack e-commerce store (Acme Leather Co.) with a built-in AI customer support agent. Customers shop while the AI answers questions from the company's own knowledge base using RAG — when it's not confident, it automatically creates a support ticket and hands off to a human. Features dual-role auth (customer & admin), document upload (PDF/TXT/MD), MongoDB Vector Search with optional Pinecone, conversation memory, and a protected admin dashboard for managing knowledge base and tickets.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "NextAuth v5",
      "MongoDB Vector Search",
      "Pinecone",
      "Groq SDK",
      "LLaMA 3.3 70B",
      "Hugging Face Embeddings",
      "bcryptjs",
      "pdf-parse",
    ],
    liveUrl: "https://ai-customer-support-agent-cnmh.vercel.app",
    githubUrl: "https://github.com/Areeshhyycode/AI-Customer-Support-Agent",
    featured: true,
  },
  {
    title: "InboxAI",
    subtitle: "AI inbox triage — Gmail + Groq + Notion + Slack",
    description:
      "An AI assistant that turns 50 unread emails into a 30-second triage. Fetches unread Gmail messages, categorizes each (Work/Personal/Urgent/Newsletter/Spam), scores urgency 1–10, detects sentiment, drafts polite context-aware replies, extracts action items as Notion tasks, and pings Slack the moment an urgent email lands. Background cron job processes the inbox every 10 minutes for unattended triage. Built with Google OAuth 2.0 (with refresh-token rotation), structured JSON output via Groq, and parallel email analysis via Promise.all.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "NextAuth.js",
      "Google OAuth 2.0",
      "Gmail API",
      "Groq SDK",
      "LLaMA 3.3 70B",
      "Notion API",
      "Slack Webhooks",
      "Vercel Cron",
    ],
    liveUrl: "https://email-ai-sable.vercel.app",
    githubUrl: "https://github.com/Areeshhyycode/EmailAi",
    featured: true,
  },
  {
    title: "ZVTalent",
    subtitle: "AI-Powered Hiring Platform",
    description:
      "An AI-driven recruitment platform that automatically reads resumes, scores candidates against job descriptions, and generates tailored interview questions — replacing hours of manual screening with seconds of analysis.",
    tech: ["Next.js", "MongoDB", "Groq AI", "LLaMA 3.3 70B", "NextAuth.js"],
    liveUrl: "https://zv-talent.vercel.app",
    githubUrl: "https://github.com/Areeshhyycode",
    featured: true,
  },
  {
    title: "JobGenie AI",
    subtitle: "AI-Powered Job Application Tracker",
    description:
      "Full-stack web app that tracks job applications and uses AI to generate tailored cover letters, role-specific interview questions, follow-up emails, and a Match Score that analyzes how well a candidate's profile fits a job description.",
    tech: [
      "Next.js 14",
      "React 18",
      "MongoDB",
      "Groq AI",
      "NextAuth.js",
      "Tailwind CSS",
    ],
    liveUrl: "https://job-genie-ai-ebon.vercel.app",
    githubUrl: "https://github.com/Areeshhyycode",
    featured: true,
  },
  {
    title: "Daily Vocab",
    subtitle: "Automated Vocabulary Builder",
    description:
      "A fully automated daily word generator using GitHub Actions, Groq AI, Node.js, and Next.js — auto-commits new content to GitHub and deploys to Vercel without manual intervention. End-to-end CI/CD pipeline running on cron.",
    tech: [
      "Next.js",
      "Node.js",
      "Groq AI",
      "GitHub Actions",
      "Vercel",
    ],
    liveUrl: "https://daily-qoutes-ai.vercel.app",
    githubUrl: "https://github.com/Areeshhyycode",
    featured: true,
  },
  {
    title: "AIHireX",
    subtitle: "AI-Powered Hiring Platform — 15+ AI Features",
    description:
      "Currently building a full-stack hiring platform with strict TypeScript and 15+ AI-powered features — resume parsing, JD matching, candidate scoring, and automated interview question generation. Server-side API routes keep Groq LLM calls secure; component-driven architecture keeps files under 100 lines; uses Next.js RSC + SSR for performance-first rendering.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "MongoDB Atlas",
      "Groq SDK",
      "NextAuth.js",
      "Mongoose",
      "Zod",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Areeshhyycode/AIHireX",
    inProgress: true,
    featured: true,
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
