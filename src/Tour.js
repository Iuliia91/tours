import React, { useState } from 'react'

export default function Tour({ id, name, info, image, price, deleteTour }) {
  const [showeMore, setShoweMore] = useState(false)

  return (
    <div className="tour_card">
      <img src={image} alt="tour" />
      <div className="tour_card-titel">
        <h4>{name}</h4>
        <h4 className="price">${price}</h4>
      </div>
      <p className="info">
        {showeMore ? info : `${info.substring(0, 200)}...`}{' '}
        <span onClick={() => setShoweMore(!showeMore)}>
          {showeMore ? `Showe Less` : 'Read More'}
        </span>
      </p>
      <button className="btn" onClick={() => deleteTour(id)}>
        Not Interested
      </button>
    </div>
  )
}
