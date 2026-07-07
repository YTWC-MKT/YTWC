import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, Film } from "lucide-react";
import PageBreadcrumb from "../components/PageBreadcrumb";
import CTABand from "../components/CTABand";
import FaqAccordion from "../components/FaqAccordion";
import { BLOG_POSTS } from "../data/site";

const faqs = [
  { q: "What's the cheapest way to produce a corporate video in Gurgaon?", a: "A single-day shoot at our Sector 77 studio with a lean crew and templated edit keeps costs lowest while staying professional. Share your brief for the exact figure." },
  { q: "Do prices include editing and music?", a: "Yes — our quotes are all-inclusive, covering shoot, editing, color grade, licensed music and delivery in all formats." },
  { q: "Are travel charges extra for Delhi or Noida shoots?", a: "For locations across Delhi NCR, minimal travel/logistics may apply and is always shown transparently in your quote." },
  { q: "How do I get an exact quote?", a: "Send us your brief via the contact form or WhatsApp. We respond with a tailored, itemised quote within 24 hours." },
];

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <div className="h-20" />
      <PageBreadcrumb items={[{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }, { label: post.cat }]} />

      <article className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-5">{post.cat}</p>
          <h1 className="font-serif text-4xl sm:text-5xl leading-tight text-white">{post.title}</h1>
          <p className="mt-6 text-sm text-white/50">By YTWC Editorial · {post.date}</p>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 my-12">
          <img src={post.img} alt={`${post.title} — featured image`} className="w-full aspect-video object-cover" />
        </div>

        <div className="max-w-3xl mx-auto px-6 md:px-12 space-y-6 text-white/75 text-lg leading-relaxed">
          <p>If you&rsquo;re budgeting for a corporate video in Gurgaon or anywhere in Delhi NCR, the honest answer is: it depends. But it depends on a predictable set of factors. This guide breaks them down so you can plan with confidence in 2026.</p>

          <h2 className="font-serif text-3xl text-white pt-4">What Drives Corporate Video Cost?</h2>
          <p>Most quotes come down to five variables: shoot days, crew size, equipment, locations and post-production complexity. A single-day studio interview will always cost less than a multi-location factory film with drone aerials.</p>

          <h3 className="font-serif text-2xl text-white pt-2">1. Shoot Days &amp; Crew</h3>
          <p>The single biggest lever is time on set. A lean one-day shoot with a compact crew is the most economical route, while multi-day productions with directors, DOPs and dedicated lighting teams scale up accordingly.</p>

          <h3 className="font-serif text-2xl text-white pt-2">2. Post-Production</h3>
          <p>Editing, color grading, motion graphics, voiceover and licensed music all add to the finish. The good news: because YTWC edits in-house at our Sector 77 studio, you avoid the markups agencies add when outsourcing.</p>

          <h2 className="font-serif text-3xl text-white pt-4">Typical Ranges in Gurgaon &amp; Delhi NCR</h2>
          <p>As a rough guide, a straightforward corporate profile film starts modestly, while premium brand films with multiple locations and aerial cinematography sit higher. Every project is custom-quoted — we&rsquo;ll give you an itemised estimate within 24 hours.</p>

          {/* Related service callout */}
          <div className="not-prose bg-gold/10 border border-gold/30 p-8 my-8" data-testid="related-service-callout">
            <div className="flex items-start gap-4">
              <Film className="w-7 h-7 text-gold shrink-0 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-wider text-gold mb-2">Related Service</p>
                <h3 className="font-serif text-2xl text-white mb-2">Corporate Film Production in Gurgaon</h3>
                <p className="text-white/70 text-base mb-4">See what&rsquo;s included, our process and recent films — then request a tailored quote.</p>
                <Link to="/services/corporate-film-production" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-gold hover:underline">Explore the service <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-white pt-4">Final Word</h2>
          <p>The most cost-effective corporate video is one that&rsquo;s scoped correctly from the start. Talk to a production partner with its own studio and crew — like YTWC — and you&rsquo;ll get transparent pricing without agency mark-ups.</p>
        </div>
      </article>

      <FaqAccordion faqs={faqs} title="Frequently Asked Questions" />

      {/* Related posts */}
      <section className="py-16 md:py-24 bg-[#111111] border-y border-white/10" data-testid="related-posts">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-12">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group block bg-[#0A0A0A] border border-white/10 hover:border-gold/40 transition-colors">
                <div className="aspect-video overflow-hidden"><img src={p.img} alt={`${p.title} — related article`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-gold mb-2">{p.cat}</p>
                  <h3 className="font-serif text-xl text-white leading-snug group-hover:text-gold transition-colors">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand prefix="blogpost-cta-" />
    </>
  );
}
