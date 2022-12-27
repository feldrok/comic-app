import React, { useState } from "react"
import "../styles/Nav.css"
import Button from "../components/Button"
import { FiMenu } from "react-icons/fi"
import { IoClose } from "react-icons/io5"
import { Link } from "react-router-dom"

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
          <Link className="nav-link" to={"/"}>
            Inicio
          </Link>
          <Link className="nav-link" to={"/comics"}>
            Comics
          </Link>
        </div>
        <div className="nav-item">
          <Link className="login-btn" to={"/"} >Iniciar Sesión</Link>
        </div>
        <div onClick={toggleNav} className="nav-item menu-button">
          <FiMenu fontSize="2em" className="menu-icon" />
        </div>
      </div>
      <div className={`mobile-nav ${navigation ? "show-menu" : ""} `}>
        <div onClick={toggleNav} className="close-button">
          <IoClose fontSize="2em" color="white" />
        </div>
        <div className="mobile-nav-items">
          <ul className="nav-links">
            <li>
              <Link className="nav-link" to={"/"}>
                Inicio
              </Link>{" "}
            </li>
            <li>
              <Link className="nav-link" to={"/comics"}>
                Comics
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
