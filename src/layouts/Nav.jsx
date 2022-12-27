import React, { useState } from "react"
import "../styles/Nav.css"
import Button from "../components/Button"
import { FiMenu } from "react-icons/fi"
import { IoClose }  from "react-icons/io5"

function Nav() {
  const [navigation, setNavigation] = useState(false)
  const [navBar, setNavBar] = useState(false)

  const toggleNav = () => {
    setNavigation(!navigation)
  }

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }

  window.addEventListener("scroll", changeBackground)

  return (
    <nav>
      <div className={`main-nav ${navBar ? "active" : ""}`}>
        <div className="nav-item">
          <img className="nav-logo" src="./logo.png" alt="logo" />
        </div>
        <div className="nav-item nav-items">
        <button className="nav-link" onClick={() => window.location.replace("/")}>Inicio</button>
        <button className="nav-link" onClick={() => window.location.replace("/#comics")} >Comics</button>
        </div>
        <div className="nav-item">
          <Button buttonType="login-btn" text="Iniciar Sesión" link="/" />
        </div>
        <div onClick={toggleNav} className="nav-item menu-button">
          <FiMenu fontSize="2em" className="menu-icon" />
        </div>
      </div>
      <div className={`mobile-nav ${navigation ? "show-menu" : ""} `}>
        <div onClick={toggleNav} className="close-button">
        <IoClose fontSize="2em" color="white"/>
        </div>
        <div className="mobile-nav-items">
          <ul className="nav-links">
            <li >
              <button className="nav-link" onClick={() => window.location.replace("/")}>Inicio</button>
            </li>
            <li >
              <button className="nav-link" onClick={() => window.location.replace("/#comics")} >Comics</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
