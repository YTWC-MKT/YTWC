import PageBreadcrumb from "../components/PageBreadcrumb";
import Seo from "../components/Seo";
import { COMPANY } from "../data/site";

const sections = [
  {
    h: "Information We Collect",
    body: `We collect information you provide directly to us — such as your name, email, phone number, company and project details — when you fill out a contact, quote, or careers form on this website, or message us on WhatsApp. We also automatically collect standard analytics data (pages visited, device/browser type, approximate location, referring site) via Google Analytics and Google Tag Manager when you browse the site.`,
  },
  {
    h: "How We Use Your Information",
    body: `We use the information you share to respond to enquiries, prepare quotes, deliver our production and marketing services, and — where relevant — to follow up about your project. Analytics data is used in aggregate to understand how visitors use the site and to improve its content and performance. We do not sell your personal information to third parties.`,
  },
  {
    h: "Cookies & Analytics",
    body: `This site uses cookies and similar technologies through Google Analytics and Google Tag Manager to understand site usage. You can control or delete cookies through your browser settings at any time; disabling cookies may affect some site functionality.`,
  },
  {
    h: "Sharing of Information",
    body: `We do not share your personal information with third parties except: service providers who help us operate the site or run our business (e.g. hosting, analytics, WhatsApp/email communication tools) under confidentiality obligations, or where required by law.`,
  },
  {
    h: "Data Retention & Security",
    body: `We retain enquiry and project information for as long as reasonably necessary to fulfil the purpose it was collected for, or as required by law. We take reasonable technical and organisational measures to protect your information, though no method of transmission over the internet is 100% secure.`,
  },
  {
    h: "Your Choices",
    body: `You may ask us to access, correct, or delete the personal information we hold about you by writing to us at the email address below. You may also opt out of promotional communication at any time.`,
  },
  {
    h: "Third-Party Links",
    body: `Our site may link to third-party sites (e.g. our social media pages, YouTube, Google Drive). We are not responsible for the privacy practices of those third-party sites.`,
  },
  {
    h: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.`,
  },
];

export default function PrivacyPolicy() {
  const breadcrumbs = [{ label: "Home", to: "/" }, { label: "Privacy Policy" }];
  return (
    <>
      <Seo
        title="Privacy Policy | YTWC"
        description="How YTWC Pvt Ltd collects, uses and protects your information across our website and services."
        path="/privacy-policy"
        breadcrumbs={breadcrumbs}
      />
      <div className="h-20" />
      <PageBreadcrumb items={breadcrumbs} />

      <section className="py-16 md:py-24" data-testid="privacy-policy-page">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Legal</p>
          <h1 className="font-serif text-4xl sm:text-6xl text-white">Privacy Policy</h1>
          <p className="mt-5 text-white/50 text-sm">Effective date: 23 July 2026</p>
          <p className="mt-5 text-white/60 text-lg leading-relaxed">
            {COMPANY.name} ("YTWC", "we", "us", "our") respects your privacy. This policy explains what
            information we collect through {`ytwc.in`}, how we use it, and the choices you have.
          </p>

          <div className="mt-14 space-y-12">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-3">{s.h}</h2>
                <p className="text-white/60 leading-relaxed">{s.body}</p>
              </div>
            ))}

            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-white mb-3">Contact Us</h2>
              <p className="text-white/60 leading-relaxed">
                For any questions about this Privacy Policy, write to us at{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-gold hover:underline">{COMPANY.email}</a>{" "}
                or visit us at {COMPANY.address.full}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
