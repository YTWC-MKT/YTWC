import { CTAPair } from "./CTAButtons";

export default function CTABand({
  title = "Have a project in mind? Let's talk.",
  subtitle = "Get a tailored quote within 24 hours from our Gurgaon studio.",
  prefix = "ctaband-",
}) {
  return (
    <section className="relative py-20 md:py-28 bg-[#111111] border-y border-white/10" data-testid="cta-band">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight max-w-2xl">{title}</h2>
          <p className="mt-4 text-white/60 text-lg max-w-xl">{subtitle}</p>
        </div>
        <CTAPair prefix={prefix} />
      </div>
    </section>
  );
}
