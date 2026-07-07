import { useState } from 'react'
import { enchiladas, otherOptions } from '../data.js'
import { useReveal } from '../useReveal.js'
import './Menu.css'

const categories = [
  { id: 'enchiladas', label: 'Enchiladas', items: enchiladas },
  { id: 'other', label: 'House Specials', items: otherOptions },
]

export default function Menu() {
  const [active, setActive] = useState('enchiladas')
  const { ref, shown } = useReveal()
  const current = categories.find((c) => c.id === active)

  return (
    <section className="section menu" id="menu">
      <div className="container">
        <div className="menu-head">
          <p className="section-eyebrow">Explore the Kitchen</p>
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle">From classic enchiladas to house specialties — fresh, flavorful, and made to order. Vegetarian options available throughout.</p>
        </div>

        <div className="menu-tabs">
          {categories.map((c) => (
            <button
              key={c.id}
              className={`menu-tab ${active === c.id ? 'active' : ''}`}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div ref={ref} className={`menu-list reveal ${shown ? 'in' : ''}`}>
          {current.items.map((item) => (
            <div key={item.name} className="menu-row">
              <div className="menu-row-info">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
              <span className="menu-row-price">{item.price}</span>
            </div>
          ))}
        </div>

        <p className="menu-note">Prices typically range from $10–$20 per person. Call ahead for today's specials and takeout.</p>
        <div className="menu-viewall">
          <a href="#/menu" className="btn btn-dark">View Full Menu →</a>
        </div>
      </div>
    </section>
  )
}
