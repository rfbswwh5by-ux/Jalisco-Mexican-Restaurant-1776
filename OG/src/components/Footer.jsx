import { restaurant, hours } from '../data.js'
import './Footer.css'

export default function Footer() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`
  const today = new Date().getDay() // 0 = Sunday
  const todayIndex = today === 0 ? 6 : today - 1
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo-row">
            <img src="/OG_JALISCO.png" alt="Jalisco" className="footer-logo-img" />
            <h3>Jalisco Mexican Restaurant</h3>
          </div>
          <p>Authentic Mexican food in Fulton, Missouri. Fresh, flavorful, and made to order.</p>
          <div className="footer-rating">
            <span className="footer-stars">★★★★★</span>
            <span>{restaurant.rating} · {restaurant.reviewCount} reviews</span>
          </div>
        </div>

        <div className="footer-col">
  <h4>Visit Us</h4>

  <p>{restaurant.address}</p>

  <p>
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      📍 Get Directions →
    </a>
  </p>
</div>

        <div className="footer-col">
          <h4>Hours</h4>
          <ul className="footer-hours">
            {hours.map((h, i) => (
              <li key={h.day} className={i === todayIndex ? 'is-today' : ''}>
                <span>{h.day.slice(0,3)}</span>
                <span>{h.open} – {h.close}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href={`tel:${restaurant.phone.replace(/[^0-9]/g, '')}`} className="footer-link">{restaurant.phone}</a>
          <p className="footer-price">Price range: {restaurant.priceRange}</p>
          <div className="footer-cta">
            <a href={`tel:${restaurant.phone.replace(/[^0-9]/g, '')}`} className="btn btn-primary footer-btn">Call to Order</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Jalisco Mexican Restaurant. All rights reserved.</p>
          <p className="footer-tags">Happy hour food · Great cocktails · Vegetarian options</p>
        </div>
      </div>
    </footer>
  )
}
