type PostContent = {
  title: string;
  excerpt: string;
  category: string;
  body: string; // HTML string, replace with MDX import when ready
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
          "Bootstrapping nie jest kompromisem. To wybór filozoficzny, który zmusza do myślenia o wartości od pierwszego dnia, i który często prowadzi do lepszych produktów.",
        category: "Produkt",
        body: `<p>Kiedy zaczynasz budować produkt bez zewnętrznego finansowania, pierwsza lekcja jest brutalna: nie masz luksusu błędu. Każda godzina pracy, każda decyzja architektoniczna, każde spotkanie z potencjalnym klientem musi mieć sens finansowy od pierwszego dnia.</p>

<p>To nie jest kompromis. To przewaga.</p>

<h2>Dlaczego bootstrapping zmienia myślenie</h2>

<p>Firmy wspierane przez inwestorów operują w logice wzrostu. Metryki, które mają znaczenie, to zasięg, liczba użytkowników, tempo pozyskiwania. Pieniądze są po to, żeby palić szybciej i docierać dalej.</p>

<p>W bootstrappingu metryki są inne: marża, powtarzalność, koszt pozyskania klienta versus wartość życiowa. Budujesz rzeczy, które zarabiają, nie rzeczy, które imponują.</p>

<blockquote>
  <p>Produkt, który generuje 3 000 złotych miesięcznie od pierwszego kwartału, jest więcej wart niż produkt, który "ma potencjał" przez dwa lata.</p>
</blockquote>

<h2>Trzy zasady, które sprawdziły się w praktyce</h2>

<h3>1. Najpierw problem, nie produkt</h3>

<p>Nie budujesz aplikacji. Budujesz rozwiązanie konkretnego problemu, za który ktoś jest gotowy zapłacić. Zanim napiszesz pierwszą linię kodu, upewnij się, że rozmawiałeś z przynajmniej dziesięcioma osobami, które ten problem mają, i że były gotowe powiedzieć, ile by za rozwiązanie zapłaciły.</p>

<h3>2. Zapomnij o MVP, buduj MBP (Minimum Billable Product)</h3>

<p>MVP to termin z krainy venture capital. W bootstrappingu masz budować coś, co można sprzedać, nie coś, co można zaprezentować. Minimum Billable Product to ta wersja produktu, za którą pierwszy klient zapłaci realną cenę, i od której możesz zacząć finansować dalszy rozwój.</p>

<h3>3. Kontrola kosztów to strategia, nie oszczędność</h3>

<p>Bootstrapping nie oznacza, że nie inwestujesz. Oznacza, że każda złotówka musi mieć zwrot. Możesz wydawać dużo, ale musisz wiedzieć, na co i dlaczego. Infrastruktura, narzędzia, czas zewnętrznych wykonawców, wszystko powinno być mierzalne.</p>

<h2>Co tracisz, a co zyskujesz</h2>

<p>Tracisz: szybkość w niektórych wymiarach, prestiż "z funduszem za plecami", możliwość popełniania drogich błędów bez natychmiastowych konsekwencji.</p>

<p>Zyskujesz: własność, stuprocentową, elastyczność decyzyjną, zdolność do pivotu bez komitetu, spokój operacyjny. I budowanie czegoś, co od początku musi działać, bo nie masz siatki bezpieczeństwa.</p>

<p>Po kilku latach budowania w tym modelu jestem przekonana, że dla branż z jasną logiką B2B i konkretnie zdefiniowanymi problemami, bootstrapping jest nie tylko możliwy, ale często mądrzejszy niż szukanie zewnętrznego finansowania.</p>`,
      },
      en: {
        title: "Building products without investors",
        excerpt:
          "Bootstrapping is not a compromise. It is a philosophical choice that forces you to think about value from day one, and it often leads to better products.",
        category: "Product",
        body: `<p>When you start building a product without external funding, the first lesson is brutal: you have no margin for error. Every working hour, every architectural decision, every meeting with a potential customer must make financial sense from day one.</p>

<p>That is not a compromise. It is an advantage.</p>

<h2>Why bootstrapping changes how you think</h2>

<p>Venture-backed companies operate in growth logic. The metrics that matter are reach, user counts, and acquisition velocity. Money exists to burn faster and go further.</p>

<p>In bootstrapping, the metrics are different: margin, repeatability, customer acquisition cost versus lifetime value. You build things that earn, not things that impress.</p>

<blockquote>
  <p>A product generating three thousand zlotys a month from its first quarter is worth more than a product with "potential" for two years.</p>
</blockquote>

<h2>Three principles that have worked in practice</h2>

<h3>1. Problem first, product second</h3>

<p>You are not building an application. You are building a solution to a specific problem someone will pay to solve. Before writing a single line of code, make sure you have spoken with at least ten people who have that problem, and that they were willing to say how much they would pay for a solution.</p>

<h3>2. Forget MVP, build an MBP (Minimum Billable Product)</h3>

<p>MVP is a term from the venture capital world. In bootstrapping, you build something you can sell, not something you can present. The Minimum Billable Product is the version your first customer will pay a real price for, and from which you can fund further development.</p>

<h3>3. Cost control is strategy, not frugality</h3>

<p>Bootstrapping does not mean you do not invest. It means every unit of money must have a return. You can spend a lot, but you need to know what for and why. Infrastructure, tools, contractor time, everything should be measurable.</p>

<h2>What you lose and what you gain</h2>

<p>You lose: speed in certain dimensions, the prestige of having a fund behind you, and the ability to make expensive mistakes without immediate consequences.</p>

<p>You gain: full ownership, decision-making flexibility, the ability to pivot without a committee, and operational calm. You are building something that must work from the start, because you have no safety net.</p>

<p>After several years of building this way, I am convinced that for industries with clear B2B logic and well-defined problems, bootstrapping is not only possible, it is often smarter than seeking external funding.</p>`,
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
          "Narzędzia AI są tylko tak dobre, jak procesy, które za nimi stoją. Najpierw napraw proces, potem go automatyzuj.",
        category: "Operacje",
        body: `<p>Każda firma, która zaczyna wdrażać AI i automatyzację, przeżywa ten sam moment: narzędzie działa. Wynik jest dobry. I natychmiast pojawia się pytanie, co dalej automatyzujemy?</p>

<p>To właśnie jest punkt, w którym firmy wpadają w chaos.</p>

<h2>Błąd nr 1: automatyzowanie przed procesem</h2>

<p>Narzędzia AI są neutralne. Mogą przyspieszyć zarówno dobry proces, jak i zły. Jeśli twój zespół spędza dwie godziny dziennie na ręcznym wprowadzaniu danych do arkuszy, a następnie te arkusze są niespójne i nikt nie wie, które są aktualne, automatyzacja tego procesu da ci szybki, nieaktualny chaos zamiast powolnego.</p>

<blockquote>
  <p>Najpierw napraw proces. Potem automatyzuj. Nigdy odwrotnie.</p>
</blockquote>

<h2>Gdzie zacząć? Mapa powtarzalności</h2>

<p>Prosta heurystyka: szukaj procesów, które spełniają trzy kryteria:</p>

<ul>
  <li>Powtarzają się minimum raz w tygodniu</li>
  <li>Mają jasno zdefiniowany input i oczekiwany output</li>
  <li>Błędy mają mierzalne konsekwencje, czas, pieniądze lub relacja z klientem</li>
</ul>

<p>W branży TSL to zwykle: generowanie ofert frachtowych, tworzenie dokumentacji celnej, odpowiadanie na zapytania o status przesyłki, kontrola faktur przewoźników.</p>

<h2>Model wdrożenia: małe pętle, duże efekty</h2>

<h3>Tydzień 1–2: identyfikacja</h3>

<p>Mapujesz procesy. Nie wdrażasz jeszcze nic. Rozmawiasz z zespołem, który te procesy wykonuje, i pytasz, co zajmuje im najwięcej czasu, a co robią automatycznie bez myślenia.</p>

<h3>Tydzień 3–4: pierwsza pętla</h3>

<p>Wybierasz jeden proces. Wdrażasz automatyzację dla 20% przypadków, tych najprostszych i najbardziej powtarzalnych. Mierzysz czas, jakość, liczbę interwencji ręcznych.</p>

<h3>Miesiąc 2–3: skalowanie</h3>

<p>Jeśli pierwsze wdrożenie działa, rozszerzasz zakres. Jeśli nie, naprawiasz. Nie przeskakujesz do kolejnego procesu, zanim ten jest ustabilizowany i zmierzony.</p>

<h2>Pułapka narzędziowa</h2>

<p>Rynek narzędzi AI rośnie szybciej niż zdolność firm do ich sensownego wdrażania. Co tydzień pojawia się nowa platforma, nowy agent, nowy "game changer".</p>

<p>Moja zasada: wybieram jedno narzędzie na jeden proces. Testuję je przez minimum dwa miesiące. Oceniam nie według liczby funkcji, ale według jednego pytania: czy mój zespół chce tego używać, czy musi?</p>

<p>Automatyzacja, której ludzie nienawidzą, nigdy nie przyniesie obiecanych rezultatów. Narzędzie musi zmniejszać tarcie, nie dodawać nowego.</p>`,
      },
      en: {
        title: "Automation without chaos",
        excerpt:
          "AI tools are only as good as the processes behind them. Fix the process first, then automate it.",
        category: "Operations",
        body: `<p>Every company that starts implementing AI and automation goes through the same moment: the tool works. The result is good. And immediately the question arises, what do we automate next?</p>

<p>That is exactly the point where companies fall into chaos.</p>

<h2>Mistake number one: automating before the process is ready</h2>

<p>AI tools are neutral. They can accelerate a good process just as easily as a bad one. If your team spends two hours a day manually entering data into spreadsheets, and those spreadsheets are inconsistent and nobody knows which ones are current, automating that process will give you fast, outdated chaos instead of slow chaos.</p>

<blockquote>
  <p>Fix the process first. Then automate it. Never the other way around.</p>
</blockquote>

<h2>Where to start: the repeatability map</h2>

<p>A simple heuristic: look for processes that meet three criteria:</p>

<ul>
  <li>They repeat at least once a week</li>
  <li>They have a clearly defined input and expected output</li>
  <li>Errors have measurable consequences, time, money, or a client relationship</li>
</ul>

<p>In the freight industry, this is usually: generating freight quotes, creating customs documentation, responding to shipment status inquiries, and checking carrier invoices.</p>

<h2>Implementation model: small loops, large effects</h2>

<h3>Weeks 1–2: identification</h3>

<p>Map your processes. Do not implement anything yet. Talk to the team performing these processes, ask what takes the most time and what they do on autopilot without thinking.</p>

<h3>Weeks 3–4: first loop</h3>

<p>Choose one process. Implement automation for 20% of cases, the simplest and most repetitive ones. Measure time, quality, and number of manual interventions.</p>

<h3>Months 2–3: scaling</h3>

<p>If the first implementation works, expand the scope. If not, fix it. Do not jump to the next process before the current one is stable and measured.</p>

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

<p>W narzędziach B2B, gdzie spędziłam ostatnie lata, UI nie jest estetycznym wyborem, to wybór operacyjny. Dyspozytor, który loguje się rano i ma zobaczyć, które zlecenia wymagają uwagi, nie może tracić czasu na odkodowywanie struktury dashboardu.</p>

<p>Hierarchia informacji powinna odzwierciedlać hierarchię decyzji:</p>

<ol>
  <li>Co jest pilne i wymaga akcji teraz?</li>
  <li>Co jest ważne, ale może poczekać do popołudnia?</li>
  <li>Co jest informacyjne i nie wymaga działania?</li>
</ol>

<h2>Czego unikam projektując narzędzia dla sektora TSL</h2>

<h3>Kolorów statusów bez legendy</h3>

<p>Czerwony nie zawsze znaczy "błąd". Zielony nie zawsze znaczy "OK". Jeśli używasz koloru jako jedynego nośnika informacji, tracisz użytkowników z deficytami widzenia kolorów i tworzysz zależność od zapamiętanego kontekstu zamiast od systemu.</p>

<h3>Modali potwierdzających wszystko</h3>

<p>"Czy na pewno chcesz to zrobić?", jeśli pytasz o to za każdym razem, użytkownicy przestają czytać i klikają OK automatycznie. Modal potwierdzenia ma sens tylko wtedy, gdy akcja jest naprawdę nieodwracalna i rzadka.</p>

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

<p>In B2B tools, which have occupied my last few years, UI is not an aesthetic choice, it is an operational one. A dispatcher who logs in in the morning to see which orders need attention cannot afford to spend time decoding a dashboard's structure.</p>

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

<p>"Are you sure you want to do this?", if you ask this every time, users stop reading and click OK automatically. A confirmation modal makes sense only when an action is truly irreversible and infrequent.</p>

<h2>Minimalism as an outcome, not a starting point</h2>

<p>Minimalism in UI is not a trend or a personal aesthetic preference. It is the result of very precisely removing everything that is not necessary. You cannot start from a blank page and add elements. You must start from a full page and remove things until it hurts.</p>

<p>And it does hurt. Because every removed feature is a conversation with someone who wanted it.</p>`,
      },
    },
  },
  {
    slug: "tachograf-g2-v2-w-busach-od-2026",
    date: "2026-01-15",
    readingTime: 6,
    tags: ["TSL", "Przepisy", "Transport"],
    published: true,
    featured: true,
    relatedSlugs: ["spedytor-2030-jak-zmieni-sie-praca-w-tsl", "marza-w-transporcie-dlaczego-5-to-nie-sukces"],
    content: {
      pl: {
        title: "Tachograf G2 V2 w busach od 2026, koszt czy szansa?",
        excerpt: "Od 1 lipca 2026 tachograf G2 V2 w busach do 3,5 t staje się obowiązkowy. Co to oznacza w praktyce i jak się przygotować?",
        category: "Prawo i regulacje",
        body: `<p>Jeżeli ktoś jeszcze liczy, że Bruksela przymknie oko, niech od razu odłoży tę kawę. Od 1 lipca 2026 r. każdy bus 2,5–3,5 t, który opuści kraj z ładunkiem, musi mieć tachograf G2 V2. Koniec, kropka. Ten sam pakiet aktów prawnych, który zmusił ciężarówki do wymiany urządzeń w 2024 i 2025 r., obejmuje w ostatnim etapie właśnie lekki transport międzynarodowy, bez znaczenia, czy pojazd jest świeżo z salonu, czy ma już pół miliona kilometrów na liczniku.</p>

<h2>Rynek, który wydaje się mały, ale wcale taki nie jest</h2>

<p>W statystykach Eurostatu busy wyglądają na mikroskopijny margines: pojazdy poniżej 10 t wypracowały raptem 0,3% unijnej pracy przewozowej w 2023 r. Sęk w tym, że 0,3% z tortu wartego 1 867 mld tkm to wciąż ponad 5 mld tkm, codziennie przewożone miliony paczek, części i leków. Polskie firmy, liderzy unijnej „drogówki", odpowiadają za ok. 368 mld tkm, czyli blisko jedną piątą całego wolumenu UE. Krótko mówiąc: jeśli my nie dowieziemy, zrobi to ktoś inny, pewnie za wyższą stawkę.</p>

<h2>Finansowy kubeł zimnej wody</h2>

<p>Na dziś komplet G2 V2 z montażem kosztuje 3,6–5,5 tys. zł netto. Przy rosnącym popycie wiosną 2026 ceny mogą spokojnie podskoczyć o kolejne 20–30%. Mandat za brak urządzenia i tak będzie wyższy, a pojazdu bez tachografu po prostu nie wpuszczą za granicę.</p>

<h2>3 scenariusze wdrożenia</h2>

<h3>1. Upgrade</h3>
<p>Masz licencję wspólnotową, stałych zleceniodawców i flotę w przyzwoitym stanie? Montujesz tachograf, szkolisz kierowców i wchodzisz na rynek z przewagą: jesteś zgodny, kiedy inni jeszcze się wahają.</p>

<h3>2. Domestic Pivot</h3>
<p>Rezygnujesz z UE, przerzucasz busy na dystrybucję krajową: e-commerce, farmację, chłodnie 2–8°C. Zero kosztu tachografu, ale weź pod uwagę niższe stawki i większą konkurencję firm kurierskich.</p>

<h3>3. Scale-up lub Joint Venture</h3>
<p>Łączysz siły z przewoźnikiem powyżej 3,5 t albo sprzedajesz busy i wskakujesz w ciężkie FTL-e. Kapitał i know-how są na wyciągnięcie ręki, ale trzeba zsynchronizować systemy TMS, dane i, ego wspólników.</p>

<h2>Co wydarzy się po 2026 roku?</h2>

<p>Między 2026 a 2030 r. spodziewam się trzech przetasowań: konsolidacji (powstaną 2–3 ogólnoeuropejskie sieci LCV), Tender 2.0 (klienci będą żądać surowych plików .DDD i śladu węglowego) oraz zielonych korytarzy (zestawy LZV na magistralach, busy na ostatnią milę, najlepiej elektryczne 4,25 t).</p>

<p>Najważniejsze słowo to czas. Warsztaty tachograficzne już dziś przyjmują rezerwacje na Q3 2025. Kto odłoży temat do wiosny 2026, będzie czekał w kolejce dłużej niż kierowca na wymianę opon w grudniu.</p>

<blockquote><p>1 lipca 2026 to nie data w Excelu, to linia startu albo meta. W TSL stagnacja to śmierć. Zmiana to szansa.</p></blockquote>`,
      },
      en: {
        title: "G2 V2 tachograph in vans from 2026, cost or opportunity?",
        excerpt: "From 1 July 2026, every 2.5–3.5 t van operating internationally must carry a G2 V2 intelligent tachograph. What this means in practice.",
        category: "Regulation",
        body: `<p>From 1 July 2026, every 2.5–3.5 t van crossing borders with cargo must carry a G2 V2 intelligent tachograph. The same legislative package that forced heavy trucks to upgrade in 2024 and 2025 now reaches light international transport, regardless of whether the vehicle just left the dealership or has half a million kilometres on the clock.</p>

<h2>A market that looks small but is not</h2>

<p>Eurostat figures make vans look like a footnote: sub-10 t vehicles accounted for just 0.3% of EU freight work in 2023. But 0.3% of a 1,867 billion tonne-kilometre pie is still over 5 billion tkm, millions of parcels, components, and medicines moved every single day. Polish carriers, leaders in EU road freight, account for roughly 368 billion tkm, nearly one fifth of total EU volume.</p>

<h2>Three implementation scenarios</h2>

<h3>Upgrade</h3>
<p>You have a Community licence, regular clients, and a fleet in decent shape. You install the tachograph, train drivers, and enter the market with an advantage: compliant while others still hesitate.</p>

<h3>Domestic Pivot</h3>
<p>You exit EU routes and shift vans to domestic distribution: e-commerce, pharma, 2–8°C cold chain. Zero tachograph cost, but accept lower rates and heavier competition from courier companies.</p>

<h3>Scale-up or Joint Venture</h3>
<p>You join forces with a carrier above 3.5 t or sell the vans and move into heavy FTL. Capital and know-how are within reach, but TMS systems, data, and partner egos need synchronising.</p>

<blockquote><p>1 July 2026 is not a date in a spreadsheet, it is a starting line or a finish line. In logistics, stagnation is death. Change is opportunity.</p></blockquote>`,
      },
    },
  },
  {
    slug: "marza-w-transporcie-dlaczego-5-to-nie-sukces",
    date: "2025-09-15",
    readingTime: 5,
    tags: ["TSL", "Finanse", "Spedycja"],
    published: true,
    featured: true,
    relatedSlugs: ["spedytor-2030-jak-zmieni-sie-praca-w-tsl", "przestepczosc-w-branzy-tsl"],
    content: {
      pl: {
        title: "Marża w transporcie, dlaczego 5% to nie sukces",
        excerpt: "W branży TSL od lat krąży hasło, że 5% marży to już coś. Sprawdzam, dlaczego ta logika niszczy firmy, i co z tym zrobić.",
        category: "Biznes",
        body: `<p>W branży transportowej i spedycyjnej od lat krąży hasło: „mamy 5% marży, jest okej". Spójrzmy na przykład: fracht za 1 000 euro, 5% marży, zostaje 50 euro. Niby coś. Ale z tych 50 euro trzeba pokryć koszty operacyjne, systemy TMS, księgowość, obsługę klienta, podatki, windykację i ryzyko reklamacji. A zlecenia z niską marżą to zazwyczaj te najtrudniejsze, z wyjątkami, niejasnościami i dodatkowymi telefonami.</p>

<h2>Rosnące koszty, malejąca przestrzeń</h2>

<p>Koszty w logistyce rosną: w 2025 roku płaca minimalna w Polsce wynosi 4 626 zł brutto, ubezpieczenia OC przewoźnika podrożały o 20%, rosną ceny systemów, audytów ESG i wymagań compliance. Klienci korporacyjni oczekują automatyzacji, integracji z giełdami transportowymi i szybkiej reakcji. To wszystko kosztuje. A tego nie udźwignie 5% marży w transporcie.</p>

<blockquote><p>Klient, który nie zostawia marży, to nie partner, to koszt. I lepiej go nie mieć, niż pracować na minusie, żyjąc w iluzji, że „przynajmniej coś się dzieje".</p></blockquote>

<h2>Strategia przetrwania to nie strategia</h2>

<p>Zdarza się, że firma świadomie rezygnuje z marży, by utrzymać klienta, wykorzystać pojazd, domknąć trudny tydzień. Ale to powinien być wyjątek. Jeśli transport działa na granicy opłacalności tylko po to, żeby „utrzymać wolumen", to nie jest sukces, to strategia przetrwania. A ta w dynamicznej logistyce 2025 roku po prostu nie wystarcza.</p>

<p>Bez marginesu stajesz się zakładnikiem klienta, który wie, że zrobisz wszystko, bo boisz się, że odejdzie. Zakładnikiem rynku, który przyspiesza szybciej, niż Ty się dostosowujesz. Jeden regres, pomyłka adresowa, brak dokumentu, i zysku z miesiąca nie ma.</p>

<h2>Co zamiast tego?</h2>

<p>Dobre firmy spedycyjne nie konkurują ceną, tylko jakością: przewidywalnością, terminowością, obsługą bez błędów. To wartość, którą klient widzi, ale tylko wtedy, gdy potrafisz ją policzyć, zakomunikować i wycenić.</p>

<p>Zacznij od konkretnych kroków:</p>
<ul>
  <li>Policz swój próg rentowności na poziomie zlecenia, nie firmy</li>
  <li>Przeanalizuj klientów, którzy generują zysk, którzy straty</li>
  <li>Sprawdź, które trasy i typy ładunków mają najwyższą marżę realną</li>
  <li>Podejmij decyzje, które zbudują firmę, zamiast balansować na krawędzi</li>
</ul>`,
      },
      en: {
        title: "Margin in transport, why 5% is not success",
        excerpt: "The freight industry has long accepted 5% margin as good enough. Here is why that logic destroys companies, and what to do instead.",
        category: "Business",
        body: `<p>The logistics industry has long operated on the belief that a 5% margin is acceptable. Take a simple example: freight worth 1,000 euros, 5% margin, fifty euros remain. But from those fifty euros you must cover operational costs, TMS systems, accounting, customer service, taxes, debt collection, and claims risk. Low-margin contracts are usually the most demanding ones.</p>

<h2>Rising costs, shrinking room</h2>

<p>Logistics costs are rising: minimum wage, carrier liability insurance (up 20%), compliance, ESG audits. Corporate clients expect automation and rapid response. None of this fits inside a 5% margin.</p>

<blockquote><p>A client who leaves no margin is not a partner, they are a cost. It is better not to have them than to work at a loss while believing that at least something is happening.</p></blockquote>

<h2>Survival is not a strategy</h2>

<p>Without margin you become a hostage, to a client who knows you will do anything, to a market that accelerates faster than you can adapt. One claim, one addressing error, one missing document, and a month's profit is gone.</p>

<p>Strong forwarding companies do not compete on price. They compete on predictability, punctuality, and error-free service. That value is visible to clients, but only when you can calculate, communicate, and price it. And that requires margin.</p>`,
      },
    },
  },
  {
    slug: "spedytor-2030-jak-zmieni-sie-praca-w-tsl",
    date: "2025-10-01",
    readingTime: 6,
    tags: ["TSL", "AI", "Przyszłość"],
    published: true,
    featured: true,
    relatedSlugs: ["marza-w-transporcie-dlaczego-5-to-nie-sukces", "tachograf-g2-v2-w-busach-od-2026"],
    content: {
      pl: {
        title: "Spedytor 2030, jak zmieni się praca w TSL?",
        excerpt: "Automatyzacja i AI zmieniają tradycyjną rolę spedytora. Spedytor 2030 to strateg, nie operator. Co musi umieć i jak się przygotować?",
        category: "Branża TSL",
        body: `<p>Branża TSL dynamicznie się zmienia, a zawód spedytora staje przed największą transformacją od dekad. Nie dlatego, że ludzie przestali być ważni, wręcz przeciwnie, nadal są kluczowi. Ale ich rola się zmienia. Automatyzacja, AI, big data i systemy TMS nowej generacji sprawiają, że ręczne klikanie i przepisywanie danych nie będzie wyznacznikiem kompetencji.</p>

<h2>AI nie odbierze Ci pracy. Ale ktoś, kto umie z niej korzystać, już może.</h2>

<p>To, co dziś robią agenci AI, analizowanie zapytań, dobieranie tras, optymalizacja kosztów, generowanie dokumentów, jeszcze kilka lat temu zajmowało spedytorowi kilka godzin dziennie. Teraz te czynności wykonują zautomatyzowane algorytmy w kilka sekund. Uber Freight wdrożył platformę zarządzającą zleceniami od A do Z bez udziału człowieka. Einride testuje autonomiczne ciężarówki po europejskich drogach.</p>

<p>Dodatkowo mamy ogromne braki kadrowe, setki tysięcy nieobsadzonych etatów w kierowcach i operatorach. Firmy nie mają wyboru, muszą automatyzować.</p>

<h2>Kim będzie spedytor 2030 roku?</h2>

<p>Nie „panem od Excela". Nie „dziewczyną od telefonów". Spedytor 2030 to operator systemów, analityk danych, menedżer ryzyka i doradca klienta w jednej osobie. Jego główne zadania:</p>

<ul>
  <li>Korzystanie z TMS nowej generacji (zintegrowanego z giełdami, flotą, OCR i AI)</li>
  <li>Rozumienie logiki agentów AI i umiejętność ich konfigurowania</li>
  <li>Analizowanie danych z dashboardów i wyciąganie wniosków operacyjnych</li>
  <li>Zarządzanie wyjątkami, sytuacjami, których algorytm nie ogarnie</li>
  <li>Łączenie wiedzy prawnej z praktyką spedycyjną</li>
</ul>

<h2>Co to oznacza dla firm?</h2>

<p>Model działania firm TSL musi się zmienić. Nie wystarczy już „więcej ludzi w operacji". Potrzeba nowych ról (operator AI, analityk procesów), inwestycji w systemy IT, szkoleń i transformacji kompetencyjnej, integracji procesów end-to-end.</p>

<blockquote><p>W erze AI nie wygra ten, kto ma najwięcej ludzi. Wygra ten, kto wie, jak najlepiej z nich, i z technologii, skorzystać.</p></blockquote>

<p>Firmy, które zignorują ten proces, pozostaną w tyle. Te, które potraktują go jako szansę, zbudują przewagę opartą na szybkości, precyzji i elastyczności.</p>`,
      },
      en: {
        title: "The freight forwarder of 2030, how TSL work will change",
        excerpt: "Automation and AI are transforming the traditional forwarder role. The forwarder of 2030 is a strategist, not an operator. What skills are needed?",
        category: "Industry",
        body: `<p>The freight industry is undergoing its greatest transformation in decades. The role is not disappearing, it is changing. Automation, AI, and next-generation TMS systems mean manual data entry will no longer define competence.</p>

<h2>AI will not take your job. But someone who knows how to use it might.</h2>

<p>Tasks that used to take a forwarder several hours daily, analysing inquiries, optimising routes, generating documents, are now executed by automated algorithms in seconds. Uber Freight manages orders end-to-end without human involvement. Einride is testing autonomous trucks on European roads.</p>

<h2>Who is the forwarder of 2030?</h2>

<p>Not "the Excel person." Not "the one who handles phone calls." The forwarder of 2030 is a systems operator, data analyst, risk manager, and client adviser in one. They configure AI agents, analyse dashboards, manage exceptions, and combine legal knowledge with operational practice.</p>

<blockquote><p>In the AI era, the winner is not the one with the most people. The winner is the one who knows best how to combine people and technology.</p></blockquote>`,
      },
    },
  },
  {
    slug: "przestepczosc-w-branzy-tsl",
    date: "2025-07-10",
    readingTime: 8,
    tags: ["TSL", "Bezpieczeństwo", "Compliance"],
    published: true,
    featured: false,
    relatedSlugs: ["marza-w-transporcie-dlaczego-5-to-nie-sukces", "spedytor-2030-jak-zmieni-sie-praca-w-tsl"],
    content: {
      pl: {
        title: "Przestępczość w branży TSL, jak nie paść ofiarą oszustwa?",
        excerpt: "Zorganizowana przestępczość w logistyce to nie odosobnione przypadki. Kradzieże ładunków, firmy-widma, szantaż przy rozładunku. Jak się bronić?",
        category: "Bezpieczeństwo",
        body: `<p>Za kulisami TSL coraz częściej pojawiają się ślady działalności zorganizowanych grup przestępczych operujących w kilku krajach jednocześnie. Nie są to lokalne incydenty, ale elementy większych siatek działających w oparciu o podrobione dokumenty, konta bankowe w rajach podatkowych i sieci firm-słupów. Europol i Eurojust od lat sygnalizują, że logistyka to jedno z głównych narzędzi prania pieniędzy.</p>

<h2>Klasyczny schemat działania</h2>

<p>Fikcyjna firma, często na podstawioną osobę. Strona internetowa sklonowana z legalnego przewoźnika. Niby wszystko gra: NIP, VAT, adres. Następnie pojazd, wynajęty, skradziony, przerobiony. Kierowca z dokumentami, które wyglądają wiarygodnie. Załadunek przebiega bezproblemowo. Po wyjeździe kontakt się urywa. Firma znika.</p>

<p>Jeden z przewoźników z Dolnego Śląska przyjął zlecenie na transport elektroniki do Belgii. Załadunek odbył się bez problemu. Kierowca podpisał dokumenty, ruszył w trasę, i zniknął. Po tygodniu okazało się, że dane firmy były sfałszowane, a strona skopiowana z innego przewoźnika. Ładunek warty 220 tysięcy euro przepadł.</p>

<h2>Double brokering i szantaż przy rozładunku</h2>

<p>Nowy wymiar ryzyka to tzw. double brokering: ładunek zlecony przewoźnikowi trafia do podwykonawcy, którego nikt nie zna i nie weryfikował. Coraz powszechniejsze jest też wymuszenie: „nie zapłacisz, to nie rozładujemy towaru". Przewoźnicy celowo przetrzymują ładunki na naczepach, narażając zleceniodawców na kary umowne i utratę kontraktów.</p>

<h2>Dlaczego to działa?</h2>

<p>Bo „byle wyjechało". Bo brak czasu, ludzi i narzędzi do rzetelnej weryfikacji. Bo giełda towarowa stała się wyrocznią wiarygodności. Sprawdzanie KRS-u czy adresu mailowego to wciąż egzotyka. A przecież to nie kwestia braku technologii, tylko kultury bezpieczeństwa.</p>

<blockquote><p>Słynne „zaufanie w branży" stało się piętą achillesową systemu. Za bardzo ufamy formatce w giełdzie, za mało ludziom po drugiej stronie ekranu.</p></blockquote>

<h2>Co zrobić w przypadku szantażu?</h2>

<p>Dokumentuj każdy kontakt, żądania i okoliczności. Działania polegające na blokowaniu rozładunku mogą nosić znamiona przestępstwa z art. 191 Kodeksu karnego (wymuszenie) lub art. 282 (utrudnianie dostępu do mienia). Zgłoś sprawę policji i prokuraturze. Czas działa na korzyść przestępcy, szybka i udokumentowana reakcja to klucz.</p>

<p>TSL to siła polskiej gospodarki, ale tylko wtedy, gdy działa świadomie i odpowiedzialnie. Przestępczość w branży TSL nie może być tematem tabu.</p>`,
      },
      en: {
        title: "Crime in the TSL industry, how to avoid becoming a victim",
        excerpt: "Organised crime in logistics is not isolated incidents. Cargo theft, ghost companies, extortion at unloading. How to protect yourself.",
        category: "Security",
        body: `<p>Behind the scenes of the freight industry, organised criminal networks operate across multiple countries simultaneously, fake documents, accounts in tax havens, networks of shell companies. Europol and Eurojust have long flagged logistics as a primary vehicle for money laundering.</p>

<h2>The classic scheme</h2>

<p>A fictitious company registered to a frontman. A website cloned from a legitimate carrier. Everything looks right: tax ID, VAT number, address. The vehicle is hired, stolen, or modified. The driver has convincing documentation. Loading goes smoothly. After departure, contact drops. The company vanishes. A carrier from Lower Silesia lost a load of electronics worth 220,000 euros this way.</p>

<h2>Double brokering and extortion</h2>

<p>A growing risk is double brokering: freight entrusted to a carrier ends up with an unverified subcontractor. Increasingly common is extortion: "pay extra or we will not unload." Carriers deliberately hold cargo on trailers, exposing clients to contractual penalties and lost contracts.</p>

<blockquote><p>The famous "trust in the industry" has become the system's Achilles heel. We trust the exchange platform too much, and the people on the other side of the screen too little.</p></blockquote>

<p>Freight crime cannot remain a taboo subject. Document everything, report incidents, and treat verification as a cost of doing business, not a luxury.</p>`,
      },
    },
  },
  {
    slug: "iso-w-branzy-tsl",
    date: "2024-03-15",
    readingTime: 3,
    tags: ["TSL", "ISO", "Certyfikacja"],
    published: true,
    featured: false,
    relatedSlugs: ["przestepczosc-w-branzy-tsl", "marza-w-transporcie-dlaczego-5-to-nie-sukces"],
    content: {
      pl: {
        title: "ISO w branży TSL, co oznacza certyfikat dla klientów i firm?",
        excerpt: "Normy ISO w transporcie i logistyce to dziś coraz częściej czynnik decyzyjny przy wyborze partnera. Co warto wiedzieć o ISO 9001 i ISO 28000?",
        category: "Branża TSL",
        body: `<p>Normy ISO stanowią kluczowy element w świecie transportu, spedycji i logistyki. Wdrożenie systemów zarządzania jest dobrowolne, jednak coraz częściej posiadanie certyfikatu to jeden z czynników, który decyduje o podjęciu współpracy z firmą.</p>

<h2>ISO 9001, zarządzanie jakością</h2>

<p>Certyfikat ISO 9001 potwierdza, że firma spełnia najwyższe standardy zarządzania jakością, skutecznie wyeliminowała lub ograniczyła sytuacje kryzysowe oraz stale podnosi jakość świadczonych usług. To gwarancja, że organizacja skupia się na ciągłym doskonaleniu i spełnianiu oczekiwań klienta.</p>

<p>Dla klientów oznacza to w praktyce: przewidywalność, powtarzalność procesów i mniejsze ryzyko błędów operacyjnych.</p>

<h2>ISO 28000, bezpieczeństwo łańcucha dostaw</h2>

<p>ISO 28000 to norma dotycząca bezpieczeństwa i integralności dostaw. Firma z tym certyfikatem obniżyła ryzyko wystąpienia sytuacji awaryjnych, zwiększyła skuteczność działań prewencyjnych i jest godnym zaufania partnerem biznesowym.</p>

<p>W dzisiejszym świecie, gdzie bezpieczeństwo łańcucha dostaw staje się coraz ważniejsze, certyfikacja ISO 28000 to pewność, że produkty klientów są bezpieczne w całym procesie logistycznym.</p>

<h2>Dlaczego to ważne dla Twojej firmy?</h2>

<ul>
  <li>Gwarancja jakości i bezpieczeństwa potwierdzana zewnętrznym audytem</li>
  <li>Zwiększenie zaufania klientów i kontrahentów</li>
  <li>Zdolność do uczestnictwa w międzynarodowych przetargach</li>
  <li>Efektywniejsze procesy wewnętrzne i niższe koszty operacyjne</li>
  <li>Wzrost zadowolenia klientów mierzony wskaźnikami</li>
</ul>

<p>Certyfikacja ISO to nie tylko zgodność z normami, to przede wszystkim zobowiązanie do ciągłego doskonalenia i podnoszenia jakości usług.</p>`,
      },
      en: {
        title: "ISO in the TSL industry, what certification means for clients and companies",
        excerpt: "ISO standards in transport and logistics are increasingly a deciding factor when choosing a business partner. What to know about ISO 9001 and ISO 28000.",
        category: "Industry",
        body: `<p>ISO standards are a key element in the world of transport, forwarding, and logistics. Implementation is voluntary, but increasingly a certification is one of the factors that determines whether a business partnership is formed.</p>

<h2>ISO 9001, quality management</h2>

<p>ISO 9001 certification confirms that a company meets the highest quality management standards, has effectively reduced crisis situations, and continuously improves its services. It is a guarantee that the organisation focuses on continuous improvement and meeting client expectations.</p>

<h2>ISO 28000, supply chain security</h2>

<p>ISO 28000 concerns the security and integrity of supply chains. A certified company has reduced the risk of incidents, improved prevention, and is a trustworthy business partner. As supply chain security becomes increasingly critical, this certification provides assurance that client goods are protected throughout the logistics process.</p>

<h2>Why it matters</h2>

<ul>
  <li>Quality and security guaranteed by external audit</li>
  <li>Increased trust from clients and counterparties</li>
  <li>Eligibility for international tenders</li>
  <li>More efficient internal processes and lower operational costs</li>
</ul>

<p>ISO certification is not just about compliance, it is a commitment to continuous improvement.</p>`,
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
