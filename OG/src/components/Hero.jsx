import { useEffect, useState } from 'react'
import { restaurant } from '../data.js'
import './Hero.css'

function getRestaurantStatus() {
  const now = new Date()
  const day = now.getDay()
  const minutes = now.getHours() * 60 + now.getMinutes()

  const hours = {
  0: { open: 11 * 60, close: 21 * 60 }, // Sunday 11–9
  1: { open: 11 * 60, close: 21 * 60 }, // Monday 11–9
  2: { open: 11 * 60, close: 21 * 60 }, // Tuesday 11–9
  3: { open: 11 * 60, close: 21 * 60 }, // Wednesday 11–9
  4: { open: 11 * 60, close: 21 * 60 }, // Thursday 11–9
  5: { open: 11 * 60, close: 22 * 60 }, // Friday 11–10
  6: { open: 11 * 60, close: 22 * 60 }, // Saturday 11–10
}

  const today = hours[day]

if (minutes >= today.open - 30 && minutes < today.open) {
  const remaining = today.open - minutes

  return {
    text: `Opening Soon • Opens in ${remaining} min`,
    className: 'soon'
  }
}
  
  if (minutes >= today.open && minutes < today.close) {
    return {
      text: day === 5 || day === 6 ? 'Open • Closes 10 PM' : 'Open • Closes 9 PM',
      className: 'open'
    }
  }

  return {
    text: 'Closed • Opens 11 AM',
    className: 'closed'
  }
}

export default function Hero() {
  const [status, setStatus] = useState(getRestaurantStatus())

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getRestaurantStatus())
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      <div className="container hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">Jalisco Mexican Restaurant</h1>
          <p className="hero-tagline">{restaurant.tagline}</p>
          <div className="hero-meta">
            <span className="hero-rating">
              <Stars value={restaurant.rating} />
              <strong>{restaurant.rating}</strong>
              <span className="muted">({restaurant.reviewCount})</span>
            </span>
            <span className="hero-dot">·</span>
            <span>{restaurant.priceRange}</span>
            <span className="hero-dot">·</span>
            <span className={`hero-status ${status.className}`}>
  {status.text}
</span>
          </div>
          <div className="hero-actions">
            <a href="#/menu" className="btn btn-primary">View Menu</a>
            <a href={`tel:${restaurant.phone.replace(/[^0-9]/g, '')}`} className="btn btn-outline">Call to Order</a>
          </div>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span></span>
      </div>
    </section>
  )
}

function Stars({ value }) {
  return (
    <span className="stars" aria-label={`${value} stars`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const fill =
          value >= i ? 100 :
          value >= i - 0.5 ? 50 :
          0

        return (
          <span
            key={i}
            className="star-wrapper"
            style={{ "--fill": `${fill}%` }}
          >
            <svg
              className="star-bg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.5l2.9 6 6.6.9-4.8 4.7 1.1 6.6L12 17.6 6.2 20.7l1.1-6.6-4.8-4.7 6.6-.9L12 2.5z" />
            </svg>

            <svg
              className="star-fill"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.5l2.9 6 6.6.9-4.8 4.7 1.1 6.6L12 17.6 6.2 20.7l1.1-6.6-4.8-4.7 6.6-.9L12 2.5z" />
            </svg>
          </span>
        )
      })}
    </span>
  )
}
