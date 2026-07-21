import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import PageBreadcrumb from "../components/PageBreadcrumb";
import CTABand from "../components/CTABand";
import FaqAccordion from "../components/FaqAccordion";
import Seo from "../components/Seo";
import { faqSchema } from "../data/seo";

const packages = [
  { cat: "Corporate Films", price: "₹XX,XXX", note: "per project", points: ["Concept & script", "Shoot + in-house crew", "Edit, grade & delivery"], to: "/services/corporate-film-production" },
  { cat: "Ad Films & TVC", price: "₹XX,XXX", note: "per project", points: ["Creative concept", "Production", "Platform cut-downs"], to: "/services/ad-film-production" },
  { cat: "Industrial Shoots", price: "₹XX,XXX", note: "per day", points: ["Plant walkthroughs", "Safety-compliant crew", "Optional aerials"], to: "/services/industrial-photography-videography" },
  { cat: "Corporate Photography", price: "₹XX,XXX", note: "per day", points: ["Headshots & team", "Office coverage", "Retouched delivery"], to: "/services/corporate-photography" },
  { cat: "Drone & Aerial", price: "₹XX,XXX", note: "per shoot", points: ["Certified pilots", "Compliant operations", "Permissions handled"], to: "/services/drone-photography-videography" },
  { cat: "Marketing Retainers", price: "₹XX,XXX", note: "per month", points: ["Content & posting", "Performance ads", "Monthly reporting"], to: "/marketing-services" },
];

const faqs = [
  { q: "Why don't you list fixed prices?", a: "Every brief differs in shoot days, crew, locations and post-production. Fixed prices would either overcharge simple projects or undersell complex ones. Instead we send an itemised custom quote within 24 hours." },
  { q: "How fast do I get a quote?", a: "Within 24 hours of receiving your brief via the contact form or WhatsApp." },
  { q: "Are your quotes all-inclusive?", a: "Yes — quotes cover shoot, crew, editing, grade, music and delivery, with any travel/logistics shown transparently." },
  { q: "Do you offer retainers?", a: "Yes, for social media, content and marketing we offer monthly retainers; production is usually project-based." },
  { q: "Do you work with startup budgets?", a: "We tailor scope to fit budgets, including startups and D2C brands, without compromising quality." },
];

export default function Pricing() {
  const breadcrumbs = [{ label: "Home", to: "/" }, { label: "Pricing" }];
  return (
    <>
      <Seo title="Pricing & Packages | YTWC" description="Pricing and packages for video production, photography, drone and marketing in Gurgaon & Delhi NCR. Custom, itemised quotes within 24 hours." path="/pricing" breadcrumbs={breadcrumbs} schemas={[faqSchema(faqs)]} />
      <div className="h-20" />
      <PageBreadcrumb items={breadcrumbs} />

      <section className="py-16 md:py-24" data-testid="pricing-page">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Transparent &amp; Custom</p>
          <h1 className="font-serif text-4xl sm:text-6xl text-white">Pricing &amp; Packages</h1>
          <p className="mt-5 text-white/60 text-lg max-w-2xl">Indicative starting ranges across our services in Gurgaon and Delhi NCR. Every project gets an itemised, custom quote within 24 hours.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {packages.map((p) => (
              <div key={p.cat} className="bg-[#111111] border border-white/10 p-8 hover:border-gold/40 transition-colors flex flex-col">
                <h2 className="font-serif text-2xl text-white mb-2">{p.cat}</h2>
                <p className="text-gold"><span className="text-3xl font-serif">starting {p.price}</span> <span className="text-white/40 text-sm">/ {p.note}</span></p>
                <ul className="mt-6 space-y-3 flex-1">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm text-white/70"><Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />{pt}</li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-8 inline-flex items-center justify-center border border-gold text-gold px-6 py-3 uppercase tracking-widest text-xs hover:bg-gold hover:text-black transition-colors">Get a Quote</Link>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gold/10 border border-gold/30 px-8 py-8 text-center">
            <p className="font-serif text-2xl md:text-3xl text-white">Every project is custom-quoted — get yours in 24 hours.</p>
            <Link to="/contact" className="inline-block mt-5 bg-gold text-black font-semibold px-8 py-3.5 uppercase tracking-widest text-xs hover:bg-gold-hover transition-colors">Request a Quote</Link>
          </div>
        </div>
      </section>

      <FaqAccordion faqs={faqs} title="Pricing FAQ" />
      <CTABand prefix="pricing-cta-" />
    </>
  );
}
