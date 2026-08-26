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
    liveUrl: undefined, // Optional: omitted if no live link is active
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
      "Client-side state persistence layer utilizing localStorage to maintain reading statuses (e.g. Want to Read, Currently Reading, Completed) across browser sessions without requiring an immediate database round-trip.",
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
    title: "RESTful Service Core",
    slug: "restful-service-core",
    shortDescription:
      "An in-progress backend API service exploring structured domain layering, endpoint routing, and request validation pipelines.",
    longDescription:
      "This project represents an ongoing backend engineering exploration focused on clean architecture, structured error handling, and modular service separation. Built using ASP.NET Core Web API and supporting utility scripts in Python, it serves as an experimental foundation for building robust, type-safe API services.",
    status: "in-progress",
    featured: false,
    technologies: [
      ".NET / ASP.NET Core",
      "C#",
      "Python",
      "RESTful APIs",
      "Git",
    ],
    role: "Backend Engineering",
    year: "2025 - Active",
    githubUrl: undefined, // Will be linked when repository is ready for public release
    liveUrl: undefined,
    coverImage: "/images/projects/api-project/cover.svg",
    galleryImages: [
      {
        url: "/images/projects/api-project/cover.svg",
        caption: "RESTful Service Core - In-progress API architecture and pipeline diagram",
        alt: "API backend architecture preview",
      },
    ],
    technicalDetails: [
      "Structured controller and service separation applying standard layered backend conventions.",
      "Middleware-based centralized error handling and request lifecycle logging.",
      "Exploration of data contracts, request validation rules, and standardized JSON response envelopes.",
      "Utility tooling and data generation scripts implemented in Python.",
    ],
    challenges: [
      "Designing clean boundaries between business logic and transport protocols.",
      "Establishing idiomatic ASP.NET Core dependency injection and configuration lifetimes.",
    ],
    solutions: [
      "Adopting standard repository and service patterns to isolate domain operations.",
      "Utilizing built-in ASP.NET Core dependency injection containers with explicit interface registrations.",
    ],
    lessonsLearned: [
      "Understanding the power of compiled backend frameworks (.NET) in enforcing strict data contracts.",
      "Building intuition for backend pipeline lifecycle and middleware ordering.",
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
