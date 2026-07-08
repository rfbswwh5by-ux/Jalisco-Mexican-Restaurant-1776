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
<h2 className="section-title">View Our Full Menu</h2>
<p className="section-subtitle">
  Browse our complete menu featuring appetizers, fajitas, tacos, burritos, seafood, desserts, drinks, and more.
</p>
        </div>

        <div className="menu-tabs">
  <a href="/menu" className="menu-tab active">
    View Full Menu
  </a>
</div>

        <div ref={ref} className={`menu-list reveal ${shown ? 'in' : ''}`}>
  {[
    {
      name: 'Fajitas Jalisco',
      desc: 'Chicken, steak, chorizo, and shrimp cooked with bell peppers, tomatoes, and onions.',
      price: '$16.99'
    },
    {
      name: 'Monster Chimi',
      desc: '10-inch flour tortilla stuffed with grilled chicken, steak, mushrooms, and topped with cheese.',
      price: '$12.75'
    },
    {
      name: 'Pollo Jalisco',
      desc: 'Grilled chicken over rice topped with cheese sauce. Served with fries, lettuce, sour cream, and tomatoes.',
      price: '$12.25+'
    },
    {
      name: 'Burrito California',
      desc: 'Grilled chicken and steak with rice, beans, lettuce, guacamole, sour cream, pico de gallo, and cheese sauce.',
      price: '$13.29'
    }
  ].map((item) => (
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
