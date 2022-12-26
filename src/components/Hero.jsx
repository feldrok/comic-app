import React from "react"
import "../styles/Hero.css"
import Button from "./Button"

function Hero() {
  return (
    <header>
      <div className="bg-dark-film">
        <div className="container">
          <div className="hero-content">
          <Button
            buttonType="announcement-btn"
            text={`Anunciamos nuestra próxima ronda de financiación. Leer más →`}
          />
          <h1 className="hero-title">Tu tienda de comics favorita</h1>
          <p className="hero-text">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
          <Button 
            buttonType="get-started-btn"
            text="Empezar →"
          />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
