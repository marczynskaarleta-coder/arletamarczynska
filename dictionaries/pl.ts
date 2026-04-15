export const dict = {
  meta: {
    homeTitle: "Arleta Marczynska — Founder & Operator",
    homeDescription:
      "Operator, founder i strateg. Buduję systemy i produkty cyfrowe dla logistyki, technologii i rynków regulowanych.",
  },
  nav: {
    projects: "Projekty",
    blog: "Artykuły",
    contact: "Kontakt",
    newsletter: "Newsletter",
    switchTo: "EN",
  },
  hero: {
    roleLabel: "Founder & Operator",
    headline: "Buduję systemy, które działają.",
    subheadline:
      "Operator, founder i strateg. Projektuję procesy, produkty cyfrowe i struktury biznesowe dla sektorów, gdzie błędy kosztują realnie.",
    ctaProjects: "Zobacz projekty",
    ctaNewsletter: "Dołącz do newslettera",
    scrollHint: "Przewiń",
  },
  about: {
    sectionLabel: "Kim jestem",
    statement:
      "Łączę myślenie systemowe z egzekucją operacyjną. Działam tam, gdzie procesy muszą być niezawodne, a błędy kosztują realnie.",
    bio: "Pracuję na styku technologii, operacji i rynków regulowanych. Moje projekty łączą automatyzację procesów, dane biznesowe i narzędzia AI z twardą logiką branżową.",
    areasLabel: "Obszary działania",
    areas: [
      {
        id: "logistics",
        label: "Logistyka i TSL",
        description:
          "Optymalizacja procesów spedycyjnych, dokumentacji i compliance w transporcie krajowym i międzynarodowym.",
      },
      {
        id: "ai-processes",
        label: "AI i automatyzacja",
        description:
          "Wdrożenia narzędzi AI w operacjach biznesowych. Automatyzacja dokumentacji, raportowania i decyzji operacyjnych.",
      },
      {
        id: "digital-products",
        label: "Produkty cyfrowe",
        description:
          "Projektowanie i budowanie SaaS, platform B2B i narzędzi wewnętrznych od konceptu do produkcji.",
      },
      {
        id: "data-intelligence",
        label: "Dane i wywiad biznesowy",
        description:
          "Bazy danych podmiotów gospodarczych, weryfikacja, monitoring i lead intelligence dla rynku B2B.",
      },
    ],
  },
  projects: {
    sectionLabel: "Projekty",
    viewAll: "Wszystkie projekty",
    visitLabel: "Odwiedź",
    soonLabel: "Wkrótce",
  },
  articles: {
    sectionLabel: "Publikacje",
    viewAll: "Wszystkie artykuły",
    readLabel: "Czytaj",
  },
  newsletter: {
    sectionLabel: "Newsletter",
    heading: "Operacje, produkty i technologia — raz na jakiś czas.",
    body: "Bez szumu, bez cotygodniowego spamu. Piszę wtedy, gdy mam coś konkretnego do powiedzenia o logistyce, AI lub budowaniu produktów.",
    emailLabel: "Adres email",
    emailPlaceholder: "twoj@email.pl",
    submitLabel: "Zapisz się",
    submittingLabel: "Wysyłam...",
    successMessage: "Gotowe — jesteś na liście.",
    successBody: "Odezwę się, gdy będzie co powiedzieć.",
    errorMessage: "Coś poszło nie tak. Spróbuj ponownie.",
    privacyNote:
      "Bez spamu. Wypisz się w każdej chwili. Twoje dane nie trafiają do zewnętrznych systemów reklamowych.",
  },
  contact: {
    sectionLabel: "Kontakt",
    heading: "Masz projekt do omówienia?",
    emailLabel: "Email",
  },
  footer: {
    role: "Founder & Operator",
    copyright: "Wszelkie prawa zastrzeżone",
  },
  badges: {
    live: "Live",
    inProgress: "W trakcie",
    concept: "Koncepcja",
  },
  common: {
    minutesRead: "min czytania",
    backToBlog: "← Artykuły",
    backToHome: "← Wróć na stronę główną",
  },
  projectsPage: {
    breadcrumb: "Portfolio",
    heading: "Projekty, które buduję.",
    visitLabel: "Odwiedź",
    soonLabel: "Wkrótce",
  },
  blogPage: {
    breadcrumb: "Piszę o tym, co buduję",
    heading: "Artykuły i notatki.",
  },
  contactPage: {
    breadcrumb: "Kontakt",
    heading: "Porozmawiajmy o tym, co chcesz zbudować.",
    description:
      "Jestem dostępna w sprawach współpracy produktowej, konsultacji operacyjnych oraz ciekawych projektów na styku technologii i biznesu.",
    replyTime: "Odpowiadam zwykle w ciągu 24–48 godzin.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    formNameLabel: "Imię i nazwisko",
    formNamePlaceholder: "Jan Kowalski",
    formEmailLabel: "Email",
    formEmailPlaceholder: "jan@firma.pl",
    formMessageLabel: "Wiadomość",
    formMessagePlaceholder:
      "Opisz krótko, czym się zajmujesz i czego szukasz...",
    formSubmitLabel: "Wyślij wiadomość",
    formNote:
      "Formularz otwiera domyślnego klienta pocztowego. Możesz też napisać bezpośrednio na adres powyżej.",
  },
  notFound: {
    label: "404",
    heading: "Nie ma tu nic.",
    body: "Strona, której szukasz, nie istnieje lub została przeniesiona.",
    cta: "← Wróć na stronę główną",
  },
};

export type Dict = typeof dict;
