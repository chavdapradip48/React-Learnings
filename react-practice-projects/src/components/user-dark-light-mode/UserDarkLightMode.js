import React, { useState } from 'react'
import cardImage from './user.jpg'
import  './user-mode.css'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

export const UserDarkLightMode = () => {

  const [mode, setMode] = useState(false);
  const [theme, setTheme] = useState("white-mode");

  function changeMode(){
    setMode(!mode)
    if(!mode) {
      setTheme("dark-theme");
    } else {
      setTheme("white-theme");
    }
  }

  return (
    <section id="mode-section">
      <div id="mode-toggle">
        <BootstrapSwitchButton checked={true} width={100} offlabel={"Light"} onlabel={"Dark"} onChange={changeMode}/>
      </div>
      <div className={"card "+theme}>
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
