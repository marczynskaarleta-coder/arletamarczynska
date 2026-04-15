"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const locale = pathname?.startsWith("/en") ? "en" : "pl";

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "all");
    setVisible(false);
  }

  function necessary() {
    localStorage.setItem(STORAGE_KEY, "necessary");
    setVisible(false);
  }

  const copy = {
    pl: {
      text: "Ta strona używa plików cookie niezbędnych do działania. Możesz zaakceptować wszystkie lub wybrać tylko niezbędne.",
      policy: "Polityka prywatności",
      accept: "Akceptuję wszystkie",
      necessary: "Tylko niezbędne",
    },
    en: {
      text: "This site uses cookies necessary for its operation. You can accept all or choose essential only.",
      policy: "Privacy policy",
      accept: "Accept all",
      necessary: "Essential only",
    },
  }[locale];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cookie-banner"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label="Zgoda na pliki cookie"
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-50 bg-canvas border border-subtle rounded-sm shadow-lg p-5 flex flex-col gap-4"
        >
          <p className="text-body-sm text-muted leading-relaxed">
            {copy.text}{" "}
            <Link
              href={`/${locale}/polityka-prywatnosci`}
              className="text-ink underline underline-offset-2 hover:text-accent transition-colors duration-200"
            >
              {copy.policy}
            </Link>
            .
          </p>
          <div className="flex gap-3">
            <button
              onClick={accept}
              className="flex-1 text-body-sm font-medium text-canvas bg-ink hover:bg-ink/80 px-4 py-2.5 rounded-sm transition-colors duration-200"
            >
              {copy.accept}
            </button>
            <button
              onClick={necessary}
              className="flex-1 text-body-sm text-muted border border-subtle hover:border-ink/30 hover:text-ink px-4 py-2.5 rounded-sm transition-colors duration-200"
            >
              {copy.necessary}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
