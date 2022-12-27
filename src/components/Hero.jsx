import React from "react"
import "../styles/Hero.css"

function Hero({ children }) {
  return (
    <header>
      <div className="bg-dark-film">
        <div className="container">
          <div className="hero-content">
            {children}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
