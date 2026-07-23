import { useEffect } from "react";
import { X } from "lucide-react";

// Extracts an 11-char YouTube video ID from any common URL shape
// (watch?v=, youtu.be/, /embed/, with or without extra query params).
export function getYouTubeId(url) {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  );
  return match ? match[1] : null;
}

export default function VideoModal({ videoUrl, title, onClose }) {
  const videoId = getYouTubeId(videoUrl);

  useEffect(() => {
    if (!videoId) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [videoId, onClose]);

  if (!videoId) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4"
      data-testid="video-modal"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close video"
        data-testid="video-modal-close"
        className="absolute top-6 right-6 text-white/80 hover:text-gold transition-colors"
        onClick={onClose}
      >
        <X className="w-8 h-8" />
      </button>
      <div
        className="w-full max-w-5xl aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className="w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title || "YTWC project video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
