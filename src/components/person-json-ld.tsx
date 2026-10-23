import { site, siteUrl } from "@/lib/site";

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.legalName,
  alternateName: site.name,
  jobTitle: site.jobTitle,
  url: siteUrl,
  email: `mailto:${site.email}`,
  sameAs: [site.linkedin, site.github],
  worksFor: { "@type": "Organization", name: "Elephant Skin" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guarujá",
    addressRegion: "SP",
    addressCountry: "BR",
  },
};

/** Structured data that helps search engines show who the site belongs to. */
export function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
    />
  );
}
