import { Link, useParams } from 'react-router-dom'
import InquiryLink from '../components/inquiry/InquiryLink'
import ProductCard from '../components/products/ProductCard'
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
            <ul className="feature-list">{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            {product.price ? <p className="price">{product.price} <small>reference only</small></p> : null}
            <p><strong>MOQ:</strong> {product.moq}</p>
            <p><strong>Reference lead time:</strong> {product.leadTime}</p>
            <div className="color-list" aria-label="Available colors">
              {product.colors.map((color) => <span key={color}>{color}</span>)}
            </div>
            <div className="button-row">
              <InquiryLink intent="retail" product={product}>Request to Buy</InquiryLink>
              <InquiryLink className="button button-outline" intent="wholesale" product={product}>Request Bulk Quote</InquiryLink>
            </div>
          </div>
        </section>
        <section className="section split-section">
          <div>
            <p className="section-label">Product details</p>
            <h2>Specifications</h2>
          </div>
          <SpecificationsTable specifications={product.specifications} />
        </section>
        {related.length ? (
          <section className="section">
            <div className="section-heading"><h2>Related umbrellas</h2></div>
            <div className="product-grid compact-grid">{related.map((item) => <ProductCard key={item.slug} product={item} />)}</div>
          </section>
        ) : null}
      </main>
    </>
  )
}
