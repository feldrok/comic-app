import React from "react"
import "../styles/Button.css"

function Button({ buttonType, text }) {
  return <button className={buttonType}>{text}</button>
}

export default Button
