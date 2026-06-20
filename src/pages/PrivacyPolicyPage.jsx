import Seo from '../components/Seo'
import { siteConfig } from '../app/siteConfig'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Read how VELMORA handles contact and inquiry information submitted through the umbrella sourcing website."
      />
      <main id="main-content">
        <section className="page-hero compact">
          <p className="section-label">Legal</p>
          <h1>Privacy Policy</h1>
          <p>This policy explains how inquiry information is handled on the VELMORA website.</p>
        </section>
        <section className="section legal-content">
          <p><strong>Last updated:</strong> June 20, 2026</p>
          <h2>Information We Collect</h2>
          <p>When you submit an inquiry, we may collect your name, company name, country or region, email address, WhatsApp number, customer type, product interest, estimated quantity, and message details.</p>
          <h2>How We Use Information</h2>
          <p>We use inquiry information to respond to product, wholesale, and OEM/ODM requests, prepare sourcing discussions, and follow up about related umbrella programs.</p>
          <h2>Sharing</h2>
          <p>We do not sell inquiry information. We may share necessary details with service providers or fulfillment partners only when needed to respond to your request or support business communication.</p>
          <h2>Contact Options</h2>
          <p>If you contact us by email or WhatsApp, your message will also be handled by those third-party services under their own privacy practices.</p>
          <h2>Data Retention</h2>
          <p>Inquiry information is kept only as long as needed for business communication, legal obligations, or reasonable record keeping.</p>
          <h2>Your Choices</h2>
          <p>You may ask us to update or delete inquiry information by contacting <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
          <p className="demo-copy">Before final commercial launch, have this policy reviewed against the laws of your target markets.</p>
        </section>
      </main>
    </>
  )
}
