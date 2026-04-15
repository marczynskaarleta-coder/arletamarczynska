export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: number;
  tags: string[];
  published: boolean;
};

// Placeholder posts -- replace with MDX or CMS integration later
export const posts: Post[] = [
  {
    slug: "jak-budowac-produkty-bez-inwestora",
    title: "Jak budowac produkty bez inwestora",
    excerpt:
      "Bootstrapping nie jest kompromisem. To wybor filozoficzny, ktory zmusza do myslenia o wartosci od pierwszego dnia.",
    date: "2025-11-10",
    readingTime: 6,
    tags: ["Produkt", "Bootstrapping"],
    published: true,
  },
  {
    slug: "automatyzacja-bez-chaosu",
    title: "Automatyzacja bez chaosu",
    excerpt:
      "Narzedzia AI i no-code sa tylko tak dobre, jak procesy, ktore za nimi stoja. Najpierw proces, potem automatyzacja.",
    date: "2025-10-22",
    readingTime: 5,
    tags: ["Automatyzacja", "Operacje"],
    published: true,
  },
  {
    slug: "ui-ktore-nie-krzyczty",
    title: "UI, ktore nie krzyczy",
    excerpt:
      "Dobry interfejs dziala jak dobrze napisana umowa -- jest jasny, precyzyjny i nie wymaga tlumaczenia.",
    date: "2025-09-08",
    readingTime: 4,
    tags: ["Design", "Produkt"],
    published: true,
  },
];
