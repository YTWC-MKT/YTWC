import PageBreadcrumb from "../components/PageBreadcrumb";
import Seo from "../components/Seo";
import { COMPANY } from "../data/site";

const sections = [
  {
    h: "Acceptance of Terms",
    body: `By accessing or using ${COMPANY.name}'s website ("Site") or engaging our production and marketing services, you agree to these Terms & Conditions. If you do not agree, please do not use the Site or our services.`,
  },
  {
    h: "Our Services",
    body: `${COMPANY.name} provides corporate video production, ad films, industrial and corporate photography, drone/aerial videography, and marketing services (social media management, digital marketing, content creation and branding). Scope, deliverables, timelines and pricing for any project are agreed separately in a project quote, proposal, or agreement between YTWC and the client, and those specific terms will govern the engagement alongside this page.`,
  },
  {
    h: "Enquiries & Quotes",
    body: `Submitting a form, WhatsApp message, or email enquiry through this Site does not create a binding contract. A project only begins once both parties confirm scope, pricing and timelines in writing.`,
  },
  {
    h: "Intellectual Property",
    body: `Unless otherwise agreed in a project contract, all content on this Site — including text, images, videos, logos and design — is the property of ${COMPANY.name} or its licensors and may not be copied, reproduced or distributed without prior written permission. Ownership and usage rights for deliverables produced for a specific client project are governed by that project's agreement.`,
  },
  {
    h: "Portfolio & Case Studies",
    body: `We may showcase completed projects, footage, and photography in our portfolio and marketing materials for demonstration purposes, unless a client has requested confidentiality in writing as part of their project agreement.`,
  },
  {
    h: "Limitation of Liability",
    body: `The Site and its content are provided "as is". While we make reasonable efforts to keep information accurate and up to date, ${COMPANY.name} is not liable for any indirect, incidental, or consequential loss arising from use of this Site.`,
  },
  {
    h: "Third-Party Links & Embeds",
    body: `This Site may include links or embedded content from third parties (e.g. YouTube, Google Drive, social media). We are not responsible for the content, availability, or practices of those third-party services.`,
  },
  {
    h: "Governing Law",
    body: `These Terms are governed by the laws of India, and any disputes arising from use of this Site shall be subject to the exclusive jurisdiction of the courts in Gurugram, Haryana.`,
  },
  {
    h: "Changes to These Terms",
    body: `We may revise these Terms from time to time. Continued use of the Site after changes are posted constitutes acceptance of the updated Terms.`,
  },
];

export default function TermsConditions() {
  const breadcrumbs = [{ label: "Home", to: "/" }, { label: "Terms & Conditions" }];
  return (
    <>
      <Seo
        title="Terms & Conditions | YTWC"
        description="Terms and conditions for using the YTWC Pvt Ltd website and engaging our production and marketing services."
        path="/terms-and-conditions"
        breadcrumbs={breadcrumbs}
      />
      <div className="h-20" />
      <PageBreadcrumb items={breadcrumbs} />

      <section className="py-16 md:py-24" data-testid="terms-conditions-page">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Legal</p>
          <h1 className="font-serif text-4xl sm:text-6xl text-white">Terms &amp; Conditions</h1>
          <p className="mt-5 text-white/50 text-sm">Effective date: 23 July 2026</p>
          <p className="mt-5 text-white/60 text-lg leading-relaxed">
            Please read these Terms &amp; Conditions carefully before using {`ytwc.in`} or engaging {COMPANY.name}'s services.
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
                For any questions about these Terms, write to us at{" "}
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
