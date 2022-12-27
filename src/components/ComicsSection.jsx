import React, { useState, useEffect } from "react"
import ComicCard from "./ComicCard"
import "../styles/ComicsSection.css"

function Comics() {
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

  return (
    <div className="comics">
      <div className="comics-container">
        <h2 className="comic-section-title">Comics</h2>
        <div className="comics-wrap">
          {mangas.map((manga) => (
            <ComicCard
              key={manga.id}
              photoUrl={manga.photo}
              title={manga.title}
              id={manga.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Comics
