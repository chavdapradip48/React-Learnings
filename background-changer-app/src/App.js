import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [backColor, setBackColor] = useState("olive");
  const colorArray = ["Red", "Blue", "Green", "Yellow", "Orange", "Gray"];
  document.body.style.backgroundColor = backColor;

  function handleColor(color){
    setBackColor(color);
  }

  return (
    <div className="App" >
      <h1 id="main-heading">Background Changer App</h1>
      <div id="main-container">
      {colorArray.map((color, index) => (
          <ColorBox
            key={index}
            color={color.toLowerCase()}
            label={color}
            handler={() => handleColor(color.toLowerCase())}
          />
        ))}
      </div>
    </div>
  );
}

