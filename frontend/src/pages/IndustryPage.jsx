import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, AlertCircle, Check } from "lucide-react";
import PageBreadcrumb from "../components/PageBreadcrumb";
import CTABand from "../components/CTABand";
import FaqAccordion from "../components/FaqAccordion";
import Seo from "../components/Seo";
import { CTAPair } from "../components/CTAButtons";
import Icon from "../components/Icon";
import { INDUSTRIES } from "../data/industries";
import { SERVICE_PAGES } from "../data/services";
import { faqSchema } from "../data/seo";

export default function IndustryPage() {
  const { slug } = useParams();
  const data = INDUSTRIES[slug];
  if (!data) return <Navigate to="/" replace />;

  const breadcrumbs = [{ label: "Home", to: "/" }, { label: "Industries" }, { label: data.breadcrumb }];
  const services = data.services.map((s) => ({ slug: s, ...SERVICE_PAGES[s] })).filter((s) => s.h1);

  return (
    <>
      <Seo title={data.meta.title} description={data.meta.description} path={data.path} breadcrumbs={breadcrumbs} schemas={[faqSchema(data.faqs)]} />
      <div className="h-20" />
      <PageBreadcrumb items={breadcrumbs} />

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden" data-testid="industry-hero">
        <img src={data.heroImg} alt={data.heroAlt} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/50" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">{data.eyebrow}</p>
          <h1 className="font-serif text-4xl sm:text-6xl leading-tight text-white">{data.h1}</h1>
          <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">{data.subline}</p>
          <CTAPair className="mt-9" prefix="industry-hero-" />
        </div>
      </section>

      {/* Pain points */}
      <section className="py-16 md:py-24" data-testid="industry-pains">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-12">Challenges We Solve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.pains.map((p) => (
              <div key={p.title} className="bg-[#111111] border border-white/10 p-8 flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h3 className="font-sans text-lg font-medium text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant services */}
      <section className="py-16 md:py-24 bg-[#111111] border-y border-white/10" data-testid="industry-services">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-12">Services That Fit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="group bg-[#0A0A0A] border border-white/10 p-7 hover:border-gold/40 transition-colors">
                <Icon name={s.included?.[0]?.icon || "Film"} className="w-7 h-7 text-gold mb-4" />
                <h3 className="font-sans text-base font-medium text-white mb-2">{s.serviceType}</h3>
                <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-gold">View <ArrowRight className="w-3.5 h-3.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case example */}
      <section className="py-16 md:py-24" data-testid="industry-example">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Case Example</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6">{data.example.title}</h2>
          <div className="flex items-start gap-4">
            <Check className="w-6 h-6 text-gold shrink-0 mt-1" />
            <p className="text-white/70 text-lg leading-relaxed">{data.example.desc}</p>
          </div>
        </div>
      </section>

      <FaqAccordion faqs={data.faqs} />
      <CTABand prefix="industry-cta-" />
    </>
  );
}
