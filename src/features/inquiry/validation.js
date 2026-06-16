const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateInquiry(values) {
  const errors = {}
  for (const field of ['name', 'email', 'country', 'intent', 'message']) {
    if (!values[field]?.trim()) errors[field] = 'This field is required.'
  }
  if (values.email?.trim() && !EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (values.quantity && Number(values.quantity) <= 0) {
    errors.quantity = 'Quantity must be greater than zero.'
  }
  return errors
}
