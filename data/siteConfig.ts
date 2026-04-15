import { profile } from "@/data/profile";
import { links } from "@/data/links";

export const siteConfig = {
  name: profile.name,
  tagline: profile.headline,
  description: profile.bio,
  url: "https://arletamarczynska.pl",
  locale: "pl_PL",
  author: {
    name: profile.name,
    email: profile.contact.email,
    role: "Founder & Operator",
    bio: profile.bio,
  },
  social: {
    linkedin: links.social[0].href,
    twitter: links.social[1].href,
    github: links.social[2].href,
  },
  nav: links.nav,
} as const;
