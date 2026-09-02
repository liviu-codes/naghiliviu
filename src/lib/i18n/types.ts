export type Locale = "en" | "ro";

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  liveHref?: string;
  sourceHref?: string;
  image?: string;
  note?: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    reviewTitle: string;
    reviewDescription: string;
  };
  nav: {
    about: string;
    skills: string;
    projects: string;
    testimonials: string;
    contact: string;
  };
  header: {
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    reviewLabel: string;
    languageLabel: string;
    themeLabel: string;
    menuLabel: string;
    closeMenuLabel: string;
    logoLabel: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    subtext: string;
    location: string;
    viewProjects: string;
    getInTouch: string;
    terminal: {
      whoamiCmd: string;
      whoamiOut: string;
      stackCmd: string;
      stackItems: string[];
      statusCmd: string;
      statusOut: string;
    };
  };
  about: {
    heading: string;
    bio1: string;
    bio2: string;
    photoAlt: string;
    quickFacts: {
      location: string;
      role: string;
      openToWork: string;
    };
  };
  skills: {
    heading: string;
    subhead: string;
    categories: SkillCategory[];
  };
  projects: {
    heading: string;
    subhead: string;
    screenshotPlaceholder: string;
    liveDemo: string;
    source: string;
    employerNote: string;
    items: ProjectItem[];
  };
  testimonials: {
    heading: string;
    reviewsSuffix: string;
  };
  contact: {
    heading: string;
    intro: string;
    nameLabel: string;
    methodLabel: string;
    methodPlaceholder: string;
    messageLabel: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    elsewhere: string;
    email: string;
    linkedin: string;
    github: string;
    resume: string;
    leaveTestimonial: string;
  };
  review: {
    title: string;
    intro: string;
    nameLabel: string;
    roleLabel: string;
    ratingLabel: string;
    testimonialLabel: string;
    submit: string;
    sending: string;
    ratingRequired: string;
    success: string;
    error: string;
    backHome: string;
  };
  footer: {
    builtWith: (year: number) => string;
  };
}
