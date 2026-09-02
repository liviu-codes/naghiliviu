export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: {
    en: string;
    ro: string;
  };
}

/**
 * Placeholder testimonials for layout/demo purposes only.
 * Replace with real client reviews (collected via /review) before launch.
 */
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Andreea Popescu",
    role: "Founder, B17 Coffee Lab",
    rating: 5,
    quote: {
      en: "Liviu rebuilt our online shop from scratch and it just works. Orders come in cleanly, the catalog is easy for us to update, and he explained every decision along the way.",
      ro: "Liviu ne-a reconstruit magazinul online de la zero și pur și simplu funcționează. Comenzile vin curat, catalogul e ușor de actualizat pentru noi, iar el a explicat fiecare decizie pe parcurs.",
    },
  },
  {
    id: "2",
    name: "Marcus Feldman",
    role: "Operations Lead, Heybridge Logistics",
    rating: 5,
    quote: {
      en: "We needed a small internal tool built fast and built right. Liviu delivered both. Clear communication, no surprises, and the code held up under real usage.",
      ro: "Aveam nevoie de un instrument intern mic, construit rapid și corect. Liviu a livrat ambele lucruri. Comunicare clară, fără surprize, iar codul a rezistat la utilizarea reală.",
    },
  },
  {
    id: "3",
    name: "Ioana Dumitrescu",
    role: "Product Manager, Solvix",
    rating: 4,
    quote: {
      en: "Solid engineering instincts and good at pushing back when a requirement did not make sense. The project shipped a bit later than planned, but the quality was worth it.",
      ro: "Instincte solide de inginerie și bun la a contesta o cerință care nu avea sens. Proiectul a ieșit puțin mai târziu decât era planificat, dar calitatea a meritat.",
    },
  },
  {
    id: "4",
    name: "Tomas Berger",
    role: "Co-founder, Nordkit",
    rating: 5,
    quote: {
      en: "Handed Liviu a rough idea and a whiteboard photo. Got back a working product with a clean API and tests that actually cover the tricky parts.",
      ro: "I-am dat lui Liviu o idee vagă și o poză de pe whiteboard. Am primit înapoi un produs funcțional, cu un API curat și teste care acoperă chiar și părțile complicate.",
    },
  },
  {
    id: "5",
    name: "Cristina Marinescu",
    role: "Small Business Owner",
    rating: 5,
    quote: {
      en: "Patient with someone who is not technical at all. He walked me through every choice in plain language and the site has been rock solid since launch.",
      ro: "Foarte răbdător cu cineva complet netehnic. Mi-a explicat fiecare alegere pe înțelesul meu, iar site-ul funcționează impecabil de la lansare.",
    },
  },
  {
    id: "6",
    name: "David Okafor",
    role: "Engineering Manager, Ledgerly",
    rating: 4,
    quote: {
      en: "Brought in for a focused piece of backend work. Good architectural judgment, asked the right questions early, and left the codebase easier to extend than he found it.",
      ro: "Adus pentru o bucată specifică de lucru pe backend. Judecată bună de arhitectură, a pus întrebările corecte din timp și a lăsat codul mai ușor de extins decât l-a găsit.",
    },
  },
  {
    id: "7",
    name: "Elena Vasilescu",
    role: "Marketing Director, Aroma Collective",
    rating: 5,
    quote: {
      en: "The site loads instantly and looks great on mobile, which is where most of our customers are. Liviu also caught a few things in our original brief we had not thought through.",
      ro: "Site-ul se încarcă instant și arată foarte bine pe mobil, de unde vin majoritatea clienților noștri. Liviu a observat și câteva lucruri din brief-ul inițial la care nu ne gândiserăm.",
    },
  },
  {
    id: "8",
    name: "Radu Constantin",
    role: "CTO, Fluvio",
    rating: 5,
    quote: {
      en: "We hired him for a two week sprint on a payments flow. He scoped it honestly, flagged risk early, and the flow has not needed a hotfix since it shipped.",
      ro: "L-am angajat pentru un sprint de două săptămâni pe un flux de plăți. A estimat cinstit, a semnalat riscurile din timp, iar fluxul nu a mai avut nevoie de niciun hotfix de la lansare.",
    },
  },
];
