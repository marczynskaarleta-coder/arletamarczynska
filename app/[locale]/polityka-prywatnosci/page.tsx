import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale, type Locale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "en" ? "Privacy Policy" : "Polityka prywatności";
  return { title, robots: { index: false } };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  if ((locale as Locale) === "en") return <EnVersion />;
  return <PlVersion />;
}

function PlVersion() {
  return (
    <div className="min-h-dvh pt-32 pb-section px-6 md:px-10 max-w-[72ch] mx-auto">
      <h1 className="font-serif text-display-lg text-ink mb-10">Polityka prywatności</h1>
      <div className="prose-legal">

        <p className="text-muted text-body-sm mb-8">Ostatnia aktualizacja: kwiecień 2026</p>

        <h2>1. Administrator danych</h2>
        <p>Administratorem Twoich danych osobowych jest Arleta Marczynska, prowadząca działalność pod marką eXportsy, e-mail: <a href="mailto:kontakt@arletamarczynska.pl">kontakt@arletamarczynska.pl</a>.</p>

        <h2>2. Jakie dane zbieramy</h2>
        <p>Zbieramy wyłącznie dane, które sam podajesz:</p>
        <ul>
          <li><strong>Formularz kontaktowy</strong> – imię, nazwisko, adres e-mail, treść wiadomości. Formularz otwiera Twój lokalny klient pocztowy – dane nie są zapisywane na naszych serwerach.</li>
          <li><strong>Newsletter</strong> – adres e-mail podany przy zapisie. Dane przetwarzane są przez zewnętrznego dostawcę usługi wysyłki e-maili (procesor danych działający na podstawie umowy powierzenia).</li>
        </ul>

        <h2>3. Pliki cookie i localStorage</h2>
        <p>Strona używa wyłącznie technicznych plików cookie oraz localStorage do zapamiętania Twoich preferencji (motyw strony, wybór języka, zgoda na cookie). Nie używamy plików cookie analitycznych, reklamowych ani śledzących bez Twojej wyraźnej zgody.</p>

        <h2>4. Cel i podstawa prawna przetwarzania</h2>
        <ul>
          <li>Odpowiedź na zapytania – art. 6 ust. 1 lit. b lub f RODO (realizacja umowy lub prawnie uzasadniony interes).</li>
          <li>Wysyłka newslettera – art. 6 ust. 1 lit. a RODO (zgoda). Możesz wycofać zgodę w każdej chwili klikając link rezygnacji w wiadomości e-mail.</li>
          <li>Obsługa preferencji technicznych – art. 6 ust. 1 lit. f RODO (uzasadniony interes techniczny).</li>
        </ul>

        <h2>5. Okres przechowywania danych</h2>
        <p>Dane z korespondencji przechowujemy przez czas niezbędny do obsługi sprawy, nie dłużej niż 3 lata. Dane do newslettera – do czasu cofnięcia zgody lub wypisania się z listy.</p>

        <h2>6. Twoje prawa</h2>
        <p>Masz prawo do: dostępu do danych, sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu. Możesz też złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych (uodo.gov.pl).</p>
        <p>W celu realizacji praw skontaktuj się: <a href="mailto:kontakt@arletamarczynska.pl">kontakt@arletamarczynska.pl</a>.</p>

        <h2>7. Przekazywanie danych</h2>
        <p>Dane nie są przekazywane do państw trzecich poza Europejskim Obszarem Gospodarczym. Korzystamy wyłącznie z dostawców działających w EOG lub posiadających odpowiednie certyfikacje (np. Privacy Shield / Data Privacy Framework).</p>

        <h2>8. Zmiany polityki</h2>
        <p>Zastrzegamy prawo do aktualizacji niniejszej polityki. O istotnych zmianach poinformujemy przez newsletter lub komunikat na stronie.</p>

      </div>
    </div>
  );
}

function EnVersion() {
  return (
    <div className="min-h-dvh pt-32 pb-section px-6 md:px-10 max-w-[72ch] mx-auto">
      <h1 className="font-serif text-display-lg text-ink mb-10">Privacy Policy</h1>
      <div className="prose-legal">

        <p className="text-muted text-body-sm mb-8">Last updated: April 2026</p>

        <h2>1. Data controller</h2>
        <p>The data controller is Arleta Marczynska, operating under the eXportsy brand, e-mail: <a href="mailto:kontakt@arletamarczynska.pl">kontakt@arletamarczynska.pl</a>.</p>

        <h2>2. What data we collect</h2>
        <p>We only collect data you provide directly:</p>
        <ul>
          <li><strong>Contact form</strong> – name, e-mail address, message content. The form opens your local e-mail client; no data is stored on our servers.</li>
          <li><strong>Newsletter</strong> – e-mail address provided at sign-up. Data is processed by a third-party e-mail delivery provider acting as a data processor under a data processing agreement.</li>
        </ul>

        <h2>3. Cookies and localStorage</h2>
        <p>This site uses only technical cookies and localStorage to remember your preferences (theme, language, cookie consent). We do not use analytical, advertising, or tracking cookies without your explicit consent.</p>

        <h2>4. Legal basis for processing</h2>
        <ul>
          <li>Responding to enquiries – Art. 6(1)(b) or (f) GDPR (contract performance or legitimate interest).</li>
          <li>Newsletter – Art. 6(1)(a) GDPR (consent). You may withdraw consent at any time via the unsubscribe link in any e-mail.</li>
          <li>Technical preferences – Art. 6(1)(f) GDPR (technical legitimate interest).</li>
        </ul>

        <h2>5. Retention</h2>
        <p>Correspondence data is retained for as long as necessary to handle the matter, and no longer than 3 years. Newsletter data is retained until consent is withdrawn or you unsubscribe.</p>

        <h2>6. Your rights</h2>
        <p>You have the right to access, rectify, erase, restrict processing, data portability, and object. You may also lodge a complaint with the Polish Data Protection Authority (uodo.gov.pl) or your local supervisory authority.</p>
        <p>To exercise your rights contact: <a href="mailto:kontakt@arletamarczynska.pl">kontakt@arletamarczynska.pl</a>.</p>

        <h2>7. International transfers</h2>
        <p>Data is not transferred outside the European Economic Area. We only use providers operating within the EEA or holding appropriate certifications.</p>

        <h2>8. Changes</h2>
        <p>We reserve the right to update this policy. Material changes will be communicated via newsletter or a notice on this site.</p>

      </div>
    </div>
  );
}
