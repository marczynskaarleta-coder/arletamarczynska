export type ProjectStatus = "live" | "in-progress" | "concept" | "coming-soon";
export type ProjectCategory = "SaaS" | "AI" | "Dane" | "Community";

type ProjectContent = {
  name: string;
  description: string;
};

export type PillarProject = {
  slug: string;
  status: ProjectStatus;
  externalUrl?: string;
  content: { pl: ProjectContent; en: ProjectContent };
};

type PillarContent = {
  title: string;
  intro: string;
};

export type Pillar = {
  id: string;
  number: string;
  content: { pl: PillarContent; en: PillarContent };
  projects: PillarProject[];
};

export const pillars: Pillar[] = [
  {
    id: "logistics",
    number: "01",
    content: {
      pl: {
        title: "Logistyka i Operacje",
        intro:
          "Systemy i usługi dla firm działających w transporcie krajowym i międzynarodowym. Od automatyzacji dokumentacji eksportowej po zarządzanie magazynem i outsourcing całych operacji logistycznych.",
      },
      en: {
        title: "Logistics & Operations",
        intro:
          "Systems and services for companies operating in domestic and international freight. From export documentation automation to warehouse management and full logistics operations outsourcing.",
      },
    },
    projects: [
      {
        slug: "exportsy",
        status: "live",
        externalUrl: "https://exportsy.pl",
        content: {
          pl: {
            name: "Exportsy",
            description:
              "System operacyjny dla firm eksportowych. Automatyzacja dokumentacji, kontrola kosztów i compliance w jednym miejscu.",
          },
          en: {
            name: "Exportsy",
            description:
              "Operating system for export companies. Document automation, cost control, and compliance in one place.",
          },
        },
      },
      {
        slug: "exferry",
        status: "in-progress",
        content: {
          pl: {
            name: "Exferry",
            description:
              "Platforma do zarządzania zleceniami transportu promowego — rezerwacje, dokumentacja, optymalizacja tras.",
          },
          en: {
            name: "Exferry",
            description:
              "Ferry freight management platform — bookings, documentation, and route optimisation.",
          },
        },
      },
      {
        slug: "exstorage",
        status: "in-progress",
        content: {
          pl: {
            name: "Exstorage",
            description:
              "WMS dla operatorów logistycznych i firm 3PL. Przyjęcia, wydania, inwentaryzacja i integracje z systemami partnerów.",
          },
          en: {
            name: "Exstorage",
            description:
              "WMS for logistics operators and 3PL providers. Inbound, outbound, inventory, and partner system integrations.",
          },
        },
      },
      {
        slug: "outsourcing-logistyczny",
        status: "concept",
        content: {
          pl: {
            name: "Outsourcing Logistyczny",
            description:
              "Kompleksowa obsługa operacji logistycznych dla firm bez własnego działu TSL. Od spedycji po magazyn.",
          },
          en: {
            name: "Logistics Outsourcing",
            description:
              "End-to-end logistics operations for companies without an in-house freight team. From forwarding to warehousing.",
          },
        },
      },
    ],
  },
  {
    id: "digital",
    number: "02",
    content: {
      pl: {
        title: "IT i Systemy Cyfrowe",
        intro:
          "Technologia, która stoi za ekosystemem eX* i obsługuje procesy branży TSL. Automatyzacja, AI, portale klienta i integracje między systemami.",
      },
      en: {
        title: "IT & Digital Solutions",
        intro:
          "The technology powering the eX* ecosystem and freight industry processes. Automation, AI, client portals, and system integrations.",
      },
    },
    projects: [
      {
        slug: "excore",
        status: "in-progress",
        content: {
          pl: {
            name: "Excore",
            description:
              "Wspólna infrastruktura techniczna ekosystemu eX*. Silnik integracji, API i moduły współdzielone przez produkty Exportsy i Exstorage.",
          },
          en: {
            name: "Excore",
            description:
              "Shared technical infrastructure for the eX* ecosystem. Integration engine, API, and modules shared across Exportsy and Exstorage.",
          },
        },
      },
      {
        slug: "ai-w-tsl",
        status: "in-progress",
        content: {
          pl: {
            name: "AI w TSL",
            description:
              "Automatyzacja procesów spedycyjnych z AI. Generowanie dokumentów, obsługa zapytań klientów, automatyczne ofertowanie.",
          },
          en: {
            name: "AI in Freight",
            description:
              "AI-powered freight process automation. Document generation, client inquiry handling, and automated quoting.",
          },
        },
      },
      {
        slug: "portale-integracje",
        status: "concept",
        content: {
          pl: {
            name: "Portale i Integracje",
            description:
              "Dedykowane portale klienta, systemy B2B i integracje z platformami logistycznymi i giełdami transportowymi.",
          },
          en: {
            name: "Portals & Integrations",
            description:
              "Custom client portals, B2B systems, and integrations with logistics platforms and freight exchanges.",
          },
        },
      },
    ],
  },
  {
    id: "data",
    number: "03",
    content: {
      pl: {
        title: "Dane, Matching i Rozwój Branży",
        intro:
          "Infrastruktura danych i inicjatywy budujące transparentność rynku TSL. Weryfikacja podmiotów, kojarzenie zleceniodawców z operatorami i platformy wiedzy dla następnego pokolenia branży.",
      },
      en: {
        title: "Data, Matching & Industry",
        intro:
          "Data infrastructure and initiatives building transparency in the TSL market. Entity verification, shipper-operator matching, and knowledge platforms for the next generation of the industry.",
      },
    },
    projects: [
      {
        slug: "matching",
        status: "in-progress",
        content: {
          pl: {
            name: "Matching Branży",
            description:
              "Platforma kojarzenia zleceniodawców z operatorami TSL na podstawie parametrów operacyjnych, historii i specjalizacji.",
          },
          en: {
            name: "Industry Matching",
            description:
              "Platform matching shippers with TSL operators based on operational parameters, track record, and specialisation.",
          },
        },
      },
      {
        slug: "cbtl",
        status: "coming-soon",
        content: {
          pl: {
            name: "CBTL",
            description:
              "Centralna Baza Transportu i Logistyki — rejestr podmiotów, licencji, tras i zasobów branży TSL.",
          },
          en: {
            name: "CBTL",
            description:
              "Central Transport & Logistics Database — registry of entities, licences, routes, and industry assets.",
          },
        },
      },
      {
        slug: "bazafirm",
        status: "live",
        externalUrl: "https://bazafirmtslpl.vercel.app",
        content: {
          pl: {
            name: "BazaFirm",
            description:
              "Platforma weryfikacji podmiotów gospodarczych. Dane z CEIDG, KRS i GUS — statusy VAT i monitoring zmian.",
          },
          en: {
            name: "BazaFirm",
            description:
              "Business entity verification platform. CEIDG, KRS, and GUS data — VAT status and change monitoring.",
          },
        },
      },
      {
        slug: "next-gen-tsl",
        status: "concept",
        content: {
          pl: {
            name: "Next Gen TSL",
            description:
              "Inicjatywa edukacyjna i networkingowa dla nowego pokolenia spedytorów i operatorów logistycznych.",
          },
          en: {
            name: "Next Gen TSL",
            description:
              "Education and networking initiative for the next generation of freight forwarders and logistics operators.",
          },
        },
      },
    ],
  },
];

// ─── Localization helpers ────────────────────────────────────────

export type LocalizedProject = Omit<PillarProject, "content"> &
  ProjectContent & { pillarId: string };

export type LocalizedPillar = {
  id: string;
  number: string;
  title: string;
  intro: string;
  projects: LocalizedProject[];
};

export function localizePillars(locale: "pl" | "en"): LocalizedPillar[] {
  return pillars.map((pillar) => ({
    id: pillar.id,
    number: pillar.number,
    title: pillar.content[locale].title,
    intro: pillar.content[locale].intro,
    projects: pillar.projects.map(({ content, ...rest }) => ({
      ...rest,
      ...content[locale],
      pillarId: pillar.id,
    })),
  }));
}

// Flat list of all projects (for sitemap, etc.)
export function localizeProjects(locale: "pl" | "en"): LocalizedProject[] {
  return localizePillars(locale).flatMap((p) => p.projects);
}

// ─── Legacy type alias for backward compat ───────────────────────
export type ProjectStatus_Legacy = ProjectStatus;
