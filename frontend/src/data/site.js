// Central content/data for the YTWC marketing site.

export const COMPANY = {
  name: "YTWC Pvt Ltd",
  wordmark: "YTWC",
  logo: "https://customer-assets.emergentagent.com/job_ytwc-production/artifacts/zcep6gbr_YTWC%20Logo.webp",
  phones: ["+91 99904 33338", "+91 99904 33319"],
  whatsapp: "919990433338",
  email: "hi@ytwc.in",
  address: {
    line: "Plot No. 70, Avenue 77, Sector 77",
    city: "Gurugram, Haryana 122004",
    full: "Plot No. 70, Avenue 77, Sector 77, Gurugram, Haryana 122004",
  },
  hours: "Mon – Sat · 10:00 AM – 7:00 PM",
  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
    facebook: "https://facebook.com",
  },
};

export const whatsappLink = (msg = "Hi YTWC, I'd like to discuss a project.") =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`;

export const NAV = [
  { label: "Home", to: "/" },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Video Production", to: "/services/corporate-film-production" },
      { label: "Photography", to: "/services/corporate-photography" },
      { label: "Drone & Aerial", to: "/services/drone-photography-videography" },
      { label: "Marketing", to: "/services/social-media-management" },
    ],
  },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const IMAGES = {
  heroHome:
    "https://images.unsplash.com/photo-1607276159787-9ef4db5c0d0b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHw0fHxjaW5lbWF0aWMlMjBmaWxtJTIwY2FtZXJhJTIwc2V0fGVufDB8fHx8MTc4MzQwODA2MHww&ixlib=rb-4.1.0&q=85",
  heroService:
    "https://images.unsplash.com/photo-1632187989763-c9c620420b4d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBmaWxtJTIwY3JldyUyMHdvcmtpbmclMjBvbiUyMHNldHxlbnwwfHx8fDE3ODM0MDgwNzJ8MA&ixlib=rb-4.1.0&q=85",
  corporateOffice:
    "https://images.unsplash.com/photo-1714974528718-b3b52f91c334?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MHx8fHwxNzgzNDA4MDczfDA&ixlib=rb-4.1.0&q=85",
  camera:
    "https://images.unsplash.com/photo-1619099619226-f96e319e3732?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwzfHxjaW5lbWF0aWMlMjBmaWxtJTIwY2FtZXJhJTIwc2V0fGVufDB8fHx8MTc4MzQwODA2MHww&ixlib=rb-4.1.0&q=85",
  drone:
    "https://images.unsplash.com/photo-1768571845597-38f066307f1e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwzfHxkcm9uZSUyMGZseWluZyUyMGNpdHlzY2FwZXxlbnwwfHx8fDE3ODM0MDgwNjB8MA&ixlib=rb-4.1.0&q=85",
  crew:
    "https://images.unsplash.com/photo-1581609784724-68d753c36494?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBmaWxtJTIwY3JldyUyMHdvcmtpbmclMjBvbiUyMHNldHxlbnwwfHx8fDE3ODM0MDgwNzJ8MA&ixlib=rb-4.1.0&q=85",
};

export const SERVICES = [
  { icon: "Film", title: "Corporate Film Production", slug: "corporate-film-production", desc: "Company profiles and brand films that make Delhi NCR businesses look world-class." },
  { icon: "Clapperboard", title: "Ad Films & TVC", slug: "ad-films-tvc", desc: "High-impact commercials and TVCs shot and finished in-house in Gurgaon." },
  { icon: "Factory", title: "Industrial & Factory Shoots", slug: "industrial-factory-shoots", desc: "Plant walkthroughs and process films across Manesar and Delhi NCR industrial belts." },
  { icon: "Camera", title: "Corporate Photography", slug: "corporate-photography", desc: "Headshots, offices and events captured with editorial polish." },
  { icon: "Send", title: "Drone & Aerial Photography", slug: "drone-photography-videography", desc: "Certified pilots, fully compliant aerial cinematography across Gurgaon & NCR." },
  { icon: "Package", title: "Product Shoots", slug: "product-shoots", desc: "Studio-grade product and packshot photography with lighting control." },
  { icon: "Share2", title: "Social Media Management", slug: "social-media-management", desc: "Always-on content, reels and community management for growing brands." },
  { icon: "TrendingUp", title: "Digital Marketing", slug: "digital-marketing", desc: "Performance campaigns, SEO and paid media that drive measurable ROI." },
];

export const STATS = [
  "200+ Corporate Projects",
  "Own Studio in Sector 77",
  "In-House Crew & Equipment",
  "Trained & Certified Drone Pilots",
];

export const WHY = [
  { icon: "Building2", title: "Own Studio", desc: "A fully-equipped studio in Sector 77, Gurugram — no rental delays, total creative control." },
  { icon: "Workflow", title: "End-to-End", desc: "From concept and script to shoot, edit and final delivery — all under one roof." },
  { icon: "MapPin", title: "NCR-Wide Coverage", desc: "Gurgaon · Delhi · Noida · Faridabad · Manesar — our crew travels across Delhi NCR." },
  { icon: "Zap", title: "Fast Turnaround", desc: "Structured pipelines and in-house editors mean quick, reliable delivery." },
];

export const TESTIMONIALS = [
  { quote: "YTWC delivered a corporate film that genuinely elevated our brand. The crew understood our factory operations in Manesar perfectly.", name: "Rohit Malhotra", company: "Head of Marketing, Auto Components Ltd" },
  { quote: "From script to final cut, the process was seamless. Their Gurgaon studio and in-house team made the whole shoot effortless.", name: "Ananya Sharma", company: "Brand Manager, FMCG Brand" },
  { quote: "The drone footage of our township in Noida was cinematic and fully compliant. Highly professional operation end to end.", name: "Vikram Nair", company: "Director, Real Estate Developer" },
];

export const HOME_FAQS = [
  { q: "What services does YTWC provide?", a: "YTWC is a full-service production house and marketing agency offering corporate films, ad films & TVCs, industrial and factory shoots, corporate photography, drone & aerial photography, product shoots, plus social media management and digital marketing — all delivered in-house from our Gurgaon studio." },
  { q: "Which areas do you serve?", a: "We serve all of Delhi NCR including Gurgaon (Gurugram), Delhi, Noida, Greater Noida, Faridabad, Manesar, Ghaziabad and Sonipat. Our base and studio are in Sector 77, Gurugram." },
  { q: "Do you have your own studio?", a: "Yes. We operate our own fully-equipped studio in Sector 77, Gurugram, with in-house crew and equipment — giving you speed, flexibility and consistent quality." },
  { q: "How much does a corporate video cost?", a: "Costs depend on scope, shoot days, locations and post-production. Most corporate films are custom-quoted; share your brief and we'll send a tailored quote within 24 hours." },
  { q: "How do I get a quote?", a: "Click 'Get a Quote' or message us on WhatsApp with a short brief. We respond within one business day with an approach and estimate." },
];

export const PORTFOLIO = [
  { title: "TechCorp Brand Film", cat: "Corporate Films", img: IMAGES.crew, alt: "corporate brand film shoot in a Gurgaon office" },
  { title: "AutoParts TVC", cat: "Ad Films", img: IMAGES.camera, alt: "ad film TVC production set in Delhi NCR" },
  { title: "Manesar Plant Walkthrough", cat: "Industrial", img: IMAGES.corporateOffice, alt: "industrial factory shoot at a Manesar plant" },
  { title: "Township Aerial Reel", cat: "Drone", img: IMAGES.drone, alt: "drone aerial videography of a Noida township" },
  { title: "Leadership Headshots", cat: "Photography", img: IMAGES.corporateOffice, alt: "corporate photography headshots session in Gurgaon" },
  { title: "FMCG Product Series", cat: "Photography", img: IMAGES.camera, alt: "product photography shoot in Gurgaon studio" },
  { title: "Cyber City Corporate Film", cat: "Corporate Films", img: IMAGES.heroService, alt: "corporate video shoot in Cyber City Gurgaon" },
  { title: "Real Estate Flythrough", cat: "Drone", img: IMAGES.drone, alt: "drone flyover of real estate project in Delhi NCR" },
  { title: "Startup Founder Story", cat: "Corporate Films", img: IMAGES.heroHome, alt: "founder interview corporate film in Gurgaon" },
  { title: "Festive Campaign TVC", cat: "Ad Films", img: IMAGES.heroService, alt: "festive ad film campaign production in Delhi NCR" },
  { title: "Warehouse Operations Film", cat: "Industrial", img: IMAGES.crew, alt: "warehouse and industrial operations film in Manesar" },
  { title: "Event Coverage Reel", cat: "Photography", img: IMAGES.corporateOffice, alt: "corporate event photography coverage in Gurgaon" },
];

export const PORTFOLIO_FILTERS = ["All", "Corporate Films", "Ad Films", "Industrial", "Photography", "Drone"];

export const BLOG_POSTS = [
  { slug: "corporate-video-production-cost-gurgaon-2026", title: "How Much Does Corporate Video Production Cost in Gurgaon? (2026 Guide)", cat: "Corporate Video", excerpt: "A transparent breakdown of what drives corporate video pricing in Gurgaon and Delhi NCR — from shoot days to post-production.", date: "12 Jan 2026", img: IMAGES.heroHome },
  { slug: "choosing-production-house-delhi-ncr", title: "How to Choose the Right Production House in Delhi NCR", cat: "Guides", excerpt: "Studio, crew, gear or turnaround — the factors that actually matter when picking a video partner in NCR.", date: "05 Jan 2026", img: IMAGES.crew },
  { slug: "drone-shoot-rules-delhi-ncr", title: "Drone Shoot Rules in Delhi NCR: What Brands Should Know", cat: "Drone", excerpt: "Green, yellow and red zones explained in plain English for factories, real estate and events.", date: "28 Dec 2025", img: IMAGES.drone },
  { slug: "industrial-video-checklist", title: "The Industrial & Factory Video Checklist", cat: "Industrial", excerpt: "Everything to prepare before filming inside a plant in Manesar or the NCR industrial belt.", date: "20 Dec 2025", img: IMAGES.corporateOffice },
  { slug: "reels-that-convert", title: "Social Media Reels That Actually Convert", cat: "Marketing", excerpt: "A repeatable content system for B2B brands that want reach and pipeline, not just views.", date: "12 Dec 2025", img: IMAGES.camera },
  { slug: "tvc-vs-brand-film", title: "TVC vs Brand Film: Which Does Your Business Need?", cat: "Ad Films", excerpt: "When to invest in a punchy commercial and when a longer brand film wins the room.", date: "04 Dec 2025", img: IMAGES.heroService },
];

// Service page content, keyed by slug. Two full examples + fallbacks.
export const SERVICE_PAGES = {
  "corporate-film-production": {
    hero: IMAGES.heroService,
    h1: "Corporate Film Production in Gurgaon & Delhi NCR",
    subline: "Company profile videos, brand films and leadership stories — scripted, shot and finished in-house from our Sector 77 studio for businesses across Delhi NCR.",
    heroAlt: "corporate film production crew shooting in a Gurgaon office",
    badge: null,
    included: [
      { icon: "PenLine", title: "Concept & Script", desc: "Messaging workshops and scripts aligned to your brand and audience." },
      { icon: "Clapperboard", title: "Direction & Shoot", desc: "Experienced directors and multi-camera shoots at your site or our studio." },
      { icon: "Users", title: "Professional Crew & Gear", desc: "In-house cinematographers, lighting, audio and cinema-grade cameras." },
      { icon: "Scissors", title: "Editing & Color Grade", desc: "Story-first editing with cinematic color grading." },
      { icon: "Mic", title: "Voiceover & Music", desc: "Professional voiceover artists and licensed music." },
      { icon: "MonitorPlay", title: "Delivery in All Formats", desc: "Optimised exports for web, social, events and broadcast." },
    ],
    process: ["Brief", "Script", "Shoot", "Edit", "Deliver"],
    workTitle: "Recent Corporate Films",
    whyTitle: "Why Companies in Delhi NCR Choose YTWC",
    why: [
      "Own studio and in-house crew in Sector 77, Gurgaon — no rental delays.",
      "End-to-end delivery from concept to final master files.",
      "NCR-wide coverage: Gurgaon, Delhi, Noida, Faridabad and Manesar.",
      "Reliable, fast turnaround backed by structured production pipelines.",
    ],
    pricing: "Corporate film packages start from ₹XX,XXX — custom quote in 24 hours.",
    faqs: [
      { q: "How much does a corporate film cost in Gurgaon?", a: "Pricing depends on shoot days, crew size, locations and post-production. Most corporate films are custom-quoted — share your brief for a tailored estimate within 24 hours." },
      { q: "How long does production take?", a: "A typical corporate film takes 2–4 weeks from brief to final delivery, depending on scripting, shoot scheduling and revisions." },
      { q: "Do you shoot at our office or your studio?", a: "Both. We can film on-location at your office or facility anywhere in Delhi NCR, or in our controlled Sector 77 studio." },
      { q: "What deliverables do we get?", a: "You receive the final film in all required formats — web, social cut-downs, event masters — plus raw or graded footage on request." },
      { q: "Do you handle scripting?", a: "Yes. Scripting, storyboarding and messaging are part of our end-to-end service." },
    ],
    related: [
      { title: "Ad Films & TVC", slug: "ad-films-tvc" },
      { title: "Industrial & Factory Shoots", slug: "industrial-factory-shoots" },
      { title: "Corporate Photography", slug: "corporate-photography" },
    ],
    relatedLine: true,
  },
  "drone-photography-videography": {
    hero: IMAGES.drone,
    h1: "Drone & Aerial Photography in Gurgaon, Delhi NCR — Trained & Certified Pilots",
    subline: "Cinematic aerial photography and drone videography for factories, real estate, events and ad films — fully compliant drone operations across Delhi NCR.",
    heroAlt: "drone aerial videography over a Gurgaon skyline at dusk",
    badge: "Trained & Certified Drone Pilots",
    included: [
      { icon: "Factory", title: "Factory & Plant Aerials", desc: "Sweeping overheads of plants and campuses across Manesar and NCR." },
      { icon: "Building2", title: "Real Estate & Township Flyovers", desc: "Cinematic flyovers for projects in Gurgaon, Noida and beyond." },
      { icon: "HardHat", title: "Construction Progress Monitoring", desc: "Scheduled aerial captures to document build progress." },
      { icon: "PartyPopper", title: "Corporate Events", desc: "Elevated coverage of launches, conferences and gatherings." },
      { icon: "Rocket", title: "Ad Films & FPV Cinematics", desc: "Dynamic FPV and aerial shots for commercials and brand films." },
      { icon: "Heart", title: "Weddings (via Elegant Photo Studio)", desc: "Aerial wedding coverage delivered through our sister brand." },
    ],
    process: ["Brief", "Recce", "Permissions", "Fly", "Deliver"],
    workTitle: "Recent Aerial Work",
    whyTitle: "Why Companies in Delhi NCR Choose YTWC",
    why: [
      "Trained and certified drone pilots with fully compliant operations.",
      "Experience filming inside factory premises across Manesar and NCR.",
      "We handle permissions and site coordination end to end.",
      "Cinema-grade aerial footage integrated with ground production.",
    ],
    pricing: "Drone shoot packages start from ₹XX,XXX — custom quote in 24 hours.",
    legal: {
      title: "Is Drone Shooting Legal in Delhi NCR?",
      body: "Drone operations in India follow a zone-based system. In plain English: Gurgaon is largely operable for commercial drone shoots, making it ideal for factory, real estate and event aerials. Delhi city is heavily restricted, especially near airports and VIP/government zones, so many central areas fall into no-fly or permission-heavy categories. Noida is mixed — some areas are open while others sit near sensitive zones. YTWC handles the required permissions and always flies with trained, certified pilots and fully compliant drone operations, so your shoot stays on the right side of the rules.",
    },
    faqs: [
      { q: "Is drone shooting legal in Gurgaon/Delhi NCR?", a: "It depends on the location's zone. Gurgaon is largely operable, Delhi city is heavily restricted near airports and VIP zones, and Noida is mixed. We assess each site and secure the necessary permissions before flying." },
      { q: "Are your pilots trained and certified?", a: "Yes. All our drone operations are carried out by trained and certified pilots with fully compliant procedures." },
      { q: "Can you shoot inside factory premises?", a: "Yes. We regularly capture aerials inside plants and factory campuses across Manesar and the NCR industrial belt, coordinating with your safety and security teams." },
      { q: "How much does a drone shoot cost?", a: "Cost depends on location, permissions, flight hours and deliverables. Share your brief and we'll send a custom quote within 24 hours." },
      { q: "Do you handle permissions?", a: "Yes. We manage the required permissions and compliance so your aerial shoot proceeds smoothly." },
    ],
    related: [
      { title: "Industrial & Factory Shoots", slug: "industrial-factory-shoots" },
      { title: "Real Estate Shoots", slug: "product-shoots" },
      { title: "Ad Films & TVC", slug: "ad-films-tvc" },
    ],
    relatedLine: false,
  },
};

export const SERVICE_DROPDOWN = SERVICES.map((s) => ({ label: s.title, to: `/services/${s.slug}` }));
