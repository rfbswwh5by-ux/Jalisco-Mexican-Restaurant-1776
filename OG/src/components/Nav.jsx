import { useState } from 'react'
import { restaurant } from '../data.js'
import './Nav.css'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Photos', href: '#photos' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav nav-solid">
      <div className="container nav-inner">
        <a href="#home" className="nav-brand" onClick={() => setOpen(false)}>
          <img src="/OG_JALISCO.png" alt="Jalisco" className="nav-logo-img" />
        </a>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
  <button
    key={l.href}
    type="button"
    className="nav-link"
    onClick={() => {
      setOpen(false)
      document.querySelector(l.href)?.scrollIntoView({
  behavior: 'smooth',
  block: 'start'
})
    }}
  >
    {l.label}
  </button>
))}
          <a href={`tel:${restaurant.phone.replace(/[^0-9]/g, '')}`} className="nav-call">Call</a>
        </nav>
        <button className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <span className={`nav-bar ${open ? 'x1' : ''}`}></span>
          <span className={`nav-bar ${open ? 'x2' : ''}`}></span>
          <span className={`nav-bar ${open ? 'x3' : ''}`}></span>
        </button>
            </div>
    </header>
  )
}