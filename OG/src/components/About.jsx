import { useReveal } from '../useReveal.js'
import './About.css'

const features = [
  { icon: '🍽️', title: 'Authentic Flavors', text: 'Chimichangas, burritos, fajitas, and enchiladas made fresh with traditional recipes.' },
  { icon: '🥗', title: 'Vegetarian Friendly', text: 'A wide selection of meat-free options throughout the menu.' },
  { icon: '🛎️', title: 'Welcoming Service', text: 'A comfortable atmosphere with a friendly staff that gets to know you.' },
  { icon: '♿', title: 'Wheelchair Accessible', text: 'Easy access for all guests, with dine-in and takeout available.' },
]

export default function About() {
  const { ref, shown } = useReveal()
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-img-wrap">
          <img
  src="/IMG_1178.PNG"
  alt="Illustration of Jalisco Mexican Restaurant"
  loading="lazy"
/>
          <div className="about-badge">
            <span className="about-badge-num">4.5</span>
            <span className="about-badge-label">Rating · 1K+ reviews</span>
          </div>
        </div>
        <div ref={ref} className={`about-text reveal ${shown ? 'in' : ''}`}>
          <p className="section-eyebrow">About Us</p>
          <h2 className="section-title">A Fulton Favorite for Authentic Mexican Food</h2>
          <p className="about-lead">
            Jalisco Mexican Restaurant is a popular spot in Fulton, Missouri, known for its authentic Mexican food —
            from chimichangas and burritos to fajitas and a wide selection of enchiladas. With options for lunch, dinner,
            and takeout, it's a go-to for fresh, flavorful meals at affordable prices.
          </p>
          <div className="about-features">
            {features.map((f) => (
              <div key={f.title} className="about-feature">
                <span className="about-feature-icon" aria-hidden="true">{f.icon}</span>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
