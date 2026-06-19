import { Link, useParams } from 'react-router-dom'
import InquiryLink from '../components/inquiry/InquiryLink'
import ProductGallery from '../components/products/ProductGallery'
import SpecificationsTable from '../components/products/SpecificationsTable'
import Seo from '../components/Seo'
import { findProductBySlug, products } from '../data/products'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = findProductBySlug(slug)
  if (!product) {
    return (
      <main id="main-content" className="empty-state">
        <h1>Product not found</h1>
        <p>The requested sample product is not in this demonstration catalog.</p>
        <Link className="button" to="/products">View all products</Link>
      </main>
    )
  }
  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 2)
  const glanceSpecs = [
    ['Diameter', product.comparisonSpecs.Diameter],
    ['MOQ', product.comparisonSpecs.MOQ],
    ['Lead time', product.comparisonSpecs.LeadTime],
    ['Opening', product.specifications.Opening],
  ]
  return (
    <>
      <Seo
        title={product.name}
        description={product.description}
        schema={{ '@context': 'https://schema.org', '@type': 'Product', name: product.name, description: product.description }}
      />
      <main id="main-content">
        <div className="demo-notice">Demonstration product data. Replace imagery, specifications, MOQ, and lead time before launch.</div>
        <section className="product-detail section">
          <ProductGallery product={product} />
          <div className="product-summary">
            <p className="section-label">{product.category}</p>
            <h1>{product.name}</h1>
            <p className="lead">{product.tagline}</p>
            <p>{product.description}</p>
            <div className="product-badges detail-badges">
              {product.badges.map((badge) => <span key={badge}>{badge}</span>)}
            </div>
            {product.price ? <p className="price">{product.price} <small>reference only</small></p> : null}
            <div className="detail-actions">
              <InquiryLink intent="retail" product={product}>Request to Buy</InquiryLink>
              <InquiryLink className="button button-outline" intent="wholesale" product={product}>Request Bulk Quote</InquiryLink>
            </div>
            <div className="quote-panel">
              <p className="section-label">Quote-ready overview</p>
              <dl>
                <div><dt>Stock type</dt><dd>{product.stockType}</dd></div>
                <div><dt>MOQ</dt><dd>{product.moq}</dd></div>
                <div><dt>Lead time</dt><dd>{product.leadTime}</dd></div>
              </dl>
            </div>
            <section className="detail-card" aria-labelledby="at-a-glance-title">
              <h2 id="at-a-glance-title">At a glance</h2>
              <dl className="glance-grid">
                {glanceSpecs.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </section>
            <section className="detail-card" aria-labelledby="key-features-title">
              <h2 id="key-features-title">Key features</h2>
              <ul className="feature-list">{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            </section>
            <section className="detail-card" aria-labelledby="available-colors-title">
              <h2 id="available-colors-title">Available colors</h2>
              <p>Use these colors as a starting point for retail, wholesale, or OEM discussions.</p>
              <div className="color-list" aria-label="Available colors">
                {product.colors.map((color) => <span key={color}>{color}</span>)}
              </div>
            </section>
          </div>
        </section>
        <section className="section buyer-fit">
          <article>
            <p className="section-label">Best for</p>
            <h2>Best for your channel.</h2>
            <ul>{product.useCases.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article>
            <p className="section-label">Custom options</p>
            <h2>Custom options.</h2>
            <ul>{product.customOptions.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="quote-brief-card">
            <p className="section-label">Next step</p>
            <h2>Quote brief</h2>
            <p>For a faster reply, include destination market, expected quantity, target delivery window, logo position, packaging needs, and whether you need a sample first.</p>
            <div className="color-list" aria-label="Available colors">
              <span>{product.category}</span>
              <span>{product.stockType}</span>
              <span>{product.moq}</span>
            </div>
            <div className="button-row">
              <InquiryLink intent="wholesale" product={product}>Start Quote Brief</InquiryLink>
            </div>
          </article>
        </section>
        <section className="section split-section">
          <div>
            <p className="section-label">Product details</p>
            <h2>Specifications</h2>
          </div>
          <SpecificationsTable specifications={product.specifications} />
        </section>
        {related.length ? (
          <section className="section related-links-section">
            <div className="section-heading">
              <div>
                <p className="section-label">Keep comparing</p>
                <h2>Related umbrellas</h2>
              </div>
              <Link className="text-link" to="/products">View all products</Link>
            </div>
            <div className="related-link-grid">
              {related.map((item) => (
                <article className="related-link-card" key={item.slug}>
                  <p className="product-category">{item.category}</p>
                  <h3><Link to={`/products/${item.slug}`}>{item.name}</Link></h3>
                  <p>{item.tagline}</p>
                  <dl className="mini-specs">
                    <div><dt>MOQ</dt><dd>{item.comparisonSpecs.MOQ}</dd></div>
                    <div><dt>Lead time</dt><dd>{item.comparisonSpecs.LeadTime}</dd></div>
                  </dl>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </>
  )
}
