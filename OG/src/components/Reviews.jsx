import { reviews, restaurant } from '../data.js'
import { useReveal } from '../useReveal.js'
import './Reviews.css'

export default function Reviews() {
  const { ref, shown } = useReveal()
  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <div className="reviews-head">
          <p className="section-eyebrow">Guest Feedback</p>
          <h2 className="section-title">What People Say</h2>
          <div className="reviews-summary">
            <span className="reviews-big">{restaurant.rating}</span>
            <span className="reviews-stars">★★★★★</span>
            <span className="reviews-count">Based on {restaurant.reviewCount} reviews</span>
          </div>
        </div>
        <div ref={ref} className={`reviews-grid reveal ${shown ? 'in' : ''}`}>
          {reviews.map((r) => (
            <article key={r.author + r.source} className="review-card">
              <div className="review-stars">
                {[1,2,3,4,5].map((i) => (
                  <span key={i} className={i <= r.rating ? 'on' : ''}>★</span>
                ))}
              </div>
              <p className="review-text">"{r.text}"</p>
              <div className="review-foot">
                <span className="review-avatar">{r.author.charAt(0)}</span>
                <div>
                  <p className="review-author">{r.author}</p>
                  <p className="review-source">{r.source}</p>
                </div>
              </div>
            </article>
          ))}
          <div className="reviews-more">
  <a
  href="https://www.google.com/maps/search/?api=1&query=Jalisco+Mexican+Restaurant+Fulton+MO"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline"
>
  Read More Google Reviews
</a>
</div>
        </div>
      </div>
    </section>
  )
}
