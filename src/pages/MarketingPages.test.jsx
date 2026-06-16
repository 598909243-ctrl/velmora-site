import { screen } from '@testing-library/react'
import { renderWithApp } from '../test/renderWithApp'

test('home page exposes shopping and customization paths', () => {
  renderWithApp('/')
  expect(screen.getByRole('link', { name: /shop umbrellas/i })).toHaveAttribute('href', '/products')
  expect(screen.getByRole('link', { name: /customize your umbrella/i })).toHaveAttribute('href', '/custom')
  expect(screen.getByRole('heading', { name: 'Built for Every Sky' })).toBeInTheDocument()
  expect(screen.getAllByText('Weather, Well Made').length).toBeGreaterThan(0)
})

test('custom page lists the five-step process', () => {
  renderWithApp('/custom')
  for (const step of ['Choose a Style', 'Customize Details', 'Sampling', 'Production', 'Global Delivery']) {
    expect(screen.getByText(step)).toBeInTheDocument()
  }
})
