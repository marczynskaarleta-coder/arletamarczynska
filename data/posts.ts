type PostContent = {
  title: string;
  excerpt: string;
  category: string;
  body: string; // HTML string — replace with MDX import when ready
};

export type Post = {
  slug: string;
  date: string;
  readingTime: number;
  tags: string[];
  published: boolean;
  featured: boolean;
  relatedSlugs?: string[];
  content: { pl: PostContent; en: PostContent };
};

export const posts: Post[] = [
  {
    slug: "jak-budowac-produkty-bez-inwestora",
    date: "2025-11-10",
    readingTime: 6,
    tags: ["Produkt", "Bootstrapping", "Biznes"],
    published: true,
    featured: true,
    relatedSlugs: ["automatyzacja-bez-chaosu", "ui-ktore-nie-krzyczy"],
    content: {
      pl: {
        title: "Jak budować produkty bez inwestora",
        excerpt:
          "Bootstrapping nie jest kompromisem. To wybór filozoficzny, który zmusza do myślenia o wartości od pierwszego dnia — i który często prowadzi do lepszych produktów.",
        category: "Produkt",
        body: `<p>Kiedy zaczynasz budować produkt bez zewnętrznego finansowania, pierwsza lekcja jest brutalna: nie masz luksusu błędu. Każda godzina pracy, każda decyzja architektoniczna, każde spotkanie z potencjalnym klientem musi mieć sens finansowy od pierwszego dnia.</p>

<p>To nie jest kompromis. To przewaga.</p>

<h2>Dlaczego bootstrapping zmienia myślenie</h2>

<p>Firmy wspierane przez inwestorów operują w logice wzrostu. Metryki, które mają znaczenie, to zasięg, liczba użytkowników, tempo pozyskiwania. Pieniądze są po to, żeby palić szybciej i docierać dalej.</p>

<p>W bootstrappingu metryki są inne: marża, powtarzalność, koszt pozyskania klienta versus wartość życiowa. Budujesz rzeczy, które zarabiają — nie rzeczy, które imponują.</p>

<blockquote>
  <p>Produkt, który generuje 3 000 złotych miesięcznie od pierwszego kwartału, jest więcej wart niż produkt, który "ma potencjał" przez dwa lata.</p>
</blockquote>

<h2>Trzy zasady, które sprawdziły się w praktyce</h2>

<h3>1. Najpierw problem, nie produkt</h3>

<p>Nie budujesz aplikacji. Budujesz rozwiązanie konkretnego problemu, za który ktoś jest gotowy zapłacić. Zanim napiszesz pierwszą linię kodu, upewnij się, że rozmawiałeś z przynajmniej dziesięcioma osobami, które ten problem mają — i że były gotowe powiedzieć, ile by za rozwiązanie zapłaciły.</p>

<h3>2. Zapomnij o MVP — buduj MBP (Minimum Billable Product)</h3>

<p>MVP to termin z krainy venture capital. W bootstrappingu masz budować coś, co można sprzedać, nie coś, co można zaprezentować. Minimum Billable Product to ta wersja produktu, za którą pierwszy klient zapłaci realną cenę — i od której możesz zacząć finansować dalszy rozwój.</p>

<h3>3. Kontrola kosztów to strategia, nie oszczędność</h3>

<p>Bootstrapping nie oznacza, że nie inwestujesz. Oznacza, że każda złotówka musi mieć zwrot. Możesz wydawać dużo — ale musisz wiedzieć, na co i dlaczego. Infrastruktura, narzędzia, czas zewnętrznych wykonawców — wszystko powinno być mierzalne.</p>

<h2>Co tracisz, a co zyskujesz</h2>

<p>Tracisz: szybkość w niektórych wymiarach, prestiż "z funduszem za plecami", możliwość popełniania drogich błędów bez natychmiastowych konsekwencji.</p>

<p>Zyskujesz: własność — stuprocentową, elastyczność decyzyjną, zdolność do pivotu bez komitetu, spokój operacyjny. I budowanie czegoś, co od początku musi działać, bo nie masz siatki bezpieczeństwa.</p>

<p>Po kilku latach budowania w tym modelu jestem przekonana, że dla branż z jasną logiką B2B i konkretnie zdefiniowanymi problemami — bootstrapping jest nie tylko możliwy, ale często mądrzejszy niż szukanie zewnętrznego finansowania.</p>`,
      },
      en: {
        title: "Building products without investors",
        excerpt:
          "Bootstrapping is not a compromise. It is a philosophical choice that forces you to think about value from day one — and it often leads to better products.",
        category: "Product",
        body: `<p>When you start building a product without external funding, the first lesson is brutal: you have no margin for error. Every working hour, every architectural decision, every meeting with a potential customer must make financial sense from day one.</p>

<p>That is not a compromise. It is an advantage.</p>

<h2>Why bootstrapping changes how you think</h2>

<p>Venture-backed companies operate in growth logic. The metrics that matter are reach, user counts, and acquisition velocity. Money exists to burn faster and go further.</p>

<p>In bootstrapping, the metrics are different: margin, repeatability, customer acquisition cost versus lifetime value. You build things that earn — not things that impress.</p>

<blockquote>
  <p>A product generating three thousand zlotys a month from its first quarter is worth more than a product with "potential" for two years.</p>
</blockquote>

<h2>Three principles that have worked in practice</h2>

<h3>1. Problem first, product second</h3>

<p>You are not building an application. You are building a solution to a specific problem someone will pay to solve. Before writing a single line of code, make sure you have spoken with at least ten people who have that problem — and that they were willing to say how much they would pay for a solution.</p>

<h3>2. Forget MVP — build an MBP (Minimum Billable Product)</h3>

<p>MVP is a term from the venture capital world. In bootstrapping, you build something you can sell, not something you can present. The Minimum Billable Product is the version your first customer will pay a real price for — and from which you can fund further development.</p>

<h3>3. Cost control is strategy, not frugality</h3>

<p>Bootstrapping does not mean you do not invest. It means every unit of money must have a return. You can spend a lot — but you need to know what for and why. Infrastructure, tools, contractor time — everything should be measurable.</p>

<h2>What you lose and what you gain</h2>

<p>You lose: speed in certain dimensions, the prestige of having a fund behind you, and the ability to make expensive mistakes without immediate consequences.</p>

<p>You gain: full ownership, decision-making flexibility, the ability to pivot without a committee, and operational calm. You are building something that must work from the start, because you have no safety net.</p>

<p>After several years of building this way, I am convinced that for industries with clear B2B logic and well-defined problems, bootstrapping is not only possible — it is often smarter than seeking external funding.</p>`,
      },
    },
  },
  {
    slug: "automatyzacja-bez-chaosu",
    date: "2025-10-22",
    readingTime: 5,
    tags: ["Automatyzacja", "Operacje", "AI"],
    published: true,
    featured: true,
    relatedSlugs: ["jak-budowac-produkty-bez-inwestora", "ui-ktore-nie-krzyczy"],
    content: {
      pl: {
        title: "Automatyzacja bez chaosu",
        excerpt:
          "Narzędzia AI są tylko tak dobre, jak procesy, które za nimi stoją. Najpierw napraw proces — potem go automatyzuj.",
        category: "Operacje",
        body: `<p>Każda firma, która zaczyna wdrażać AI i automatyzację, przeżywa ten sam moment: narzędzie działa. Wynik jest dobry. I natychmiast pojawia się pytanie — co dalej automatyzujemy?</p>

<p>To właśnie jest punkt, w którym firmy wpadają w chaos.</p>

<h2>Błąd nr 1: automatyzowanie przed procesem</h2>

<p>Narzędzia AI są neutralne. Mogą przyspieszyć zarówno dobry proces, jak i zły. Jeśli twój zespół spędza dwie godziny dziennie na ręcznym wprowadzaniu danych do arkuszy, a następnie te arkusze są niespójne i nikt nie wie, które są aktualne — automatyzacja tego procesu da ci szybki, nieaktualny chaos zamiast powolnego.</p>

<blockquote>
  <p>Najpierw napraw proces. Potem automatyzuj. Nigdy odwrotnie.</p>
</blockquote>

<h2>Gdzie zacząć? Mapa powtarzalności</h2>

<p>Prosta heurystyka: szukaj procesów, które spełniają trzy kryteria:</p>

<ul>
  <li>Powtarzają się minimum raz w tygodniu</li>
  <li>Mają jasno zdefiniowany input i oczekiwany output</li>
  <li>Błędy mają mierzalne konsekwencje — czas, pieniądze lub relacja z klientem</li>
</ul>

<p>W branży TSL to zwykle: generowanie ofert frachtowych, tworzenie dokumentacji celnej, odpowiadanie na zapytania o status przesyłki, kontrola faktur przewoźników.</p>

<h2>Model wdrożenia: małe pętle, duże efekty</h2>

<h3>Tydzień 1–2: identyfikacja</h3>

<p>Mapujesz procesy. Nie wdrażasz jeszcze nic. Rozmawiasz z zespołem, który te procesy wykonuje — i pytasz, co zajmuje im najwięcej czasu, a co robią automatycznie bez myślenia.</p>

<h3>Tydzień 3–4: pierwsza pętla</h3>

<p>Wybierasz jeden proces. Wdrażasz automatyzację dla 20% przypadków — tych najprostszych i najbardziej powtarzalnych. Mierzysz czas, jakość, liczbę interwencji ręcznych.</p>

<h3>Miesiąc 2–3: skalowanie</h3>

<p>Jeśli pierwsze wdrożenie działa — rozszerzasz zakres. Jeśli nie — naprawiasz. Nie przeskakujesz do kolejnego procesu, zanim ten jest ustabilizowany i zmierzony.</p>

<h2>Pułapka narzędziowa</h2>

<p>Rynek narzędzi AI rośnie szybciej niż zdolność firm do ich sensownego wdrażania. Co tydzień pojawia się nowa platforma, nowy agent, nowy "game changer".</p>

<p>Moja zasada: wybieram jedno narzędzie na jeden proces. Testuję je przez minimum dwa miesiące. Oceniam nie według liczby funkcji, ale według jednego pytania: czy mój zespół chce tego używać, czy musi?</p>

<p>Automatyzacja, której ludzie nienawidzą, nigdy nie przyniesie obiecanych rezultatów. Narzędzie musi zmniejszać tarcie, nie dodawać nowego.</p>`,
      },
      en: {
        title: "Automation without chaos",
        excerpt:
          "AI tools are only as good as the processes behind them. Fix the process first — then automate it.",
        category: "Operations",
        body: `<p>Every company that starts implementing AI and automation goes through the same moment: the tool works. The result is good. And immediately the question arises — what do we automate next?</p>

<p>That is exactly the point where companies fall into chaos.</p>

<h2>Mistake number one: automating before the process is ready</h2>

<p>AI tools are neutral. They can accelerate a good process just as easily as a bad one. If your team spends two hours a day manually entering data into spreadsheets, and those spreadsheets are inconsistent and nobody knows which ones are current — automating that process will give you fast, outdated chaos instead of slow chaos.</p>

<blockquote>
  <p>Fix the process first. Then automate it. Never the other way around.</p>
</blockquote>

<h2>Where to start: the repeatability map</h2>

<p>A simple heuristic: look for processes that meet three criteria:</p>

<ul>
  <li>They repeat at least once a week</li>
  <li>They have a clearly defined input and expected output</li>
  <li>Errors have measurable consequences — time, money, or a client relationship</li>
</ul>

<p>In the freight industry, this is usually: generating freight quotes, creating customs documentation, responding to shipment status inquiries, and checking carrier invoices.</p>

<h2>Implementation model: small loops, large effects</h2>

<h3>Weeks 1–2: identification</h3>

<p>Map your processes. Do not implement anything yet. Talk to the team performing these processes — ask what takes the most time and what they do on autopilot without thinking.</p>

<h3>Weeks 3–4: first loop</h3>

<p>Choose one process. Implement automation for 20% of cases — the simplest and most repetitive ones. Measure time, quality, and number of manual interventions.</p>

<h3>Months 2–3: scaling</h3>

<p>If the first implementation works — expand the scope. If not — fix it. Do not jump to the next process before the current one is stable and measured.</p>

<h2>The tool trap</h2>

<p>The AI tools market is growing faster than companies' ability to deploy them sensibly. Every week there is a new platform, a new agent, a new "game changer."</p>

<p>My rule: I choose one tool for one process. I test it for at least two months. I evaluate it not by feature count, but by one question: does my team want to use this, or do they have to?</p>

<p>Automation that people hate will never deliver the promised results. The tool must reduce friction, not add new kinds of it.</p>`,
      },
    },
  },
  {
    slug: "ui-ktore-nie-krzyczy",
    date: "2025-09-08",
    readingTime: 4,
    tags: ["Design", "Produkt", "UX"],
    published: true,
    featured: false,
    relatedSlugs: ["jak-budowac-produkty-bez-inwestora", "automatyzacja-bez-chaosu"],
    content: {
      pl: {
        title: "UI, które nie krzyczy",
        excerpt:
          "Dobry interfejs działa jak dobrze napisana umowa: jest jasny, precyzyjny i nie wymaga wyjaśnień. Kiedy użytkownik zastanawia się, co zrobić dalej, interfejs już przegrał.",
        category: "Design",
        body: `<p>Dobry interfejs działa jak dobrze napisana umowa: jest jasny, precyzyjny i nie wymaga wyjaśnień. Kiedy użytkownik potrzebuje się zastanawiać, co zrobić dalej, interfejs już przegrał.</p>

<h2>Problem nadmiaru</h2>

<p>Większość interfejsów cierpi na ten sam problem: za dużo. Za dużo kolorów, za dużo animacji, za dużo opcji widocznych jednocześnie, za dużo tekstu wyjaśniającego to, co powinno być oczywiste z kontekstu.</p>

<p>To zjawisko jest zrozumiałe. Każda funkcja wydaje się ważna. Każdy komunikat marketing chce, żeby był widoczny. Każdy stakeholder ma coś do dodania. W efekcie strona, która miała być prosta, staje się negocjacją wszystkich interesów jednocześnie.</p>

<blockquote>
  <p>Każdy element, który dodajesz do interfejsu, odbiera uwagę wszystkim pozostałym. Design to zarządzanie uwagą.</p>
</blockquote>

<h2>Hierarchia informacji jako narzędzie operacyjne</h2>

<p>W narzędziach B2B, gdzie spędziłam ostatnie lata, UI nie jest estetycznym wyborem — to wybór operacyjny. Dyspozytor, który loguje się rano i ma zobaczyć, które zlecenia wymagają uwagi, nie może tracić czasu na odkodowywanie struktury dashboardu.</p>

<p>Hierarchia informacji powinna odzwierciedlać hierarchię decyzji:</p>

<ol>
  <li>Co jest pilne i wymaga akcji teraz?</li>
  <li>Co jest ważne, ale może poczekać do popołudnia?</li>
  <li>Co jest informacyjne i nie wymaga działania?</li>
</ol>

<h2>Czego unikam projektując narzędzia dla sektora TSL</h2>

<h3>Kolorów statusów bez legendy</h3>

<p>Czerwony nie zawsze znaczy "błąd". Zielony nie zawsze znaczy "OK". Jeśli używasz koloru jako jedynego nośnika informacji — tracisz użytkowników z deficytami widzenia kolorów i tworzysz zależność od zapamiętanego kontekstu zamiast od systemu.</p>

<h3>Modali potwierdzających wszystko</h3>

<p>"Czy na pewno chcesz to zrobić?" — jeśli pytasz o to za każdym razem, użytkownicy przestają czytać i klikają OK automatycznie. Modal potwierdzenia ma sens tylko wtedy, gdy akcja jest naprawdę nieodwracalna i rzadka.</p>

<h3>Tabel z dwudziestoma kolumnami</h3>

<p>Dane można pokazywać lepiej niż arkusz Excela. Ale jeśli użytkownicy proszą o eksport do Excela, to nie znaczy, że potrzebują tabeli z dwudziestoma kolumnami w aplikacji. To znaczy, że aplikacja nie rozwiązuje ich problemu analitycznego.</p>

<h2>Minimalność jako efekt, nie punkt startowy</h2>

<p>Minimalizm w UI to nie trend ani osobista preferencja estetyczna. To efekt bardzo precyzyjnego usunięcia wszystkiego, co nie jest konieczne. Nie możesz zaczynać od pustej strony i dodawać elementów. Musisz zaczynać od pełnej strony i usuwać, dopóki nie boli.</p>

<p>I to boli. Bo każda usunięta funkcja to rozmowa z kimś, kto ją chciał.</p>`,
      },
      en: {
        title: "UI that does not shout",
        excerpt:
          "A good interface works like a well-written contract: clear, precise, and requiring no explanation. When a user has to wonder what to do next, the interface has already failed.",
        category: "Design",
        body: `<p>A good interface works like a well-written contract: clear, precise, and requiring no explanation. When a user has to wonder what to do next, the interface has already failed.</p>

<h2>The problem of excess</h2>

<p>Most interfaces suffer from the same problem: too much. Too many colours, too many animations, too many options visible at once, too much explanatory text for things that should be obvious from context.</p>

<p>This is understandable. Every feature seems important. Marketing wants every message to be visible. Every stakeholder has something to add. The result is a page that was meant to be simple but becomes a negotiation of all interests at once.</p>

<blockquote>
  <p>Every element you add to an interface takes attention away from everything else. Design is the management of attention.</p>
</blockquote>

<h2>Information hierarchy as an operational tool</h2>

<p>In B2B tools, which have occupied my last few years, UI is not an aesthetic choice — it is an operational one. A dispatcher who logs in in the morning to see which orders need attention cannot afford to spend time decoding a dashboard's structure.</p>

<p>Information hierarchy should reflect decision hierarchy:</p>

<ol>
  <li>What is urgent and needs action now?</li>
  <li>What is important but can wait until the afternoon?</li>
  <li>What is informational and requires no action?</li>
</ol>

<h2>What I avoid when designing tools for the freight sector</h2>

<h3>Status colours without a legend</h3>

<p>Red does not always mean "error." Green does not always mean "OK." If you use colour as the only carrier of information, you lose users with colour vision deficiencies and create a dependency on memorised context rather than the system.</p>

<h3>Confirmation modals for everything</h3>

<p>"Are you sure you want to do this?" — if you ask this every time, users stop reading and click OK automatically. A confirmation modal makes sense only when an action is truly irreversible and infrequent.</p>

<h2>Minimalism as an outcome, not a starting point</h2>

<p>Minimalism in UI is not a trend or a personal aesthetic preference. It is the result of very precisely removing everything that is not necessary. You cannot start from a blank page and add elements. You must start from a full page and remove things until it hurts.</p>

<p>And it does hurt. Because every removed feature is a conversation with someone who wanted it.</p>`,
      },
    },
  },
];

export type LocalizedPost = Omit<Post, "content"> & PostContent;

export function localizePosts(
  locale: "pl" | "en",
  items: Post[] = posts
): LocalizedPost[] {
  return items.map(({ content, ...rest }) => ({
    ...rest,
    ...content[locale],
  }));
}
