import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Articles } from "@/components/sections/Articles";
import { Newsletter } from "@/components/sections/Newsletter";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: {
    absolute: `${profile.name} — Founder & Operator`,
  },
  description: profile.bio,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Articles />
      <Newsletter />
      <ContactCTA />
    </>
  );
}
