import { useState } from 'react'
import ProductCard from '../components/products/ProductCard'
import ProductFilters from '../components/products/ProductFilters'
import Seo from '../components/Seo'
import { categories, filterProducts } from '../data/products'

export default function ProductsPage() {
  const [selected, setSelected] = useState('All')
  const visibleProducts = filterProducts(selected)
  return (
    <>
      <Seo title="Umbrella Collection" description="Explore folding, stick, golf, kids, and promotional umbrellas from VELMORA." />
      <main id="main-content">
        <section className="page-hero compact">
          <p className="section-label">Demonstration catalog</p>
          <h1>Umbrella Collection</h1>
          <p>Compare ready-style inspiration and flexible models by category, market fit, MOQ, and customization potential.</p>
        </section>
        <section className="section">
          <div className="catalog-intro">
            <div><h2>Compare styles for your market.</h2><p>Use these sample products to shape a retail, wholesale, or OEM inquiry. Real specs and pricing should replace all demo data before commercial launch.</p></div>
            <a className="button button-outline" href="#product-catalog">Browse catalog</a>
          </div>
          <ProductFilters categories={categories} selected={selected} onSelect={setSelected} />
          <div className="product-grid" id="product-catalog">
            {visibleProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </section>
      </main>
    </>
  )
}
