import { whatsappUrl } from '../../app/siteConfig'

export default function WhatsAppButton() {
  return (
    <a className="whatsapp-button" href={whatsappUrl()} target="_blank" rel="noreferrer">
      WhatsApp
    </a>
  )
}
