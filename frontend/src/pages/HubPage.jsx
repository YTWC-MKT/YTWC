import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageBreadcrumb from "../components/PageBreadcrumb";
import CTABand from "../components/CTABand";
import FaqAccordion from "../components/FaqAccordion";
import Seo from "../components/Seo";
import { CTAPair } from "../components/CTAButtons";
import { HUBS } from "../data/hubs";
import { faqSchema } from "../data/seo";

export default function HubPage({ hubKey }) {
  const hub = HUBS[hubKey];
  const breadcrumbs = [{ label: "Home", to: "/" }, { label: hub.breadcrumb }];

  return (
    <>
      <Seo title={hub.meta.title} description={hub.meta.description} path={hub.path} breadcrumbs={breadcrumbs} schemas={[faqSchema(hub.faqs)]} />
      <div className="h-20" />
      <PageBreadcrumb items={breadcrumbs} />

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden" data-testid="hub-hero">
        <img src={hub.heroImg} alt={hub.heroAlt} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/60" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">{hub.eyebrow}</p>
          <h1 className="font-serif text-4xl sm:text-6xl leading-tight text-white">{hub.h1}</h1>
          <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">{hub.subline}</p>
          <CTAPair className="mt-9" prefix="hub-hero-" />
        </div>
      </section>

      {/* Intro + cards */}
      <section className="py-16 md:py-24" data-testid="hub-cards">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <p className="text-white/60 text-lg max-w-3xl mb-12">{hub.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hub.cards.map((c) => (
              <Link key={c.slug} to={`/services/${c.slug}`} data-testid={`hub-card-${c.slug}`} className="group bg-[#111111] border border-white/10 p-8 hover:border-gold/40 transition-colors">
                <h2 className="font-serif text-2xl text-white mb-3 group-hover:text-gold transition-colors">{c.title}</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-5">{c.desc}</p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gold">Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            ))}
          </div>

          {hub.relatedHub && (
            <div className="mt-12">
              <Link to={hub.relatedHub.to} className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-4 uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors">
                Explore {hub.relatedHub.title} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      <FaqAccordion faqs={hub.faqs} />
      <CTABand prefix="hub-cta-" />
    </>
  );
}
