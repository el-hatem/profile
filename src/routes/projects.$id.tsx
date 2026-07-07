import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { getProject } from "@/lib/projects";

export const Route = createFileRoute("/projects/$id")({
  component: ProjectDetail,
});

function ProjectDetail() {
  const { id } = Route.useParams();
  const project = getProject(id);
  const [isImageOpen, setIsImageOpen] = useState(false);

  if (!project) {
    return (
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 text-center">
        <p className="font-mono text-py-yellow">&gt;&gt;&gt; 404</p>
        <h1 className="mt-2 text-3xl">Project not found</h1>
        <Link to="/" className="mt-6 font-mono text-py-blue hover:underline">
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto max-w-4xl px-6 py-12">
        <Link to="/" className="font-mono text-sm text-py-blue hover:underline">
          ← Back to Portfolio
        </Link>

        <header className="mt-8 border-b border-border pb-8">
          <p className="font-mono text-py-yellow">
            &gt;&gt;&gt; <span className="text-muted-foreground">project.load(&quot;{project.id}&quot;)</span>
          </p>
          <h1 className="mt-3 text-4xl font-bold">{project.name}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{project.summary}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.techTags.map((t) => (
              <span
                key={t}
                className="rounded border border-border bg-secondary px-2 py-0.5 font-mono text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-py-yellow px-4 py-2 font-mono text-sm font-semibold text-background hover:brightness-110"
              >
                Live Demo ↗
              </a>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-py-blue px-4 py-2 font-mono text-sm text-py-blue transition hover:bg-py-blue hover:text-background"
              >
                Source Code ↗
              </a>
            )}
          </div>
        </header>

        <Section title="Problem">
          <p className="text-muted-foreground">{project.problem}</p>
        </Section>

        <Section title="Technical Solution">
          <p className="text-muted-foreground">{project.solution}</p>

          <ul className="mt-4 space-y-2">
            {project.decisions.map((d) => (
              <li key={d} className="flex gap-3 text-muted-foreground">
                <span className="font-mono text-py-yellow">→</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <p className="mb-3 font-mono text-sm text-py-blue">architecture_diagram.png</p>

            <div className="flex h-64 items-center justify-center rounded-lg border border-dashed border-border bg-card">
              {project.architectureImage ? (
                <button
                  type="button"
                  onClick={() => setIsImageOpen(true)}
                  className="group relative h-full w-full cursor-zoom-in overflow-hidden rounded-lg"
                  aria-label={`Expand ${project.name} architecture diagram`}
                >
                  <img
                    src={project.architectureImage}
                    alt={`${project.name} architecture`}
                    className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/20">
                    <span className="rounded bg-black/70 px-3 py-1 font-mono text-xs text-white opacity-0 transition group-hover:opacity-100">
                      Click to expand
                    </span>
                  </div>
                </button>
              ) : (
                <p className="font-mono text-sm text-muted-foreground">[ Architecture Diagram ]</p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-3 font-mono text-sm text-py-blue">design_patterns</p>
            <div className="flex flex-wrap gap-2">
              {project.patterns.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-py-blue/40 bg-py-blue/10 px-3 py-1 font-mono text-xs text-py-blue"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Section>

        <Section title="Measurable Results">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.results.map((r) => (
              <div
                key={r.label}
                className="rounded-lg border border-border bg-card p-5 text-center"
              >
                <p className="font-mono text-2xl font-bold text-py-yellow">{r.value}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{r.label}</p>
              </div>
            ))}
          </div>
        </Section>

        {(project.demoUrl || project.repoUrl) && (
          <Section title="Links">
            <div className="flex flex-wrap gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-py-yellow px-4 py-2 font-mono text-sm font-semibold text-background hover:brightness-110"
                >
                  Live Demo ↗
                </a>
              )}

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-py-blue px-4 py-2 font-mono text-sm text-py-blue transition hover:bg-py-blue hover:text-background"
                >
                  Source Code ↗
                </a>
              )}
            </div>
          </Section>
        )}
      </div>

      {isImageOpen && project.architectureImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setIsImageOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} architecture preview`}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-7xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsImageOpen(false)}
              className="absolute right-3 top-3 z-10 rounded-md bg-black/70 px-3 py-2 font-mono text-xs text-white transition hover:bg-black"
              aria-label="Close image preview"
            >
              ✕ Close
            </button>

            <img
              src={project.architectureImage}
              alt={`${project.name} architecture enlarged`}
              className="max-h-[90vh] w-full rounded-lg object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 font-mono text-xl">
        <span className="text-py-yellow">#</span>{" "}
        <span className="text-py-blue">{title.toLowerCase().replace(/ /g, "_")}</span>
      </h2>
      {children}
    </section>
  );
}