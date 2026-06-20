import Seo from '../components/Seo'
import { siteConfig } from '../app/siteConfig'

export default function TermsPage() {
  return (
    <>
      <Seo
        title="Terms of Use"
        description="Review the basic terms for using the VELMORA umbrella sourcing website and submitting product inquiries."
      />
      <main id="main-content">
        <section className="page-hero compact">
          <p className="section-label">Legal</p>
          <h1>Terms of Use</h1>
          <p>These terms apply to browsing this website and submitting umbrella sourcing inquiries.</p>
        </section>
        <section className="section legal-content">
          <p><strong>Last updated:</strong> June 20, 2026</p>
          <h2>Website Purpose</h2>
          <p>This website presents umbrella product concepts, sample specifications, and OEM/ODM sourcing information for inquiry purposes. It does not provide online checkout, live inventory, or confirmed order placement.</p>
          <h2>Product Information</h2>
          <p>Product images, specifications, MOQ, lead time, and pricing references should be confirmed before any commercial order. Final terms depend on product details, quantity, destination, packaging, and production schedule.</p>
          <h2>Inquiries</h2>
          <p>Submitting a form, email, or WhatsApp message does not create a purchase contract. A transaction is only formed after both parties confirm written commercial terms.</p>
          <h2>Intellectual Property</h2>
          <p>The VELMORA site design, copy, and visual presentation are provided for this project. Buyer logos, artwork, and custom designs remain subject to the rights and approvals of their owners.</p>
          <h2>External Services</h2>
          <p>Email, WhatsApp, hosting, analytics, or form services may be operated by third parties. Their own terms and privacy practices may apply.</p>
          <h2>Contact</h2>
          <p>Questions about these terms can be sent to <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
          <p className="demo-copy">Before final commercial launch, have these terms reviewed by a qualified legal adviser for your target markets.</p>
        </section>
      </main>
    </>
  )
}
