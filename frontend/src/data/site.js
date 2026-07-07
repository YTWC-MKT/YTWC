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
    instagram: "https://www.instagram.com/elegantphotostudio/",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com/@elegantphotos",
    facebook: "https://www.facebook.com/Elegantphotos.in/",
  },
};

export const whatsappLink = (msg = "Hi YTWC, I'd like to discuss a project.") =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`;

// Grouped mega-menu for the header Services dropdown.
export const MENU_SERVICES = {
  production: {
    hub: { label: "Video Production Services", to: "/video-production-services" },
    items: [
      { label: "Corporate Film Production", to: "/services/corporate-film-production" },
      { label: "Ad Film & TVC Production", to: "/services/ad-film-production" },
      { label: "Industrial & Factory Shoots", to: "/services/industrial-photography-videography" },
      { label: "Corporate Photography", to: "/services/corporate-photography" },
      { label: "Product Photography & Video", to: "/services/product-photography" },
      { label: "Corporate Event Coverage", to: "/services/corporate-event-photography-videography" },
      { label: "Founder & CEO Portfolio Shoot", to: "/services/founder-director-portfolio-shoot" },
      { label: "Training & Explainer Videos", to: "/services/training-explainer-videos" },
      { label: "Real Estate Photography & Video", to: "/services/real-estate-photography-videography" },
      { label: "Drone & Aerial Photography", to: "/services/drone-photography-videography" },
    ],
  },
  marketing: {
    hub: { label: "Marketing Services", to: "/marketing-services" },
    items: [
      { label: "Social Media Management", to: "/services/social-media-management" },
      { label: "Digital Marketing", to: "/services/digital-marketing" },
      { label: "Content Creation", to: "/services/content-creation" },
      { label: "Branding & Design", to: "/services/branding-design" },
    ],
  },
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/video-production-services", mega: true },
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
  { icon: "Clapperboard", title: "Ad Films & TVC", slug: "ad-film-production", desc: "High-impact commercials and TVCs shot and finished in-house in Gurgaon." },
  { icon: "Factory", title: "Industrial & Factory Shoots", slug: "industrial-photography-videography", desc: "Plant walkthroughs and process films across Manesar and Delhi NCR industrial belts." },
  { icon: "Camera", title: "Corporate Photography", slug: "corporate-photography", desc: "Headshots, offices and events captured with editorial polish." },
  { icon: "Send", title: "Drone & Aerial Photography", slug: "drone-photography-videography", desc: "Certified pilots, fully compliant aerial cinematography across Gurgaon & NCR." },
  { icon: "Package", title: "Product Shoots", slug: "product-photography", desc: "Studio-grade product and packshot photography with lighting control." },
  { icon: "Share2", title: "Social Media Management", slug: "social-media-management", desc: "Always-on content, reels and community management for growing brands." },
  { icon: "TrendingUp", title: "Digital Marketing", slug: "digital-marketing", desc: "Performance campaigns, SEO and paid media that drive measurable ROI." },
];

// Which slugs belong to the marketing hub (for breadcrumbs).
export const MARKETING_SLUGS = ["social-media-management", "digital-marketing", "content-creation", "branding-design"];

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
