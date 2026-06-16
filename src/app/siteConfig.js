export const siteConfig = {
  brand: 'VELMORA',
  tagline: 'Weather, Well Made',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'hello@velmora.example',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '15551234567',
  isDemo: true,
}

export const whatsappUrl = (message = 'Hello VELMORA, I would like to request a quote.') =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
