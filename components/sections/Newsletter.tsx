"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import type { Dict } from "@/dictionaries/pl";

type State = "idle" | "loading" | "success" | "error";

type Props = { dict: Dict["newsletter"] };

export function Newsletter({ dict }: Props) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setState("loading");
    // TODO: wire to Mailchimp / Beehiiv / Resend via NEXT_PUBLIC_NEWSLETTER_ENDPOINT
    await new Promise((r) => setTimeout(r, 900));
    setState("success");
  }

  return (
    <section id="newsletter" className="px-6 md:px-10 max-w-layout mx-auto py-section">
      <Divider className="mb-16" />

      <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-24 items-start">
        <div>
          <FadeIn>
            <SectionLabel className="mb-6 block">{dict.sectionLabel}</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-display-lg text-ink text-balance mb-6 leading-tight">
              {dict.heading}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body-sm text-muted max-w-prose">{dict.body}</p>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} className="flex flex-col gap-5 pt-2 md:pt-10">
          <AnimatePresence mode="wait">
            {state === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-3"
              >
                <span className="font-mono text-label bg-[#E6F2EC] text-[#2D5A3D] dark:bg-[#1A3326] dark:text-[#7BC49A] px-4 py-3 rounded-sm inline-block">
                  {dict.successMessage}
                </span>
                <p className="text-body-sm text-muted">{dict.successBody}</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-5"
              >
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="nl-email"
                    className="font-mono text-label text-muted uppercase tracking-wider"
                  >
                    {dict.emailLabel}
                  </label>
                  <input
                    id="nl-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={dict.emailPlaceholder}
                    className="bg-transparent border-b border-subtle focus:border-ink outline-none py-3 text-body-sm text-ink placeholder:text-muted/40 transition-colors duration-200 w-full"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="self-start inline-flex items-center gap-2 font-medium text-body-sm text-canvas bg-ink hover:bg-ink/80 disabled:opacity-50 px-6 py-3 rounded-sm transition-colors duration-200"
                >
                  {state === "loading" ? dict.submittingLabel : dict.submitLabel}
                </button>

                {state === "error" && (
                  <p className="text-body-sm text-[#B84040] dark:text-[#E07070]">
                    {dict.errorMessage}
                  </p>
                )}

                <p className="text-label text-muted/70">{dict.privacyNote}</p>
              </motion.form>
            )}
          </AnimatePresence>
        </FadeIn>
      </div>
    </section>
  );
}
