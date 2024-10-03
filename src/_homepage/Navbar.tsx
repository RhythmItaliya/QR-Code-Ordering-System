import {useState} from 'react'
import landingSection from '../data/landingSection.json'
import navbarConfig from '../data/navbarConfig.json'
import {scrollToSection} from '../utils/helper/common'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(navbarConfig.initialMenuOpen)

  return (
    <div className="homeNavbar" id={navbarConfig.sectionId}>
      <div
        className="logo"
        onClick={() => scrollToSection(landingSection.sectionId)}
      >
        {navbarConfig.logoText}
      </div>
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <div className="icon round" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1" />
          <span className="line2" />
          <span className="line3" />
        </div>
        <div className="container">
          {navbarConfig.navItems.map((item, key) => (
            <div
              key={key}
              className="item"
              onClick={() => {
                scrollToSection(item.id)
                setMenuOpen(false)
              }}
            >
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
