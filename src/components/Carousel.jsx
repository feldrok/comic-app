import React from "react"
import "../styles/Carousel.css"

function Carousel({ children }) {
  return (
    <div className="carousel">
      <div className="carousel-container">
        <div className="carousel-wrap">
          <button className="left-arrow">&#10094;</button>
          <div className="carousel-content-wrap">
            <p className="image-number">1 / 3</p>
            <div className="carousel-content">{children}</div>
            <p className="caption">Soon dynamic caption</p>
          </div>
          <button className="right-arrow">&#10095;</button>
        </div>
        <div className="dot-container">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  )
}

export default Carousel
