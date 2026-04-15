"use client";

import { useState } from "react";
import type { Dict } from "@/dictionaries/pl";

type State = "idle" | "loading" | "success" | "error";

type Props = { dict: Dict["contactPage"] };

const FORMSPREE = "https://formspree.io/f/xeeveayv";

export function ContactForm({ dict }: Props) {
  const [state, setState] = useState<State>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");

    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error();
      setState("success");
    } catch {
      setState("error");
    }
  }

  const inputClass =
    "bg-transparent border-b border-subtle focus:border-ink outline-none py-3 text-body-sm text-ink placeholder:text-muted/40 transition-colors duration-200 w-full";

  if (state === "success") {
    return (
      <div className="flex flex-col gap-3 py-4">
        <span className="font-mono text-label text-accent">✓ Wiadomość wysłana</span>
        <p className="text-body-sm text-muted">Odezwę się wkrótce.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-mono text-label text-muted uppercase tracking-wider">
          {dict.formNameLabel}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder={dict.formNamePlaceholder}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-mono text-label text-muted uppercase tracking-wider">
          {dict.formEmailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder={dict.formEmailPlaceholder}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-mono text-label text-muted uppercase tracking-wider">
          {dict.formMessageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={dict.formMessagePlaceholder}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={state === "loading"}
          className="self-start mt-2 inline-flex items-center gap-2 font-medium text-body-sm text-ink border border-ink/20 hover:border-ink disabled:opacity-50 px-6 py-3 rounded-sm transition-colors duration-200"
        >
          {state === "loading" ? "Wysyłam..." : `${dict.formSubmitLabel} →`}
        </button>

        {state === "error" && (
          <p className="text-body-sm text-accent">Coś poszło nie tak. Napisz bezpośrednio na email.</p>
        )}
      </div>
    </form>
  );
}
