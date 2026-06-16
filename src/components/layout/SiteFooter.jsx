import { Link } from 'react-router-dom'
import { siteConfig } from '../../app/siteConfig'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand brand-light" to="/">VELMORA</Link>
        <p>{siteConfig.tagline}</p>
      </div>
      <div>
        <strong>Explore</strong>
        <Link to="/products">Products</Link>
        <Link to="/custom">Custom / OEM & ODM</Link>
        <Link to="/about">About</Link>
      </div>
      <div>
        <strong>Contact</strong>
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        <p>English-first demonstration site</p>
      </div>
      <p className="footer-note">VELMORA is a concept brand. Replace all sample data before commercial launch.</p>
    </footer>
  )
}
