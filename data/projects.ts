export type ProjectStatus = "live" | "in-progress" | "concept";

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  status: ProjectStatus;
  externalUrl?: string;
  tags: string[];
  year: string;
};

export const projects: Project[] = [
  {
    slug: "exportsy",
    title: "eXportsy",
    shortDescription:
      "System operacyjny dla firm eksportowych. Automatyzacja dokumentacji, kontrola kosztów, compliance w jednym miejscu.",
    longDescription:
      "Narzędzie zaprojektowane dla operatorów spedycji i eksporterów, którzy zarządzają przepływem towarów między rynkami. Eliminuje ręczne procesy dokumentacyjne i daje wgląd w koszty w czasie rzeczywistym.",
    status: "live",
    externalUrl: "https://exportsy.pl",
    tags: ["Logistyka", "SaaS", "B2B", "Automatyzacja"],
    year: "2024",
  },
  {
    slug: "exstorage",
    title: "eXstorage",
    shortDescription:
      "Platforma zarządzania magazynem i przepływem towaru dla operatorów logistycznych i firm 3PL.",
    longDescription:
      "System WMS (Warehouse Management System) zbudowany pod realia polskiego i europejskiego rynku logistycznego. Obsługuje przyjęcia, wydania, inwentaryzacje i integracje z WMS partnerów.",
    status: "in-progress",
    tags: ["Magazyn", "WMS", "Logistyka", "B2B"],
    year: "2025",
  },
  {
    slug: "dawo-energy",
    title: "DAWO Energy Solutions",
    shortDescription:
      "Projekty i doradztwo w obszarze energetyki odnawialnej. Fotowoltaika, magazyny energii, optymalizacja kosztów energii.",
    longDescription:
      "Inicjatywa łącząca doradztwo energetyczne z realizacją projektów OZE dla podmiotów przemysłowych i logistycznych. Skupiona na ekonomice wdrożeń, nie na technologicznym szumie.",
    status: "in-progress",
    tags: ["Energetyka", "OZE", "B2B", "Inwestycje"],
    year: "2024",
  },
  {
    slug: "ai-w-tsl",
    title: "AI w TSL",
    shortDescription:
      "Narzędzia i procesy AI dla branży transportowej i spedycyjnej. Automatyzacja ofertowania, dokumentów, komunikacji.",
    longDescription:
      "Zestaw gotowych wdrożeń i procesów opartych na modelach językowych, dedykowanych firmom TSL. Od automatycznego generowania CMR i faktur po asystentów do obsługi zapytań klientów.",
    status: "in-progress",
    tags: ["AI", "TSL", "Automatyzacja", "Produktywność"],
    year: "2025",
  },
  {
    slug: "bazafirm",
    title: "BazaFirm",
    shortDescription:
      "Platforma weryfikacji i monitorowania podmiotów gospodarczych. Dane z CEIDG, KRS i GUS w jednym miejscu.",
    longDescription:
      "Narzędzie dla działów handlowych i compliance, które potrzebują szybkiego wglądu w kondycję kontrahentów. Integruje dane rejestrowe, statusy VAT, informacje o powiązaniach i alerty zmian.",
    status: "live",
    externalUrl: "https://bazafirmtslpl.vercel.app",
    tags: ["Dane", "B2B", "SaaS", "Lead Intelligence"],
    year: "2024",
  },
  {
    slug: "tsl-network",
    title: "TSL Network",
    shortDescription:
      "Platforma networkingowa i edukacyjna dla branży transportowej, spedycyjnej i logistycznej.",
    longDescription:
      "Inicjatywa skupiająca operatorów, spedytorów i dostawców usług logistycznych. Łączy format wydarzeń branżowych z bazą wiedzy i forum wymiany doświadczeń.",
    status: "concept",
    tags: ["Networking", "Edukacja", "TSL", "B2B"],
    year: "2025",
  },
];
