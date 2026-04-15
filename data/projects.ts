export type ProjectStatus = "live" | "in-progress" | "concept";

type ProjectContent = {
  title: string;
  shortDescription: string;
  longDescription: string;
};

export type Project = {
  slug: string;
  status: ProjectStatus;
  externalUrl?: string;
  tags: string[];
  year: string;
  content: { pl: ProjectContent; en: ProjectContent };
};

export const projects: Project[] = [
  {
    slug: "exportsy",
    status: "live",
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
      },
      en: {
        title: "eXportsy",
        shortDescription:
          "Operating system for export companies. Document automation, cost control, and compliance in one place.",
        longDescription:
          "Built for freight operators and exporters managing goods flow across markets. Eliminates manual documentation processes and provides real-time cost visibility.",
      },
    },
  },
  {
    slug: "exstorage",
    status: "in-progress",
    tags: ["Magazyn", "WMS", "Logistyka"],
    year: "2025",
    content: {
      pl: {
        title: "eXstorage",
        shortDescription:
          "Platforma zarządzania magazynem i przepływem towaru dla operatorów logistycznych i firm 3PL.",
        longDescription:
          "System WMS zbudowany pod realia polskiego i europejskiego rynku logistycznego. Obsługuje przyjęcia, wydania, inwentaryzacje i integracje z systemami partnerów.",
      },
      en: {
        title: "eXstorage",
        shortDescription:
          "Warehouse and goods flow management platform for logistics operators and 3PL providers.",
        longDescription:
          "A WMS built for the realities of the Polish and European logistics market. Handles inbound, outbound, inventory, and partner system integrations.",
      },
    },
  },
  {
    slug: "ai-w-tsl",
    status: "in-progress",
    tags: ["AI", "TSL", "Automatyzacja"],
    year: "2025",
    content: {
      pl: {
        title: "AI w TSL",
        shortDescription:
          "Narzędzia i procesy AI dla branży transportowej i spedycyjnej. Automatyzacja ofertowania, dokumentów i komunikacji.",
        longDescription:
          "Gotowe wdrożenia oparte na modelach językowych dedykowane firmom TSL. Od automatycznego generowania CMR i faktur po asystentów do obsługi zapytań klientów.",
      },
      en: {
        title: "AI in Freight",
        shortDescription:
          "AI tools and processes for the freight and logistics industry. Automating quoting, documentation, and client communication.",
        longDescription:
          "Ready-to-deploy processes based on language models, built for transport and freight companies. From automated CMR and invoice generation to client inquiry assistants.",
      },
    },
  },
  {
    slug: "bazafirm",
    status: "live",
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
      },
      en: {
        title: "BazaFirm",
        shortDescription:
          "Business entity verification and monitoring platform. CEIDG, KRS, and GUS data in one place.",
        longDescription:
          "A tool for sales and compliance teams needing fast insight into contractor health. Integrates registry data, VAT status, ownership connections, and change alerts.",
      },
    },
  },
  {
    slug: "tsl-network",
    status: "concept",
    tags: ["Networking", "Edukacja", "TSL"],
    year: "2025",
    content: {
      pl: {
        title: "TSL Network",
        shortDescription:
          "Platforma networkingowa i edukacyjna dla branży transportowej, spedycyjnej i logistycznej.",
        longDescription:
          "Inicjatywa skupiająca operatorów, spedytorów i dostawców usług logistycznych. Łączy format wydarzeń branżowych z bazą wiedzy i forum wymiany doświadczeń.",
      },
      en: {
        title: "TSL Network",
        shortDescription:
          "Networking and education platform for the transport, freight, and logistics industry.",
        longDescription:
          "An initiative bringing together operators, freight forwarders, and logistics service providers. Combines industry events with a knowledge base and experience-sharing forum.",
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
