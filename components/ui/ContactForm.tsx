"use client";

import { useState } from "react";
import type { Dict } from "@/dictionaries/pl";

type Props = { dict: Dict["contactPage"]; email: string };

export function ContactForm({ dict, email }: Props) {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent(`Wiadomość od ${name}`);
    const body = encodeURIComponent(
      `Imię i nazwisko: ${name}\nEmail: ${from}\n\n${message}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const fields = [
    {
      id: "name",
      label: dict.formNameLabel,
      placeholder: dict.formNamePlaceholder,
      type: "text" as const,
      value: name,
      onChange: (v: string) => setName(v),
    },
    {
      id: "from",
      label: dict.formEmailLabel,
      placeholder: dict.formEmailPlaceholder,
      type: "email" as const,
      value: from,
      onChange: (v: string) => setFrom(v),
    },
  ];

  const inputClass =
    "bg-transparent border-b border-subtle focus:border-ink outline-none py-3 text-body-sm text-ink placeholder:text-muted/40 transition-colors duration-200 w-full";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {fields.map((f) => (
        <div key={f.id} className="flex flex-col gap-2">
          <label htmlFor={f.id} className="font-mono text-label text-muted uppercase tracking-wider">
            {f.label}
          </label>
          <input
            id={f.id}
            type={f.type}
            required
            placeholder={f.placeholder}
            value={f.value}
            onChange={(e) => f.onChange(e.target.value)}
            className={inputClass}
          />
        </div>
      ))}

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-mono text-label text-muted uppercase tracking-wider">
          {dict.formMessageLabel}
        </label>
        <textarea
          id="message"
          rows={5}
          required
          placeholder={dict.formMessagePlaceholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          className="self-start mt-2 inline-flex items-center gap-2 font-medium text-body-sm text-ink border border-ink/20 hover:border-ink px-6 py-3 rounded-sm transition-colors duration-200"
        >
          {dict.formSubmitLabel} &rarr;
        </button>

        {sent && (
          <p className="text-body-sm text-muted">
            {dict.formNote}
          </p>
        )}
      </div>
    </form>
  );
}
