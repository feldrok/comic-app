import React from "react"
import Hero from "../../components/Hero"
import ComicsHero from "../../components/ComicsHero"
import ComicsSection from "../../components/ComicsSection"
import Nav from "../../layouts/Nav"

function Comics() {
  return (
    <>
      <Nav />
      <Hero>
        <ComicsHero />
      </Hero>
      <ComicsSection />
    </>
  )
}

export default Comics
