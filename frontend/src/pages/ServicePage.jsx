import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, Check, Play, ShieldCheck, ExternalLink } from "lucide-react";
import PageBreadcrumb from "../components/PageBreadcrumb";
import CTABand from "../components/CTABand";
import FaqAccordion from "../components/FaqAccordion";
import Seo from "../components/Seo";
import { CTAPair } from "../components/CTAButtons";
import Icon from "../components/Icon";
import { SERVICE_PAGES } from "../data/services";
import { SERVICES, PORTFOLIO, MARKETING_SLUGS } from "../data/site";
import { serviceSchema, faqSchema } from "../data/seo";

export default function ServicePage() {
  const { slug } = useParams();
  const data = SERVICE_PAGES[slug];

  if (!data) {
    const exists = SERVICES.some((s) => s.slug === slug);
    return <Navigate to={exists ? "/services/corporate-film-production" : "/"} replace />;
  }

  const work = PORTFOLIO.slice(0, 3);
  const isMarketing = MARKETING_SLUGS.includes(slug);
  const hub = isMarketing
    ? { label: "Marketing Services", to: "/marketing-services" }
    : { label: "Video Production Services", to: "/video-production-services" };
  const path = `/services/${slug}`;

  const breadcrumbs = [
    { label: "Home", to: "/" },
    { label: hub.label, to: hub.to },
    { label: data.h1.split(" in ")[0] },
  ];

  const relHref = (r) => r.to || `/services/${r.slug}`;

  return (
    <>
      <Seo
        title={data.meta.title}
        description={data.meta.description}
        path={path}
        breadcrumbs={breadcrumbs}
        schemas={[serviceSchema({ name: data.serviceType, serviceType: data.serviceType, path }), faqSchema(data.faqs)]}
      />
      <div className="h-20" />
      <PageBreadcrumb items={breadcrumbs} />

      {/* Hero */}
      <section className="py-16 md:py-24" data-testid="service-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">{isMarketing ? "Marketing Service" : "Production Service"}</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-white">{data.h1}</h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">{data.subline}</p>
            {data.badge && (
              <div className="mt-6 inline-flex items-center gap-2 border border-gold/40 text-gold px-4 py-2 text-xs uppercase tracking-wider" data-testid="trust-badge">
                <ShieldCheck className="w-4 h-4" /> {data.badge}
              </div>
            )}
            <CTAPair className="mt-9" prefix="service-hero-" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <img src={data.hero} alt={data.heroAlt} loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 md:py-24 bg-[#111111] border-y border-white/10" data-testid="included-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-12">{data.includedTitle || "What's Included"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.included.map((c) => (
              <div key={c.title} className="bg-[#0A0A0A] border border-white/10 p-8 hover:border-gold/40 transition-colors">
                <Icon name={c.icon} className="w-7 h-7 text-gold mb-5" />
                <h3 className="font-sans text-lg font-medium text-white mb-3">{c.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24" data-testid="process-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-14">Our Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {data.process.map((step, i) => (
              <div key={step} className="relative">
                <span className="font-serif text-5xl text-gold/30">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-sans text-lg font-medium text-white mt-3">{step}</h3>
                {i < data.process.length - 1 && <div className="hidden md:block absolute top-6 right-0 w-1/2 h-px bg-white/10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal / detailed */}
      {data.legal && (
        <section className="py-16 md:py-24 bg-[#111111] border-y border-white/10" data-testid="legal-section">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6">{data.legal.title}</h2>
            <p className="text-white/70 text-lg leading-relaxed">{data.legal.body}</p>
          </div>
        </section>
      )}

      {/* Callout card (e.g. ShutterDeck) */}
      {data.callout && (
        <section className="py-14" data-testid="service-callout">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="bg-gold/10 border border-gold/30 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="font-serif text-2xl text-white mb-2">{data.callout.title}</h3>
                <p className="text-white/70 max-w-2xl">{data.callout.body}</p>
              </div>
              <a href={data.callout.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gold text-gold px-6 py-3 uppercase tracking-widest text-xs hover:bg-gold hover:text-black transition-colors whitespace-nowrap">
                {data.callout.label} <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Recent work */}
      <section className="py-16 md:py-24" data-testid="service-work-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-12">{data.workTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {work.map((w) => (
              <Link to="/portfolio" key={w.title} className="group relative aspect-video overflow-hidden">
                <img src={w.img} alt={w.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="w-14 h-14 rounded-full bg-white/10 border border-white/40 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-black transition-colors">
                    <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                  </span>
                </div>
                <p className="absolute bottom-4 left-4 font-serif text-lg text-white">{w.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-16 md:py-24 bg-[#111111] border-y border-white/10" data-testid="service-why-section">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-10">{data.whyTitle}</h2>
          <div className="space-y-5">
            {data.why.map((row) => (
              <div key={row} className="flex items-start gap-4 border-b border-white/10 pb-5">
                <Check className="w-5 h-5 text-gold mt-1 shrink-0" />
                <p className="text-white/80 text-lg">{row}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-14" data-testid="pricing-strip">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-gold/10 border border-gold/30 px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="font-serif text-2xl md:text-3xl text-white text-center sm:text-left">{data.pricing}</p>
            <Link to="/contact" data-testid="pricing-cta" className="bg-gold text-black font-semibold px-8 py-3.5 uppercase tracking-widest text-xs hover:bg-gold-hover transition-colors whitespace-nowrap">Get a Quote</Link>
          </div>
        </div>
      </section>

      <FaqAccordion faqs={data.faqs} />

      {/* Related services */}
      <section className="py-16 md:py-24 bg-[#111111] border-t border-white/10" data-testid="related-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-12">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.related.map((r) => (
              <Link key={r.title} to={relHref(r)} data-testid={`related-${r.slug || r.to}`} className="group bg-[#0A0A0A] border border-white/10 p-8 hover:border-gold/40 transition-colors flex items-center justify-between">
                <span className="font-sans text-lg text-white">{r.title}</span>
                <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
          {data.relatedLine && (
            <p className="mt-8 text-white/60">
              Also see our{" "}
              <Link to="/video-production-services" className="text-gold hover:underline">video production services in Gurgaon and Delhi NCR</Link>.
            </p>
          )}
        </div>
      </section>

      <CTABand prefix="service-cta-" />
    </>
  );
}
