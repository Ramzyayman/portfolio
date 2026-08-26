import { Profile } from "@/types/profile";

export const profileData: Profile = {
  name: "Ramzy Ayman",
  role: "Software Engineer",
  location: "Cairo, Egypt",
  email: "ramzyayman9@gmail.com",
  education: {
    degree: "Bachelor of Science",
    field: "Computer Science",
    expectedGraduation: 2027,
    description: "Currently studying core computer science foundations, algorithms, data structures, and software engineering principles.",
  },
  headline: "Software engineer and Computer Science student focused on backend systems, clean architecture, and practical software design.",
  bio: [
    "I am a Computer Science student based in Cairo, Egypt, graduating in 2027. My primary technical interest lies in backend engineering—designing reliable APIs, structuring clean business logic, and understanding how systems behave under the hood.",
    "Rather than limiting myself to a single framework, I prioritize foundational problem-solving and adapt quickly to unfamiliar technologies whenever a project demands them. Whether writing TypeScript, Python, or .NET APIs, I focus on code clarity, maintainability, and pragmatic implementation.",
    "Currently open for freelance software development collaborations and preparing for post-graduation software engineering roles.",
  ],
  focusAreas: [
    "Backend & RESTful API Engineering",
    "System Architecture & Data Modeling",
    "Modern Full-Stack Applications",
    "Continuous Learning & Tooling Exploration",
  ],
  learningPhilosophy: "Strong fundamentals enable fast adaptation. I actively embrace new tools and paradigms to build practical, well-engineered solutions.",
  avatarUrl: "/images/avatar-placeholder.svg",
  availability: {
    status: "Available for Freelance & Collaborative Projects",
    message: "Open for freelance projects and future engineering opportunities.",
  },
};
