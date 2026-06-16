import InquiryForm from '../components/inquiry/InquiryForm'
import Seo from '../components/Seo'
import { siteConfig, whatsappUrl } from '../app/siteConfig'
import { useInquiry } from '../features/inquiry/InquiryContext'

export default function ContactPage() {
  const { source } = useInquiry()
  return (
    <>
      <Seo title="Contact and Request a Quote" description="Send VELMORA a retail, wholesale, or OEM and ODM umbrella inquiry." />
      <main id="main-content">
        <section className="page-hero compact"><p className="section-label">Contact VELMORA</p><h1>Start your umbrella inquiry.</h1><p>Share what you need and the team can respond with the right next questions.</p></section>
        <section className="contact-layout section">
          <div>
            <p className="section-label">Inquiry details</p>
            <h2>Tell us about your project.</h2>
            <p>For faster follow-up, include destination country, estimated quantity, target timing, and any branding requirements.</p>
            <div className="contact-fallbacks">
              <a href={whatsappUrl()} target="_blank" rel="noreferrer">Continue on WhatsApp</a>
              <a href={`mailto:${siteConfig.email}`}>Email {siteConfig.email}</a>
            </div>
            <p className="demo-copy">Direct contact: {siteConfig.email} / WhatsApp {siteConfig.whatsappDisplay}</p>
          </div>
          <InquiryForm initialSource={source} />
        </section>
      </main>
    </>
  )
}
