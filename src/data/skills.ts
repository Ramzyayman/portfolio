import { SkillCategory } from "@/types/profile";

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    description: "Core programming and markup languages used across projects and academic work.",
    skills: [
      { name: "JavaScript (ES6+)", highlight: true, note: "Client-side and Node.js environments" },
      { name: "TypeScript", highlight: true, note: "Type-safe application engineering" },
      { name: "Python", highlight: true, note: "Scripting, logic, and data handling" },
      { name: "C# / .NET", highlight: true, note: "Structured backend services" },
      { name: "HTML5", highlight: false, note: "Semantic structure & accessibility" },
      { name: "CSS3", highlight: false, note: "Modern layout, Flexbox, Grid, Responsive UI" },
    ],
  },
  {
    category: "Backend & Systems",
    description: "Architecting server pipelines, RESTful communication, and application services.",
    skills: [
      { name: "ASP.NET Core Web API", highlight: true, note: "Controller pipelines, DI, middleware" },
      { name: "Node.js", highlight: false, note: "JavaScript runtime for backend scripting" },
      { name: "RESTful API Design", highlight: true, note: "Resource modeling, HTTP verbs, status codes" },
      { name: "Express.js", highlight: false, note: "MEAN stack backend routing" },
    ],
  },
  {
    category: "Full Stack & Frontend",
    description: "Component hierarchies, reactive streams, and single-page applications.",
    skills: [
      { name: "MEAN Stack", highlight: true, note: "MongoDB, Express, Angular, Node.js" },
      { name: "Angular", highlight: true, note: "Modules, services, RxJS, TypeScript" },
      { name: "Tailwind CSS", highlight: false, note: "Utility-first design systems" },
      { name: "RxJS", highlight: false, note: "Asynchronous stream operations" },
    ],
  },
  {
    category: "Tools & Engineering Practices",
    description: "Version control, development environments, and collaborative workflows.",
    skills: [
      { name: "Git", highlight: true, note: "Branching, commit hygiene, repository management" },
      { name: "GitHub", highlight: true, note: "Code hosting, issue tracking, versioning" },
      { name: "VS Code", highlight: false, note: "Primary IDE & debugging workflows" },
      { name: "Postman", highlight: false, note: "API endpoint testing & verification" },
      { name: "Linux / Bash Basics", highlight: false, note: "Command line operations" },
    ],
  },
];
