import React from "react"
import "../styles/Button.css"

function Button({ buttonType, text, onClick, link }) {
  return <a className={buttonType} href={link} onClick={onClick}>{text}</a>
}

export default Button