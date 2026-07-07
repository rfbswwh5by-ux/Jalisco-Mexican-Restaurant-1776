import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Popular from './components/Popular.jsx'
import Menu from './components/Menu.jsx'
import About from './components/About.jsx'
import Reviews from './components/Reviews.jsx'
import Photos from './components/Photos.jsx'
import Footer from './components/Footer.jsx'
import MenuPage from './components/MenuPage.jsx'

function useHashRoute() {
  const [route, setRoute] = useState(() => window.location.hash || '#/')
  useEffect(() => {
    const onHash = () => {
      setRoute(window.location.hash || '#/')
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return route
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const route = useHashRoute()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isMenuPage = route.startsWith('#/menu')

  return (
    <>
      <Nav scrolled={scrolled || isMenuPage} />
      <main>
        {isMenuPage ? (
          <MenuPage />
        ) : (
          <>
            <Hero />
            <Popular />
            <Menu />
            <About />
            <Reviews />
            <Photos />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
