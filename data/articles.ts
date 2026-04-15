type ArticleContent = {
  title: string;
  excerpt: string;
  category: string;
};

export type Article = {
  slug: string;
  date: string;
  readingTime: number;
  tags: string[];
  featured: boolean;
  published: boolean;
  externalUrl: string;
  source: "linkedin" | "exportsy" | "truckbiznes" | "logistyka";
  content: { pl: ArticleContent; en: ArticleContent };
};

export const articles: Article[] = [
  {
    slug: "kim-jest-spedytor-2030",
    date: "2025-10-01",
    readingTime: 6,
    tags: ["TSL", "Futures", "AI"],
    featured: true,
    published: true,
    externalUrl: "https://linkedin.com/pulse/kim-jest-spedytor-2030-roku-arleta-marczy%c5%84ska-xiraf",
    source: "linkedin",
    content: {
      pl: {
        title: "Kim jest spedytor 2030 roku?",
        excerpt:
          "Automatyzacja i AI zmieniają tradycyjną rolę spedytora. Jak wyglądać będzie ten zawód za pięć lat — i co oznacza to dla firm TSL?",
        category: "Branża TSL",
      },
      en: {
        title: "Who is the freight forwarder of 2030?",
        excerpt:
          "Automation and AI are transforming the traditional forwarder role. What will this profession look like in five years — and what does it mean for logistics companies?",
        category: "Industry",
      },
    },
  },
  {
    slug: "marza-5-procent-samobojstwo",
    date: "2025-09-15",
    readingTime: 5,
    tags: ["TSL", "Biznes", "Marże"],
    featured: true,
    published: true,
    externalUrl: "https://www.linkedin.com/pulse/dlaczego-zlecenie-z-5-mar%C5%BCy-nie-sukces-tylko-na-raty-marczy%C5%84ska-a25pf",
    source: "linkedin",
    content: {
      pl: {
        title: "Dlaczego zlecenie z 5% marży to nie sukces, tylko samobójstwo na raty?",
        excerpt:
          "Niska marża w zleceniach TSL to nie strategia przetrwania — to powolna likwidacja. Dlaczego polskie firmy spedycyjne nadal tak pracują?",
        category: "Biznes",
      },
      en: {
        title: "Why a 5% margin contract is not success — it's slow suicide",
        excerpt:
          "Low-margin contracts in freight are not a survival strategy — they're slow liquidation. Why Polish logistics companies still operate this way.",
        category: "Business",
      },
    },
  },
  {
    slug: "nowe-technologie-w-logistyce",
    date: "2025-10-01",
    readingTime: 5,
    tags: ["AI", "TSL", "Technologia"],
    featured: true,
    published: true,
    externalUrl: "https://www.logistykaimagazynowanie.pl",
    source: "logistyka",
    content: {
      pl: {
        title: "Nowe technologie w logistyce",
        excerpt: "AI przestała być futurystyczną ciekawostką, a stała się fundamentem nowoczesnej logistyki. O centralnym magazynie danych, IoT i analizach predykcyjnych.",
        category: "Technologia",
      },
      en: {
        title: "New technologies in logistics",
        excerpt: "AI is no longer a futuristic curiosity but the foundation of modern logistics. On central data warehouses, IoT, and predictive analytics.",
        category: "Technology",
      },
    },
  },
  {
    slug: "inteligentne-magazyny-energii",
    date: "2025-10-01",
    readingTime: 4,
    tags: ["Energia", "Technologia", "Logistyka"],
    featured: false,
    published: true,
    externalUrl: "https://www.logistykaimagazynowanie.pl",
    source: "logistyka",
    content: {
      pl: {
        title: "Inteligentne magazyny energii",
        excerpt: "W świecie rosnących cen energii i przeciążeń sieci, inteligentne systemy zarządzania energią stają się kluczowe dla ciągłości operacji.",
        category: "Technologia",
      },
      en: {
        title: "Intelligent energy storage",
        excerpt: "With rising energy costs and grid strain, intelligent energy management systems are becoming essential for operational continuity.",
        category: "Technology",
      },
    },
  },
  {
    slug: "tachografy-w-busach-rewolucja-na-drodze",
    date: "2025-08-01",
    readingTime: 5,
    tags: ["TSL", "Tachografy", "Regulacje"],
    featured: true,
    published: true,
    externalUrl: "https://truckbiznes.pl/wydania/truck-biznes-4-2025/",
    source: "truckbiznes",
    content: {
      pl: {
        title: "Tachografy w busach: rewolucja na drodze",
        excerpt: "Od 1 lipca 2026 r. każdy bus 2,5–3,5 t wyjeżdżający za granicę z ładunkiem musi mieć tachograf G2 V2. Bez wyjątku, bez taryfy ulgowej.",
        category: "Regulacje",
      },
      en: {
        title: "Tachographs in vans: a road revolution",
        excerpt: "From 1 July 2026, every 2.5–3.5 t van crossing borders with cargo must carry a G2 V2 tachograph. No exceptions, no grace period.",
        category: "Regulation",
      },
    },
  },
  {
    slug: "miedzy-przetrwaniem-a-wspolpraca",
    date: "2025-11-01",
    readingTime: 5,
    tags: ["TSL", "Współpraca", "Zarządzanie"],
    featured: true,
    published: true,
    externalUrl: "https://truckbiznes.pl/wp-content/uploads/2025/11/TruckBiznes_2025_06.pdf",
    source: "truckbiznes",
    content: {
      pl: {
        title: "Między przetrwaniem a współpracą",
        excerpt: "O tym, jak w branży opartej na presji i czasie budować współpracę, która działa także w trudnych momentach, a nie tylko wtedy, gdy jest spokojnie.",
        category: "Branża TSL",
      },
      en: {
        title: "Between survival and collaboration",
        excerpt: "On building partnerships in a pressure-driven, time-sensitive industry that hold up not just in easy times, but when things get hard.",
        category: "Industry",
      },
    },
  },
  {
    slug: "sztuczna-inteligencja-na-kolach",
    date: "2025-08-20",
    readingTime: 7,
    tags: ["AI", "TSL", "Technologia"],
    featured: true,
    published: true,
    externalUrl: "https://truckbiznes.pl/wydania/truck-biznes-4-2025/",
    source: "truckbiznes",
    content: {
      pl: {
        title: "Sztuczna inteligencja na kołach",
        excerpt:
          "AI w TSL — od optymalizacji tras po autonomiczne pojazdy. Co jest już dziś wdrażane, a co pozostaje marketingowym szumem?",
        category: "Technologia",
      },
      en: {
        title: "Artificial intelligence on wheels",
        excerpt:
          "AI in freight and logistics — from route optimisation to autonomous vehicles. What is being deployed today, and what remains marketing noise?",
        category: "Technology",
      },
    },
  },
  {
    slug: "oszustwa-w-branzy-tsl",
    date: "2025-07-10",
    readingTime: 8,
    tags: ["TSL", "Bezpieczeństwo", "Compliance"],
    featured: false,
    published: true,
    externalUrl: "https://linkedin.com/pulse/oszustwa-w-bran%c5%bcy-tsl-arleta-marczy%c5%84ska-jt8uf",
    source: "linkedin",
    content: {
      pl: {
        title: "Oszustwa w branży TSL",
        excerpt:
          "Zorganizowana przestępczość w logistyce — kradzieże ładunków, fałszywi operatorzy i wymuszenia. Jak się przed tym chronić?",
        category: "Bezpieczeństwo",
      },
      en: {
        title: "Fraud in the TSL industry",
        excerpt:
          "Organised crime in logistics — cargo theft, fraudulent operators, and extortion schemes. How to protect your business.",
        category: "Security",
      },
    },
  },
  {
    slug: "llm-speak",
    date: "2025-11-20",
    readingTime: 4,
    tags: ["AI", "Język", "Technologia"],
    featured: false,
    published: true,
    externalUrl: "https://www.linkedin.com/pulse/llm-speak-kiedy-ludzie-zaczynaj%C4%85-brzmie%C4%87-jak-maszyny-marczy%C5%84ska-kgsbf",
    source: "linkedin",
    content: {
      pl: {
        title: "LLM-speak: kiedy ludzie zaczynają brzmieć jak maszyny",
        excerpt:
          "Coraz więcej tekstów brzmi tak samo — gładko, pusto i przewidywalnie. Co dzieje się z ludzkim językiem w epoce modeli językowych?",
        category: "AI",
      },
      en: {
        title: "LLM-speak: when people start sounding like machines",
        excerpt:
          "More and more writing sounds identical — smooth, empty, predictable. What is happening to human language in the age of language models?",
        category: "AI",
      },
    },
  },
  {
    slug: "zmiany-prawne-tsl-2026",
    date: "2026-04-09",
    readingTime: 6,
    tags: ["Prawo", "TSL", "Regulacje"],
    featured: false,
    published: true,
    externalUrl: "https://exportsy.pl/blog/zmiany-prawne-w-branzy-tsl-w-2026-roku",
    source: "exportsy",
    content: {
      pl: {
        title: "Zmiany prawne w branży TSL w 2026 roku",
        excerpt:
          "Co zmienia się w logistyce międzynarodowej — system ELO, CBAM i ich wpływ na operacje spedycyjne.",
        category: "Prawo",
      },
      en: {
        title: "Legal changes in TSL 2026",
        excerpt:
          "What's changing in international logistics — the ELO system, CBAM, and their impact on freight operations.",
        category: "Regulation",
      },
    },
  },
  {
    slug: "bezpieczenstwo-w-logistyce",
    date: "2026-03-11",
    readingTime: 5,
    tags: ["Bezpieczeństwo", "TSL", "Operacje"],
    featured: false,
    published: true,
    externalUrl: "https://exportsy.pl/blog/bezpieczenstwo-w-logistyce",
    source: "exportsy",
    content: {
      pl: {
        title: "Bezpieczeństwo w logistyce — nowe wyzwania dla branży TSL",
        excerpt:
          "Ocena współczesnych zagrożeń bezpieczeństwa w europejskim transporcie i logistyce.",
        category: "Bezpieczeństwo",
      },
      en: {
        title: "Security in logistics — new challenges for TSL",
        excerpt:
          "An assessment of contemporary security risks affecting European transport and logistics operations.",
        category: "Security",
      },
    },
  },
  {
    slug: "pakiet-mobilnosci-2026",
    date: "2026-01-15",
    readingTime: 5,
    tags: ["Regulacje", "Tachografy", "TSL"],
    featured: false,
    published: true,
    externalUrl: "https://www.linkedin.com/pulse/pakiet-mobilno%C5%9Bci-2026-tachograf-g2-v2-w-busach-koszt-marczy%C5%84ska-twtef",
    source: "linkedin",
    content: {
      pl: {
        title: "Pakiet Mobilności 2026: Tachograf G2 V2 w busach",
        excerpt:
          "Czy obowiązek instalacji inteligentnego tachografu od 1 lipca 2026 to koszt czy katalizator zysków?",
        category: "Regulacje",
      },
      en: {
        title: "Mobility Package 2026: G2 V2 tachograph in minibuses",
        excerpt:
          "Does the mandatory intelligent tachograph installation from July 1, 2026 represent a cost or a profit catalyst?",
        category: "Regulation",
      },
    },
  },
];

export type LocalizedArticle = Omit<Article, "content"> & ArticleContent;

export function localizeArticles(
  locale: "pl" | "en",
  items: Article[] = articles
): LocalizedArticle[] {
  return items.map(({ content, ...rest }) => ({
    ...rest,
    ...content[locale],
  }));
}
