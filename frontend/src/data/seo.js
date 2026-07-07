// SEO helpers: canonical site URL + JSON-LD structured data builders.
export const SITE_URL = "https://ytwc.in";

const AREA_SERVED = ["Gurugram", "Delhi", "Noida", "Faridabad", "Manesar", "Delhi NCR"];

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Plot No. 70, Avenue 77, Sector 77",
  addressLocality: "Gurugram",
  addressRegion: "Haryana",
  postalCode: "122004",
  addressCountry: "IN",
};

export const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "YTWC Pvt Ltd",
  url: SITE_URL,
  image: `${SITE_URL}/logo.png`,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Corporate video production house and creative marketing agency in Sector 77, Gurugram, serving all of Delhi NCR.",
  telephone: "+91-9990433338",
  email: "hi@ytwc.in",
  address: ADDRESS,
  areaServed: AREA_SERVED,
  sameAs: [
    "https://www.instagram.com/elegantphotostudio/",
    "https://youtube.com/@elegantphotos",
    "https://www.facebook.com/Elegantphotos.in/",
  ],
};

export const breadcrumbSchema = (items = []) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.label,
    item: `${SITE_URL}${it.to || ""}`,
  })),
});

export const serviceSchema = ({ name, serviceType, path }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  serviceType: serviceType || name,
  provider: { "@type": "ProfessionalService", name: "YTWC Pvt Ltd", url: SITE_URL },
  areaServed: AREA_SERVED,
  url: `${SITE_URL}${path}`,
});

export const faqSchema = (faqs = []) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const localBusinessSchema = ({ name, path, geo }) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name,
  url: `${SITE_URL}${path}`,
  image: `${SITE_URL}/logo.png`,
  telephone: "+91-9990433338",
  email: "hi@ytwc.in",
  address: ADDRESS,
  areaServed: AREA_SERVED,
  geo: { "@type": "GeoCoordinates", latitude: geo?.lat ?? 28.4089, longitude: geo?.lng ?? 77.0426 },
});

export const articleSchema = ({ headline, path, image, date }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline,
  image,
  datePublished: date,
  author: { "@type": "Person", name: "Lokesh Yadav" },
  publisher: { "@type": "Organization", name: "YTWC Pvt Ltd", logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` } },
  mainEntityOfPage: `${SITE_URL}${path}`,
});
