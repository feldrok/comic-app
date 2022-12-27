import React from "react"
import "../styles/ComicDetail.css"

function ComicDetail({ photoUrl, title, id, description }) {
  return (
    <div className="details-container">
      <h1 className="detail-section-title">Detalles de Comic</h1>
      <div className="detail-card">
        <img src="https://storage.googleapis.com/minga/manga__burn_the_witch.jpg" alt="" />
        <div className="comic-details">
          <p className="comic-title">{title !== "" ? title : "sin titulo"}</p>
          <p className="comic-description">{description !== "" ? description : "sin descripción"}</p>
          <p className="comic-id">{id !== "" ? id : "sin id"}</p>
        </div>
      </div>
    </div>
  )
}

export default ComicDetail
