export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: number;
  category: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  externalUrl?: string;
};

export const articles: Article[] = [
  {
    slug: "automatyzacja-dokumentacji-w-tsl",
    title: "Jak automatyzacja dokumentacji zmienia operacje spedycyjne",
    excerpt:
      "CMR, faktura, zgłoszenie celne — trzy dokumenty, które w klasycznym modelu zajmują 40 minut na jedną przesyłkę. Jak skrócić to do 4.",
    date: "2025-12-03",
    readingTime: 7,
    category: "Logistyka",
    tags: ["TSL", "Automatyzacja", "AI"],
    featured: true,
    published: true,
  },
  {
    slug: "energia-dla-operatorow-logistycznych",
    title: "Energetyka jako element operacji logistycznej",
    excerpt:
      "Magazyny zużywają więcej energii niż zakłady produkcyjne. Dlaczego strategie energetyczne w logistyce wciąż są reaktywne, nie planowane.",
    date: "2025-11-18",
    readingTime: 6,
    category: "Energetyka",
    tags: ["OZE", "Logistyka", "Koszty"],
    featured: true,
    published: true,
  },
  {
    slug: "jak-budowac-produkty-bez-inwestora",
    title: "Bootstrapping produktów B2B — bez inwestora, z dyscypliną",
    excerpt:
      "Brak zewnętrznego finansowania zmusza do myślenia o wartości od pierwszego dnia. To nie ograniczenie — to przewaga operacyjna.",
    date: "2025-11-10",
    readingTime: 6,
    category: "Produkt",
    tags: ["Bootstrapping", "B2B", "Produkt"],
    featured: true,
    published: true,
  },
  {
    slug: "automatyzacja-bez-chaosu",
    title: "Automatyzacja bez chaosu",
    excerpt:
      "Narzędzia AI i no-code są tylko tak dobre, jak procesy, które za nimi stoją. Najpierw proces, potem automatyzacja.",
    date: "2025-10-22",
    readingTime: 5,
    category: "Operacje",
    tags: ["Automatyzacja", "Procesy"],
    featured: false,
    published: true,
  },
  {
    slug: "ui-ktore-nie-krzyczy",
    title: "UI, które nie krzyczy",
    excerpt:
      "Dobry interfejs działa jak dobrze napisana umowa — jest jasny, precyzyjny i nie wymaga tłumaczenia.",
    date: "2025-09-08",
    readingTime: 4,
    category: "Design",
    tags: ["Design", "Produkt"],
    featured: false,
    published: true,
  },
];
