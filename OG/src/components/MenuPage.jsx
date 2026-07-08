import { useState } from 'react'
import { fullMenu, restaurant } from '../data.js'
import { useReveal } from '../useReveal.js'
import './MenuPage.css'

export default function MenuPage() {
  const [active, setActive] = useState(fullMenu[0].id)
const { ref, shown } = useReveal()
const current = fullMenu.find((cat) => cat.id === active) || fullMenu[0]

  return (
    <div className="menupage">
      <section className="menupage-hero">
        <div className="menupage-hero-overlay" />
        <div className="container menupage-hero-inner">
          <img src="/OG_JALISCO.png" alt="Jalisco" className="menupage-hero-logo" />
          <p className="section-eyebrow" style={{ color: 'var(--accent-400)' }}>Full Menu</p>
          <h1 className="menupage-title">Our Complete Menu</h1>
          <p className="menupage-sub">Fresh, flavorful, and made to order. Vegetarian options available throughout.</p>
        </div>
      </section>

      <section className="menupage-body">
        <div className="container">
          <div className="menupage-layout">
            <aside className="menupage-nav">
              {fullMenu.map((cat, i) => (
  <button
  key={cat.id}
  className={`menupage-nav-btn ${active === cat.id ? 'active' : ''}`}
  onClick={(e) => {
  const nav = e.currentTarget.parentElement
  const button = e.currentTarget

  nav.scrollTo({
    left: button.offsetLeft - nav.clientWidth / 2 + button.clientWidth / 2,
    behavior: 'smooth'
  })

  setActive(cat.id)

  setTimeout(() => {
    const title = document.querySelector('.menupage-cat-title')
    const navBar = document.querySelector('.menupage-nav')

    if (title && navBar) {
      window.scrollTo({
        top: title.getBoundingClientRect().top + window.scrollY - navBar.offsetHeight - 24,
        behavior: 'smooth'
      })
    }
  }, 50)
}}
>
  {cat.title}
</button>
))}
            </aside>

            <div ref={ref} className={`menupage-content reveal ${shown ? 'in' : ''}`}>
              <h2 className="menupage-cat-title">{current.title}</h2>
              <div className="menupage-items">
  {current.items.map((item, index) => (
    <div
      key={`${current.id}-${index}`}
      className="menupage-row"
    >
      <div className="menupage-row-info">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
      </div>
      <span className="menupage-row-price">{item.price}</span>
    </div>
  ))}
</div>
            </div>
          </div>

          <div className="menupage-cta">
            <p>Ready to order? Call us at {restaurant.phone}</p>
            <a href={`tel:${restaurant.phone.replace(/[^0-9]/g, '')}`} className="btn btn-primary">Call to Order</a>
          </div>
        </div>
      </section>
    </div>
  )
}
