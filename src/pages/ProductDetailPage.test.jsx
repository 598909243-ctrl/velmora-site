import { screen } from '@testing-library/react'
import { products } from '../data/products'
import { renderWithApp } from '../test/renderWithApp'

test('shows product specifications for a valid slug', () => {
  renderWithApp(`/products/${products[0].slug}`)
  expect(screen.getByRole('heading', { name: products[0].name })).toBeInTheDocument()
  expect(screen.getByText(products[0].moq)).toBeInTheDocument()
})

test('shows product not found for an invalid slug', () => {
  renderWithApp('/products/missing-product')
  expect(screen.getByRole('heading', { name: /product not found/i })).toBeInTheDocument()
})
