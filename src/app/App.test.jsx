import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the VELMORA brand', () => {
  render(<App />)
  expect(screen.getAllByText('VELMORA').length).toBeGreaterThan(0)
})
