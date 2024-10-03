import {useState} from 'react'
import landingSection from '../data/landingSection.json'
import navbarConfig from '../data/navbarConfig.json'
import {scrollToSection} from '../utils/helper/common'

/**
 * Navbar component for navigation.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(navbarConfig.initialMenuOpen)

  return (
    <div className="homeNavbar" id={navbarConfig.sectionId}>
      <button
        className="logo"
        onClick={() => scrollToSection(landingSection.sectionId)}
        aria-label="Go to landing section"
      >
        {navbarConfig.logoText}
      </button>

      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <button
          className="icon round"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="line1" />
          <span className="line2" />
          <span className="line3" />
        </button>

        <div className="container">
          {navbarConfig.navItems.map((item, key) => (
            <button
              key={key}
              className="item"
              onClick={() => {
                scrollToSection(item.id)
                setMenuOpen(false)
              }}
              aria-label={`Go to ${item.label}`}
            >
              <p>{item.label}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
