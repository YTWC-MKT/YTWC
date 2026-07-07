import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageBreadcrumb from "../components/PageBreadcrumb";
import CTABand from "../components/CTABand";
import Seo from "../components/Seo";
import { IMAGES } from "../data/site";

const brands = [
  { name: "YTWC Pvt Ltd", tag: "B2B Production & Marketing", img: IMAGES.heroService, external: false, to: "/about",
    desc: "The flagship brand — a full-service production house and creative agency in Sector 77, Gurugram, delivering corporate films, industrial and drone shoots, photography and full-stack marketing for businesses across Delhi NCR." },
  { name: "Elegant Photo Studio", tag: "Weddings & Events", img: IMAGES.corporateOffice, external: true, href: "https://elegantphotostudio.in",
    desc: "Our weddings and events brand, capturing life's biggest moments with the same craft and equipment that powers our commercial work — from intimate ceremonies to grand celebrations across the region." },
  { name: "ShutterDeck", tag: "Rental Photo/Video Studio", img: IMAGES.camera, external: true, href: "https://photostudios.in",
    desc: "A premium rental photo and video studio in Gurgaon — lighting, backdrops, cyclorama and edit suites available on demand for creators, brands and photographers who need a professional space." },
];

export default function OurBrands() {
  const breadcrumbs = [{ label: "Home", to: "/" }, { label: "Our Brands" }];
  return (
    <>
      <Seo title="Our Brands & Studios | YTWC" description="The YTWC group of brands — YTWC Pvt Ltd (B2B production & marketing), Elegant Photo Studio (weddings) and ShutterDeck (rental studio) in Gurgaon." path="/our-brands" breadcrumbs={breadcrumbs} />
      <div className="h-20" />
      <PageBreadcrumb items={breadcrumbs} />

      <section className="py-16 md:py-24" data-testid="our-brands">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">The Group</p>
          <h1 className="font-serif text-4xl sm:text-6xl text-white">Our Brands &amp; Studios</h1>
          <p className="mt-5 text-white/60 text-lg max-w-2xl">Three brands, one creative ecosystem — built in Gurgaon, serving Delhi NCR.</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14">
            {brands.map((b) => (
              <div key={b.name} className="bg-[#111111] border border-white/10 overflow-hidden hover:border-gold/40 transition-colors flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img src={b.img} alt={`${b.name} — ${b.tag} in Gurgaon`} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="font-serif text-2xl text-white">{b.name}</h2>
                    {b.external && <ExternalLink className="w-4 h-4 text-gold" />}
                  </div>
                  <p className="text-xs uppercase tracking-wider text-gold mb-4">{b.tag}</p>
                  <p className="text-sm text-white/60 leading-relaxed mb-6 flex-1">{b.desc}</p>
                  {b.external ? (
                    <a href={b.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-gold hover:underline">Visit site <ExternalLink className="w-4 h-4" /></a>
                  ) : (
                    <Link to={b.to} className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-gold hover:underline">Learn more <ArrowRight className="w-4 h-4" /></Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand prefix="brands-cta-" />
    </>
  );
}
