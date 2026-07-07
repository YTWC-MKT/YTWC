import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export default function FaqAccordion({ title = "Frequently Asked Questions", faqs = [], eyebrow = "FAQ" }) {
  return (
    <section className="py-20 md:py-28 bg-[#0A0A0A]" data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">{eyebrow}</p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-10">{title}</h2>
        <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/10">
              <AccordionTrigger
                data-testid={`faq-trigger-${i}`}
                className="text-left font-sans text-lg text-white hover:text-gold hover:no-underline py-6"
              >
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/60 text-base leading-relaxed pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
