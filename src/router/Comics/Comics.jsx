import React from "react"
import Hero from "../../components/Hero"
import ComicsHero from "../../components/ComicsHero"
import ComicsSection from "../../components/ComicsSection"

function Comics() {
  return (
    <>
      <Hero>
        <ComicsHero />
      </Hero>
      <ComicsSection />
    </>
  )
}

export default Comics
