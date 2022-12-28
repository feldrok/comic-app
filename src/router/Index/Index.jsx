import React from "react"
import Hero from "../../components/Hero"
import HomeHero from "../../components/HomeHero"
import Carousel from "../../components/Carousel"

function Index() {
  return (
    <>
      <Hero>
        <HomeHero />
      </Hero>
      <Carousel />
    </>
  )
}

export default Index
