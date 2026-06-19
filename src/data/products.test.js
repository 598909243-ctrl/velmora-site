import { categories, filterProducts, findProductBySlug, products } from './products'

test('contains all five umbrella categories', () => {
  expect(categories).toEqual([
    'Folding Umbrellas',
    'Stick Umbrellas',
    'Golf Umbrellas',
    'Kids Umbrellas',
    'Gift & Promotional Umbrellas',
  ])
})

test('filters products by category', () => {
  const filtered = filterProducts('Golf Umbrellas')
  expect(filtered.length).toBeGreaterThan(0)
  expect(filtered.every((product) => product.category === 'Golf Umbrellas')).toBe(true)
})

test('finds products by slug', () => {
  expect(findProductBySlug(products[0].slug)).toEqual(products[0])
  expect(findProductBySlug('missing')).toBeUndefined()
})

test('each product exposes buyer guidance metadata', () => {
  for (const product of products) {
    expect(product.useCases.length).toBeGreaterThanOrEqual(2)
    expect(product.customOptions.length).toBeGreaterThanOrEqual(3)
    expect(product.badges.length).toBeGreaterThanOrEqual(1)
    expect(product.stockType).toMatch(/Ready-stock|Custom program/)
    expect(product.comparisonSpecs).toEqual(
      expect.objectContaining({
        Diameter: expect.any(String),
        MOQ: expect.any(String),
        LeadTime: expect.any(String),
      }),
    )
  }
})

test('includes the uploaded KR catalogue products with styled catalog images', () => {
  const catalogProducts = products.filter((product) => product.slug.startsWith('kr-catalog-'))
  expect(catalogProducts.length).toBeGreaterThanOrEqual(150)
  expect(catalogProducts[0]).toEqual(
    expect.objectContaining({
      slug: 'kr-catalog-part1-01-a',
      category: 'Folding Umbrellas',
    }),
  )
  expect(catalogProducts.every((product) => product.images[0].includes('/images/catalog/'))).toBe(true)
  expect(filterProducts('Folding Umbrellas').some((product) => product.slug.startsWith('kr-catalog-part1'))).toBe(true)
})
