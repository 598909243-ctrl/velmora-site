import { validateInquiry } from './validation'

test('requires core inquiry fields', () => {
  expect(validateInquiry({})).toMatchObject({
    name: expect.any(String),
    email: expect.any(String),
    country: expect.any(String),
    intent: expect.any(String),
    message: expect.any(String),
  })
})

test('rejects an invalid email and non-positive quantity', () => {
  expect(validateInquiry({
    name: 'Ava',
    email: 'bad',
    country: 'US',
    intent: 'wholesale',
    message: 'Quote please',
    quantity: '0',
  })).toMatchObject({
    email: 'Enter a valid email address.',
    quantity: 'Quantity must be greater than zero.',
  })
})
