import React from "react"
import "../styles/ComicDetail.css"

function ComicDetail( { url, title, description, id, authorId }) {
  return (
    <div className="details-container">
      <h1 className="detail-section-title">Detalles de Comic</h1>
      <div className="detail-card">
        <img src={ url } alt="" />
        <div className="comic-details">
          <div className="title-container">
            <p className="comic-title">{title + ` - ` + authorId}</p>
          </div>
          <p className="comic-description">{description}</p>
          <p className="comic-id">{id}</p>
        </div>
      </div>
    </div>
  )
}

export default ComicDetail
