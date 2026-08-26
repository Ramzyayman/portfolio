# Ramzy Ayman — Developer Portfolio & Portfolio Engine

A fast, responsive, and statically generated personal portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

Designed with a technical, minimal, and content-driven architecture where projects, skills, and profile information are cleanly separated as structured TypeScript data modules.

---

## Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open http://localhost:3000 in your browser
```

---

## Content Management Guide (For Ramzy)

You do **not** need to touch React components or page templates to add or update your content. Everything is managed through structured data files in the [`src/data/`](./src/data/) directory.

### 1. How to Add a New Project
Open [`src/data/projects.ts`](./src/data/projects.ts) and add a new object to the `projectsData` array:

```typescript
{
  title: "New Project Name",
  slug: "new-project-slug", // Used for the URL: /projects/new-project-slug
  shortDescription: "A concise 1-2 sentence summary for project cards.",
  longDescription: "A detailed breakdown of the project goals, architecture, and features.",
  status: "completed", // "completed" | "in-progress" | "archived"
  featured: true, // Set to true to highlight on the homepage
  technologies: ["C#", ".NET Core", "PostgreSQL", "Docker"],
  role: "Backend Engineer",
  year: "2025",
  githubUrl: "https://github.com/Ramzyayman/new-project",
  liveUrl: "https://new-project-demo.com", // Optional: leave undefined if not deployed
  coverImage: "/images/projects/new-project/cover.svg", // Or .png / .jpg
  galleryImages: [
    {
      url: "/images/projects/new-project/dashboard.png",
      caption: "System overview and monitoring dashboard",
      alt: "System dashboard screenshot"
    }
  ],
  technicalDetails: [
    "Implemented clean architecture with CQRS pattern.",
    "Engineered rate limiting and JWT authentication middleware."
  ],
  challenges: [
    "Optimizing heavy database aggregation queries."
  ],
  solutions: [
    "Applied database indexing and memory caching layers."
  ],
  lessonsLearned: [
    "Improved understanding of distributed database transactions."
  ]
}
```

Every project automatically receives its own dynamic, statically pre-rendered route at:
`/projects/[slug]` (e.g. `/projects/new-project-slug`).

---

### 2. How to Mark a Project as Featured
In [`src/data/projects.ts`](./src/data/projects.ts), set:
```typescript
featured: true
```
The project will immediately appear in the **Selected Work** section on the homepage.

---

### 3. How to Change Project Status
In [`src/data/projects.ts`](./src/data/projects.ts), set `status`:
- `"completed"`: Marked as finished with a green status indicator.
- `"in-progress"`: Automatically displays in the **Currently Building** section with an active amber indicator.
- `"archived"`: Marked as a legacy/completed reference project.

---

### 4. How to Add Project Images
1. Create a folder in [`public/images/projects/`](./public/images/projects/) named after your project slug (e.g., `public/images/projects/my-app/`).
2. Add your image files (PNG, JPG, WebP, or SVG).
3. Set the image path in your project object:
   - `coverImage: "/images/projects/my-app/cover.png"`
   - `galleryImages: [{ url: "/images/projects/my-app/screenshot1.png", caption: "Feature view" }]`

---

### 5. How to Add or Update GitHub and Live Demo Links
In [`src/data/projects.ts`](./src/data/projects.ts):
```typescript
githubUrl: "https://github.com/Ramzyayman/repo-name",
liveUrl: "https://my-live-demo.vercel.app",
```
*Note: If a project does not have a live demo or public repository yet, simply set the value to `undefined` or omit the field. The UI will automatically hide the buttons without breaking.*

---

### 6. How to Update Social Links
Open [`src/data/socials.ts`](./src/data/socials.ts) and update your profile links:
```typescript
export const socialsData: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/Ramzyayman",
    label: "GitHub Profile",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/your-actual-username", // Replace with your LinkedIn
    label: "LinkedIn Profile",
    isPlaceholder: false,
  },
  {
    platform: "Email",
    url: "mailto:ramzyayman9@gmail.com",
    label: "Direct Email",
  },
];
```

---

### 7. How to Replace the Profile Photo
1. Save your headshot image to [`public/images/profile.jpg`](./public/images/profile.jpg) (or `.png`).
2. In [`src/data/profile.ts`](./src/data/profile.ts), update `avatarUrl`:
   ```typescript
   avatarUrl: "/images/profile.jpg",
   ```
The website will automatically display your real photo with optimized loading.

---

### 8. How to Change or Add Technical Skills
Open [`src/data/skills.ts`](./src/data/skills.ts) and update categories or skills:
```typescript
{
  category: "Backend & Systems",
  description: "Architecting server pipelines and application services.",
  skills: [
    { name: "ASP.NET Core Web API", highlight: true, note: "Controller pipelines & DI" },
    { name: "PostgreSQL", highlight: true, note: "Relational data modeling" },
  ],
}
```

---

### 9. How to Deploy to Vercel

The portfolio is 100% pre-configured for Vercel deployment with zero custom backend dependencies.

#### Option A: Via GitHub (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/Ramzyayman/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Keep the default build settings (`Framework: Next.js`, `Build Command: next build`).
5. Click **"Deploy"**.

#### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## Project Structure Overview

```
src/
├── app/
│   ├── layout.tsx              # HTML structure, SEO metadata, fonts & ThemeProvider
│   ├── page.tsx                # Homepage assembling all sections
│   ├── projects/[slug]/page.tsx# Dynamic project routes (generateStaticParams)
│   ├── not-found.tsx           # Accessible 404 page
│   └── globals.css             # Tailwind base styles & theme variables
├── components/
│   ├── home/                   # Hero, SelectedWork, About, Skills, CurrentlyBuilding, Contact
│   ├── layout/                 # Header (with mobile nav) & Footer
│   ├── project/                # ProjectCard, ProjectGrid, ProjectHero, ProjectDetails, etc.
│   ├── ui/                     # AvatarPlaceholder, Button, Badge, ThemeToggle
│   └── providers/              # ThemeProvider (next-themes)
├── data/                       # profile.ts, projects.ts, skills.ts, socials.ts
└── types/                      # TypeScript interfaces (project.ts, profile.ts)
```
