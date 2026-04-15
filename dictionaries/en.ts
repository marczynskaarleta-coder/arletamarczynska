import type { Dict } from "./pl";

export const dict: Dict = {
  meta: {
    homeTitle: "Arleta Marczynska — Founder & Operator",
    homeDescription:
      "Operator and founder. I organise processes, data, and ways of working so that a business runs predictably.",
  },
  nav: {
    projects: "Projects",
    blog: "Writing",
    contact: "Contact",
    newsletter: "Newsletter",
    switchTo: "PL",
  },
  hero: {
    roleLabel: "Founder & Operator",
    headline: "I build systems that work.",
    subheadline:
      "Operator and founder. I organise processes, data, and ways of working so that a business runs predictably, not by chance.",
    ctaProjects: "See projects",
    ctaContact: "Get in touch",
    scrollHint: "Scroll",
  },
  about: {
    sectionLabel: "About",
    statement:
      "I combine systems thinking with operational execution. Where a process fails, cost begins.",
    bio: "I organise processes, data, and ways of working so that a business runs predictably, not by chance.",
    areasLabel: "Focus areas",
    areas: [
      {
        id: "transport",
        label: "Transport & Operations (TSL)",
        description:
          "Organisation of domestic and international road freight and management of forwarding operations, from order through documentation and crossings to settlement, including customs and warehouse solutions.",
      },
      {
        id: "processes",
        label: "Work systems & processes",
        description:
          "Building standards, onboarding, and ways of working that do not depend on individual people.",
      },
      {
        id: "data",
        label: "Decisions & data",
        description:
          "Verification, analysis, and use of data in everyday operational work.",
      },
      {
        id: "digital-products",
        label: "Tools & digital products",
        description:
          "Designing and implementing solutions that genuinely support operations, from concept to deployment.",
      },
    ],
  },
  projects: {
    sectionLabel: "Projects",
    viewAll: "All projects",
    visitLabel: "Visit",
    soonLabel: "Soon",
  },
  articles: {
    sectionLabel: "Writing",
    viewAll: "All articles",
    readLabel: "Read",
  },
  beyondOps: {
    sectionLabel: "Beyond operations",
    motoLabel: "Meetups",
    motoTitle: "Business Motorcycle Meetups",
    motoDescription:
      "Informal gatherings for entrepreneurs who also ride.",
    motoStatus: "First meetup 6 June, starting in Andrychów",
    expertLabel: "Industry expert",
    expertTitle: "Industry reports and webinars",
    expertDescription:
      "Contributor to industry reports, webinars, and TSL sector analyses.",
    expertLinks: [
      { label: "PITD", url: "https://pitd.org.pl/pl" },
      { label: "MAI Institute", url: "https://mai-inst.com" },
    ],
  },
  newsletter: {
    sectionLabel: "Newsletter",
    heading: "Operations, products, and technology, occasionally.",
    body: "No noise, no weekly spam. I write when I have something specific to say about logistics, AI, or building products.",
    emailLabel: "Email address",
    emailPlaceholder: "your@email.com",
    submitLabel: "Subscribe",
    submittingLabel: "Subscribing...",
    successMessage: "Done, you are on the list.",
    successBody: "I will reach out when there is something worth saying.",
    errorMessage: "Something went wrong. Please try again.",
    privacyNote:
      "No spam. Unsubscribe anytime. Your data stays private.",
  },
  contact: {
    sectionLabel: "Contact",
    heading: "Have a project to discuss?",
    subheading: "Let's talk.",
    emailLabel: "Email",
  },
  footer: {
    role: "Founder & Operator",
    copyright: "All rights reserved",
  },
  badges: {
    live: "Live",
    inProgress: "In progress",
    concept: "Concept",
    comingSoon: "Coming soon",
  },
  common: {
    minutesRead: "min read",
    backToBlog: "Writing",
    backToHome: "Back to home",
  },
  projectsPage: {
    breadcrumb: "Projects",
    heading: "Projects I am building.",
    subheading: "Tools, systems, and initiatives.",
    visitLabel: "Visit",
    soonLabel: "Soon",
    whyItMattersLabel: "Why it matters",
    filterAll: "All",
    filterStatus: "Status",
    filterCategory: "Category",
  },
  blogPage: {
    breadcrumb: "Notes and observations",
    heading: "I write about what I build.",
    categoryAll: "All",
  },
  blogPostPage: {
    relatedLabel: "Related posts",
    readMoreLabel: "Read more",
  },
  contactPage: {
    breadcrumb: "Contact",
    heading: "Let's talk about what you want to build.",
    description:
      "Available for product collaboration, operational consulting, and projects at the intersection of technology and operations.",
    replyTime: "I usually respond within 24-48 hours.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    instagramLabel: "Instagram",
    formNameLabel: "Full name",
    formNamePlaceholder: "Jane Smith",
    formEmailLabel: "Email",
    formEmailPlaceholder: "jane@company.com",
    formMessageLabel: "Message",
    formMessagePlaceholder:
      "Briefly describe what you do and what you are looking for...",
    formSubmitLabel: "Send message",
    formNote:
      "This form opens your default email client. You can also write directly to the address above.",
  },
  notFound: {
    label: "404",
    heading: "Nothing here.",
    body: "The page you are looking for does not exist or has been moved.",
    cta: "Back to home",
  },
};
