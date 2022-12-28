import React from "react"
import Button from "./Button"
import { Link } from "react-router-dom"

function HomeHero() {
  return (
    <>
      <Button
        buttonType="announcement-btn"
        text={`Anunciamos nuestra próxima ronda de financiación. Leer más →`}
        link="#comics"
      />
      <h1 className="hero-title">Tu tienda de comics favorita</h1>
      <p className="hero-text">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
      <Link className="get-started-btn"  to={"#comics"} >Empezar →</Link>
    </>
  )
}

export default HomeHero
