import { categories, filterProducts, findProductBySlug, products } from './products'

test('contains all five umbrella categories', () => {
  expect(categories).toEqual([
    'Folding Umbrellas',
    'Stick Umbrellas',
    'Golf Umbrellas',
    'Kids Umbrellas',
    'Gift & Promotional Umbrellas',
    'Rainwear',
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

test('includes uploaded photo products with styled local images', () => {
  const uploadedProducts = products.filter((product) => product.slug.startsWith('kr-photo-'))
  expect(uploadedProducts.length).toBeGreaterThanOrEqual(6)
  expect(uploadedProducts.map((product) => product.slug)).toEqual(
    expect.arrayContaining([
      'kr-photo-feather-umbrella',
      'kr-photo-ultralight-folding-umbrella',
      'kr-photo-two-fold-auto-umbrella',
      'kr-photo-ross-umbrella',
      'kr-photo-rainwear',
      'kr-photo-umbrella-diagram',
    ]),
  )
  expect(findProductBySlug('kr-photo-rainwear')).toEqual(
    expect.objectContaining({
      category: 'Rainwear',
    }),
  )
  expect(uploadedProducts.every((product) => product.images[0].includes('/images/uploads/'))).toBe(true)
  expect(findProductBySlug('kr-photo-ross-umbrella').images.length).toBeGreaterThanOrEqual(10)
  expect(filterProducts('Rainwear').some((product) => product.slug === 'kr-photo-rainwear')).toBe(true)
})
