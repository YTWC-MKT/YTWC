import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Facebook, MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { COMPANY } from "../data/site";

const prodLinks = [
  { label: "Corporate Films", to: "/services/corporate-film-production" },
  { label: "Ad Films & TVC", to: "/services/ad-film-production" },
  { label: "Industrial & Factory Shoots", to: "/services/industrial-photography-videography" },
  { label: "Corporate Photography", to: "/services/corporate-photography" },
  { label: "Drone & Aerial", to: "/services/drone-photography-videography" },
  { label: "Product Shoots", to: "/services/product-photography" },
];

const mktLinks = [
  { label: "Social Media Management", to: "/services/social-media-management" },
  { label: "Digital Marketing", to: "/services/digital-marketing" },
  { label: "Content Creation", to: "/services/content-creation" },
  { label: "Branding & Design", to: "/services/branding-design" },
];

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Our Brands", to: "/our-brands" },
  { label: "Pricing", to: "/pricing" },
  { label: "FAQ", to: "/faq" },
  { label: "Careers", to: "/careers" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
];

const moreLinks = [
  { label: "Video Production Services", to: "/video-production-services" },
  { label: "Marketing Services", to: "/marketing-services" },
  { label: "Gurgaon", to: "/video-production-company-gurgaon" },
  { label: "Delhi NCR", to: "/video-production-company-delhi-ncr" },
  { label: "Noida", to: "/video-production-company-noida" },
  { label: "Delhi", to: "/video-production-company-delhi" },
  { label: "Faridabad & Manesar", to: "/industrial-shoot-faridabad-manesar" },
  { label: "Manufacturing", to: "/industries/manufacturing" },
  { label: "Real Estate", to: "/industries/real-estate" },
  { label: "Startups & D2C", to: "/industries/startups-d2c" },
  { label: "Healthcare & Education", to: "/industries/healthcare-education" },
];

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="inline-flex">
              <img
                src={COMPANY.logo}
                alt="YTWC Pvt Ltd logo — corporate video production house in Sector 77 Gurgaon"
                className="h-11 w-auto"
                width="192"
                height="44"
                loading="lazy"
              />
            </Link>
            <p className="mt-5 text-sm text-white/60 leading-relaxed">
              A production house & creative agency in Gurgaon serving all of Delhi NCR — corporate films, photography, drone and full-stack marketing.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-testid="social-instagram" className="text-white/50 hover:text-gold transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href={COMPANY.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-testid="social-linkedin" className="text-white/50 hover:text-gold transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href={COMPANY.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" data-testid="social-youtube" className="text-white/50 hover:text-gold transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" data-testid="social-facebook" className="text-white/50 hover:text-gold transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Production Services</h3>
            <ul className="space-y-3">
              {prodLinks.map((l) => (
                <li key={l.label}><Link to={l.to} className="text-sm text-white/60 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Marketing Services</h3>
            <ul className="space-y-3">
              {mktLinks.map((l) => (
                <li key={l.label}><Link to={l.to} className="text-sm text-white/60 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Contact & Locations</h3>
            <address className="not-italic space-y-3 text-sm text-white/60">
              <p className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />{COMPANY.address.full}</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0 text-gold" /><a href={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`} className="hover:text-white">{COMPANY.phones[0]}</a> / <a href={`tel:${COMPANY.phones[1].replace(/\s/g, "")}`} className="hover:text-white">{COMPANY.phones[1]}</a></p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0 text-gold" /><a href={`mailto:${COMPANY.email}`} className="hover:text-white">{COMPANY.email}</a></p>
            </address>
            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-sm text-white/60">
              <Link to="/video-production-company-gurgaon" className="hover:text-gold">Gurgaon</Link>
              <Link to="/video-production-company-gurgaon" className="hover:text-gold">Delhi NCR</Link>
              <Link to="/video-production-company-gurgaon" className="hover:text-gold">Noida</Link>
            </div>
            <p className="mt-4 text-sm text-white/50">
              Our Brands:{" "}
              <a href="https://elegantphotostudio.in" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold inline-flex items-center gap-1">Elegant Photo Studio <ExternalLink className="w-3 h-3" /></a>{" | "}
              <a href="https://photostudios.in" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold inline-flex items-center gap-1">ShutterDeck <ExternalLink className="w-3 h-3" /></a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Company</h3>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {companyLinks.map((l) => (
                <Link key={l.to + l.label} to={l.to} className="text-sm text-white/60 hover:text-white transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Hubs, Locations & Industries</h3>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {moreLinks.map((l) => (
                <Link key={l.to + l.label} to={l.to} className="text-sm text-white/60 hover:text-white transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© 2026 {COMPANY.name}</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
