import type { Dictionary } from "./types";

export const ro: Dictionary = {
  meta: {
    title: "Naghi Liviu — Team Lead și Inginer Full-Stack Senior",
    description:
      "Inginer full-stack, la jobul principal construiesc aplicații web pentru producție, iar în timpul liber, proiecte freelance.",
    reviewTitle: "Lasă un testimonial — Naghi Liviu",
    reviewDescription: "Distribuie o recenzie rapidă despre colaborarea cu mine.",
  },
  nav: {
    about: "Despre",
    skills: "Competențe",
    projects: "Proiecte",
    testimonials: "Testimoniale",
    contact: "Contact",
  },
  header: {
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    reviewLabel: "Lasă un testimonial",
    languageLabel: "Schimbă limba",
    themeLabel: "Schimbă tema",
    menuLabel: "Deschide meniul",
    closeMenuLabel: "Închide meniul",
    logoLabel: "Naghi Liviu, înapoi sus",
  },
  hero: {
    eyebrow: "Team Lead și Inginer Full-Stack Senior",
    name: "Naghi Liviu",
    subtext:
      "Inginer full-stack, la jobul principal construiesc aplicații web pentru producție, iar în timpul liber, proiecte freelance.",
    location: "București, România",
    viewProjects: "Vezi proiectele",
    getInTouch: "Contactează-mă",
    terminal: {
      whoamiCmd: "whoami",
      whoamiOut: "Naghi Liviu",
      stackCmd: "cat stack.txt",
      stackItems: ["TypeScript", "React", "PHP / Laminas", "Docker", "Jest"],
      statusCmd: "cat status.txt",
      statusOut: "Deschis pentru proiecte freelance",
    },
  },
  about: {
    heading: "Despre mine",
    bio1: "Sunt Team Lead și Inginer Full-Stack Senior, cu peste 10 ani de experiență profesională în dezvoltare software: React și TypeScript pe frontend, PHP și Node.js pe backend, totul rulat pe Docker și livrat prin Azure DevOps. În prezent conduc o echipă care dezvoltă o platformă de înscriere medicală certificată de CMS, sunt responsabil de arhitectură, code review și planificarea livrărilor, dar continui și eu să scriu cod.",
    bio2: "În afara jobului de zi cu zi, construiesc aplicații web din pasiune și accept proiecte freelance. Îmi place să transform o idee simplă într-un produs pe care oamenii chiar îl folosesc, de la interfață, la API, bază de date și lansare în producție. Dacă ai nevoie de cineva care să construiască sau să îmbunătățească o aplicație web, sunt deschis să discutăm.",
    photoAlt: "Portret al lui Naghi Liviu",
    quickFacts: {
      location: "București, România",
      role: "Team Lead și Inginer Full-Stack Senior",
      openToWork: "Deschis pentru proiecte freelance",
    },
  },
  skills: {
    heading: "Competențe",
    subhead: "Un set complet de unelte, de la frontend la infrastructură.",
    categories: [
      {
        name: "Limbaje",
        items: ["TypeScript", "JavaScript (ES6+)", "PHP 8", "SQL", "Python", "Bash"],
      },
      {
        name: "Frontend",
        items: ["React", "Redux", "Tailwind CSS", "Radix UI", "react-hook-form", "TanStack Table", "Zod"],
      },
      {
        name: "Backend",
        items: ["PHP / Laminas", "Node.js", "Express", "REST API Design", "Microservicii", "OAuth 2.0 / JWT"],
      },
      {
        name: "Infrastructură",
        items: ["Docker", "Azure DevOps", "GitHub Actions", "MySQL / PostgreSQL", "Redis", "Git"],
      },
      {
        name: "Testare și Calitate",
        items: ["Jest", "Vitest", "React Testing Library", "PHPUnit", "ESLint", "Prettier"],
      },
      {
        name: "Conducere",
        items: ["Team Leadership", "Arhitectură Software", "Code Review", "Mentorat", "Agile / Scrum"],
      },
    ],
  },
  projects: {
    heading: "Proiecte",
    subhead: "Câteva lucruri pe care le-am livrat, freelance și la job.",
    screenshotPlaceholder: "Captură de ecran indisponibilă",
    liveDemo: "Demo live",
    source: "Cod sursă",
    employerNote: "Proiect al angajatorului, nu este disponibil public",
    items: [
      {
        title: "B17 Coffee Lab",
        description:
          "Site și magazin online pentru o cafenea de specialitate cu trei locații în București: catalog de boabe de cafea, comenzi online și informații de contact.",
        tags: ["Web Design", "E-commerce", "WordPress"],
        liveHref: "https://b17coffeelab.ro/",
        image: "b17",
      },
      {
        title: "Personal Portfolio Website",
        description:
          "Acest site, construit cu Next.js și Tailwind CSS pentru încărcare aproape instantanee, cu comutator de temă light/dark, comutare între engleză și română, și un formular de contact funcțional.",
        tags: ["Next.js", "Tailwind CSS", "TypeScript"],
        liveHref: "/",
        image: "portfolio",
      },
      {
        title: "Enterprise Web Platform",
        description:
          "Ani de experiență în dezvoltarea și conducerea unei platforme enterprise de mari dimensiuni: aplicații pentru clienți, verificarea identității și instrumente interne de raportare, cu React/TypeScript pe frontend și PHP/Node pe backend.",
        tags: ["React", "TypeScript", "PHP", "Node.js"],
      },
    ],
  },
  testimonials: {
    heading: "Testimoniale",
    reviewsSuffix: "recenzii",
  },
  contact: {
    heading: "Contact",
    intro: "Disponibil pentru proiecte freelance de dezvoltare web, trimite-mi un mesaj și te contactez.",
    nameLabel: "Nume",
    methodLabel: "Metodă de contact",
    methodPlaceholder: "email@example.com",
    messageLabel: "Mesaj",
    send: "Trimite mesajul",
    sending: "Se trimite…",
    success: "Mulțumesc! Mesajul a fost trimis, te contactez în curând.",
    error: "A apărut o eroare, încearcă din nou sau scrie-mi direct prin email.",
    elsewhere: "Găsești-mă și aici",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    resume: "CV",
    leaveTestimonial: "Lasă un Testimonial",
  },
  review: {
    title: "Lasă un testimonial",
    intro: "Mulțumesc că am lucrat împreună, o recenzie scurtă ajută alți oameni să aibă încredere în munca mea. Durează un minut, și o voi adăuga pe site.",
    nameLabel: "Nume",
    roleLabel: "Rol / Companie",
    ratingLabel: "Evaluare",
    testimonialLabel: "Testimonialul tău",
    submit: "Trimite testimonialul",
    sending: "Se trimite…",
    ratingRequired: "Te rog selectează o evaluare înainte de a trimite.",
    success: "Mulțumesc! Testimonialul tău a fost trimis.",
    error: "A apărut o eroare, încearcă din nou sau scrie-mi direct prin email.",
    backHome: "Înapoi la pagina principală",
  },
  footer: {
    builtWith: (year: number) => `© ${year} Naghi Liviu. Construit cu Next.js și Tailwind CSS.`,
  },
};
