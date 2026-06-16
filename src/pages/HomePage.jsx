import { Link } from 'react-router-dom'
import InquiryLink from '../components/inquiry/InquiryLink'
import ProductCard from '../components/products/ProductCard'
import Seo from '../components/Seo'
import { categories, products } from '../data/products'
import { capabilities, customSteps, marketNeeds, qualityNotes, sourcingPaths, trustPoints } from '../data/siteContent'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export default function HomePage() {
  const featured = products.filter((product) => product.featured).slice(0, 4)
  return (
    <>
      <Seo title="Umbrellas for Retail and Custom Sourcing" description="Explore VELMORA ready-stock umbrellas and flexible OEM and ODM sourcing programs." />
      <main id="main-content">
        <section className="home-hero">
          <img src={asset('images/hero-umbrella.avif')} alt="Forest green umbrella on a rain-washed city street" width="1600" height="900" />
          <div className="hero-content">
            <h1>Built for Every Sky</h1>
            <p className="hero-tagline">Weather, Well Made</p>
            <p>Premium umbrella concepts and sample-led sourcing workflows for retail buyers, wholesalers, and OEM teams.</p>
            <div className="button-row">
              <Link className="button" to="/products">Shop Ready Styles</Link>
              <Link className="button button-light" to="/custom">Start OEM Project</Link>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Sourcing trust points">
          {trustPoints.map(([title, text]) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </section>

        <section className="market-section section">
          <div className="section-heading">
            <div><p className="section-label">Guided assortment</p><h2>Shop by market need.</h2></div>
            <p>Start with how the umbrella will be used, then move into specs, colors, and quote details.</p>
          </div>
          <div className="market-grid">
            {marketNeeds.map(([need, text, category], index) => (
              <Link key={need} to="/products" className="market-card">
                <img src={asset(`images/categories/category-${index + 1}.avif`)} alt={`${category} for ${need}`} width="500" height="560" loading="lazy" />
                <span>{need}</span>
                <h3>{category}</h3>
                <p>{text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="category-rail section" aria-label="Umbrella categories">
          {categories.map((category, index) => (
            <Link key={category} to="/products" className="category-item">
              <img src={asset(`images/categories/category-${index + 1}.avif`)} alt={`${category} category`} width="500" height="560" loading="lazy" />
              <span>{category}</span>
            </Link>
          ))}
        </section>

        <section className="featured-section section">
          <div className="section-heading">
            <div><p className="section-label">Featured umbrellas</p><h2>Thoughtful design.<br />Reliable in every detail.</h2></div>
            <Link className="button button-outline" to="/products">View All Products</Link>
          </div>
          <div className="product-grid">{featured.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
        </section>

        <section className="sourcing-section section">
          <div className="section-heading centered">
            <div><p className="section-label">Buyer paths</p><h2>Compare sourcing paths.</h2></div>
          </div>
          <div className="sourcing-grid">
            {sourcingPaths.map(([title, text, detail]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <strong>{detail}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="oem-section">
          <div className="oem-copy">
            <p className="section-label">OEM / ODM capabilities</p>
            <h2>Your vision.<br />Expertly coordinated.</h2>
            <p>Build a program around umbrella style, material, Pantone color, logo placement, packaging, and destination requirements.</p>
            <InquiryLink intent="oem">Request a Custom Quote</InquiryLink>
          </div>
          <div className="oem-media">
            <img src={asset('images/custom-detail.avif')} alt="Umbrella material, frame, branding, and packaging details" width="1000" height="760" loading="lazy" />
          </div>
          <div className="capability-row">
            {capabilities.map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </section>

        <section className="quality-section section">
          <div className="section-heading">
            <div><p className="section-label">Proof, carefully stated</p><h2>Professional without pretending.</h2></div>
            <p>VELMORA is still a concept brand. The launch site stays clear about sample data and avoids unsupported claims.</p>
          </div>
          <div className="quality-grid">
            {qualityNotes.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="process-section section">
          <div className="section-heading centered"><h2>Our 5-Step Custom Process</h2></div>
          <div className="process-grid">
            {customSteps.map(([number, title, text]) => <div key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </section>

        <section className="scenario-section section">
          <div><p className="section-label">Buyer scenarios</p><h2>Built around the way you source.</h2></div>
          <div className="scenario-list">
            <article><h3>Retail assortment</h3><p>Explore product ideas and ask about ready-stock availability without a checkout commitment.</p></article>
            <article><h3>Wholesale program</h3><p>Share target quantity, market, and timing for a tailored quotation.</p></article>
            <article><h3>Branded campaign</h3><p>Coordinate logo, Pantone color, packaging, and sampling for promotional use.</p></article>
          </div>
        </section>

        <section className="final-cta section">
          <div><h2>Let’s build a quote-ready umbrella brief.</h2><p>Share the style, quantity, destination, and customization notes you already know.</p></div>
          <Link className="button" to="/contact">Start Your Inquiry</Link>
        </section>
      </main>
    </>
  )
}
