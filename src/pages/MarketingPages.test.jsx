import { screen } from '@testing-library/react'
import { renderWithApp } from '../test/renderWithApp'

test('home page exposes shopping and customization paths', () => {
  renderWithApp('/')
  expect(screen.getByRole('link', { name: /shop ready styles/i })).toHaveAttribute('href', '/products')
  expect(screen.getByRole('link', { name: /start oem project/i })).toHaveAttribute('href', '/custom')
  expect(screen.getByRole('heading', { name: 'Built for Every Sky' })).toBeInTheDocument()
  expect(screen.getAllByText('Weather, Well Made').length).toBeGreaterThan(0)
})

test('home page includes premium conversion modules without fake proof', () => {
  renderWithApp('/')
  expect(screen.getByText('Structured for global sourcing')).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /Shop by market need/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /Compare sourcing paths/i })).toBeInTheDocument()
  expect(screen.getByText(/No invented certifications\. No unsupported client claims\./)).toBeInTheDocument()
  expect(screen.queryByText(/trusted by brands worldwide/i)).not.toBeInTheDocument()
})

test('custom page lists the five-step process', () => {
  renderWithApp('/custom')
  for (const step of ['Choose a Style', 'Customize Details', 'Sampling', 'Production', 'Global Delivery']) {
    expect(screen.getByText(step)).toBeInTheDocument()
  }
})
