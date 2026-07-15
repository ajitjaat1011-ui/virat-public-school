/**
 * JSON-LD structured data for Virat Public School.
 * Renders a Schema.org EducationalOrganization node, improving
 * search engine rich-results appearance.
 */
export function SchoolJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Virat Public School",
    alternateName: "VPS",
    description:
      "Virat Public School, Viratnagar (Kotputli-Behror, Rajasthan) — a premier school committed to holistic education rooted in values and modern learning.",
    slogan: "Vidya Dadati Vinayam — Knowledge Bestows Humility",
    url: "https://viratpublicschool.pages.dev",
    logo: "https://viratpublicschool.pages.dev/favicon.svg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Viratnagar",
      addressLocality: "Viratnagar",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    areaServed: "Kotputli-Behror district, Rajasthan",
    telephone: "+91-0000000000",
    email: "info@viratpublicschool.in",
    sameAs: [
      "https://facebook.com",
      "https://instagram.com",
      "https://youtube.com",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
