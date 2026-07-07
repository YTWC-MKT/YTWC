# YTWC Pvt Ltd — Marketing Website PRD

## Problem Statement
Multi-page marketing website for YTWC Pvt Ltd — corporate video production house & marketing agency in Sector 77, Gurugram, serving Delhi NCR. Premium dark cinematic theme, gold accent, WhatsApp CTAs. Designed to later convert to WordPress/Elementor; clean section-based layouts. Strict SEO structure per page.

## Design System
- Fonts: Cormorant Garamond (headings), Outfit (body)
- Colors: #0A0A0A / #111111 dark, #D4AF37 gold accent, #25D366 WhatsApp
- Guidelines in /app/design_guidelines.json

## Architecture
- Backend: FastAPI + MongoDB. Endpoints: POST/GET `/api/contact` (enquiries), status routes.
- Frontend: React 19 + Tailwind + shadcn/ui. Content centralized in `/app/frontend/src/data/site.js`.
- Global: Layout wraps Header (sticky, services dropdown), Footer (4-col, full NAP), floating WhatsApp button, breadcrumb bar on inner pages.

## Pages Implemented (2026-07)
- `/` Home (hero, trust bar, 8 services, featured work, why, areas served, testimonials, FAQ, CTA)
- `/services/:slug` Service template — full content for `corporate-film-production` & `drone-photography-videography` (others redirect to flagship). Drone page: certified-pilot badge + drone-legality section.
- `/video-production-company-gurgaon` Location page (studio/map placeholder, localities, reviews)
- `/portfolio` filter tabs + masonry grid (12 items)
- `/about` story, studio, brands (YTWC/Elegant Photo Studio/ShutterDeck), team
- `/contact` DB-backed form (name/company/phone/email/service/message) + NAP + map placeholder
- `/blog` hub (6 posts) + `/blog/:slug` single post (article, related-service callout, FAQ, related posts)

## SEO
One H1/page, H2/H3 hierarchy, breadcrumbs, FAQ accordion, related-links section, full footer address, keyword+location alt text, semantic URLs.

## Status
- Tested via testing_agent_v3 iteration_1: backend 100%, frontend 100%, zero bugs.
- Logo (film-strip YTWC) used inverted in header/footer.

## Defaults Applied (user chose "assume defaults")
- Contact form stored in DB (NO email sending — would need Resend key)
- Stock cinematic images with SEO alt text
- Styled map placeholders (NO real Google Maps embed — would need API key)
- Static blog content

## Backlog / Next Actions
- P1: Real Google Maps embed (needs Maps API key) on Contact + Gurgaon pages
- P1: Email notification on new enquiry (Resend integration)
- P2: Dedicated content for remaining 6 service slugs (currently redirect to flagship)
- P2: Admin view for contact submissions
- P2: Dynamic/CMS-backed blog
