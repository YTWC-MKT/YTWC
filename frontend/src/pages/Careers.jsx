import { useState } from "react";
import axios from "axios";
import { MapPin, Clock, Sparkles } from "lucide-react";
import { toast, Toaster } from "sonner";
import PageBreadcrumb from "../components/PageBreadcrumb";
import Seo from "../components/Seo";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const roles = [
  { title: "Video Editor", type: "Full-time · Gurgaon", desc: "Cut story-first corporate and ad films with strong pacing and grade." },
  { title: "Cinematographer / DOP", type: "Full-time · Gurgaon", desc: "Lead camera and lighting on corporate, industrial and ad shoots across NCR." },
  { title: "Content Producer", type: "Full-time · Gurgaon", desc: "Plan and run reels and content shoots for brand social accounts." },
  { title: "Performance Marketer", type: "Full-time · Gurgaon", desc: "Run Meta & Google campaigns with a focus on measurable ROI." },
  { title: "Certified Drone Pilot", type: "Full-time / Freelance", desc: "Operate compliant aerial shoots for factory, real estate and events." },
  { title: "Client Servicing / Producer", type: "Full-time · Gurgaon", desc: "Own projects end to end and keep clients delighted." },
];

const culture = [
  "Work with our own studio, gear and in-house crew — no rental delays.",
  "Ship real projects for real brands across Delhi NCR.",
  "A team that values craft, ownership and fast learning.",
];

export default function Careers() {
  const breadcrumbs = [{ label: "Home", to: "/" }, { label: "Careers" }];
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "", message: "" });
  const [loading, setLoading] = useState(false);
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill in your name, email and phone.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, {
        name: form.name, email: form.email, phone: form.phone, company: "",
        service: `Careers: ${form.role || "General"}`,
        message: form.message || "Job application",
      });
      toast.success("Application received! Our team will be in touch.");
      setForm({ name: "", email: "", phone: "", role: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again or email hi@ytwc.in.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls = "w-full bg-[#0A0A0A] border border-white/15 px-4 py-3.5 text-white placeholder:text-white/30 focus:border-gold focus:outline-none transition-colors";

  return (
    <>
      <Toaster theme="dark" position="top-center" richColors />
      <Seo title="Careers at YTWC | Production & Marketing Jobs Gurgaon" description="Join YTWC — a production house and marketing agency in Gurgaon. Open roles for editors, cinematographers, marketers and certified drone pilots in Delhi NCR." path="/careers" breadcrumbs={breadcrumbs} />
      <div className="h-20" />
      <PageBreadcrumb items={breadcrumbs} />

      <section className="py-16 md:py-24" data-testid="careers-page">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Join the Team</p>
          <h1 className="font-serif text-4xl sm:text-6xl text-white">Careers at YTWC</h1>
          <p className="mt-5 text-white/60 text-lg max-w-2xl">We're building the production house Fortune-500 marketing heads hire — from our studio in Sector 77, Gurgaon. If you love craft and moving fast, we'd love to meet you.</p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {culture.map((c) => (
              <div key={c} className="bg-[#111111] border border-white/10 p-6 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-gold shrink-0 mt-1" />
                <p className="text-white/70 text-sm leading-relaxed">{c}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-white mt-16 mb-8">Open Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((r) => (
              <div key={r.title} className="bg-[#111111] border border-white/10 p-8 hover:border-gold/40 transition-colors">
                <h3 className="font-sans text-lg font-medium text-white">{r.title}</h3>
                <p className="text-xs uppercase tracking-wider text-gold mt-1 mb-4">{r.type}</p>
                <p className="text-sm text-white/60 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6">Apply Now</h2>
              <form onSubmit={submit} data-testid="careers-form" className="space-y-5">
                <input data-testid="careers-name" className={inputCls} placeholder="Full name *" value={form.name} onChange={(e) => update("name", e.target.value)} />
                <div className="grid sm:grid-cols-2 gap-5">
                  <input data-testid="careers-email" type="email" className={inputCls} placeholder="Email *" value={form.email} onChange={(e) => update("email", e.target.value)} />
                  <input data-testid="careers-phone" className={inputCls} placeholder="Phone *" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                </div>
                <Select value={form.role} onValueChange={(v) => update("role", v)}>
                  <SelectTrigger data-testid="careers-role" className={`${inputCls} h-auto rounded-none`}><SelectValue placeholder="Role you're applying for" /></SelectTrigger>
                  <SelectContent className="bg-[#111111] border-white/15 text-white">
                    {roles.map((r) => (<SelectItem key={r.title} value={r.title} className="focus:bg-gold focus:text-black">{r.title}</SelectItem>))}
                  </SelectContent>
                </Select>
                <textarea data-testid="careers-message" rows={4} className={inputCls} placeholder="Portfolio link & a line about you" value={form.message} onChange={(e) => update("message", e.target.value)} />
                <button type="submit" disabled={loading} data-testid="careers-submit" className="w-full bg-gold text-black font-semibold px-8 py-4 uppercase tracking-widest text-sm hover:bg-gold-hover transition-colors disabled:opacity-60">{loading ? "Sending…" : "Submit Application"}</button>
              </form>
            </div>
            <div className="bg-[#111111] border border-white/10 p-8 space-y-5 h-fit">
              <p className="text-white/70 leading-relaxed">Prefer email? Send your CV and portfolio to <a href="mailto:hi@ytwc.in" className="text-gold hover:underline">hi@ytwc.in</a>.</p>
              <p className="flex items-start gap-3 text-white/80"><MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />Plot No. 70, Avenue 77, Sector 77, Gurugram, Haryana 122004</p>
              <p className="flex items-start gap-3 text-white/80"><Clock className="w-5 h-5 text-gold mt-1 shrink-0" />Mon – Sat · 10:00 AM – 7:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
