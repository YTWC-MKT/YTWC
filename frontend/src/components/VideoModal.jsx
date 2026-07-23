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

// Extracts a Google Drive file ID from a share link
// (drive.google.com/file/d/{ID}/view or /preview, with any query string).
export function getDriveFileId(url) {
  if (!url) return null;
  const match = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
  return match ? match[1] : null;
}

// Resolves any supported project video link to an embeddable iframe src,
// or null if the URL doesn't match a supported host.
export function getEmbedUrl(url) {
  const youtubeId = getYouTubeId(url);
  if (youtubeId) return `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`;
  const driveId = getDriveFileId(url);
  if (driveId) return `https://drive.google.com/file/d/${driveId}/preview`;
  return null;
}

export default function VideoModal({ videoUrl, title, onClose }) {
  const embedUrl = getEmbedUrl(videoUrl);

  useEffect(() => {
    if (!embedUrl) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [embedUrl, onClose]);

  if (!embedUrl) return null;

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
          src={embedUrl}
          title={title || "YTWC project video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
