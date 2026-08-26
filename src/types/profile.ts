export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  education: {
    degree: string;
    field: string;
    expectedGraduation: number;
    description: string;
  };
  headline: string;
  bio: string[];
  focusAreas: string[];
  learningPhilosophy: string;
  avatarUrl: string;
  availability: {
    status: string;
    message: string;
  };
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    highlight?: boolean;
    note?: string;
  }[];
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  username?: string;
  isPlaceholder?: boolean;
}
