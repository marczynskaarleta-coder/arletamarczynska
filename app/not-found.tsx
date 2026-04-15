import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-label text-muted uppercase tracking-widest mb-6">
        404
      </span>
      <h1 className="font-serif text-display-lg text-ink mb-4">
        Nie ma tu nic.
      </h1>
      <p className="text-body-sm text-muted mb-10">
        Strona, ktorej szukasz, nie istnieje lub zostala przeniesiona.
      </p>
      <Link
        href="/"
        className="text-body-sm font-medium text-ink border border-ink/20 hover:border-ink px-5 py-2.5 rounded-sm transition-colors"
      >
        &larr; Wroc na strone glowna
      </Link>
    </div>
  );
}
