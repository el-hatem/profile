import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  component: Home,
});

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Python", "Go", "Rust", "C/C++", "SQL"],
  },
  {
    title: "Backend & Frameworks",
    items: [
      "Django", 
      "FastAPI", 
      "Asyncio", 
      "Celery", 
      "RESTful APIs", 
      "WebSockets"
    ],
  },
  {
    title: "Databases & Caching",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "SQLite",
    ],
  }, 
  {
    title: "Integrations",
    items: [
      "Stripe",
      "HyperPay",
      "Urway",
      "Firebase",
      "OpenAI (ChatGPT API)",
      "Google Gemini API",
      "AssemblyAI",
      "Whisper",
      "AWS Textract",
      "Google OCR",
      "Pandas",
    ],
  },
  {
    title: "Testing & Quality",
    items: [
      "Pytest",
      "Unit Testing",
      "Integration Testing",
      "Code Reviews",
      "Static Code Analysis",
      "Performance Profiling",
    ],
  },
  {
    title: "System Deployment & Infrastructure",
    items: [
      "Docker",
      "Portainer",
      "NGINX",
      "Linux (Ubuntu)",
      "AWS (EC2, S3)",
      "Google Cloud Platform (GCP)",
      "Google Cloud Run",
      "DigitalOcean",
      "CI/CD Pipelines",
      "Deployment Automation",
    ],
  },
  {
    title: "Version Control & Collaboration",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "trello",
      "Slack",
      "Jira",
    ],
  },
  {
    title: "Other Skills",
    items: [
      "System Design",
      "Agile Methodologies",
      "Scrum",
      "Kanban",
      "Project Management",
      "Team Collaboration",
      "Technical Documentation",
    ],
  }

];
const socials = [
  { label: "GitHub", href: "https://github.com/el-hatem", icon: "GH" },
  { label: "LinkedIn", href: "https://linkedin.com/in/el-hatem", icon: "in" },
  { label: "Email", href: "mailto:swe.ahmed.hatem@gmail.com", icon: "@" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~0184c8de61d7c133bc", icon: "Upwork" },
];

function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-lg font-semibold">
            <span className="text-py-blue">Ahmed</span>
            <span className="text-py-yellow">.py</span>
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition">
              Skills
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition">
              Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1Etznc3PQ6AhdES7jtosOe-FIeBN-HrJa/view"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-py-blue px-3 py-1.5 font-mono text-xs text-py-blue hover:bg-py-blue hover:text-background transition"
            >
              CV.pdf
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
        <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border-2 border-py-blue bg-card font-mono text-3xl text-py-yellow">
          AH
        </div>
        <p className="font-mono text-py-blue">
          <span className="text-py-yellow">&gt;&gt;&gt;</span> whoami
        </p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Ahmed Hatem</h1>
        <p className="mt-3 font-mono text-sm text-muted-foreground sm:text-base">
          Python Backend Engineer — Django · FastAPI · Distributed Systems
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
          I build scalable backend systems with Python (Django, and FastAPI), with 3+ years of experience, 
          I’ve worked on AI workflows, real-time systems, and multi-tenant platforms, 
          focusing on clean architecture, performance, and production reliability. 
          Open to remote full-time and freelance opportunities in Egypt, the GCC, and Europe
        </p>

        {/* Socials */}
        <div className="mt-8 flex justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card font-mono text-sm text-muted-foreground transition hover:border-py-blue hover:text-py-blue"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="https://drive.google.com/file/d/1Etznc3PQ6AhdES7jtosOe-FIeBN-HrJa/view"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-py-yellow px-6 py-3 font-mono text-sm font-semibold text-background transition hover:brightness-110"
          >
            ↓ Download CV
          </a>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 font-mono text-2xl">
          <span className="text-py-yellow">&gt;&gt;&gt;</span>{" "}
          <span className="text-py-blue">skills</span>
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g) => (
            <div key={g.title} className="rounded-lg border border-border bg-card p-5">
              <h3 className="mb-4 font-mono text-sm text-py-yellow">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 font-mono text-2xl">
          <span className="text-py-yellow">&gt;&gt;&gt;</span>{" "}
          <span className="text-py-blue">projects</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.id}
              to="/projects/$id"
              params={{ id: p.id }}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition hover:border-py-blue"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="font-mono text-lg text-foreground group-hover:text-py-blue">
                  {p.name}
                </h3>
                <span className="shrink-0 rounded-full bg-py-yellow/10 px-3 py-1 font-mono text-xs text-py-yellow">
                  {p.metric}
                </span>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">{p.summary}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {p.techTags.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-border bg-secondary px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center font-mono text-sm text-muted-foreground">
          Ahmed Hatem · +201003908123 · <a href="mailto:swe.ahmed.hatem@gmail.com" className="hover:text-py-blue">swe.ahmed.hatem@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}
