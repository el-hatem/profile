import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as projects } from "./projects-DEnvkeaT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-X0_GcKcZ.js
var import_jsx_runtime = require_jsx_runtime();

function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "font-mono text-lg font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-py-blue",
							children: "Ahmed"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-py-yellow",
							children: ".py"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-6 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#skills",
								className: "text-muted-foreground hover:text-foreground transition",
								children: "Skills"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#projects",
								className: "text-muted-foreground hover:text-foreground transition",
								children: "Projects"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://drive.google.com/file/d/1Etznc3PQ6AhdES7jtosOe-FIeBN-HrJa/view",
								target: "_blank",
								rel: "noreferrer",
								className: "rounded-md border border-py-blue px-3 py-1.5 font-mono text-xs text-py-blue hover:bg-py-blue hover:text-background transition",
								children: "CV.pdf"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "top",
				className: "mx-auto max-w-6xl px-6 pt-20 pb-16 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border-2 border-py-blue bg-card font-mono text-3xl text-py-yellow",
						children: "AH"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-py-blue",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-py-yellow",
							children: ">>>"
						}), " whoami"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-4xl font-bold sm:text-5xl",
						children: "Ahmed Hatem"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-mono text-sm text-muted-foreground sm:text-base",
						children: "Python Backend Engineer — Django · FastAPI · Distributed Systems"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl text-muted-foreground",
						children: "I build scalable backend systems with Python (Django, and FastAPI), with 3+ years of experience, I’ve worked on AI workflows, real-time systems, and multi-tenant platforms, focusing on clean architecture, performance, and production reliability. Open to remote full-time and freelance opportunities in Egypt, the GCC, and Europe"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex justify-center gap-4",
						children: socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": s.label,
							className: "flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card font-mono text-sm text-muted-foreground transition hover:border-py-blue hover:text-py-blue",
							children: s.icon
						}, s.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://drive.google.com/file/d/1Etznc3PQ6AhdES7jtosOe-FIeBN-HrJa/view",
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 rounded-md bg-py-yellow px-6 py-3 font-mono text-sm font-semibold text-background transition hover:brightness-110",
							children: "↓ Download CV"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "skills",
				className: "mx-auto max-w-6xl px-6 py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mb-8 font-mono text-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-py-yellow",
							children: ">>>"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-py-blue",
							children: "skills"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: skillGroups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-4 font-mono text-sm text-py-yellow",
							children: g.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: g.items.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-foreground",
								children: s
							}, s))
						})]
					}, g.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "projects",
				className: "mx-auto max-w-6xl px-6 py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mb-8 font-mono text-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-py-yellow",
							children: ">>>"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-py-blue",
							children: "projects"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2",
					children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/projects/$id",
						params: { id: p.id },
						className: "group flex flex-col rounded-lg border border-border bg-card p-6 transition hover:border-py-blue",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-3 flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-mono text-lg text-foreground group-hover:text-py-blue",
									children: p.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 rounded-full bg-py-yellow/10 px-3 py-1 font-mono text-xs text-py-yellow",
									children: p.metric
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-4 text-sm text-muted-foreground",
								children: p.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 flex flex-wrap gap-2",
								children: p.techTags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded border border-border bg-secondary px-2 py-0.5 font-mono text-xs text-muted-foreground",
									children: t
								}, t))
							})
						]
					}, p.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6 py-8 text-center font-mono text-sm text-muted-foreground",
					children: ["Ahmed Hatem · +201003908123 · ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:swe.ahmed.hatem@gmail.com",
						className: "hover:text-py-blue",
						children: "swe.ahmed.hatem@gmail.com"
					})]
				})
			})
		]
	});
}
//#endregion
export { Home as component };
