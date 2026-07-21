import { ExternalLink } from "lucide-react";
import PageBreadcrumb from "../components/PageBreadcrumb";
import CTABand from "../components/CTABand";
import Seo from "../components/Seo";
import { IMAGES } from "../data/site";

const brands = [
  { name: "YTWC", tag: "B2B Production & Marketing", desc: "Corporate films, industrial shoots, drone cinematography and full-stack marketing for businesses across Delhi NCR.", external: false },
  { name: "Elegant Photo Studio", tag: "Weddings & Events", desc: "Premium wedding and event photography and films, delivered by our specialist creative team.", external: true },
  { name: "ShutterDeck", tag: "Rental Studio", desc: "Our Sector 77 studio available for rent — lighting, backdrops and edit suites for creators and brands.", external: true },
];

const team = [
  { role: "Creative Direction", count: "In-house directors & writers" },
  { role: "Cinematography", count: "DOPs, camera & lighting crew" },
  { role: "Post-Production", count: "Editors, colorists & sound" },
  { role: "Drone Operations", count: "Trained & certified pilots" },
  { role: "Marketing & Strategy", count: "Social, performance & SEO" },
  { role: "Client Servicing", count: "Producers & project managers" },
];

const studioGrid = [
  { img: IMAGES.heroService, alt: "film crew working inside the YTWC studio in Gurgaon" },
  { img: IMAGES.camera, alt: "professional cinema camera and lighting equipment at YTWC" },
  { img: IMAGES.corporateOffice, alt: "corporate photography setup in the Sector 77 studio" },
  { img: IMAGES.crew, alt: "production team on a corporate shoot in Delhi NCR" },
];

export default function About() {
  return (
    <>
      <Seo
        title="About YTWC Pvt Ltd | Production House in Gurgaon"
        description="About YTWC Pvt Ltd — a registered production house & marketing agency in Sector 77, Gurugram, serving Delhi NCR. Brands: Elegant Photo Studio & ShutterDeck."
        path="/about"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />
      <div className="h-20" />
      <PageBreadcrumb items={[{ label: "Home", to: "/" }, { label: "About" }]} />

      <section className="py-16 md:py-24" data-testid="about-hero">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">About Us</p>
          <h1 className="font-serif text-4xl sm:text-6xl leading-tight text-white">About YTWC Pvt Ltd</h1>
          <p className="mt-7 text-lg text-white/70 leading-relaxed">
            YTWC Pvt Ltd is a registered production house and creative agency founded and based in Sector 77, Gurugram, serving clients across Delhi NCR. We operate our own studio and in-house crew, and run the sister brands Elegant Photo Studio (weddings &amp; events) and ShutterDeck (rental studio) — giving clients an end-to-end creative ecosystem under one company.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#111111] border-y border-white/10" data-testid="story-section">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6">Our Story</h2>
          <div className="space-y-5 text-white/70 text-lg leading-relaxed">
            <p>We started with a simple belief: businesses in Gurgaon and Delhi NCR deserved a production partner with the craft of a film studio and the reliability of an agency. So we built both — a studio in Sector 77 stocked with cinema-grade gear, and a team that handles everything from concept to final delivery.</p>
            <p>Today we&rsquo;ve delivered 200+ corporate projects across corporate films, ad films, industrial and factory shoots, photography, drone cinematography and digital marketing — for brands in Cyber City, Udyog Vihar, Manesar and beyond.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" data-testid="studio-equipment">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-12">Our Studio &amp; Equipment</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {studioGrid.map((g) => (
              <div key={g.alt} className="aspect-[3/4] overflow-hidden">
                <img src={g.img} alt={g.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#111111] border-y border-white/10" data-testid="brands-section">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-12">Our Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brands.map((b) => (
              <div key={b.name} className="bg-[#0A0A0A] border border-white/10 p-8 hover:border-gold/40 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-serif text-2xl text-white">{b.name}</h3>
                  {b.external && <ExternalLink className="w-4 h-4 text-gold" />}
                </div>
                <p className="text-xs uppercase tracking-wider text-gold mb-4">{b.tag}</p>
                <p className="text-sm text-white/60 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" data-testid="team-section">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((t) => (
              <div key={t.role} className="border-t border-white/10 pt-6">
                <h3 className="font-sans text-lg font-medium text-white">{t.role}</h3>
                <p className="text-sm text-white/50 mt-2">{t.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand prefix="about-cta-" />
    </>
  );
}
