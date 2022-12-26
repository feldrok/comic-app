import React from "react"
import "../styles/Slide.css"

function Slide({ fotoUrl }) {
  return (
    <>
      <img className="slide-image" src={fotoUrl} alt="slide" />
    </>
  )
}

export default Slide
