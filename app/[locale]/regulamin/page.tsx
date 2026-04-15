import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale, type Locale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "en" ? "Terms of Use" : "Regulamin";
  return { title, robots: { index: false } };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  if ((locale as Locale) === "en") return <EnVersion />;
  return <PlVersion />;
}

function PlVersion() {
  return (
    <div className="min-h-dvh pt-32 pb-section px-6 md:px-10 max-w-[72ch] mx-auto">
      <h1 className="font-serif text-display-lg text-ink mb-10">Regulamin</h1>
      <div className="prose-legal">

        <p className="text-muted text-body-sm mb-8">Ostatnia aktualizacja: kwiecień 2026</p>

        <h2>1. Postanowienia ogólne</h2>
        <p>Niniejszy regulamin określa zasady korzystania ze strony internetowej arletamarczynska.pl (dalej: Strona), prowadzonej przez Arletę Marczynską (dalej: Właściciel).</p>

        <h2>2. Charakter strony</h2>
        <p>Strona ma charakter informacyjny i prezentacyjny. Publikowane treści (artykuły, opisy projektów, materiały) stanowią własność intelektualną Właściciela i są chronione przepisami prawa autorskiego.</p>

        <h2>3. Dozwolone korzystanie</h2>
        <p>Użytkownik może:</p>
        <ul>
          <li>przeglądać i czytać treści na własny użytek,</li>
          <li>udostępniać linki do Strony.</li>
        </ul>
        <p>Bez pisemnej zgody Właściciela zabronione jest:</p>
        <ul>
          <li>kopiowanie, reprodukowanie lub dystrybucja treści w celach komercyjnych,</li>
          <li>modyfikowanie treści i prezentowanie ich jako własnych,</li>
          <li>masowe pobieranie treści (scraping).</li>
        </ul>

        <h2>4. Newsletter</h2>
        <p>Zapis na newsletter jest dobrowolny. Subskrybent może zrezygnować w każdej chwili klikając link wypisania w wiadomości. Właściciel zastrzega sobie prawo do zmiany częstotliwości lub zakończenia wysyłki.</p>

        <h2>5. Kontakt i zapytania ofertowe</h2>
        <p>Wysłanie wiadomości przez formularz kontaktowy lub e-mail nie stanowi zawarcia umowy. Odpowiedź na zapytanie nie jest ofertą w rozumieniu Kodeksu cywilnego, chyba że wyraźnie tak wskazano.</p>

        <h2>6. Wyłączenie odpowiedzialności</h2>
        <p>Treści publikowane na Stronie mają charakter informacyjny i edukacyjny. Właściciel dokłada starań, by były aktualne i rzetelne, jednak nie ponosi odpowiedzialności za decyzje podjęte na ich podstawie. Linki do zewnętrznych stron są udostępniane wyłącznie jako źródła referencyjne.</p>

        <h2>7. Zmiany regulaminu</h2>
        <p>Właściciel zastrzega prawo do zmiany regulaminu. Aktualna wersja jest zawsze dostępna pod adresem arletamarczynska.pl/pl/regulamin.</p>

        <h2>8. Prawo właściwe</h2>
        <p>Regulamin podlega prawu polskiemu. Wszelkie spory będą rozstrzygane przez sąd właściwy dla siedziby Właściciela.</p>

        <h2>9. Kontakt</h2>
        <p>Pytania dotyczące regulaminu: <a href="mailto:kontakt@arletamarczynska.pl">kontakt@arletamarczynska.pl</a>.</p>

      </div>
    </div>
  );
}

function EnVersion() {
  return (
    <div className="min-h-dvh pt-32 pb-section px-6 md:px-10 max-w-[72ch] mx-auto">
      <h1 className="font-serif text-display-lg text-ink mb-10">Terms of Use</h1>
      <div className="prose-legal">

        <p className="text-muted text-body-sm mb-8">Last updated: April 2026</p>

        <h2>1. General</h2>
        <p>These terms govern the use of arletamarczynska.pl (the Site), operated by Arleta Marczynska (the Owner).</p>

        <h2>2. Nature of the site</h2>
        <p>The Site is informational and presentational. All published content (articles, project descriptions, materials) is the intellectual property of the Owner and is protected by copyright law.</p>

        <h2>3. Permitted use</h2>
        <p>You may:</p>
        <ul>
          <li>browse and read content for personal use,</li>
          <li>share links to the Site.</li>
        </ul>
        <p>Without the Owner's written consent, the following are prohibited:</p>
        <ul>
          <li>copying, reproducing or distributing content for commercial purposes,</li>
          <li>modifying content and presenting it as your own,</li>
          <li>bulk downloading of content (scraping).</li>
        </ul>

        <h2>4. Newsletter</h2>
        <p>Newsletter subscription is voluntary. Subscribers may unsubscribe at any time via the unsubscribe link in any e-mail. The Owner reserves the right to change the frequency of or discontinue the newsletter.</p>

        <h2>5. Contact and enquiries</h2>
        <p>Sending a message via the contact form or e-mail does not constitute entering into a contract. A response to an enquiry is not an offer under civil law unless explicitly stated.</p>

        <h2>6. Limitation of liability</h2>
        <p>Content on the Site is informational and educational. While the Owner endeavours to keep it accurate and current, no liability is accepted for decisions made based on it. Links to external sites are provided as reference sources only.</p>

        <h2>7. Changes</h2>
        <p>The Owner reserves the right to amend these terms. The current version is always available at arletamarczynska.pl/en/terms.</p>

        <h2>8. Governing law</h2>
        <p>These terms are governed by Polish law. Any disputes shall be resolved by the court competent for the Owner's place of business.</p>

        <h2>9. Contact</h2>
        <p>Questions about these terms: <a href="mailto:kontakt@arletamarczynska.pl">kontakt@arletamarczynska.pl</a>.</p>

      </div>
    </div>
  );
}
