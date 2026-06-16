export const siteConfig = {
  brand: 'VELMORA',
  tagline: 'Weather, Well Made',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'sales01@krbrella.com',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '8615960350366',
  whatsappDisplay: import.meta.env.VITE_WHATSAPP_DISPLAY || '+86 159 6035 0366',
  isDemo: true,
}

export const whatsappUrl = (message = 'Hello VELMORA, I would like to request a quote.') =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
