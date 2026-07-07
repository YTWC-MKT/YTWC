import { IMAGES } from "./site";

// Hub pages: /video-production-services and /marketing-services
export const HUBS = {
  "video-production-services": {
    path: "/video-production-services",
    breadcrumb: "Video Production Services",
    eyebrow: "Production Services",
    h1: "Video Production Services in Delhi NCR",
    subline: "From corporate films to drone cinematography, YTWC is a full-service production house in Gurgaon covering every kind of shoot across Delhi NCR — under one roof, with our own studio and crew.",
    heroAlt: "video production services team on a film set in Delhi NCR",
    heroImg: IMAGES.heroService,
    meta: { title: "Video Production Services in Delhi NCR | YTWC", description: "Full-service video production in Delhi NCR — corporate films, ad films, industrial, photography, product, events and drone. Explore all services." },
    intro: "Whatever the brief, we bring the same in-house crew, cinema-grade equipment and Sector 77 studio to bear. Explore each production service below, or request a tailored quote within 24 hours.",
    cards: [
      { slug: "corporate-film-production", title: "Corporate Film Production", desc: "Company profiles and brand films that make NCR businesses look world-class." },
      { slug: "ad-film-production", title: "Ad Film & TVC Production", desc: "Digital ads, TVCs and product ad videos from concept to launch." },
      { slug: "industrial-photography-videography", title: "Industrial & Factory Shoots", desc: "Plant walkthroughs and machinery films across the NCR industrial belt." },
      { slug: "corporate-photography", title: "Corporate Photography", desc: "Headshots, team and office photography with editorial polish." },
      { slug: "product-photography", title: "Product Photography & Videography", desc: "E-commerce, catalogue and studio product films that sell." },
      { slug: "corporate-event-photography-videography", title: "Corporate Event Coverage", desc: "Conferences, townhalls, launches and award nights." },
      { slug: "founder-director-portfolio-shoot", title: "Founder & CEO Portfolio Shoot", desc: "Executive portraits and personal branding for leaders." },
      { slug: "training-explainer-videos", title: "Training & Explainer Videos", desc: "L&D, SOP, safety and explainer video production." },
      { slug: "real-estate-photography-videography", title: "Real Estate Photography & Video", desc: "Walkthroughs, township films and architecture shoots." },
      { slug: "drone-photography-videography", title: "Drone & Aerial Photography", desc: "Certified, compliant aerial cinematography across NCR." },
    ],
    faqs: [
      { q: "What video production services does YTWC offer?", a: "Corporate films, ad films & TVCs, industrial shoots, corporate and product photography, event coverage, founder portfolios, training videos, real estate shoots and drone cinematography." },
      { q: "Do you cover all of Delhi NCR?", a: "Yes — Gurgaon, Delhi, Noida, Faridabad, Manesar and the wider NCR, run from our Sector 77 studio." },
      { q: "Can you handle a project end to end?", a: "Yes. From concept and scripting to shoot, edit and delivery, everything is handled in-house." },
      { q: "Do you have your own studio and equipment?", a: "Yes, a fully-equipped studio in Sector 77, Gurugram, with in-house crew and cinema-grade gear." },
      { q: "How do I get a quote?", a: "Pick a service, click 'Get a Quote' or message us on WhatsApp with a brief. We reply within 24 hours." },
    ],
    relatedHub: { title: "Marketing & Advertising Services", to: "/marketing-services" },
  },

  "marketing-services": {
    path: "/marketing-services",
    breadcrumb: "Marketing Services",
    eyebrow: "Marketing Services",
    h1: "Marketing & Advertising Services in Gurgaon",
    subline: "Beyond the camera, YTWC runs full-stack marketing for brands in Gurgaon and Delhi NCR — social media, performance marketing, content and branding, powered by our in-house production.",
    heroAlt: "marketing and advertising team planning a campaign in Gurgaon",
    heroImg: IMAGES.corporateOffice,
    meta: { title: "Marketing & Advertising Services in Gurgaon | YTWC", description: "Marketing agency in Gurgaon, Delhi NCR — social media management, digital marketing, content creation and branding, powered by in-house production." },
    intro: "Because we produce the content ourselves, our campaigns run on better creative — and better creative performs. Explore our marketing services below.",
    cards: [
      { slug: "social-media-management", title: "Social Media Management", desc: "Content calendars, posting, community management and reels." },
      { slug: "digital-marketing", title: "Digital Marketing", desc: "Meta & Google performance ads, SEO and lead generation." },
      { slug: "content-creation", title: "Content Creation", desc: "Reels, UGC and ongoing brand content produced in-house." },
      { slug: "branding-design", title: "Branding & Design", desc: "Identity, visual systems and marketing collateral." },
    ],
    faqs: [
      { q: "What marketing services does YTWC offer?", a: "Social media management, digital marketing (Meta/Google ads, SEO, lead gen), content creation and branding & design." },
      { q: "How is a production house also a marketing agency?", a: "Our in-house production means campaigns run on original, high-quality video and creative — a major performance advantage." },
      { q: "Do you offer retainers?", a: "Yes — monthly retainers for social and marketing, plus project-based branding work." },
      { q: "Do you report on results?", a: "Yes. We set up proper tracking and share clear monthly performance reporting." },
      { q: "How do I get started?", a: "Click 'Get a Quote' or WhatsApp us with your goals; we'll respond within 24 hours." },
    ],
    relatedHub: { title: "Video Production Services", to: "/video-production-services" },
  },
};
