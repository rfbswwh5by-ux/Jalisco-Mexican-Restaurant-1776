import { popularDishes } from '../data.js'
import { useReveal } from '../useReveal.js'
import './Popular.css'

export default function Popular() {
  const { ref, shown } = useReveal()

  return (
    <section className="section popular" id="popular">
      <div className="container">
        <div className="popular-head">
          <div>
            <p className="section-eyebrow">Most Loved</p>
            <h2 className="section-title">Popular Dishes</h2>
          </div>
          <p className="popular-intro">
            The plates our guests come back for, week after week.
          </p>
        </div>

        <div ref={ref} className={`popular-grid reveal ${shown ? 'in' : ''}`}>
          {popularDishes.map((d) => (
            <article key={d.name} className="dish-card">
              <div className="dish-body">
                <div className="dish-top">
                  <h3>{d.name}</h3>
                  <span className="dish-price">{d.price}</span>
                </div>

                <p>{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
