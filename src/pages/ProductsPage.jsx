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
          <p>Ready-stock inspiration and flexible models for custom sourcing programs.</p>
        </section>
        <section className="section">
          <ProductFilters categories={categories} selected={selected} onSelect={setSelected} />
          <div className="product-grid">
            {visibleProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </section>
      </main>
    </>
  )
}
