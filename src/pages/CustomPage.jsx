import InquiryLink from '../components/inquiry/InquiryLink'
import Seo from '../components/Seo'
import { capabilities, customSteps } from '../data/siteContent'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export default function CustomPage() {
  return (
    <>
      <Seo title="Custom Umbrellas and OEM ODM" description="Plan custom umbrellas with flexible materials, branding, packaging, sampling, and global delivery coordination." />
      <main id="main-content">
        <section className="page-hero custom-hero">
          <div><h1>Make the umbrella yours.</h1><p>Coordinate style, materials, color, branding, packaging, and production around your market.</p><InquiryLink intent="oem">Request a Custom Quote</InquiryLink></div>
          <img src={asset('images/custom-detail.avif')} alt="Custom umbrella design materials and packaging" width="900" height="700" />
        </section>
        <section className="section">
          <div className="section-heading"><p className="section-label">Customization options</p><h2>One product, many expressions.</h2></div>
          <div className="capability-grid">{capabilities.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>
        <section className="process-section section">
          <div className="section-heading centered"><h2>From brief to global delivery</h2></div>
          <div className="process-grid">{customSteps.map(([number, title, text]) => <div key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
        </section>
        <section className="section split-section">
          <div><p className="section-label">Sampling and quality</p><h2>Approve the details before production.</h2></div>
          <div><p>Sampling confirms the physical combination of fabric, print, frame, handle, and packaging. The final inspection plan should be agreed for each real order.</p><p className="demo-copy">All claims on this site are demonstration copy until real supplier and company evidence is supplied.</p></div>
        </section>
      </main>
    </>
  )
}
