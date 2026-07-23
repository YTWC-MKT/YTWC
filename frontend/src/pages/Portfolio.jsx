import { useState } from "react";
import { Play } from "lucide-react";
import PageBreadcrumb from "../components/PageBreadcrumb";
import CTABand from "../components/CTABand";
import Seo from "../components/Seo";
import VideoModal, { getYouTubeId } from "../components/VideoModal";
import { PORTFOLIO, PORTFOLIO_FILTERS } from "../data/site";
import latestVideo from "../data/latestVideo.json";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [activeVideo, setActiveVideo] = useState(null);
  const items = filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.cat === filter);

  return (
    <>
      <Seo
        title="Our Work | Video & Photo Portfolio | YTWC"
        description="Explore YTWC's portfolio — corporate films, ad films, industrial shoots, photography and drone work from across Gurgaon and Delhi NCR."
        path="/portfolio"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Portfolio" }]}
      />
      <div className="h-20" />
      <PageBreadcrumb items={[{ label: "Home", to: "/" }, { label: "Portfolio" }]} />

      <section className="py-16 md:py-24" data-testid="portfolio-section">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Selected Projects</p>
          <h1 className="font-serif text-4xl sm:text-6xl text-white">Our Work</h1>
          <p className="mt-5 text-white/60 text-lg max-w-2xl">Corporate films, ad films, industrial shoots, photography and drone cinematography from across Gurgaon and Delhi NCR.</p>

          {/* Latest upload, pulled automatically from youtube.com/@YTWC-Studio at build time */}
          {latestVideo && (
            <button
              type="button"
              data-testid="latest-youtube-upload"
              onClick={() => setActiveVideo({ videoUrl: latestVideo.url, title: latestVideo.title })}
              className="group relative mt-10 w-full overflow-hidden aspect-[21/9] block text-left"
            >
              <img
                src={latestVideo.thumbnail}
                alt={latestVideo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-16 h-16 rounded-full bg-gold text-black flex items-center justify-center">
                  <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-widest text-gold">Latest Upload · YTWC on YouTube</span>
                <p className="font-serif text-xl sm:text-2xl text-white mt-1">{latestVideo.title}</p>
              </div>
            </button>
          )}

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mt-10 mb-12">
            {PORTFOLIO_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                data-testid={`filter-${f.toLowerCase().replace(/\s+/g, "-")}`}
                className={`px-5 py-2.5 text-xs uppercase tracking-wider border transition-colors ${
                  filter === f ? "bg-gold text-black border-gold" : "border-white/15 text-white/70 hover:border-gold/50 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {items.map((p, i) => {
              const hasVideo = Boolean(getYouTubeId(p.videoUrl));
              const Wrapper = hasVideo ? "button" : "div";
              return (
                <Wrapper
                  key={p.title}
                  type={hasVideo ? "button" : undefined}
                  data-testid="portfolio-item"
                  onClick={hasVideo ? () => setActiveVideo(p) : undefined}
                  className={`group relative block w-full text-left overflow-hidden mb-6 break-inside-avoid ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"} ${hasVideo ? "cursor-pointer" : ""}`}
                >
                  <img src={p.img} alt={p.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {hasVideo && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="w-14 h-14 rounded-full bg-gold text-black flex items-center justify-center">
                        <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-5 left-5">
                    <span className="text-[10px] uppercase tracking-widest text-gold">{p.cat}</span>
                    <p className="font-serif text-xl text-white">{p.title}</p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand prefix="portfolio-cta-" />

      {activeVideo && (
        <VideoModal
          videoUrl={activeVideo.videoUrl}
          title={activeVideo.title}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </>
  );
}
