import React, { useState, useEffect } from "react"
import Hero from "../../components/Hero"
import ComicDetailHero from "../../components/ComicDetailHero"
import ComicDetail from "../../components/ComicDetail"
import Nav from "../../layouts/Nav"
import { useParams } from "react-router-dom"

function ComicDetails() {
  const { id } = useParams()
  const [comic, setComic] = useState({})
    
  const traerData = async () => {
    try {
      const res = await fetch("./../manga.json")
      const data = await res.json()
      setComic(data.find(comic => comic.id === id))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    traerData()
  }, [id])

  return (
    <>
      <Nav />
      <Hero>
        <ComicDetailHero />
      </Hero>
      <ComicDetail id={comic.id} url={comic.photo} title={comic.title !== "" ? comic.title : "Sin titulo"} authorId={comic.author_id} description={comic.description} />
    </>
  )
}

export default ComicDetails
