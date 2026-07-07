import { useState } from 'react'
import { photos } from '../data.js'
import { useReveal } from '../useReveal.js'
import './Photos.css'

export default function Photos() {
  const { ref, shown } = useReveal()
  const [showAll, setShowAll] = useState(false)

  const visiblePhotos = showAll ? photos : photos.slice(0, 4)

  return (
    <section className="section photos" id="photos">
      <div className="container">
        <div className="photos-head">
          <p className="section-eyebrow">From the Kitchen</p>
          <h2 className="section-title">A Taste in Pictures</h2>
        </div>

        <div ref={ref} className={`photos-grid reveal ${shown ? 'in' : ''}`}>
          {visiblePhotos.map((p, i) => (
            <figure key={i} className={`photo-item photo-${i % 6}`}>
              <img src={p.src} alt={p.alt} loading="lazy" />
            </figure>
          ))}
        </div>

          <div className="photos-more">
  <button
    className="photos-more-btn"
    onClick={() => setShowAll(!showAll)}
  >
    {showAll ? "Show Less" : "View More Photos"}
  </button>
</div>
      </div>
    </section>
  )
}
