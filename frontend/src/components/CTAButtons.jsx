import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../data/site";

export const GetQuoteButton = ({ className = "", label = "Get a Quote", testid = "get-quote-btn" }) => (
  <Link
    to="/contact"
    data-testid={testid}
    className={`inline-flex items-center justify-center bg-gold text-black font-semibold px-7 py-3.5 uppercase tracking-widest text-xs hover:bg-gold-hover transition-colors ${className}`}
  >
    {label}
  </Link>
);

export const WhatsAppButton = ({ className = "", label = "WhatsApp Us", testid = "whatsapp-us-btn", message }) => (
  <a
    href={whatsappLink(message)}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={testid}
    className={`inline-flex items-center justify-center gap-2 bg-whatsapp text-white font-semibold px-7 py-3.5 uppercase tracking-widest text-xs hover:bg-whatsapp-hover transition-colors ${className}`}
  >
    <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
    {label}
  </a>
);

export const CTAPair = ({ className = "", prefix = "" }) => (
  <div className={`flex flex-wrap items-center gap-4 ${className}`}>
    <GetQuoteButton testid={`${prefix}get-quote-btn`} />
    <WhatsAppButton testid={`${prefix}whatsapp-us-btn`} />
  </div>
);
