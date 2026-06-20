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
  availability: "",
};

export const about = {
  summary:
    "Full-Stack Developer with 1 year of hands-on experience designing, developing, and deploying real-world web and mobile applications, including AI-powered platforms and React Native apps. Skilled in the MERN stack and Next.js, with experience building scalable, user-focused solutions. Currently expanding expertise in AI automation and NestJS. Working as a Junior Software Engineer at Nexal IT Services.",
  highlights: [
  "Worked on React Native, Expo, and Android app development",
  "Built AI automation projects using Groq AI",
],
  stats: [
    { value: "1+", label: "Year of hands-on experience" },
    { value: "10+", label: "AI-powered platforms" },
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

export const experience = [{
  role: "Full Stack Developer",
  company: "Nexal IT Services",
  location: "Onsite",
  period: "june 2026 — Present",
  bullets: [
    "Developed and maintained scalable web applications using MERN Stack, Next.js, NestJS, Angular, and WordPress.",
    "Built responsive and high-performance UIs using React, Next.js, and Angular with a focus on UX and performance optimization.",
    "Designed and implemented RESTful APIs using Node.js, Express, and NestJS.",
    "Worked with MongoDB for schema design, aggregation pipelines, and query optimization.",
    "Integrated third-party APIs, authentication systems, and payment gateways into production applications.",
    "Customized WordPress themes and plugins for client-specific requirements.",
    "Collaborated with cross-functional teams following best practices in Git, testing, and deployment workflows."
  ],
},
  {
    role: "Junior MERN Stack Developer",
    company: "Zero Vertical Labs",
    location: "Onsite",
    period: "sep 2025 — june",
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
    period: "May 2026 — june",
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
      "Built RESTful API endpoints in Node.js and Express with JWT-based authentication.",
      "Improved React Native app performance via lazy loading and bundle-size reduction.",
      "Wrote unit tests with Jest and React Testing Library, catching bugs before production.",
      "Documented APIs and components in Notion for team reuse.",
    ],
  },
];

export const projects = [
  {
    title: "AIHireX",
    subtitle: "AI-powered job portal — AI does the boring half of hiring",
    description:
      "A three-sided SaaS job platform (Indeed × LinkedIn style) where LLMs run the entire hiring loop as the core engine — not a chatbot bolt-on. Ships 15+ AI flows: ATS resume analysis + one-click enhancement, AI-generated resumes, resume authenticity checks, vector-based semantic job matching (Hugging Face MiniLM + Pinecone), adaptive voice mock interviews (ElevenLabs TTS), AI scam detection that auto-screens every recruiter post before publishing, AI job-description drafting, and a verified-recruiter system with AI + admin review. Backed by 50+ API endpoints, role-based Clerk auth (Google OAuth), background async Pinecone indexing on publish, and verification gating enforced in the API layer — all in strict TypeScript across 60+ composable components.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "MongoDB Atlas",
      "Clerk",
      "Groq",
      "LLaMA 3.3 70B",
      "Pinecone",
      "Cloudinary",
      "Resend",
      "ElevenLabs",
      "Tailwind CSS",
    ],
    liveUrl: "https://ai-hire-x.vercel.app",
    githubUrl: "https://github.com/Areeshhyycode/AIHireX",
    featured: true,
  },
  {
    title: "InterviewPrep AI",
    subtitle: "Voice-based AI mock interviewer with a readiness report",
    description:
      "An AI mock-interview platform that simulates a real technical interview by voice. Upload a CV and paste a job description — the AI extracts your skills, matches them to the role, finds skill gaps, then generates tailored MERN/React/Node/Next.js questions at easy/medium/hard difficulty. It speaks each question aloud and listens to your spoken answer; in 'teacher mode' it explains the correct answer with an example when you're wrong. Ends with a final report: technical, communication, and confidence scores plus weak topics and an overall readiness percentage. Built on strict-JSON prompt engineering across four distinct AI tasks (question gen, evaluation, teacher mode, report synthesis), with graceful voice fallbacks when API quota runs out.",
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "MongoDB Atlas",
      "Google Gemini 2.5 Flash",
      "ElevenLabs",
      "Groq Whisper",
      "Web Speech API",
      "Tailwind CSS",
    ],
    liveUrl: "https://interview-prep-ai-one-dusky.vercel.app",
    githubUrl: "https://github.com/Areeshhyycode/interview-prep-ai",
    featured: true,
  },
  {
    title: "AI Workfolio Builder",
    subtitle: "Turn raw skills into a portfolio, resume & LinkedIn — in one shot",
    description:
      "A career-asset generator: enter your skills, experience, and projects, and the AI produces four things at once — a complete self-contained portfolio website (live preview + download), recruiter-ready project descriptions, an ATS-friendly Markdown resume, and a first-person LinkedIn 'About' summary. A single server-side prompt requests all four assets as JSON, which is defensively parsed into typed assets. Users pick their LLM provider (Groq LLaMA 3.3 70B or Google Gemini) from the UI. Security-first: API keys are read only server-side and never reach the browser, and the generated portfolio renders inside a sandboxed iframe so its scripts never execute.",
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Groq",
      "LLaMA 3.3 70B",
      "Google Gemini",
      "Tailwind CSS",
      "Vercel",
    ],
    liveUrl: "https://ai-workfolio-builder.vercel.app",
    githubUrl: "https://github.com/Areeshhyycode",
    featured: true,
  },
  {
    title: "Cold Mail Bot",
    subtitle: "Autonomous job-application & lead-gen outreach engine",
    description:
      "A fully autonomous outreach engine that finds opportunities, writes personalized emails, and sends them on a schedule with zero manual work. A hybrid intent-detection + 0–100 lead-scoring engine classifies every lead and routes it: JOB mode finds developer roles and Karachi software houses and writes tailored applications with CV + portfolio links, while SERVICE mode finds businesses needing web/SEO work and sends agency-style pitches. Sources leads from Hacker News 'Who is Hiring', RemoteOK, Remotive, and WeWorkRemotely APIs plus Google Maps (Playwright). Every email is written individually by Groq (no templates). Runs serverless on GitHub Actions cron (5×/day) with MongoDB partial-unique de-duplication, free MX-lookup email verification over Cloudflare DoH, IMAP reply/bounce detection with automated follow-ups, and an open-tracking pixel + one-click unsubscribe (CAN-SPAM compliant).",
    tech: [
      "Node.js (ESM)",
      "MongoDB",
      "Mongoose",
      "Groq AI",
      "LLaMA 3.3 70B",
      "Playwright",
      "Cheerio",
      "Nodemailer",
      "ImapFlow",
      "GitHub Actions",
    ],
    liveUrl: "https://cold-mail-bot.vercel.app",
    githubUrl: "https://github.com/Areeshhyycode/cold-mail-bot",
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
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
