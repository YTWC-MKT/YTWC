import PageBreadcrumb from "../components/PageBreadcrumb";
import CTABand from "../components/CTABand";
import Seo from "../components/Seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { faqSchema } from "../data/seo";

const GROUPS = [
  {
    topic: "Services",
    faqs: [
      { q: "What services does YTWC provide?", a: "Corporate films, ad films & TVCs, industrial and factory shoots, corporate and product photography, event coverage, founder portfolios, training videos, real estate shoots, drone cinematography, plus social media, digital marketing, content and branding." },
      { q: "Do you handle projects end to end?", a: "Yes — from concept and scripting to shoot, edit, grade and delivery, everything is handled in-house." },
      { q: "Do you have your own studio and equipment?", a: "Yes, a fully-equipped studio in Sector 77, Gurugram, with in-house crew and cinema-grade gear." },
      { q: "Can one shoot serve multiple formats?", a: "Often yes — with planning we capture footage that edits into a corporate film, ad cut-downs and social content." },
    ],
  },
  {
    topic: "Pricing",
    faqs: [
      { q: "How much does a corporate video cost in Gurgaon?", a: "It depends on shoot days, crew, locations and post-production. Most projects are custom-quoted within 24 hours." },
      { q: "Are quotes all-inclusive?", a: "Yes — shoot, crew, editing, grade, music and delivery are included, with travel shown transparently." },
      { q: "Do you offer monthly retainers?", a: "Yes, for social media, content and marketing services." },
      { q: "How quickly do I get a quote?", a: "Within 24 hours of sharing your brief." },
    ],
  },
  {
    topic: "Locations",
    faqs: [
      { q: "Which areas do you serve?", a: "All of Delhi NCR — Gurgaon, Delhi, Noida, Greater Noida, Faridabad, Manesar, Ghaziabad and Sonipat." },
      { q: "Where is your studio?", a: "In Sector 77, Gurugram — central to the whole NCR region." },
      { q: "Do you charge extra for travel?", a: "Minimal logistics may apply for distant locations and is always shown transparently in your quote." },
      { q: "Can you run multi-city shoots?", a: "Yes — we regularly manage projects spanning multiple NCR cities with one coordinated crew." },
    ],
  },
  {
    topic: "Drone & Aerial",
    faqs: [
      { q: "Are your drone pilots certified?", a: "Yes. All aerial work uses trained, certified pilots with fully compliant drone operations." },
      { q: "Is drone shooting legal in Delhi NCR?", a: "It's zone-dependent — Gurgaon is largely operable, central Delhi is heavily restricted, Noida is mixed. We assess each site and secure permissions before flying." },
      { q: "Can you shoot inside factory premises?", a: "Yes, coordinating with your safety and security teams and following site protocols." },
      { q: "Do you handle permissions?", a: "Yes — we manage the required permissions and compliance end to end." },
    ],
  },
  {
    topic: "Process",
    faqs: [
      { q: "How long does production take?", a: "A typical corporate film takes 2–4 weeks; simpler content is faster. We confirm timelines upfront." },
      { q: "How many revisions are included?", a: "A set number of revision rounds is included in every quote; extra rounds can be added if needed." },
      { q: "Do you shoot at our office or your studio?", a: "Both — on location across Delhi NCR or in our controlled Sector 77 studio." },
      { q: "How do I get started?", a: "Click 'Get a Quote' or message us on WhatsApp with a short brief; we respond within 24 hours." },
    ],
  },
];

const allFaqs = GROUPS.flatMap((g) => g.faqs);

export default function FaqPage() {
  const breadcrumbs = [{ label: "Home", to: "/" }, { label: "FAQ" }];
  return (
    <>
      <Seo title="Frequently Asked Questions | YTWC" description="Answers about YTWC's video production, photography, drone and marketing services across Gurgaon and Delhi NCR — pricing, locations, process and more." path="/faq" breadcrumbs={breadcrumbs} schemas={[faqSchema(allFaqs)]} />
      <div className="h-20" />
      <PageBreadcrumb items={breadcrumbs} />

      <section className="py-16 md:py-24" data-testid="faq-page">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Answers</p>
          <h1 className="font-serif text-4xl sm:text-6xl text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-white/60 text-lg mb-14">Everything you need to know about working with YTWC across Gurgaon and Delhi NCR.</p>

          {GROUPS.map((g) => (
            <div key={g.topic} className="mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl text-gold mb-4">{g.topic}</h2>
              <Accordion type="single" collapsible className="w-full">
                {g.faqs.map((f, i) => (
                  <AccordionItem key={i} value={`${g.topic}-${i}`} className="border-b border-white/10">
                    <AccordionTrigger className="text-left font-sans text-lg text-white hover:text-gold hover:no-underline py-6">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-white/60 text-base leading-relaxed pb-6">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <CTABand prefix="faq-cta-" />
    </>
  );
}
