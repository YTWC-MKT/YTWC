import { CTAPair } from "./CTAButtons";

export default function CTABand({
  title = "Have a project in mind? Let's talk.",
  subtitle = "Get a tailored quote within 24 hours from our Gurgaon studio.",
  prefix = "ctaband-",
}) {
  return (
    <section className="relative py-14 md:py-20 bg-[#111111] border-y border-white/10 overflow-hidden" data-testid="cta-band">
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-56 h-56 bg-[#D4AF37]/[0.04] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-56 h-56 bg-[#D4AF37]/[0.04] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight max-w-2xl">{title}</h2>
          <p className="mt-4 text-white/60 text-lg max-w-xl">{subtitle}</p>
        </div>
        <CTAPair prefix={prefix} />
      </div>
    </section>
  );
}
