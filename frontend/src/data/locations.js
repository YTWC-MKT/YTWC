import { IMAGES } from "./site";

// Location pages — Gurgaon template generalized. Unique local copy per city.
export const LOCATIONS = {
  gurgaon: {
    path: "/video-production-company-gurgaon",
    breadcrumb: "Gurgaon",
    eyebrow: "Gurugram · Haryana",
    h1: "Video Production Company in Gurgaon",
    subline: "Our studio in Sector 77 anchors full-service video production across Gurgaon — covering Udyog Vihar, Cyber City, Sohna Road, Golf Course Road and Manesar, with reach into all of Delhi NCR.",
    heroAlt: "video production company office and studio in Gurgaon",
    heroImg: IMAGES.corporateOffice,
    meta: { title: "Video Production Company in Gurgaon | YTWC", description: "Video production company in Gurgaon with an in-house studio in Sector 77. Corporate films, photography and drone across Gurgaon & Delhi NCR." },
    geo: { lat: 28.4089, lng: 77.0426 },
    hasStudio: true,
    coverageTitle: "Our Studio in Sector 77",
    coverage: "Located in the heart of New Gurgaon, our Sector 77 studio houses cinema cameras, lighting, audio and edit suites — everything needed to take your project from brief to delivery in one place. From here we shoot across Udyog Vihar, Cyber City, DLF phases, Sohna Road, Golf Course Road and the Manesar industrial belt.",
    localities: ["Udyog Vihar", "Cyber City", "Sohna Road", "Golf Course Road", "MG Road", "Sector 44", "DLF Phase 1–5", "Manesar", "Sector 77", "New Gurgaon"],
    reviews: [
      { name: "Priya Kapoor", text: "Shot our company profile at their Sector 77 studio — professional crew and a stunning final film.", rating: 5 },
      { name: "Arjun Mehta", text: "Best video production company in Gurgaon we've worked with. Fast, reliable and creative.", rating: 5 },
      { name: "Neha Verma", text: "They covered our Cyber City event beautifully and delivered ahead of schedule.", rating: 5 },
    ],
    faqs: [
      { q: "Do you travel across Gurgaon?", a: "Yes. We shoot anywhere in Gurgaon — Udyog Vihar, Cyber City, Sohna Road, Golf Course Road, Manesar and beyond — as well as across Delhi NCR." },
      { q: "Can we shoot at your studio?", a: "Absolutely. Our fully-equipped studio in Sector 77, Gurugram, is available for interviews, product shoots and controlled setups." },
      { q: "Do you offer same-day shoots?", a: "For simpler requirements we can often accommodate same-day or next-day shoots, subject to crew and equipment availability." },
      { q: "How do we book?", a: "Send us a brief via 'Get a Quote' or WhatsApp. We confirm availability and share a tailored quote within 24 hours." },
    ],
    relatedLocations: [
      { label: "Delhi NCR", to: "/video-production-company-delhi-ncr" },
      { label: "Noida", to: "/video-production-company-noida" },
      { label: "Delhi", to: "/video-production-company-delhi" },
    ],
  },

  "delhi-ncr": {
    path: "/video-production-company-delhi-ncr",
    breadcrumb: "Delhi NCR",
    eyebrow: "The Entire Region",
    h1: "Video Production Company in Delhi NCR",
    subline: "One production partner for the whole National Capital Region — Gurgaon, Delhi, Noida, Greater Noida, Faridabad, Manesar, Ghaziabad and Sonipat — run from our own studio in Sector 77, Gurugram.",
    heroAlt: "video production company covering Delhi NCR skyline",
    heroImg: IMAGES.heroHome,
    meta: { title: "Video Production Company in Delhi NCR | YTWC", description: "Video production company serving all of Delhi NCR — Gurgaon, Delhi, Noida, Faridabad, Manesar. Films, photography and drone from one studio." },
    geo: { lat: 28.6139, lng: 77.209 },
    hasStudio: false,
    coverageTitle: "Coverage Across Delhi NCR",
    coverage: "Delhi NCR is one of India's largest business regions, and our crews move across it every week. From corporate parks in Gurgaon and Noida to industrial estates in Faridabad and Manesar and head offices in central Delhi, we bring a single, consistent production standard wherever your shoot is. Our Sector 77 studio serves as the hub for editing, product shoots and controlled setups.",
    localities: ["Gurgaon", "Delhi", "Noida", "Greater Noida", "Faridabad", "Manesar", "Ghaziabad", "Sonipat"],
    reviews: [
      { name: "Sanjay Rao", text: "We needed shoots in three NCR cities — YTWC handled it all with one team and one look.", rating: 5 },
      { name: "Meera Iyer", text: "Reliable across the region. They understand how to move a crew around Delhi NCR.", rating: 5 },
      { name: "Karan Gill", text: "From Noida to Manesar, consistent quality every time.", rating: 5 },
    ],
    faqs: [
      { q: "Which cities in Delhi NCR do you cover?", a: "Gurgaon, Delhi, Noida, Greater Noida, Faridabad, Manesar, Ghaziabad and Sonipat — the entire NCR." },
      { q: "Do you charge extra for travel across NCR?", a: "Minimal logistics may apply for distant locations and is always shown transparently in your quote." },
      { q: "Can you run multi-city shoots?", a: "Yes. We regularly manage projects that span multiple NCR cities with a single coordinated crew." },
      { q: "Where is your base?", a: "Our studio and base are in Sector 77, Gurugram, central to the whole region." },
    ],
    relatedLocations: [
      { label: "Gurgaon", to: "/video-production-company-gurgaon" },
      { label: "Noida", to: "/video-production-company-noida" },
      { label: "Delhi", to: "/video-production-company-delhi" },
    ],
  },

  noida: {
    path: "/video-production-company-noida",
    breadcrumb: "Noida",
    eyebrow: "Noida · Uttar Pradesh",
    h1: "Video Production Company in Noida",
    subline: "Corporate films, photography and content production across Noida, Greater Noida and Film City — for the IT parks, corporate campuses and media houses that call the region home.",
    heroAlt: "video production shoot at a Noida corporate park",
    heroImg: IMAGES.heroService,
    meta: { title: "Video Production Company in Noida | YTWC", description: "Video production company in Noida & Greater Noida — corporate films, photography, drone and content for IT parks and corporate campuses." },
    geo: { lat: 28.5355, lng: 77.391 },
    hasStudio: false,
    coverageTitle: "Coverage Across Noida",
    coverage: "Noida's dense cluster of IT parks, corporate campuses and media houses makes it one of NCR's busiest production markets. We shoot across the sectors — from the corporate belt around Sector 62 and 63 to Film City in Sector 16A — as well as Greater Noida's manufacturing and institutional campuses. Our Gurgaon studio backs every Noida project with in-house editing and finishing.",
    localities: ["Sector 62", "Sector 63", "Film City (Sector 16A)", "Sector 18", "Sector 125", "Greater Noida", "Knowledge Park", "Expressway corporate parks"],
    reviews: [
      { name: "Ritu Anand", text: "Filmed our office in Sector 62 and delivered a polished corporate film fast.", rating: 5 },
      { name: "Deepak Sethi", text: "Great experience shooting at Film City — professional and organised.", rating: 5 },
      { name: "Aisha Khan", text: "They handled our Greater Noida campus shoot end to end.", rating: 5 },
    ],
    faqs: [
      { q: "Do you shoot across Noida and Greater Noida?", a: "Yes — from the Sector 62/63 corporate belt to Film City and Greater Noida's campuses." },
      { q: "Can you film at Film City studios?", a: "Yes, we shoot at Film City and other Noida locations, arranging access as needed." },
      { q: "Where is your team based?", a: "Our studio is in Sector 77, Gurugram; we travel to Noida regularly for shoots." },
      { q: "How do we get a quote for a Noida shoot?", a: "Share your brief via 'Get a Quote' or WhatsApp and we'll respond within 24 hours." },
    ],
    relatedLocations: [
      { label: "Delhi NCR", to: "/video-production-company-delhi-ncr" },
      { label: "Delhi", to: "/video-production-company-delhi" },
      { label: "Gurgaon", to: "/video-production-company-gurgaon" },
    ],
  },

  delhi: {
    path: "/video-production-company-delhi",
    breadcrumb: "Delhi",
    eyebrow: "New Delhi",
    h1: "Video Production Company in Delhi",
    subline: "Professional video production and photography across Delhi — from the business hubs of Connaught Place and Nehru Place to South Delhi and the Okhla industrial area.",
    heroAlt: "video production crew filming in a Delhi business district",
    heroImg: IMAGES.camera,
    meta: { title: "Video Production Company in Delhi | YTWC", description: "Video production company in Delhi — corporate films, photography and content across Connaught Place, Nehru Place, South Delhi and Okhla." },
    geo: { lat: 28.6139, lng: 77.209 },
    hasStudio: false,
    coverageTitle: "Coverage Across Delhi",
    coverage: "Delhi's business geography spreads from the corporate towers of Connaught Place and the tech-and-trade hub of Nehru Place to the offices of South Delhi and the workshops of the Okhla industrial area. We produce corporate films, event coverage and photography across all of them, planning carefully around Delhi's access and — where aerial shots are involved — its stricter drone zones, always with fully compliant operations.",
    localities: ["Connaught Place", "Nehru Place", "South Delhi", "Okhla", "Saket", "Aerocity", "Jasola", "Bhikaji Cama Place"],
    reviews: [
      { name: "Vivek Malhotra", text: "Shot our CP head office beautifully and managed the logistics smoothly.", rating: 5 },
      { name: "Shalini Bose", text: "Handled a tricky South Delhi location shoot with ease.", rating: 5 },
      { name: "Imran Sheikh", text: "Professional team, great results in Nehru Place.", rating: 5 },
    ],
    faqs: [
      { q: "Do you cover all of Delhi?", a: "Yes — Connaught Place, Nehru Place, South Delhi, Okhla, Aerocity and more." },
      { q: "Can you do drone shoots in Delhi?", a: "Central Delhi has heavy drone restrictions near airports and VIP zones. We assess each site and only fly with permissions and fully compliant operations." },
      { q: "Where is your studio?", a: "In Sector 77, Gurugram — a short drive from most Delhi business hubs." },
      { q: "How do we book a Delhi shoot?", a: "Send a brief via 'Get a Quote' or WhatsApp; we reply within 24 hours." },
    ],
    relatedLocations: [
      { label: "Delhi NCR", to: "/video-production-company-delhi-ncr" },
      { label: "Gurgaon", to: "/video-production-company-gurgaon" },
      { label: "Noida", to: "/video-production-company-noida" },
    ],
  },

  "faridabad-manesar": {
    path: "/industrial-shoot-faridabad-manesar",
    breadcrumb: "Faridabad & Manesar",
    eyebrow: "NCR Industrial Belt",
    h1: "Industrial & Factory Shoots in Faridabad & Manesar",
    subline: "Specialist industrial photography and videography for the Faridabad and Manesar manufacturing belt — plant walkthroughs, machinery films and safety-compliant crews, with compliant drone aerials.",
    heroAlt: "industrial factory videography shoot in Manesar",
    heroImg: IMAGES.corporateOffice,
    meta: { title: "Industrial & Factory Shoots Faridabad & Manesar | YTWC", description: "Industrial & factory shoots in Faridabad and Manesar — plant walkthroughs, machinery videos, safety-compliant crews and compliant drone aerials." },
    geo: { lat: 28.3549, lng: 76.9391 },
    hasStudio: false,
    industrial: true,
    coverageTitle: "Serving the Faridabad–Manesar Industrial Belt",
    coverage: "Faridabad and Manesar form the manufacturing backbone of Delhi NCR — auto components, engineering, electronics and heavy industry. Filming here means working safely around live machinery and following strict plant protocols. Our crews arrive PPE-ready, complete site safety inductions, and plan shots around production shifts. For campus-scale aerials we deploy trained and certified pilots with fully compliant drone operations.",
    localities: ["Manesar (IMT)", "Faridabad Sector 24–25", "Ballabgarh", "Sohna industrial belt", "Bhiwadi (nearby)", "Pataudi Road", "NH-8 corridor"],
    reviews: [
      { name: "R. K. Sharma", text: "They filmed our Manesar plant without disrupting the line — impressive coordination.", rating: 5 },
      { name: "Anil Kumar", text: "Great machinery footage and safety-first approach at our Faridabad unit.", rating: 5 },
      { name: "Pooja Grover", text: "Aerials of our campus came out cinematic and fully compliant.", rating: 5 },
    ],
    faqs: [
      { q: "Do you shoot inside factories in Faridabad and Manesar?", a: "Yes — it's a core specialism. We film inside live plants across the Faridabad–Manesar belt following your safety and access protocols." },
      { q: "Are your crews safety-trained?", a: "Yes. Crews use required PPE, complete site inductions and plan around live machinery and restricted zones." },
      { q: "Can you capture aerial views of the plant?", a: "Yes, with trained and certified pilots and fully compliant drone operations, subject to permissions." },
      { q: "Will filming disrupt production?", a: "We schedule around shifts and pre-plan shot lists to avoid downtime." },
      { q: "How do we get a quote?", a: "Share your facility details via 'Get a Quote' or WhatsApp for a custom quote within 24 hours." },
    ],
    relatedLocations: [
      { label: "Delhi NCR", to: "/video-production-company-delhi-ncr" },
      { label: "Gurgaon", to: "/video-production-company-gurgaon" },
    ],
    relatedServices: [
      { title: "Industrial & Factory Photography and Videography", slug: "industrial-photography-videography" },
      { title: "Drone & Aerial Photography", slug: "drone-photography-videography" },
    ],
  },
};

export const LOCATION_BY_PATH = Object.fromEntries(
  Object.entries(LOCATIONS).map(([key, v]) => [v.path, key])
);
