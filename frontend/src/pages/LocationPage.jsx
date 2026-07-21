import { Link } from "react-router-dom";
import { Star, MapPin, ArrowRight } from "lucide-react";
import PageBreadcrumb from "../components/PageBreadcrumb";
import CTABand from "../components/CTABand";
import FaqAccordion from "../components/FaqAccordion";
import Seo from "../components/Seo";
import { CTAPair } from "../components/CTAButtons";
import Icon from "../components/Icon";
import { SERVICES, COMPANY } from "../data/site";
import { LOCATIONS } from "../data/locations";
import { localBusinessSchema, faqSchema } from "../data/seo";

export default function LocationPage({ locationKey }) {
  const loc = LOCATIONS[locationKey];
  const cityServices = SERVICES.slice(0, 6);

  const breadcrumbs = [
    { label: "Home", to: "/" },
    { label: "Locations", to: "/video-production-company-delhi-ncr" },
    { label: loc.breadcrumb },
  ];

  return (
    <>
      <Seo
        title={loc.meta.title}
        description={loc.meta.description}
        path={loc.path}
        breadcrumbs={breadcrumbs}
        schemas={[localBusinessSchema({ name: `YTWC — ${loc.breadcrumb}`, path: loc.path, geo: loc.geo }), faqSchema(loc.faqs)]}
      />
      <div className="h-20" />
      <PageBreadcrumb items={breadcrumbs} />

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden" data-testid="location-hero">
        <img src={loc.heroImg} alt={loc.heroAlt} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/60" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">{loc.eyebrow}</p>
          <h1 className="font-serif text-4xl sm:text-6xl leading-tight text-white">{loc.h1}</h1>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">{loc.subline}</p>
          <CTAPair className="mt-9 justify-center" prefix="location-hero-" />
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24" data-testid="location-services">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-12">Our Services in {loc.breadcrumb}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityServices.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="group bg-[#111111] border border-white/10 p-8 hover:border-gold/40 transition-colors">
                <Icon name={s.icon} className="w-7 h-7 text-gold mb-5" />
                <h3 className="font-sans text-lg font-medium text-white mb-3 flex items-center justify-between">{s.title}<ArrowRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" /></h3>
                <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
          {loc.relatedServices && (
            <div className="mt-8 flex flex-wrap gap-4">
              {loc.relatedServices.map((r) => (
                <Link key={r.slug} to={`/services/${r.slug}`} className="inline-flex items-center gap-2 border border-gold/40 text-gold px-5 py-3 text-sm hover:bg-gold hover:text-black transition-colors">
                  {r.title} <ArrowRight className="w-4 h-4" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Studio / coverage + map */}
      <section className="py-16 md:py-24 bg-[#111111] border-y border-white/10" data-testid="studio-section">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6">{loc.coverageTitle}</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">{loc.coverage}</p>
            <address className="not-italic space-y-2 text-white/80">
              <p className="flex items-start gap-3"><MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />{COMPANY.address.full}</p>
              <p className="pl-8">{COMPANY.phones[0]} / {COMPANY.phones[1]}</p>
              <p className="pl-8">{COMPANY.email}</p>
            </address>
          </div>
          <div className="aspect-[4/3] bg-[#0A0A0A] border border-white/10 flex items-center justify-center relative overflow-hidden" data-testid="map-placeholder">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            <div className="relative text-center">
              <MapPin className="w-10 h-10 text-gold mx-auto mb-3" />
              <p className="text-white font-medium">{loc.hasStudio ? "YTWC Studio · Sector 77" : `Serving ${loc.breadcrumb}`}</p>
              <p className="text-white/50 text-sm">Gurugram, Haryana 122004</p>
              <p className="text-white/30 text-xs mt-3 uppercase tracking-wider">Google Map</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas covered */}
      <section className="py-16 md:py-24" data-testid="areas-covered">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-10">Areas We Cover in {loc.breadcrumb}</h2>
          <div className="flex flex-wrap gap-3">
            {loc.localities.map((l) => (
              <span key={l} className="px-5 py-2.5 border border-white/15 text-sm text-white/70 hover:border-gold/50 hover:text-white transition-colors">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24 bg-[#111111] border-y border-white/10" data-testid="reviews-strip">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-10">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-gold" fill="currentColor" />)}</div>
            <p className="text-white/70">4.9 · Rated by {loc.breadcrumb} &amp; Delhi NCR clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loc.reviews.map((r) => (
              <div key={r.name} className="bg-[#0A0A0A] border border-white/10 p-8">
                <div className="flex mb-4">{[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-gold" fill="currentColor" />)}</div>
                <p className="text-white/70 leading-relaxed mb-5">{r.text}</p>
                <p className="font-medium text-white">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related locations */}
      <section className="py-16 md:py-24" data-testid="related-locations">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-10">Explore Other Locations</h2>
          <div className="flex flex-wrap gap-4">
            {loc.relatedLocations.map((r) => (
              <Link key={r.to} to={r.to} className="inline-flex items-center gap-2 bg-[#111111] border border-white/10 px-6 py-4 text-white hover:border-gold/40 transition-colors">
                {r.label} <ArrowRight className="w-4 h-4 text-gold" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion faqs={loc.faqs} title={`${loc.breadcrumb} — Frequently Asked Questions`} />
      <CTABand prefix="location-cta-" />
    </>
  );
}
