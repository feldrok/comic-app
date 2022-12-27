import React from "react"
import Button from "./Button"

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
      <Button buttonType="get-started-btn" text="Empezar →" link="#comics" />
    </>
  )
}

export default HomeHero
