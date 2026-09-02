import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Naghi Liviu — Team Lead & Senior Full-Stack Engineer",
    description:
      "Full-stack engineer building production web apps by day, and freelance web apps in my free time.",
    reviewTitle: "Leave a testimonial — Naghi Liviu",
    reviewDescription: "Share a quick review of working with me.",
  },
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    testimonials: "Testimonials",
    contact: "Contact",
  },
  header: {
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    reviewLabel: "Leave a testimonial",
    languageLabel: "Switch language",
    themeLabel: "Switch theme",
    menuLabel: "Open menu",
    closeMenuLabel: "Close menu",
    logoLabel: "Naghi Liviu, back to top",
  },
  hero: {
    eyebrow: "Team Lead & Senior Full-Stack Engineer",
    name: "Naghi Liviu",
    subtext:
      "Full-stack engineer building production web apps by day, and freelance web apps in my free time.",
    location: "Bucharest, Romania",
    viewProjects: "View projects",
    getInTouch: "Get in touch",
    terminal: {
      whoamiCmd: "whoami",
      whoamiOut: "Naghi Liviu",
      stackCmd: "cat stack.txt",
      stackItems: ["TypeScript", "React", "PHP / Laminas", "Docker", "Jest"],
      statusCmd: "cat status.txt",
      statusOut: "Open for freelance web app work",
    },
  },
  about: {
    heading: "About",
    bio1: "I'm a Team Lead and Senior Full-Stack Engineer with 10+ years of professional software development experience: React and TypeScript on the frontend, PHP and Node.js on the backend, deployed with Docker and Azure DevOps. I currently lead a team delivering a CMS-certified healthcare enrollment platform, owning architecture, code review, and delivery planning while still shipping code myself.",
    bio2: "Outside of my day job, I build web apps for fun and take on freelance projects. I like turning a rough idea into something people can actually use, end to end: UI, API, database, and deployment. If you're looking for someone to build or improve a web app, I'm open to hearing about it.",
    photoAlt: "Portrait of Naghi Liviu",
    quickFacts: {
      location: "Bucharest, Romania",
      role: "Team Lead & Senior Full-Stack Engineer",
      openToWork: "Open to freelance work",
    },
  },
  skills: {
    heading: "Skills",
    subhead: "A full-stack toolkit, from frontend to infrastructure.",
    categories: [
      {
        name: "Languages",
        items: ["TypeScript", "JavaScript (ES6+)", "PHP 8", "SQL", "Python", "Bash"],
      },
      {
        name: "Frontend",
        items: ["React", "Redux", "Tailwind CSS", "Radix UI", "react-hook-form", "TanStack Table", "Zod"],
      },
      {
        name: "Backend",
        items: ["PHP / Laminas", "Node.js", "Express", "REST API Design", "Microservices", "OAuth 2.0 / JWT"],
      },
      {
        name: "Infrastructure",
        items: ["Docker", "Azure DevOps", "GitHub Actions", "MySQL / PostgreSQL", "Redis", "Git"],
      },
      {
        name: "Testing & Quality",
        items: ["Jest", "Vitest", "React Testing Library", "PHPUnit", "ESLint", "Prettier"],
      },
      {
        name: "Leadership",
        items: ["Team Leadership", "Software Architecture", "Code Review", "Mentoring", "Agile / Scrum"],
      },
    ],
  },
  projects: {
    heading: "Projects",
    subhead: "A few things I've shipped, freelance and full-time.",
    screenshotPlaceholder: "Screenshot placeholder",
    liveDemo: "Live demo",
    source: "Source",
    employerNote: "Employer project, not publicly available",
    items: [
      {
        title: "B17 Coffee Lab",
        description:
          "Website and online shop for a specialty coffee cafe with three locations in Bucharest: coffee bean catalog, online ordering, and location/contact info.",
        tags: ["Web Design", "E-commerce", "WordPress"],
        liveHref: "https://b17coffeelab.ro/",
        image: "b17",
      },
      {
        title: "Personal Portfolio Website",
        description:
          "This site, built with Next.js and Tailwind CSS for near-instant load times, with a dark/light theme toggle, English/Romanian language switch, and a working contact form.",
        tags: ["Next.js", "Tailwind CSS", "TypeScript"],
        liveHref: "/",
        image: "portfolio",
      },
      {
        title: "Enterprise Web Platform",
        description:
          "Multiple years building and leading development on a large enterprise web platform: customer-facing applications, identity verification, and internal reporting tools, across React/TypeScript frontends and PHP/Node backends.",
        tags: ["React", "TypeScript", "PHP", "Node.js"],
      },
    ],
  },
  testimonials: {
    heading: "Testimonials",
    reviewsSuffix: "reviews",
  },
  contact: {
    heading: "Contact",
    intro: "Available for freelance web app projects, send a message and I'll get back to you.",
    nameLabel: "Name",
    methodLabel: "Contact method",
    methodPlaceholder: "email@example.com",
    messageLabel: "Message",
    send: "Send message",
    sending: "Sending…",
    success: "Thanks! Your message is on its way, I'll be in touch soon.",
    error: "Something went wrong, please try again or email me directly.",
    elsewhere: "Elsewhere",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    resume: "Resume",
    leaveTestimonial: "Leave a Testimonial",
  },
  review: {
    title: "Leave a Testimonial",
    intro: "Thanks for working with me, a short review helps other people trust the work. It only takes a minute, and I'll add it to my site.",
    nameLabel: "Name",
    roleLabel: "Role / Company",
    ratingLabel: "Rating",
    testimonialLabel: "Your testimonial",
    submit: "Submit testimonial",
    sending: "Sending…",
    ratingRequired: "Please select a star rating before submitting.",
    success: "Thank you! Your testimonial has been sent.",
    error: "Something went wrong, please try again or email me directly.",
    backHome: "Back to homepage",
  },
  footer: {
    builtWith: (year: number) => `© ${year} Naghi Liviu. Built with Next.js & Tailwind CSS.`,
  },
};
