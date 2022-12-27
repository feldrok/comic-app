import React from "react"
import Layout from "./layouts/Layout"
import Hero from "./components/Hero"
import "./App.css"
import Carousel from "./components/Carousel"
import Comics from "./components/Comics"
import ComicDetail from "./components/ComicDetail"
import HomeHero from "./components/HomeHero"
import ComicsHero from "./components/ComicsHero"
import ComicDetailHero from "./components/ComicDetailHero"

function App() {
  return (
    <div className="App">
      {/* Home */}
      <Layout>
        <Hero>
          <HomeHero />
        </Hero>
        <Carousel />
      </Layout>
      {/* Comics */}
      {/* <Layout>
        <Hero>
          <ComicsHero />
        </Hero>
        <Comics />
      </Layout> */}
      {/* Comic Detail */}
      {/* <Layout>
        <Hero>
          <ComicDetailHero />
        </Hero>
        <ComicDetail photoUrl={""} title={""} id={""} description={""} />
      </Layout> */}
    </div>
  )
}

export default App
