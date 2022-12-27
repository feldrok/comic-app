import React, { useEffect, useState } from "react"
import "../styles/Carousel.css"
import Slide from "../components/Slide"
import Button from "../components/Button"
import { Link } from "react-router-dom"

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
    }, 4000)
    return () => clearInterval(interval)
  })

  const nextSlide = () => {
    setCurrent(current === mangas.length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? mangas.length - 1 : current - 1)
  }
  const setActive = (index) => {
    setCurrent(index)
  }

  return (
    <div className="carousel" id="comics">
      <div className="carousel-container">
        <div className="carousel-wrap">
          <Button buttonType="left-arrow" text="&#10094;" onClick={prevSlide} />
          <div className="carousel-content-wrap">
            <p className="image-number">
              {current + 1 + " / " + mangas.length}
            </p>
            <div
              className="carousel-content"
            >
              <Slide fotoUrl={mangas[current]?.photo} />
            </div>
            <Link to={`/details/${mangas[current]?.id}`} className="caption">{mangas[current]?.title !== "" ? mangas[current]?.title : "sin titulo" }</Link>
          </div>
          <Button
            buttonType="right-arrow"
            text="&#10095;"
            onClick={nextSlide}
          />
        </div>
        <div className="dot-container">
          {mangas.map((manga, index) => (
            <span
              onClick={() => setActive(index)}
              key={index}
              className={index === current ? "dot dot-active" : "dot"}
            ></span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
