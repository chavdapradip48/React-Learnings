import React from 'react'
import cardImage from './user.jpg'
import  './user-mode.css'

export const UserDarkLightMode = () => {
  return (
    <section id="mode-section">
      <div className="card">
        <img className="card-img-top" src={cardImage} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Jennifer Abraham</h5>
          <p className="card-text">
            The exact meaning of Anh can then vary, depending on the characters used to create the entire compound name.
          </p>
          <a href="#" className="btn btn-primary">
            View Profile
          </a>
        </div>
      </div>
    </section>
  )
}
