import React, { useEffect, useState } from "react"
import "../styles/Carousel.css"
import Slide from "../components/Slide"

function Carousel() {
  const [current, setCurrent] = useState(0)
  const [mangas, setMangas] = useState([])

  const traerData = async () => {
    try {
      const res = await fetch("./manga.json")
      const data = await res.json()
      setMangas(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    traerData()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 2000)
    return () => clearInterval(interval)
  })

  const nextSlide = () => {
    setCurrent(current === mangas.length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? mangas.length - 1 : current - 1)
  }

  return (
    <div className="carousel" id="comics">
      <div className="carousel-container">
        <div className="carousel-wrap">
          <button onClick={prevSlide} className="left-arrow">
            &#10094;
          </button>
          <div className="carousel-content-wrap">
            <p className="image-number">{current + 1 + " / " + mangas.length}</p>
            <div
              className="carousel-content"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              <Slide fotoUrl={mangas[current]?.photo} />
              <Slide fotoUrl={mangas[current]?.photo} />
              <Slide fotoUrl={mangas[current]?.photo} />
              <Slide fotoUrl={mangas[current]?.photo} />
              <Slide fotoUrl={mangas[current]?.photo} />
            </div>
            <p className="caption">{mangas[current]?.title}</p>
          </div>
          <button onClick={nextSlide} className="right-arrow">
            &#10095;
          </button>
        </div>
        <div className="dot-container">
          <span className={`dot ${current === 0 ? "dot-active" : ""}`}></span>
          <span className={`dot ${current === 1 ? "dot-active" : ""}`}></span>
          <span className={`dot ${current === 2 ? "dot-active" : ""}`}></span>
          <span className={`dot ${current === 3 ? "dot-active" : ""}`}></span>
          <span className={`dot ${current === 4 ? "dot-active" : ""}`}></span>
        </div>
      </div>
    </div>
  )
}

export default Carousel
