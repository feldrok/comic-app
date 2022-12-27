import React from "react"
import "../styles/ComicCard.css"

function ComicCard({ photoUrl, title, id }) {
  return (
    <a className="card-container" href={`/comic-detail?id=${id}`}>
      <div className="card-bg">
        <img src={photoUrl} alt="" />
        <p className="card-title">{title !== "" ? title : "Sin titulo"}</p>
      </div>
    </a>
  )
}

export default ComicCard
