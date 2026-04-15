export type ProjectStatus = "live" | "in-progress" | "concept" | "coming-soon";

type ProjectContent = {
  name: string;
  shortDescription: string;
  longDescription: string;
};

export type Project = {
  slug: string;
  status: ProjectStatus;
  year: string;
  tags: string[];
  externalUrl?: string;
  featured?: boolean;
  logo?: string;
  content: { pl: ProjectContent; en: ProjectContent };
};

export const projects: Project[] = [
  {
    slug: "exportsy",
    status: "live",
    year: "2022",
    tags: ["TSL", "transport", "operacje"],
    externalUrl: "https://exportsy.pl",
    featured: true,
    logo: "/logos/exportsy.png",
    content: {
      pl: {
        name: "eXportsy",
        shortDescription:
          "Transport drogowy krajowy i międzynarodowy oraz pełna obsługa operacji spedycyjnej, od zlecenia przez dokumentację i przeprawy po rozliczenie.",
        longDescription:
          "Procesy zaprojektowane pod realną pracę zespołu, gdzie decyzje podejmowane są pod presją czasu.",
      },
      en: {
        name: "eXportsy",
        shortDescription:
          "Domestic and international road freight with full forwarding operations, from order through documentation and ferry crossings to settlement.",
        longDescription:
          "Processes designed for real team work, where decisions are made under time pressure.",
      },
    },
  },
  {
    slug: "outsourcing",
    status: "live",
    year: "2023",
    tags: ["TSL", "transport", "outsourcing"],
    externalUrl: "https://exportsy.pl/outsourcing",
    content: {
      pl: {
        name: "Outsourcing Spedycyjny",
        shortDescription:
          "Obsługa operacji spedycyjnych dla firm, które nie chcą lub nie mogą budować własnego działu transportu.",
        longDescription:
          "Zewnętrzny zespół działający jak wewnętrzny dział spedycji, bez kosztów stałych i ryzyka kadrowego.",
      },
      en: {
        name: "Forwarding Outsourcing",
        shortDescription:
          "Forwarding operations for companies that cannot or do not want to build their own transport department.",
        longDescription:
          "An external team acting as an in-house forwarding department, without fixed costs or staffing risk.",
      },
    },
  },
  {
    slug: "exstorage",
    status: "live",
    year: "2023",
    tags: ["TSL", "magazyn", "logistyka"],
    externalUrl: "https://exportsy.pl/magazyny",
    logo: "/logos/logo-exstorage.png",
    content: {
      pl: {
        name: "eXstorage",
        shortDescription:
          "Obsługa magazynowa i usługi fulfillment dla firm, które potrzebują elastycznego zaplecza logistycznego.",
        longDescription:
          "Magazynowanie i dystrybucja jako element łańcucha dostaw, bez konieczności własnej infrastruktury.",
      },
      en: {
        name: "eXstorage",
        shortDescription:
          "Warehousing and fulfilment services for companies that need flexible logistics capacity.",
        longDescription:
          "Storage and distribution as part of the supply chain, without the need for your own infrastructure.",
      },
    },
  },
  {
    slug: "exferry",
    status: "live",
    year: "2023",
    tags: ["TSL", "promy", "transport"],
    externalUrl: "https://exportsy.pl/exferry",
    logo: "/logos/logo-exferry.png",
    content: {
      pl: {
        name: "eXferry",
        shortDescription:
          "Kompleksowa obsługa przepraw promowych dla transportu drogowego, od rezerwacji przez dokumentację po koordynację.",
        longDescription:
          "Obsługa tras promowych jako element ciągłości łańcucha dostaw, nie dodatkowa komplikacja.",
      },
      en: {
        name: "eXferry",
        shortDescription:
          "Full ferry crossing management for road transport, from bookings through documentation to coordination.",
        longDescription:
          "Ferry routes handled as part of supply chain continuity, not an added complication.",
      },
    },
  },
  {
    slug: "excore",
    status: "live",
    year: "2026",
    tags: ["procesy", "operacje", "automatyzacja"],
    externalUrl: "https://excore.pl",
    featured: true,
    logo: "/logos/excore.svg",
    content: {
      pl: {
        name: "eXcore",
        shortDescription:
          "System porządkujący sposób pracy w firmie, od onboardingu przez procesy operacyjne po automatyzację codziennych decyzji.",
        longDescription:
          "Tworzony z myślą o zespołach, które urosły szybciej niż ich struktura i potrzebują spójnego modelu działania.",
      },
      en: {
        name: "eXcore",
        shortDescription:
          "A system that organises how a company works, from onboarding through operational processes to automating everyday decisions.",
        longDescription:
          "Built for teams that have grown faster than their structure and need a coherent operating model.",
      },
    },
  },
  {
    slug: "next-gen-tsl",
    status: "live",
    year: "2025",
    tags: ["edukacja", "networking", "branża"],
    externalUrl: "https://nextgentsl.com",
    featured: true,
    logo: "/logos/nextgentsl.png",
    content: {
      pl: {
        name: "NextGen TSL",
        shortDescription:
          "Stowarzyszenie łączące branżę TSL, skupione na rozwoju, wymianie doświadczeń i budowaniu lepszych standardów pracy.",
        longDescription:
          "Łączy operatorów, spedytorów i przedsiębiorców, którzy chcą działać świadomie, a nie przypadkowo.",
      },
      en: {
        name: "NextGen TSL",
        shortDescription:
          "An association connecting the TSL industry, focused on development, knowledge sharing, and building better working standards.",
        longDescription:
          "Connects operators, forwarders, and entrepreneurs who want to act deliberately rather than by chance.",
      },
    },
  },
  {
    slug: "ai-w-tsl",
    status: "live",
    year: "2025",
    tags: ["AI", "TSL", "gotowość"],
    externalUrl: "https://aiwtsl.excore.pl",
    logo: "/logos/aiwtsl.png",
    content: {
      pl: {
        name: "AI w TSL",
        shortDescription:
          "Test gotowości na AI dla firm z branży TSL, sprawdź, gdzie stoi Twoja organizacja zanim wdrożysz pierwsze narzędzie.",
        longDescription:
          "Firmy wdrażają AI bez diagnozy. Ten test pokazuje, co jest gotowe, a co blokuje realne efekty.",
      },
      en: {
        name: "AI in TSL",
        shortDescription:
          "An AI readiness test for TSL companies. Find out where your organisation stands before rolling out the first tool.",
        longDescription:
          "Companies deploy AI without any diagnosis. This test shows what is ready and what is blocking real results.",
      },
    },
  },
  {
    slug: "biznesowe-zlote",
    status: "live",
    year: "2025",
    tags: ["networking", "biznes", "spotkania"],
    externalUrl: "https://biznesowezloty.pl",
    logo: "/logos/biznesowezloty.png",
    content: {
      pl: {
        name: "Biznesowe Złote Motocyklowe",
        shortDescription:
          "Spotkania dla przedsiębiorców i właścicieli firm, skupione na wymianie doświadczeń i budowaniu relacji biznesowych.",
        longDescription:
          "Przestrzeń dla ludzi, którzy prowadzą firmy i chcą rozmawiać o tym, co naprawdę działa.",
      },
      en: {
        name: "Biznesowe Złote Motocyklowe",
        shortDescription:
          "Gatherings for entrepreneurs and business owners, focused on sharing experience and building business relationships.",
        longDescription:
          "A space for people who run companies and want to talk about what actually works.",
      },
    },
  },
  {
    slug: "cbtl",
    status: "live",
    year: "2026",
    featured: true,
    externalUrl: "https://www.cbtl.pl/",
    logo: "/logos/cbtl.svg",
    tags: ["dane", "weryfikacja", "B2B"],
    content: {
      pl: {
        name: "CBTL",
        shortDescription:
          "Narzędzie do weryfikacji i analizy podmiotów gospodarczych, wspierające podejmowanie decyzji operacyjnych.",
        longDescription:
          "Ogranicza ryzyko współpracy i daje szybki dostęp do danych, które w praktyce mają znaczenie.",
      },
      en: {
        name: "CBTL",
        shortDescription:
          "A tool for verifying and analysing business entities, supporting operational decision-making.",
        longDescription:
          "Reduces collaboration risk and provides fast access to data that matters in practice.",
      },
    },
  },
];

export type LocalizedProject = Omit<Project, "content"> & ProjectContent;

export function localizeProjects(
  locale: "pl" | "en",
  { featuredOnly }: { featuredOnly?: boolean } = {}
): LocalizedProject[] {
  const list = featuredOnly ? projects.filter((p) => p.featured) : projects;
  return list.map(({ content, ...rest }) => ({
    ...rest,
    ...content[locale],
  }));
}
