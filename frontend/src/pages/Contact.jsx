import { useState } from "react";
import axios from "axios";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { toast, Toaster } from "sonner";
import PageBreadcrumb from "../components/PageBreadcrumb";
import FaqAccordion from "../components/FaqAccordion";
import Seo from "../components/Seo";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { COMPANY, SERVICES, whatsappLink } from "../data/site";
import { faqSchema } from "../data/seo";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const faqs = [
  { q: "How quickly do you respond?", a: "We reply to all enquiries within one business day, usually much sooner via WhatsApp." },
  { q: "How do I get a quote?", a: "Fill in the form with a short brief or message us on WhatsApp. We'll send a tailored quote within 24 hours." },
  { q: "Do you do site visits?", a: "Yes. For larger projects we're happy to visit your office or facility across Delhi NCR for a recce before the shoot." },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.message) {
      toast.error("Please fill in your name, phone, email and message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Thank you! Your enquiry has been received. We'll respond within 24 hours.");
      setForm({ name: "", company: "", phone: "", email: "", service: "", message: "" });
    } catch (err) {
      toast.error("Something went wrong. Please try again or reach us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls = "w-full bg-[#0A0A0A] border border-white/15 px-4 py-3.5 text-white placeholder:text-white/30 focus:border-gold focus:outline-none transition-colors";

  return (
    <>
      <Toaster theme="dark" position="top-center" richColors />
      <Seo
        title="Contact YTWC | Video Production in Gurgaon, Delhi NCR"
        description="Contact YTWC in Sector 77, Gurugram for corporate video, photography, drone and marketing across Delhi NCR. Call +91 99904 33338 or get a quote in 24 hours."
        path="/contact"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        schemas={[faqSchema(faqs)]}
      />
      <div className="h-20" />
      <PageBreadcrumb items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />

      <section className="py-16 md:py-24" data-testid="contact-section">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Get in Touch</p>
          <h1 className="font-serif text-4xl sm:text-6xl text-white">Contact YTWC</h1>
          <p className="mt-5 text-white/60 text-lg max-w-2xl">Tell us about your project in Gurgaon or anywhere in Delhi NCR — we&rsquo;ll get back within 24 hours.</p>

          <div className="grid lg:grid-cols-2 gap-12 mt-14">
            {/* Form */}
            <form onSubmit={submit} data-testid="contact-form" className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input data-testid="input-name" className={inputCls} placeholder="Name *" value={form.name} onChange={(e) => update("name", e.target.value)} />
                <input data-testid="input-company" className={inputCls} placeholder="Company" value={form.company} onChange={(e) => update("company", e.target.value)} />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <input data-testid="input-phone" className={inputCls} placeholder="Phone *" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                <input data-testid="input-email" type="email" className={inputCls} placeholder="Email *" value={form.email} onChange={(e) => update("email", e.target.value)} />
              </div>
              <Select value={form.service} onValueChange={(v) => update("service", v)}>
                <SelectTrigger data-testid="select-service" className={`${inputCls} h-auto rounded-none`}>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-[#111111] border-white/15 text-white">
                  {SERVICES.map((s) => (
                    <SelectItem key={s.slug} value={s.title} data-testid={`service-option-${s.slug}`} className="focus:bg-gold focus:text-black">{s.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <textarea data-testid="input-message" rows={5} className={inputCls} placeholder="Tell us about your project *" value={form.message} onChange={(e) => update("message", e.target.value)} />
              <button type="submit" disabled={loading} data-testid="submit-contact" className="w-full bg-gold text-black font-semibold px-8 py-4 uppercase tracking-widest text-sm hover:bg-gold-hover transition-colors disabled:opacity-60">
                {loading ? "Sending…" : "Submit Enquiry"}
              </button>
            </form>

            {/* NAP */}
            <div className="space-y-8">
              <div className="bg-[#111111] border border-white/10 p-8 space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />
                  <div><p className="text-xs uppercase tracking-wider text-white/40 mb-1">Studio Address</p><p className="text-white/80">{COMPANY.address.full}</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-gold mt-1 shrink-0" />
                  <div><p className="text-xs uppercase tracking-wider text-white/40 mb-1">Phone</p><p className="text-white/80">{COMPANY.phones[0]} / {COMPANY.phones[1]}</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-gold mt-1 shrink-0" />
                  <div><p className="text-xs uppercase tracking-wider text-white/40 mb-1">Email</p><p className="text-white/80">{COMPANY.email}</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-gold mt-1 shrink-0" />
                  <div><p className="text-xs uppercase tracking-wider text-white/40 mb-1">Business Hours</p><p className="text-white/80">{COMPANY.hours}</p></div>
                </div>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" data-testid="contact-whatsapp-btn" className="inline-flex items-center gap-2 bg-whatsapp text-white font-semibold px-6 py-3.5 uppercase tracking-widest text-xs hover:bg-whatsapp-hover transition-colors">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
              <div className="aspect-video bg-[#111111] border border-white/10 flex items-center justify-center relative overflow-hidden" data-testid="contact-map">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                <div className="relative text-center"><MapPin className="w-9 h-9 text-gold mx-auto mb-2" /><p className="text-white/80">YTWC Studio · Sector 77, Gurugram</p><p className="text-white/30 text-xs mt-2 uppercase tracking-wider">Google Map</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion faqs={faqs} title="Contact — Frequently Asked Questions" />
    </>
  );
}
