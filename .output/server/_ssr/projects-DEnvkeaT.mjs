//#region node_modules/.nitro/vite/services/ssr/assets/projects-DEnvkeaT.js
var projects = [
	{
		id: "oupoun",
		name: "OUPOUN",
		summary: "Multi-tenant promotions and offers platform for SMEs and merchants, optimized for faster lookup, safer payments, and production traffic spikes.",
		techTags: [
			"Python",
			"FastAPI",
			"MongoDB",
			"JWT",
			"OTP",
			"Urway",
			"Docker",
			"GCP Cloud Run"
		],
		metric: "-30% latency",
		demoUrl: "https://oupoun.com/",
		repoUrl: "",
		problem: "The platform served SMEs and merchants in production and had to handle around 10k orders per day, but critical paths suffered under campaign-driven traffic spikes. Offer queries, tenant lookup, and geolocation-based discovery created performance bottlenecks, while payment callbacks and duplicate order attempts introduced consistency and reliability risks on shared multi-tenant infrastructure.",
		solution: "Redesigned the hot paths around promotions, tenant resolution, geolocation lookup, and payment callbacks to make the platform safer and faster under load. Refactored offer and tenant queries, added targeted indexing, corrected the location data model so geographic operations could run on proper geo data instead of manual float-based math, and reorganized payment and callback logic to handle duplicate requests and partial failures more safely in production.",
		decisions: [
			"Refactored offer and tenant lookup queries and added targeted indexes to reduce latency on high-traffic read paths during campaign spikes",
			"Changed the location model from float-based coordinates to a geographic representation better suited for distance queries and geospatial indexing",
			"Introduced geolocation-aware indexing to remove manual distance calculations and reduce compute overhead on location-based offer discovery",
			"Reorganized payment and callback handling so repeated order attempts and mid-flow failures would not leave the platform in an inconsistent state",
			"Strengthened tenant-facing flows on shared infrastructure to improve isolation safety while keeping the platform operationally efficient",
			"Added monitoring, logging, and alerting around production-critical flows to surface payment and performance issues earlier"
		],
		patterns: [
			"Multi-Tenancy",
			"Cache-Aside",
			"Repository",
			"Idempotency",
			"Blue-Green Deployment"
		],
		results: [
			{
				label: "Latency",
				value: "-30%"
			},
			{
				label: "Orders/day",
				value: "10k+"
			},
			{
				label: "Payments",
				value: "Fewer failures"
			},
			{
				label: "Tenancy",
				value: "Safer"
			}
		],
		architectureImage: "https://i.ibb.co/DgjwtnnG/oupoun.png"
	},
	{
		id: "fortunate",
		name: "FORTUNATE",
		summary: "Voucher and rewards platform built for fast redemption, payment reliability, and stronger security across production payment flows.",
		techTags: [
			"Python",
			"Django",
			"PostgreSQL",
			"Redis",
			"Stripe",
			"HyperPay",
			"AES",
			"Docker",
			"Pytest"
		],
		metric: "-40% incidents",
		demoUrl: "https://play.google.com/store/apps/details?id=com.softylus.fortuneit",
		repoUrl: "",
		problem: "The platform served around 50k users across providers and customers and had to keep voucher redemption fast while maintaining payment consistency and strong security. Critical flows such as voucher lookup, redemption, and payment callbacks were sensitive to duplicate attempts, partial failures, and token-handling risk, which could lead to inconsistent state and production incidents if not controlled carefully.",
		solution: "Built the backend as a secure Django-based voucher and rewards platform integrating Stripe and HyperPay, then optimized redemption-critical paths with PostgreSQL and Redis to keep response times low under live usage. Strengthened transactional consistency through database transactions and idempotency handling on payment and redemption flows, and hardened the system with AES-256, JWT, MFA/OTP, expanded Pytest coverage, and audit-ready monitoring on sensitive operations to reduce production incidents and improve payment reliability.",
		decisions: [
			"Optimized PostgreSQL access patterns and Redis-backed redemption paths to reduce latency on voucher lookup and redemption-critical endpoints",
			"Integrated Stripe and HyperPay into a single production payment flow so voucher and reward transactions could complete through multiple payment rails",
			"Applied database transactions to redemption and callback flows to preserve consistency across multi-step payment operations",
			"Introduced idempotency handling to prevent duplicate redemption attempts and reduce inconsistent state during repeated payment requests",
			"Hardened token handling and sensitive user actions with AES-256, JWT, and MFA/OTP to strengthen security from the start",
			"Expanded Pytest coverage and tightened release validation to make payment-related changes safer and contribute to an approximately 40% reduction in production incidents"
		],
		patterns: [
			"Transactional Consistency",
			"Idempotency",
			"Cache-Aside",
			"Defense in Depth",
			"Test-Gated CI/CD"
		],
		results: [
			{
				label: "Incidents",
				value: "-40%"
			},
			{
				label: "Users",
				value: "50k+"
			},
			{
				label: "Security",
				value: "Stronger"
			},
			{
				label: "Payments",
				value: "More reliable"
			}
		],
		architectureImage: "https://i.ibb.co/8gF8VGZS/fortunit.png"
	},
	{
		id: "wazen",
		name: "Wazen",
		summary: "Arabic-first AI nutrition platform engineered to isolate LLM workloads, reduce user-facing latency, and improve reliability of recommendation flows.",
		techTags: [
			"Python",
			"Django",
			"FastAPI",
			"Celery",
			"Redis",
			"Docker",
			"JWT",
			"PostGIS",
			"LLM APIs"
		],
		metric: "Lower latency",
		demoUrl: "https://play.google.com/store/apps/details?id=com.wazen.health.wazen_app",
		repoUrl: "",
		problem: "Wazen delivered nutrition recommendations to consumers and had to process uploaded meals, documents, recommendation generation, and analytics in Arabic-first user flows. AI-heavy operations such as LLM calls, nutrition calculations, and report generation were initially synchronous, which increased latency on user-facing recommendation paths and created reliability issues through silent failures, inconsistent response structure, and hallucination-prone outputs.",
		solution: "Redesigned the platform around a hybrid Django and FastAPI architecture to separate deterministic application behavior from AI-intensive workloads. Moved LLM calls, nutrition calculations, uploaded-meal processing, and analytics-heavy jobs into Celery and Redis pipelines, then added structured logging, health checks, and alerting to improve runtime visibility. Combined that with Arabic-first prompting and response-shaping patterns to improve output quality and reduce operational instability in AI-backed recommendation flows.",
		decisions: [
			"Introduced a hybrid Django/FastAPI architecture to isolate AI-heavy recommendation workloads from transaction-critical application paths",
			"Moved LLM calls, nutrition calculations, uploaded-meal processing, and analytics tasks from synchronous request handling into Celery and Redis pipelines",
			"Used asynchronous workers to reduce latency on user-facing recommendation flows that had previously been delayed by heavy AI processing",
			"Applied Arabic-first prompting and structured response handling to reduce hallucinations and improve consistency of recommendation outputs",
			"Added structured logs, health checks, and alerting to surface silent failures earlier and improve production observability",
			"Documented architecture and operational behavior through design docs, ADRs, and runbooks to make the AI stack safer to evolve and support"
		],
		patterns: [
			"Hybrid Architecture",
			"Async Processing",
			"Work Queue",
			"Observability",
			"Fault Isolation",
			"Structured Prompting"
		],
		results: [
			{
				label: "Latency",
				value: "-30%"
			},
			{
				label: "Processing",
				value: "Async"
			},
			{
				label: "Quality",
				value: "Arabic-first"
			},
			{
				label: "Reliability",
				value: "More stable"
			}
		],
		architectureImage: "https://i.ibb.co/9kPWbhDz/wazen.png"
	},
	{
		id: "talk",
		name: "Talk",
		summary: "Real-time social and media platform designed to keep feeds, messaging, and media workflows responsive under bursty traffic.",
		techTags: [
			"Python",
			"Django",
			"PostgreSQL",
			"Redis",
			"WebSockets",
			"Celery",
			"FFmpeg",
			"Docker",
			"FCM"
		],
		metric: "Spike-ready",
		demoUrl: "",
		repoUrl: "",
		problem: "Talk combined live feed activity, media sharing, and community interactions in a multilingual product where delivery latency and connection stability mattered. Real-time fanout, feed load, and CPU-heavy audio and video transcoding competed for the same backend capacity, which risked slowing user interactions, blocking request handling, and degrading the experience during peak activity.",
		solution: "Architected the platform so real-time communication and media processing could scale independently. Used WebSockets with Redis pub/sub for low-latency message distribution, moved transcoding into Celery workers backed by FFmpeg to remove CPU-heavy work from the request path, and tuned PostgreSQL and Redis to behave more predictably under feed pressure and traffic spikes. Added FCM-based multilingual re-engagement flows plus health checks, structured logging, and alerting to improve both user retention and production visibility.",
		decisions: [
			"Introduced WebSockets with Redis pub/sub to distribute real-time events with lower delivery latency and more stable connection behavior",
			"Built an asynchronous media pipeline with Celery and FFmpeg so audio and video transcoding would not block live user flows",
			"Tuned PostgreSQL and Redis around feed-heavy and spike-prone paths to reduce contention during high-activity periods",
			"Added an FCM-driven multilingual engagement layer to support re-engagement across global communities and keep participation active",
			"Implemented structured logging, health checks, and alerting to make real-time and worker failures easier to detect and recover from"
		],
		patterns: [
			"Pub/Sub",
			"Async Worker Pipeline",
			"Real-Time Messaging",
			"Workload Isolation",
			"Event-Driven Processing",
			"Observability"
		],
		results: [
			{
				label: "Messaging",
				value: "1s class"
			},
			{
				label: "Media",
				value: "Async"
			},
			{
				label: "Load",
				value: "Spike-safe"
			},
			{
				label: "Engagement",
				value: "+replies"
			}
		],
		architectureImage: "https://i.ibb.co/ycpVg3RN/talk.png"
	},
	{
		id: "pixamo",
		name: "Pixamo",
		summary: "Multilingual document automation platform that turned OCR-heavy workflows into structured, language-aware processing pipelines.",
		techTags: [
			"Python",
			"Django",
			"Google OCR",
			"Textractor",
			"i18n",
			"Workflow Automation",
			"AI/ML Pipelines",
			"Pandas",
			"Cloud CI/CD",
			"DigitalOcean"
		],
		metric: "+25% accuracy",
		demoUrl: "",
		repoUrl: "",
		problem: "Pixamo had to process Arabic, English, and French documents through OCR-based extraction, validation, and routing, but language-specific variations were creating inconsistent outputs and too much manual review. The workflow needed to support scalable report automation without letting parsing errors and schema drift slow down the pipeline.",
		solution: "Built a multilingual document-processing backend with i18n support, OCR extraction, normalization, and structured routing for downstream automation. Standardized the processing pipeline and output schema, then used language-aware parsing and Pandas-based transformation to keep documents consistent across languages and reduce manual correction overhead.",
		decisions: [
			"Introduced language-aware OCR processing so Arabic, English, and French documents could follow parsing logic suited to each input type",
			"Added normalization after extraction to reduce inconsistencies caused by OCR noise and language-specific formatting differences",
			"Standardized output schemas to keep downstream automation stable and prevent per-language drift in document handling",
			"Used Pandas-based processing for structured transformation and reporting workflows",
			"Kept the platform deployable through cloud CI/CD on DigitalOcean so changes to OCR and workflow logic could ship safely"
		],
		patterns: [
			"Pipeline Standardization",
			"Normalization",
			"Internationalization",
			"Workflow Automation",
			"Schema Standardization"
		],
		results: [
			{
				label: "Accuracy",
				value: "+25%"
			},
			{
				label: "Languages",
				value: "AR/EN/FR"
			},
			{
				label: "Review",
				value: "Reduced"
			},
			{
				label: "Outputs",
				value: "Standardized"
			}
		],
		architectureImage: "https://i.ibb.co/LzJy8yXH/pixamo.png"
	},
	{
		id: "pact",
		name: "PACT",
		summary: "PMO system for construction projects with asynchronous workflow orchestration, reporting pipelines, and lifecycle tracking.",
		techTags: [
			"Python",
			"Django",
			"PostgreSQL",
			"Celery",
			"Docker",
			"Agile",
			"CI/CD",
			"Pytest"
		],
		metric: "Async workflows",
		demoUrl: "",
		repoUrl: "",
		problem: "PACT had to manage resource and service operations across a full construction project lifecycle, where recurring tasks, batch jobs, and KPI reporting could not rely on synchronous request handling. The platform also needed a cleaner way to move operational data between web and mobile workflows without slowing day-to-day execution.",
		solution: "Built the backend around a Celery- and Redis-based workflow engine to move recurring and batch-heavy operations off the request path. Added Pandas-driven import and export pipelines for KPI reporting and gap analysis, then structured lifecycle tracking so resource and service management could stay consistent across the platform’s web and mobile execution flows.",
		decisions: [
			"Introduced a Celery-based workflow engine to offload recurring and long-running PMO tasks from synchronous requests",
			"Used Redis with asynchronous workers to keep batch processing reliable and reduce pressure on live backend flows",
			"Built Pandas-driven import and export pipelines to support KPI reporting and gap analysis across operational data",
			"Structured lifecycle tracking for resources and services so execution could remain traceable across the full project flow",
			"Standardized Docker-based delivery and CI/CD so workflow and reporting changes could ship with less release friction",
			"Applied Pytest to keep the batch and reporting logic safer as the platform evolved"
		],
		patterns: [
			"Workflow Engine",
			"Async Batch Processing",
			"ETL Pipeline",
			"Operational Reporting",
			"Lifecycle Management"
		],
		results: [
			{
				label: "Workflows",
				value: "Async"
			},
			{
				label: "Reporting",
				value: "Multi-format"
			},
			{
				label: "Coverage",
				value: "Web + Mobile"
			},
			{
				label: "Control",
				value: "Lifecycle-tracked"
			}
		],
		architectureImage: "https://i.ibb.co/CLk9CWV/pact.png"
	}
];
var getProject = (id) => projects.find((p) => p.id === id);
//#endregion
export { projects as n, getProject as t };
