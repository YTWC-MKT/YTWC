import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../data/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="floating-whatsapp-btn"
      aria-label="Chat with YTWC on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-white shadow-lg shadow-black/40 hover:bg-whatsapp-hover hover:scale-105 transition-all"
    >
      <MessageCircle className="w-7 h-7" strokeWidth={2} />
      <span className="absolute inline-flex h-full w-full rounded-full bg-whatsapp opacity-40 animate-ping" />
    </a>
  );
}
