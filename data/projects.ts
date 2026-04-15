export type ProjectStatus = "live" | "in-progress" | "concept";
export type ProjectCategory = "SaaS" | "AI" | "Dane" | "Community";

type ProjectContent = {
  title: string;
  shortDescription: string;
  longDescription: string;
  whyItMatters: string;
};

export type Project = {
  slug: string;
  status: ProjectStatus;
  category: ProjectCategory;
  externalUrl?: string;
  tags: string[];
  year: string;
  content: { pl: ProjectContent; en: ProjectContent };
};

export const projects: Project[] = [
  {
    slug: "exportsy",
    status: "live",
    category: "SaaS",
    externalUrl: "https://exportsy.pl",
    tags: ["Logistyka", "SaaS", "B2B"],
    year: "2024",
    content: {
      pl: {
        title: "eXportsy",
        shortDescription:
          "System operacyjny dla firm eksportowych. Automatyzacja dokumentacji, kontrola kosztów i compliance w jednym miejscu.",
        longDescription:
          "Narzędzie dla operatorów spedycji i eksporterów zarządzających przepływem towarów między rynkami. Eliminuje ręczne procesy dokumentacyjne i daje wgląd w koszty w czasie rzeczywistym.",
        whyItMatters:
          "Logistyka potrzebuje oprogramowania, które rozumie jej realia — nie tylko CRM-ów i ERP-ów zbudowanych dla innych branż.",
      },
      en: {
        title: "eXportsy",
        shortDescription:
          "Operating system for export companies. Document automation, cost control, and compliance in one place.",
        longDescription:
          "Built for freight operators and exporters managing goods flow across markets. Eliminates manual documentation processes and provides real-time cost visibility.",
        whyItMatters:
          "Logistics needs software that understands its realities — not just CRMs and ERPs built for other industries.",
      },
    },
  },
  {
    slug: "exstorage",
    status: "in-progress",
    category: "SaaS",
    tags: ["Magazyn", "WMS", "Logistyka"],
    year: "2025",
    content: {
      pl: {
        title: "eXstorage",
        shortDescription:
          "Platforma zarządzania magazynem i przepływem towaru dla operatorów logistycznych i firm 3PL.",
        longDescription:
          "System WMS zbudowany pod realia polskiego i europejskiego rynku logistycznego. Obsługuje przyjęcia, wydania, inwentaryzacje i integracje z systemami partnerów.",
        whyItMatters:
          "Większość systemów WMS na rynku to legacy. Małe i średnie firmy 3PL zasługują na narzędzie, które nie wymaga trzymiesięcznego wdrożenia.",
      },
      en: {
        title: "eXstorage",
        shortDescription:
          "Warehouse and goods flow management platform for logistics operators and 3PL providers.",
        longDescription:
          "A WMS built for the realities of the Polish and European logistics market. Handles inbound, outbound, inventory, and partner system integrations.",
        whyItMatters:
          "Most WMS systems on the market are legacy. Small and mid-size 3PL companies deserve a tool that does not require a three-month implementation.",
      },
    },
  },
  {
    slug: "ai-w-tsl",
    status: "in-progress",
    category: "AI",
    tags: ["AI", "TSL", "Automatyzacja"],
    year: "2025",
    content: {
      pl: {
        title: "AI w TSL",
        shortDescription:
          "Narzędzia i procesy AI dla branży transportowej i spedycyjnej. Automatyzacja ofertowania, dokumentów i komunikacji.",
        longDescription:
          "Gotowe wdrożenia oparte na modelach językowych dedykowane firmom TSL. Od automatycznego generowania CMR i faktur po asystentów do obsługi zapytań klientów.",
        whyItMatters:
          "Branża TSL jest gotowa na AI, ale nikt nie mówi jej jak zacząć. Te wdrożenia są odpowiedzią na konkretne problemy operacyjne — nie na hype.",
      },
      en: {
        title: "AI in Freight",
        shortDescription:
          "AI tools and processes for the freight and logistics industry. Automating quoting, documentation, and client communication.",
        longDescription:
          "Ready-to-deploy processes based on language models, built for transport and freight companies. From automated CMR and invoice generation to client inquiry assistants.",
        whyItMatters:
          "The freight industry is ready for AI, but nobody is showing it how to start. These deployments address specific operational problems — not hype.",
      },
    },
  },
  {
    slug: "bazafirm",
    status: "live",
    category: "Dane",
    externalUrl: "https://bazafirmtslpl.vercel.app",
    tags: ["Dane", "B2B", "SaaS"],
    year: "2024",
    content: {
      pl: {
        title: "BazaFirm",
        shortDescription:
          "Platforma weryfikacji i monitorowania podmiotów gospodarczych. Dane z CEIDG, KRS i GUS w jednym miejscu.",
        longDescription:
          "Narzędzie dla działów handlowych i compliance. Integruje dane rejestrowe, statusy VAT, informacje o powiązaniach i alerty zmian.",
        whyItMatters:
          "Weryfikacja kontrahenta przed zleceniem warta jest więcej niż odzyskiwanie długu po problemie. Szybki dostęp do rzetelnych danych rejestrowych to nie luksus, to standard.",
      },
      en: {
        title: "BazaFirm",
        shortDescription:
          "Business entity verification and monitoring platform. CEIDG, KRS, and GUS data in one place.",
        longDescription:
          "A tool for sales and compliance teams needing fast insight into contractor health. Integrates registry data, VAT status, ownership connections, and change alerts.",
        whyItMatters:
          "Verifying a contractor before a deal is worth more than chasing debt after a problem. Fast access to reliable registry data is not a luxury — it is a standard.",
      },
    },
  },
  {
    slug: "tsl-network",
    status: "concept",
    category: "Community",
    tags: ["Networking", "Edukacja", "TSL"],
    year: "2025",
    content: {
      pl: {
        title: "TSL Network",
        shortDescription:
          "Platforma networkingowa i edukacyjna dla branży transportowej, spedycyjnej i logistycznej.",
        longDescription:
          "Inicjatywa skupiająca operatorów, spedytorów i dostawców usług logistycznych. Łączy format wydarzeń branżowych z bazą wiedzy i forum wymiany doświadczeń.",
        whyItMatters:
          "Branża TSL ma silne powiązania nieformalne, ale brakuje jej miejsca, gdzie wiedza operacyjna jest systematyzowana i dostępna dla następnego pokolenia spedytorów.",
      },
      en: {
        title: "TSL Network",
        shortDescription:
          "Networking and education platform for the transport, freight, and logistics industry.",
        longDescription:
          "An initiative bringing together operators, freight forwarders, and logistics service providers. Combines industry events with a knowledge base and experience-sharing forum.",
        whyItMatters:
          "The freight industry has strong informal networks but lacks a place where operational knowledge is systematised and accessible to the next generation of forwarders.",
      },
    },
  },
];

export type LocalizedProject = Omit<Project, "content"> & ProjectContent;

export function localizeProjects(
  locale: "pl" | "en",
  items: Project[] = projects
): LocalizedProject[] {
  return items.map(({ content, ...rest }) => ({
    ...rest,
    ...content[locale],
  }));
}
