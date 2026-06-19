import { screen } from '@testing-library/react'
import { renderWithApp } from '../test/renderWithApp'

test('renders the products route', () => {
  renderWithApp('/products')
  expect(screen.getByRole('heading', { name: /umbrella collection/i })).toBeInTheDocument()
})

test('renders a friendly not-found page', () => {
  renderWithApp('/not-a-real-page')
  expect(screen.getByRole('heading', { name: /page not found/i })).toBeInTheDocument()
})
