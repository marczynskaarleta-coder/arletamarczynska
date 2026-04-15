"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Dict } from "@/dictionaries/pl";

type State = "idle" | "loading" | "success" | "error";

type Props = {
  dict: Dict["newsletter"];
  className?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function NewsletterForm({ dict, className }: Props) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [touched, setTouched] = useState(false);

  const invalid = touched && !isValidEmail(email);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!isValidEmail(email)) return;

    setState("loading");

    const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT;

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ email: email.trim() }),
        });
        if (!res.ok) throw new Error("Request failed");
      } else {
        // Simulate success in dev when endpoint is not configured
        await new Promise((r) => setTimeout(r, 800));
      }
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {state === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-3"
          >
            <span className="font-mono text-label bg-[#eaf0e2] text-[#4a5e32] dark:bg-[#1e2a14] dark:text-[#a3b87c] px-4 py-3 rounded-sm inline-block">
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
            noValidate
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
                onBlur={() => setTouched(true)}
                placeholder={dict.emailPlaceholder}
                aria-invalid={invalid}
                aria-describedby={invalid ? "nl-email-error" : undefined}
                className={`bg-transparent border-b outline-none py-3 text-body-sm text-ink placeholder:text-muted/40 transition-colors duration-200 w-full ${
                  invalid
                    ? "border-[#913a27] focus:border-[#913a27]"
                    : "border-subtle focus:border-ink"
                }`}
              />
              {invalid && (
                <p id="nl-email-error" className="text-label text-[#913a27]">
                  Podaj poprawny adres email.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={state === "loading"}
              className="self-start inline-flex items-center gap-2 font-medium text-body-sm text-canvas bg-ink hover:bg-ink/80 disabled:opacity-50 px-6 py-3 rounded-sm transition-colors duration-200"
            >
              {state === "loading" ? dict.submittingLabel : dict.submitLabel}
            </button>

            {state === "error" && (
              <p className="text-body-sm text-[#913a27] dark:text-[#d47060]">
                {dict.errorMessage}
              </p>
            )}

            <p className="text-label text-muted/60 max-w-[40ch]">{dict.privacyNote}</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
