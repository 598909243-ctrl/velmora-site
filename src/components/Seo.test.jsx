import { render } from '@testing-library/react'
import Seo from './Seo'

test('updates title and description', () => {
  render(<Seo title="Umbrella Collection" description="Explore VELMORA umbrellas." />)
  expect(document.title).toBe('Umbrella Collection | VELMORA')
  expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
    'content',
    'Explore VELMORA umbrellas.',
  )
})
