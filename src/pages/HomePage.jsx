import { Link } from 'react-router-dom'
import InquiryLink from '../components/inquiry/InquiryLink'
import ProductCard from '../components/products/ProductCard'
import Seo from '../components/Seo'
import { categories, products } from '../data/products'
import { capabilities, customSteps } from '../data/siteContent'

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
            <p>Explore ready-stock umbrellas and flexible customization solutions for global retailers, wholesalers, and brands.</p>
            <div className="button-row">
              <Link className="button" to="/products">Shop Umbrellas</Link>
              <Link className="button button-light" to="/custom">Customize Your Umbrella</Link>
            </div>
          </div>
        </section>

        <section className="category-rail section">
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

        <section className="oem-section">
          <div className="oem-copy">
            <p className="section-label">OEM / ODM capabilities</p>
            <h2>Your vision.<br />Expertly coordinated.</h2>
            <p>Build a program around umbrella style, material, branding, packaging, and destination requirements.</p>
            <InquiryLink intent="oem">Request a Custom Quote</InquiryLink>
          </div>
          <div className="oem-media">
            <img src={asset('images/custom-detail.avif')} alt="Umbrella material, frame, branding, and packaging details" width="1000" height="760" loading="lazy" />
          </div>
          <div className="capability-row">
            {capabilities.map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}
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
          <div><h2>Let’s build something remarkable together.</h2><p>Share your product, quantity, and customization requirements.</p></div>
          <Link className="button" to="/contact">Start Your Inquiry</Link>
        </section>
      </main>
    </>
  )
}
