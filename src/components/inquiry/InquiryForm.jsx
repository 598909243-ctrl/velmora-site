import { useState } from 'react'
import { submitInquiry as defaultSubmitInquiry } from '../../features/inquiry/inquiryService'
import { validateInquiry } from '../../features/inquiry/validation'

const blankForm = {
  name: '',
  company: '',
  country: '',
  email: '',
  whatsapp: '',
  intent: '',
  product: '',
  quantity: '',
  message: '',
}

export default function InquiryForm({
  initialSource = {},
  submitInquiry = defaultSubmitInquiry,
}) {
  const [values, setValues] = useState(() => ({
    ...blankForm,
    intent: initialSource.intent || '',
    product: initialSource.productName || '',
  }))
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const update = ({ target }) => {
    setValues((current) => ({ ...current, [target.name]: target.value }))
    setErrors((current) => ({ ...current, [target.name]: undefined }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validateInquiry(values)
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }
    setStatus({ state: 'pending', message: '' })
    try {
      const result = await submitInquiry({ ...values, ...initialSource, intent: values.intent })
      setStatus(result.ok
        ? { state: 'success', message: 'Thank you. Our team will reply within one business day.' }
        : { state: 'error', message: 'We could not send your inquiry. Your details are still here.' })
    } catch {
      setStatus({ state: 'error', message: 'We could not send your inquiry. Your details are still here.' })
    }
  }

  const field = (name, label, type = 'text', required = false) => (
    <label className="field">
      <span>{label}{required ? ' *' : ''}</span>
      <input
        name={name}
        type={type}
        value={values[name]}
        onChange={update}
        aria-invalid={Boolean(errors[name])}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
      />
      {errors[name] ? <small id={`${name}-error`} className="field-error">{errors[name]}</small> : null}
    </label>
  )

  return (
    <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        {field('name', 'Name', 'text', true)}
        {field('company', 'Company')}
        {field('country', 'Country or region', 'text', true)}
        {field('email', 'Email', 'email', true)}
        {field('whatsapp', 'WhatsApp')}
        {field('quantity', 'Estimated quantity', 'number')}
        <label className="field">
          <span>Inquiry type *</span>
          <select name="intent" value={values.intent} onChange={update} aria-invalid={Boolean(errors.intent)}>
            <option value="">Select one</option>
            <option value="retail">Retail purchase</option>
            <option value="wholesale">Wholesale purchase</option>
            <option value="oem">OEM / ODM customization</option>
          </select>
          {errors.intent ? <small className="field-error">{errors.intent}</small> : null}
        </label>
        {field('product', 'Product of interest')}
      </div>
      <label className="field">
        <span>Message *</span>
        <textarea name="message" rows="6" value={values.message} onChange={update} aria-invalid={Boolean(errors.message)} />
        {errors.message ? <small className="field-error">{errors.message}</small> : null}
      </label>
      <button className="button" type="submit" disabled={status.state === 'pending'}>
        {status.state === 'pending' ? 'Sending…' : 'Send Inquiry'}
      </button>
      {status.message ? <p className={`form-status ${status.state}`} role="status">{status.message}</p> : null}
    </form>
  )
}
