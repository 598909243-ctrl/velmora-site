import { Link } from 'react-router-dom'
import InquiryLink from '../inquiry/InquiryLink'

export default function ProductCard({ product }) {
  return (
    <article className="product-card" data-testid="product-card">
      <Link className="product-image-wrap" to={`/products/${product.slug}`}>
        <img src={product.images[0]} alt={`${product.name} product`} loading="lazy" width="720" height="820" />
        <span>{product.stockType}</span>
      </Link>
      <div className="product-card-body">
        <div className="product-badges">
          {product.badges.slice(0, 2).map((badge) => <span key={badge}>{badge}</span>)}
        </div>
        <p className="product-category">{product.category}</p>
        <h3><Link to={`/products/${product.slug}`}>{product.name}</Link></h3>
        <p>{product.tagline}</p>
        <dl className="mini-specs">
          <div><dt>Diameter</dt><dd>{product.comparisonSpecs.Diameter}</dd></div>
          <div><dt>MOQ</dt><dd>{product.comparisonSpecs.MOQ}</dd></div>
        </dl>
        <div className="product-actions">
          <Link className="text-link" to={`/products/${product.slug}`}>View Details</Link>
          <InquiryLink className="text-link button-link" intent="wholesale" product={product}>Request Quote</InquiryLink>
        </div>
      </div>
    </article>
  )
}
