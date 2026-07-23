import { Link } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";
import { CTAPair } from "../components/CTAButtons";
import CTABand from "../components/CTABand";
import FaqAccordion from "../components/FaqAccordion";
import Seo from "../components/Seo";
import Icon from "../components/Icon";
import { SERVICES, STATS, WHY, TESTIMONIALS, HOME_FAQS, PORTFOLIO, IMAGES } from "../data/site";
import { faqSchema } from "../data/seo";

const clients = ["ACME CORP", "NORTHWIND", "VERTEX", "MERIDIAN", "AURUM", "STRATOS"];
const recent = PORTFOLIO.slice(0, 4);

export default function Home() {
  return (
    <>
      <Seo
        title="Production House & Creative Agency in Gurgaon | YTWC"
        description="YTWC is a corporate video production house & marketing agency in Gurgaon, Delhi NCR — films, photography, drone and marketing with our own studio."
        path="/"
        breadcrumbs={[{ label: "Home", to: "/" }]}
        schemas={[faqSchema(HOME_FAQS)]}
      />
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden" data-testid="hero-section">
        <img src={IMAGES.heroHome} alt="cinematic corporate video shoot on a film set in Gurgaon" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/40" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 pt-28 pb-16 w-full">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Production House · Creative Agency</p>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.05] text-white">
              Production House &amp; Creative Agency in Gurgaon, Delhi NCR
            </h1>
            <p className="mt-7 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              Corporate films, ad shoots, industrial photography, drone cinematography and full-stack marketing — under one roof, with our own studio.
            </p>
            <CTAPair className="mt-10" prefix="hero-" />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#111111] border-y border-white/10 py-12" data-testid="trust-bar">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
            {clients.map((c) => (
              <span key={c} className="font-serif text-xl md:text-2xl tracking-wide text-white/70">{c}</span>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s} className="border border-white/10 px-5 py-4 text-center text-sm text-white/80" data-testid="stat-chip">{s}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24" data-testid="services-section">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Capabilities</p>
            <h2 className="font-serif text-3xl sm:text-5xl text-white">What We Do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                data-testid={`service-card-${s.slug}`}
                className="group bg-[#111111] border border-white/10 p-8 hover:border-gold/50 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-gold/40 text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-colors">
                  <Icon name={s.icon} className="w-5 h-5" />
                </div>
                <h3 className="font-sans text-lg font-medium text-white mb-3">{s.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-5">{s.desc}</p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gold">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="relative py-16 md:py-24 bg-[#111111] border-y border-white/10 overflow-hidden" data-testid="featured-work-section">
        <div className="absolute -left-16 top-1/3 w-56 h-56 bg-[#D4AF37]/[0.04] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute -right-16 bottom-1/3 w-56 h-56 bg-[#D4AF37]/[0.04] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Portfolio</p>
              <h2 className="font-serif text-3xl sm:text-5xl text-white">Recent Work</h2>
            </div>
            <Link to="/portfolio" className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white/70 hover:text-gold">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {recent.map((w) => (
              <Link to="/portfolio" key={w.title} data-testid="featured-work-card" className="group relative aspect-video overflow-hidden">
                <img src={w.img} alt={w.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-16 h-16 rounded-full bg-white/10 backdrop-blur border border-white/40 flex items-center justify-center group-hover:bg-gold group-hover:text-black text-white transition-colors">
                    <Play className="w-6 h-6 ml-1" fill="currentColor" />
                  </span>
                </div>
                <p className="absolute bottom-4 left-4 font-serif text-xl text-white">{w.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why YTWC */}
      <section className="py-16 md:py-24" data-testid="why-section">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">The YTWC Difference</p>
            <h2 className="font-serif text-3xl sm:text-5xl text-white">Why YTWC</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY.map((w) => (
              <div key={w.title} className="border-t border-white/10 pt-6">
                <Icon name={w.icon} className="w-8 h-8 text-gold mb-5" />
                <h3 className="font-sans text-lg font-medium text-white mb-3">{w.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas served */}
      <section className="py-12 md:py-16 bg-[#111111] border-y border-white/10" data-testid="areas-section">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">Serving All of Delhi NCR</h2>
          <p className="text-white/60 text-lg leading-relaxed">
            From our studio in Sector 77, we produce films, photography and drone work across{" "}
            <span className="text-white">Gurgaon (Gurugram), Delhi, Noida, Greater Noida, Faridabad, Manesar, Ghaziabad and Sonipat</span>. Our in-house crew travels wherever your story is.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm uppercase tracking-wider">
            <Link to="/video-production-company-gurgaon" className="text-gold hover:underline">Gurgaon</Link>
            <span className="text-white/20">·</span>
            <Link to="/video-production-company-gurgaon" className="text-gold hover:underline">Delhi NCR</Link>
            <span className="text-white/20">·</span>
            <Link to="/video-production-company-gurgaon" className="text-gold hover:underline">Noida</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-16 md:py-24 overflow-hidden" data-testid="testimonials-section">
        <div className="absolute -right-16 top-0 w-56 h-56 bg-[#D4AF37]/[0.04] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Client Voices</p>
            <h2 className="font-serif text-3xl sm:text-5xl text-white">Trusted by Marketing Leaders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-[#1A1A1A] border border-white/5 p-10" data-testid="testimonial-card">
                <span className="font-serif text-6xl text-gold leading-none">&ldquo;</span>
                <p className="text-white/80 leading-relaxed -mt-4 mb-8">{t.quote}</p>
                <p className="font-sans font-medium text-white">{t.name}</p>
                <p className="text-sm text-white/50">{t.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion faqs={HOME_FAQS} />
      <CTABand />
    </>
  );
}
