export type ProjectStatus = "completed" | "in-progress" | "archived";

export interface ProjectGalleryImage {
  url: string;
  caption?: string;
  alt?: string;
}

export interface Project {
  /** Project display title */
  title: string;
  /** Unique URL-friendly slug for routing (/projects/[slug]) */
  slug: string;
  /** Concise summary for cards and search snippets */
  shortDescription: string;
  /** Comprehensive description and context for the individual project page */
  longDescription: string;
  /** Current lifecycle status */
  status: ProjectStatus;
  /** Whether the project is highlighted in Selected Work on the homepage */
  featured: boolean;
  /** List of technologies/frameworks used */
  technologies: string[];
  /** Role in the project (e.g. "Creator & Full-Stack Developer", "Backend Developer") */
  role?: string;
  /** Year or date range (e.g. "2024", "2025 - Present") */
  year: string;
  /** GitHub repository URL */
  githubUrl?: string;
  /** Live interactive demo or deployment URL */
  liveUrl?: string;
  /** Primary cover/preview image path (e.g. "/images/projects/papyr/cover.svg") */
  coverImage: string;
  /** Optional gallery of screenshots or system diagrams */
  galleryImages?: ProjectGalleryImage[];
  /** Key technical architecture points, implementation highlights */
  technicalDetails?: string[];
  /** Engineering hurdles encountered */
  challenges?: string[];
  /** Solutions developed to overcome technical challenges */
  solutions?: string[];
  /** Key takeaways and engineering insights gained */
  lessonsLearned?: string[];
  /** Allow custom arbitrary metadata without breaking schemas */
  [key: string]: unknown;
}
