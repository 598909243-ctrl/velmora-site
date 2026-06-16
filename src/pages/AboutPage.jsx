import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function AboutPage() {
  return (
    <>
      <Seo title="About VELMORA" description="Discover the concept behind VELMORA and its approach to clear, responsible umbrella sourcing." />
      <main id="main-content">
        <section className="page-hero compact"><p className="section-label">About the concept</p><h1>Weather, Well Made</h1><p>VELMORA combines the clarity of a modern consumer brand with the practical detail global buyers need.</p></section>
        <section className="section editorial-grid">
          <div><h2>A clearer sourcing experience.</h2></div>
          <div><p>The first version of this site demonstrates how a trading company can present ready-stock options and custom programs without overstating unverified factory, certification, client, or export claims.</p><p>Before launch, this content must be replaced with real company history, supply-chain evidence, quality processes, and authorized case studies.</p></div>
        </section>
        <section className="trust-band section">
          <article><h3>Product clarity</h3><p>Structured specifications, MOQ guidance, and accurate inquiry language.</p></article>
          <article><h3>Flexible coordination</h3><p>Support for retail requests, wholesale purchasing, and OEM or ODM briefs.</p></article>
          <article><h3>Responsible proof</h3><p>No invented certifications, named clients, or unsupported production numbers.</p></article>
        </section>
        <section className="final-cta section"><div><h2>Tell us what your market needs.</h2><p>Start with a product, quantity, destination, or custom idea.</p></div><Link className="button" to="/contact">Get a Quote</Link></section>
      </main>
    </>
  )
}
