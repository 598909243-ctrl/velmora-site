import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  ['Home', '/'],
  ['Products', '/products'],
  ['Custom / OEM & ODM', '/custom'],
  ['About', '/about'],
  ['Contact', '/contact'],
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="announcement">Sample catalog for global umbrella sourcing and customization</div>
      <header className="site-header">
        <NavLink className="brand" to="/" onClick={() => setOpen(false)}>VELMORA</NavLink>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span>Menu</span>
        </button>
        <nav id="site-navigation" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Primary">
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} onClick={() => setOpen(false)}>{label}</NavLink>
          ))}
          <NavLink className="button button-small" to="/contact" onClick={() => setOpen(false)}>
            Get a Quote
          </NavLink>
        </nav>
      </header>
    </>
  )
}
