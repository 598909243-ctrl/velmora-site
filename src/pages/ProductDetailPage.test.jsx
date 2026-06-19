import { screen } from '@testing-library/react'
import { products } from '../data/products'
import { renderWithApp } from '../test/renderWithApp'

test('shows product specifications for a valid slug', () => {
  renderWithApp(`/products/${products[0].slug}`)
  expect(screen.getByRole('heading', { name: products[0].name })).toBeInTheDocument()
  expect(screen.getAllByText(products[0].moq).length).toBeGreaterThan(0)
})

test('product detail guides retail and bulk buyers', () => {
  renderWithApp(`/products/${products[0].slug}`)
  expect(screen.getByText('Quote-ready overview')).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /At a glance/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /Best for/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /Custom options/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /Quote brief/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /Request Bulk Quote/i })).toHaveAttribute('href', '/contact')
})

test('product gallery renders unique product images once', () => {
  const product = products.find((item) => item.slug === 'velmora-original-compact-folding-umbrella')
  renderWithApp(`/products/${product.slug}`)

  expect(screen.getAllByAltText(`${product.name} view 1`)).toHaveLength(1)
  expect(screen.queryByText(/Additional views/i)).not.toBeInTheDocument()
})

test('shows product not found for an invalid slug', () => {
  renderWithApp('/products/missing-product')
  expect(screen.getByRole('heading', { name: /product not found/i })).toBeInTheDocument()
})
