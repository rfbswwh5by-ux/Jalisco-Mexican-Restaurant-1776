import { useState } from 'react'
import { fullMenu, restaurant } from '../data.js'
import { useReveal } from '../useReveal.js'
import './MenuPage.css'

export default function MenuPage() {
  const [active, setActive] = useState(0)
  const { ref, shown } = useReveal()
  const current = fullMenu[active]

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
    className={`menupage-nav-btn ${active === i ? 'active' : ''}`}
    onClick={() => setActive(i)}
  >
    {cat.title}
  </button>
))}
            </aside>

            <div ref={ref} className={`menupage-content reveal ${shown ? 'in' : ''}`}>
              <h2 className="menupage-cat-title">{current.category}</h2>
              <div className="menupage-items">
                {current.items.map((item) => (
                  <div key={item.name} className="menupage-row">
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
