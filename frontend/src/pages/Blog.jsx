import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageBreadcrumb from "../components/PageBreadcrumb";
import CTABand from "../components/CTABand";
import Seo from "../components/Seo";
import { BLOG_POSTS } from "../data/blog";

const fmt = (d) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export default function Blog() {
  const breadcrumbs = [{ label: "Home", to: "/" }, { label: "Blog" }];
  return (
    <>
      <Seo title="Production & Marketing Insights | YTWC Blog" description="Guides on corporate video, ad films, drone shoots and marketing across Gurgaon and Delhi NCR — from the YTWC production team." path="/blog" breadcrumbs={breadcrumbs} />
      <div className="h-20" />
      <PageBreadcrumb items={breadcrumbs} />

      <section className="py-16 md:py-24" data-testid="blog-hub">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">The Journal</p>
          <h1 className="font-serif text-4xl sm:text-6xl text-white">Production &amp; Marketing Insights</h1>
          <p className="mt-5 text-white/60 text-lg max-w-2xl">Guides, pricing breakdowns and creative thinking for brands producing video and content across Gurgaon and Delhi NCR.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {BLOG_POSTS.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} data-testid={`blog-card-${p.slug}`} className="group block bg-[#111111] border border-white/10 hover:border-gold/40 transition-colors">
                <div className="aspect-video overflow-hidden">
                  <img src={p.img} alt={`${p.title} — YTWC blog article`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-gold mb-3">
                    <span>{p.cat}</span><span className="text-white/20">·</span><span className="text-white/40">{fmt(p.date)}</span>
                  </div>
                  <h2 className="font-serif text-2xl text-white leading-snug mb-3 group-hover:text-gold transition-colors">{p.title}</h2>
                  <p className="text-sm text-white/60 leading-relaxed mb-5">{p.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white/70 group-hover:text-gold">Read more <ArrowRight className="w-4 h-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand prefix="blog-cta-" />
    </>
  );
}
