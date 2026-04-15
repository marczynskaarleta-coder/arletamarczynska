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
  content: { pl: ProjectContent; en: ProjectContent };
};

export const projects: Project[] = [
  {
    slug: "exportsy",
    status: "live",
    year: "2022",
    tags: ["TSL", "transport", "operacje"],
    externalUrl: "https://exportsy.pl",
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
    slug: "excore",
    status: "live",
    year: "2026",
    tags: ["procesy", "operacje", "automatyzacja"],
    externalUrl: "https://excore.pl",
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
    slug: "cbtl",
    status: "coming-soon",
    year: "2026",
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

export function localizeProjects(locale: "pl" | "en"): LocalizedProject[] {
  return projects.map(({ content, ...rest }) => ({
    ...rest,
    ...content[locale],
  }));
}
