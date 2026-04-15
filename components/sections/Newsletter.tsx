"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";

type State = "idle" | "loading" | "success" | "error";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setState("loading");

    // Placeholder: wire up to Mailchimp / Beehiiv / Resend / etc.
    await new Promise((r) => setTimeout(r, 900));
    setState("success");
  }

  return (
    <section
      id="newsletter"
      className="px-6 md:px-10 max-w-layout mx-auto py-section"
    >
      <Divider className="mb-16" />

      <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-24 items-start">
        {/* Left: copy */}
        <div>
          <FadeIn>
            <SectionLabel className="mb-6 block">Newsletter</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-display-lg text-ink text-balance mb-6 leading-tight">
              Operacje, produkty i technologia — raz na jakiś czas.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body-sm text-muted max-w-prose">
              Bez szumu, bez cotygodniowego spamu. Piszę wtedy, gdy mam coś
              konkretnego do powiedzenia o logistyce, AI, energetyce lub
              budowaniu produktów.
            </p>
          </FadeIn>
        </div>

        {/* Right: form */}
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
                <span className="font-mono text-label text-[#3A7D55] bg-[#E6F2EC] px-4 py-3 rounded-sm inline-block">
                  Gotowe — jesteś na liście.
                </span>
                <p className="text-body-sm text-muted">
                  Odezwę się, gdy będzie co powiedzieć.
                </p>
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
                    htmlFor="newsletter-email"
                    className="font-mono text-label text-muted uppercase tracking-wider"
                  >
                    Adres email
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="twoj@email.pl"
                    className="bg-transparent border-b border-subtle focus:border-ink outline-none py-3 text-body-sm text-ink placeholder:text-muted/40 transition-colors duration-200 w-full"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="self-start inline-flex items-center gap-2 font-medium text-body-sm text-canvas bg-ink hover:bg-ink/80 disabled:opacity-50 px-6 py-3 rounded-sm transition-colors duration-200"
                >
                  {state === "loading" ? "Wysyłam..." : "Zapisz się"}
                </button>

                {state === "error" && (
                  <p className="text-body-sm text-[#B84040]">
                    Coś poszło nie tak. Spróbuj ponownie.
                  </p>
                )}

                <p className="text-label text-muted/70">
                  Bez spamu. Wypisz się w każdej chwili. Twoje dane nie trafiają
                  do żadnych zewnętrznych systemów reklamowych.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </FadeIn>
      </div>
    </section>
  );
}
