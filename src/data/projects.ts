import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    title: "Papyr",
    slug: "papyr",
    shortDescription:
      "A modern book catalog and personal library web application designed to help users discover, search, and curate reading collections.",
    longDescription:
      "Papyr is a single-page application built with Angular and TypeScript that connects readers with literature through the Open Library API. Built within a MEAN-stack learning context, the application provides intuitive search, detailed book metadata views, and offline-persistent personal reading lists managed via client-side storage.",
    status: "completed",
    featured: true,
    technologies: [
      "Angular",
      "TypeScript",
      "RxJS",
      "Open Library API",
      "localStorage",
      "HTML/CSS",
    ],
    role: "Frontend & Application Architecture",
    year: "2024",
    githubUrl: "https://github.com/Ramzyayman/papyr",
    liveUrl: undefined,
    coverImage: "/images/projects/papyr/cover.png",
    galleryImages: [
      {
        url: "/images/projects/papyr/cover.png",
        caption: "Papyr - Live book catalog homepage, search bar, and curated collections",
        alt: "Papyr book catalog UI screenshot",
      },
    ],
    technicalDetails: [
      "Reactive stream architecture using RxJS observables for debounced search queries and asynchronous API data fetching.",
      "Integration with the public Open Library Search and Works APIs for dynamic book cover retrieval, author resolution, and publication metadata.",
      "Client-side state persistence layer utilizing localStorage to maintain reading statuses across browser sessions without requiring an immediate database round-trip.",
      "Modular Angular component hierarchy separating catalog discovery, search filtering, book detail views, and saved collections.",
    ],
    challenges: [
      "Managing high-frequency user search input without generating excessive API requests to the Open Library endpoints.",
      "Handling inconsistent metadata and missing cover image fields returned across varying third-party catalog records.",
      "Maintaining state consistency between active search results and locally persisted collection lists.",
    ],
    solutions: [
      "Implemented RxJS debounceTime and distinctUntilChanged operators in search pipelines to minimize network overhead.",
      "Constructed defensive data transformation adapters with fallback cover placeholders and normalized schema shapes before binding data to UI components.",
      "Centralized collection state management in dedicated Angular services with reactive subject broadcasting to notify dependent components of updates.",
    ],
    lessonsLearned: [
      "Deepened proficiency in TypeScript typing and strict object modeling for third-party API payloads.",
      "Gained practical experience orchestrating complex reactive asynchronous flows with RxJS.",
      "Learned the value of defensive UI design when consuming external public datasets.",
    ],
  },
  {
    title: "Kaszinó",
    slug: "kaszino",
    shortDescription:
      "A modern Discord economy and gambling bot built with Node.js, discord.js v14, and SQLite database persistence.",
    longDescription:
      "Kaszinó is a feature-packed Discord economy bot created for community engagement. It implements a complete virtual economy with jobs, begging, player-to-player transfers, interactive gambling minigames (such as Mines and Coinflip), server leaderboards, and administrative controls with atomic SQLite transactions.",
    status: "completed",
    featured: true,
    technologies: [
      "Node.js",
      "discord.js v14",
      "JavaScript",
      "SQLite",
      "better-sqlite3",
      "REST APIs",
    ],
    role: "Bot & Backend Architecture",
    year: "2025",
    githubUrl: "https://github.com/Ramzyayman/Kaszino",
    liveUrl: undefined,
    coverImage: "/images/projects/kaszino/cover.svg",
    galleryImages: [
      {
        url: "/images/projects/kaszino/cover.svg",
        caption: "Kaszinó - Discord economy interface, Mines minigame grid, and SQLite architecture",
        alt: "Kaszinó Discord Bot Preview",
      },
    ],
    technicalDetails: [
      "Event-driven command handler and interaction router implementing discord.js v14 slash commands and interactive button components.",
      "Persistent relational database layer utilizing SQLite via better-sqlite3 with WAL (Write-Ahead Logging) mode for fast, atomic balance transactions.",
      "Dynamic board generation and mathematical multiplier scaling algorithm for the interactive Mines minigame.",
      "Command cooldown engine tracking timed actions (/work every 12h, /beg every 8h) with timestamp validation.",
      "Restricted owner administrative command dispatcher supporting user ID and mention-based balance management.",
    ],
    challenges: [
      "Preventing race conditions and balance duplication during rapid concurrent player commands.",
      "Managing interactive Discord message button states and component collectors for live game sessions.",
    ],
    solutions: [
      "Implemented synchronous, transaction-wrapped database operations with better-sqlite3 to guarantee balance integrity.",
      "Designed dedicated game session handlers with automatic expiration timeouts and single-user interaction locks.",
    ],
    lessonsLearned: [
      "Strengthened database schema design and transactional state management in Node.js.",
      "Mastered discord.js v14 event-driven architecture and asynchronous lifecycle management.",
    ],
  },
  {
    title: "Contact Management API",
    slug: "contact-management-api",
    shortDescription:
      "An ASP.NET Core Web API for contact management built with Entity Framework Core, SQLite, and custom exception middleware.",
    longDescription:
      "A structured RESTful backend service engineered with ASP.NET Core and C#. It provides comprehensive CRUD operations for contact records, unique email validation, centralized exception handling middleware, DTO mappers, and interactive OpenAPI/Swagger documentation.",
    status: "in-progress",
    featured: false,
    technologies: [
      ".NET / ASP.NET Core",
      "C#",
      "Entity Framework Core",
      "SQLite",
      "Swagger / OpenAPI",
      "RESTful APIs",
    ],
    role: "Backend API Engineering",
    year: "2026 - Active",
    githubUrl: "https://github.com/Ramzyayman/MySecondApi",
    liveUrl: undefined,
    coverImage: "/images/projects/contact-api/cover.svg",
    galleryImages: [
      {
        url: "/images/projects/contact-api/cover.svg",
        caption: "Contact Management API - Swagger UI endpoints and layered architecture pipeline",
        alt: "Contact Management API Architecture Diagram",
      },
    ],
    technicalDetails: [
      "Layered ASP.NET Core architecture separating Controllers, DTOs, Mappers, Domain Models, and Services.",
      "Entity Framework Core ORM integration with SQLite persistence and schema migrations.",
      "Custom error middleware (StorageUnavailableExceptionMiddleware) providing clean, standardized JSON error responses.",
      "RESTful routing endpoints (/contacts, /contacts/id/{id}, /contacts/email/{email}) with duplicate conflict handling.",
      "Interactive OpenAPI / Swagger documentation for endpoint contract verification and testing.",
    ],
    challenges: [
      "Establishing strict boundaries between external request DTOs and internal domain models.",
      "Handling database availability failures gracefully without exposing internal stack traces to API consumers.",
    ],
    solutions: [
      "Created dedicated ContactMapper and strongly typed service result envelopes (CreateContactResult, GetContactResult).",
      "Developed centralized middleware to catch storage exceptions and map them to HTTP 503 / 400 responses.",
    ],
    lessonsLearned: [
      "Gained practical experience implementing idiomatic ASP.NET Core Dependency Injection and service lifetimes.",
      "Developed a deep appreciation for compiled type safety and ORM database migration workflows with EF Core.",
    ],
  },
  {
    title: "Ricksy Store",
    slug: "ricksy-store",
    shortDescription:
      "A modern, full-stack ecommerce storefront built with Next.js App Router, Tailwind CSS, and Prisma ORM.",
    longDescription:
      "Ricksy Store is a full-featured ecommerce web application utilizing the Next.js framework. It integrates NextAuth for secure authentication, Prisma as a robust ORM connecting to a PostgreSQL database, and features a responsive, beautifully styled interface using Tailwind CSS and shadcn/ui. The store supports comprehensive user session management, product categorization, and tailored cart/order tracking.",
    status: "completed",
    featured: true,
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth.js",
      "Tailwind CSS",
      "Zustand",
    ],
    role: "Full-Stack Development",
    year: "2026",
    githubUrl: "https://github.com/Ramzyayman/ricksy-store",
    liveUrl: undefined,
    coverImage: "/images/projects/ricksy-store/cover.png",
    galleryImages: [
      {
        url: "/images/projects/ricksy-store/cover.png",
        caption: "Ricksy Store - Prisma Data Models and Next.js Architecture",
        alt: "Ricksy Store Architecture diagram",
      },
    ],
    technicalDetails: [
      "Full-stack Next.js App Router architecture with React Server Components.",
      "Relational database schema managed with Prisma ORM and hosted on PostgreSQL, handling categories, variants, and order workflows.",
      "Authentication and session management via NextAuth.js.",
      "Client-side state for cart interactions managed using Zustand.",
      "Form validation pipelines with React Hook Form and Zod.",
    ],
    challenges: [
      "Designing a scalable relational database schema that handles complex product variations, inventory stock, and order snapshots.",
      "Creating seamless, type-safe data fetching patterns between Server Components and Prisma.",
    ],
    solutions: [
      "Implemented a comprehensive PostgreSQL schema with cascade deletions and atomic references (e.g., saving snapshot price/sku strings on OrderItems).",
      "Leveraged Server Actions and strict TypeScript interfaces for reliable end-to-end type safety during mutations.",
    ],
    lessonsLearned: [
      "Gained deep expertise in Next.js 15 routing paradigms and server-side rendering strategies.",
      "Mastered data modeling techniques for real-world ecommerce use cases.",
    ],
  },
];

/** Get all projects */
export function getAllProjects(): Project[] {
  return projectsData;
}

/** Get projects highlighted for the homepage */
export function getFeaturedProjects(): Project[] {
  return projectsData.filter((p) => p.featured);
}

/** Get active/in-progress projects */
export function getInProgressProjects(): Project[] {
  return projectsData.filter((p) => p.status === "in-progress");
}

/** Get completed projects */
export function getCompletedProjects(): Project[] {
  return projectsData.filter((p) => p.status === "completed");
}

/** Find project by slug */
export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug);
}
