import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { products } from '../data/products'
import { renderWithApp } from '../test/renderWithApp'

test('filters cards when a category is selected', async () => {
  const user = userEvent.setup()
  renderWithApp('/products')
  await user.click(screen.getByRole('button', { name: 'Golf Umbrellas' }))
  expect(screen.getAllByTestId('product-card')).toHaveLength(
    products.filter((product) => product.category === 'Golf Umbrellas').length,
  )
})
