import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./projects._id-bxK_xIMM.mjs";
import { t as getProject } from "./projects-DEnvkeaT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._id-DV7EqavT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProjectDetail() {
	const { id } = Route.useParams();
	const project = getProject(id);
	const [isImageOpen, setIsImageOpen] = (0, import_react.useState)(false);
	if (!project) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-py-yellow",
				children: ">>> 404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-3xl",
				children: "Project not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-6 font-mono text-py-blue hover:underline",
				children: "← Back to Portfolio"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-6 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "font-mono text-sm text-py-blue hover:underline",
				children: "← Back to Portfolio"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mt-8 border-b border-border pb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-py-yellow",
						children: [">>> ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground",
							children: [
								"project.load(\"",
								project.id,
								"\")"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl font-bold",
						children: project.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-lg text-muted-foreground",
						children: project.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: project.techTags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded border border-border bg-secondary px-2 py-0.5 font-mono text-xs text-muted-foreground",
							children: t
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [project.demoUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: project.demoUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "rounded-md bg-py-yellow px-4 py-2 font-mono text-sm font-semibold text-background hover:brightness-110",
							children: "Live Demo ↗"
						}), project.repoUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: project.repoUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "rounded-md border border-py-blue px-4 py-2 font-mono text-sm text-py-blue transition hover:bg-py-blue hover:text-background",
							children: "Source Code ↗"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Problem",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: project.problem
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Technical Solution",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: project.solution
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: project.decisions.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-py-yellow",
								children: "→"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: d })]
						}, d))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 font-mono text-sm text-py-blue",
							children: "architecture_diagram.png"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-64 items-center justify-center rounded-lg border border-dashed border-border bg-card",
							children: project.architectureImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setIsImageOpen(true),
								className: "group relative h-full w-full cursor-zoom-in overflow-hidden rounded-lg",
								"aria-label": `Expand ${project.name} architecture diagram`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: project.architectureImage,
									alt: `${project.name} architecture`,
									className: "h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded bg-black/70 px-3 py-1 font-mono text-xs text-white opacity-0 transition group-hover:opacity-100",
										children: "Click to expand"
									})
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-sm text-muted-foreground",
								children: "[ Architecture Diagram ]"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 font-mono text-sm text-py-blue",
							children: "design_patterns"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: project.patterns.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-py-blue/40 bg-py-blue/10 px-3 py-1 font-mono text-xs text-py-blue",
								children: p
							}, p))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Measurable Results",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: project.results.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-card p-5 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-2xl font-bold text-py-yellow",
							children: r.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-mono text-xs text-muted-foreground",
							children: r.label
						})]
					}, r.label))
				})
			}),
			(project.demoUrl || project.repoUrl) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Links",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3",
					children: [project.demoUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: project.demoUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "rounded-md bg-py-yellow px-4 py-2 font-mono text-sm font-semibold text-background hover:brightness-110",
						children: "Live Demo ↗"
					}), project.repoUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: project.repoUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "rounded-md border border-py-blue px-4 py-2 font-mono text-sm text-py-blue transition hover:bg-py-blue hover:text-background",
						children: "Source Code ↗"
					})]
				})
			})
		]
	}), isImageOpen && project.architectureImage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4",
		onClick: () => setIsImageOpen(false),
		role: "dialog",
		"aria-modal": "true",
		"aria-label": `${project.name} architecture preview`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative max-h-[90vh] w-full max-w-7xl",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setIsImageOpen(false),
				className: "absolute right-3 top-3 z-10 rounded-md bg-black/70 px-3 py-2 font-mono text-xs text-white transition hover:bg-black",
				"aria-label": "Close image preview",
				children: "✕ Close"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: project.architectureImage,
				alt: `${project.name} architecture enlarged`,
				className: "max-h-[90vh] w-full rounded-lg object-contain shadow-2xl"
			})]
		})
	})] });
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "mb-4 font-mono text-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-py-yellow",
					children: "#"
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-py-blue",
					children: title.toLowerCase().replace(/ /g, "_")
				})
			]
		}), children]
	});
}
//#endregion
export { ProjectDetail as component };
