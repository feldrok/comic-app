import React from "react"
import Nav from "../../layouts/Nav"
import Hero from "../../components/Hero"
import HomeHero from "../../components/HomeHero"
import Carousel from "../../components/Carousel"

function Index() {
  return (
    <>
      <Nav />
      <Hero>
        <HomeHero />
      </Hero>
      <Carousel />
    </>
  )
}

export default Index
