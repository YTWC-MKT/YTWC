import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, Film } from "lucide-react";
import PageBreadcrumb from "../components/PageBreadcrumb";
import CTABand from "../components/CTABand";
import FaqAccordion from "../components/FaqAccordion";
import Seo from "../components/Seo";
import { BLOG_POSTS, BLOG_BY_SLUG } from "../data/blog";
import { articleSchema, faqSchema } from "../data/seo";

const fmt = (d) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

function Block({ b }) {
  if (b.type === "h2") return <h2 className="font-serif text-3xl text-white pt-4">{b.text}</h2>;
  if (b.type === "h3") return <h3 className="font-serif text-2xl text-white pt-2">{b.text}</h3>;
  if (b.type === "callout")
    return (
      <div className="not-prose bg-gold/10 border border-gold/30 p-8 my-8" data-testid="related-service-callout">
        <div className="flex items-start gap-4">
          <Film className="w-7 h-7 text-gold shrink-0 mt-1" />
          <div>
            <p className="text-xs uppercase tracking-wider text-gold mb-2">Related Service</p>
            <h3 className="font-serif text-2xl text-white mb-2">{b.service.title}</h3>
            <p className="text-white/70 text-base mb-4">{b.text}</p>
            <Link to={b.service.path} className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-gold hover:underline">Explore the service <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </div>
    );
  return <p>{b.text}</p>;
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_BY_SLUG[slug];
  if (!post) return <Navigate to="/blog" replace />;

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);
  const path = `/blog/${slug}`;
  const breadcrumbs = [{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }, { label: post.cat }];

  return (
    <>
      <Seo
        title={post.meta.title}
        description={post.meta.description}
        path={path}
        breadcrumbs={breadcrumbs}
        schemas={[articleSchema({ headline: post.title, path, image: post.img, date: post.date }), faqSchema(post.faqs)]}
      />
      <div className="h-20" />
      <PageBreadcrumb items={breadcrumbs} />

      <article className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-5">{post.cat}</p>
          <h1 className="font-serif text-4xl sm:text-5xl leading-tight text-white">{post.title}</h1>
          <p className="mt-6 text-sm text-white/50">By Lokesh Yadav · {fmt(post.date)}</p>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 my-12">
          <img src={post.img} alt={`${post.title} — featured image`} className="w-full aspect-video object-cover" />
        </div>

        <div className="max-w-3xl mx-auto px-6 md:px-12 space-y-6 text-white/75 text-lg leading-relaxed">
          {post.body.map((b, i) => <Block key={i} b={b} />)}
        </div>
      </article>

      <FaqAccordion faqs={post.faqs} title="Frequently Asked Questions" />

      <section className="py-16 md:py-24 bg-[#111111] border-y border-white/10" data-testid="related-posts">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-12">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group block bg-[#0A0A0A] border border-white/10 hover:border-gold/40 transition-colors">
                <div className="aspect-video overflow-hidden"><img src={p.img} alt={`${p.title} — related article`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
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
