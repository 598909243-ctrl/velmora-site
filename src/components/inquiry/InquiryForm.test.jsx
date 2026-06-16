import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InquiryForm from './InquiryForm'

test('submits inquiry intent and source product', async () => {
  const submitInquiry = vi.fn().mockResolvedValue({ ok: true })
  const user = userEvent.setup()
  render(
    <InquiryForm
      initialSource={{
        intent: 'wholesale',
        productSlug: 'aero-fold-compact',
        productName: 'AeroFold Compact',
      }}
      submitInquiry={submitInquiry}
    />,
  )

  await user.type(screen.getByLabelText(/name/i), 'Ava Buyer')
  await user.type(screen.getByLabelText(/^email/i), 'ava@example.com')
  await user.type(screen.getByLabelText(/country/i), 'United States')
  await user.type(screen.getByLabelText(/message/i), 'Please quote 500 pieces.')
  await user.click(screen.getByRole('button', { name: /send inquiry/i }))

  expect(submitInquiry).toHaveBeenCalledWith(expect.objectContaining({
    intent: 'wholesale',
    productSlug: 'aero-fold-compact',
  }))
})
