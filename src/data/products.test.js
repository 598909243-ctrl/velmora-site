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

test('includes a compact original umbrella image collection', () => {
  const generatedUmbrellas = products.filter((product) => product.slug.startsWith('velmora-original-'))

  expect(generatedUmbrellas).toHaveLength(8)
  expect(generatedUmbrellas.map((product) => product.slug)).toEqual(
    expect.arrayContaining([
      'velmora-original-compact-folding-umbrella',
      'velmora-original-automatic-folding-umbrella',
      'velmora-original-classic-stick-umbrella',
      'velmora-original-golf-umbrella',
      'velmora-original-kids-umbrella',
    ]),
  )
  expect(generatedUmbrellas.every((product) => product.category !== 'Rainwear')).toBe(true)
  expect(generatedUmbrellas.every((product) => product.images[0].includes('/images/generated/umbrellas/'))).toBe(true)
  expect(findProductBySlug('velmora-original-compact-folding-umbrella').images.length).toBe(1)
  expect(filterProducts('Golf Umbrellas').some((product) => product.slug === 'velmora-original-golf-umbrella')).toBe(true)
})
