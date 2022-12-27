import React from "react"
import "../styles/ComicCard.css"
import { Link } from "react-router-dom"

function ComicCard({ photoUrl, title, id }) {
  return (
    <Link className="card-container" to={`/details/${id}`}>
      <div className="card-bg">
        <img src={photoUrl} alt="" />
        <p className="card-title">{title !== "" ? title : "Sin titulo"}</p>
      </div>
    </Link>
  )
}

export default ComicCard
