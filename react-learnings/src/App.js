// import React, { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1 id="main-heading">This is My Button Componant</h1>
      <MyButton />
      <About />
    </div>
  );
}

// First comaponant
function MyButton(){
  return (<>
    <button className="first-btn">First Buttton</button>
  </>);
}

// About componant
function About(){
  return <>
    <h1 className="about-h1">About</h1>
    <p id="about-paragraph">This is about section so in this tutorial section, We are trying to lean react by official</p>
  </>
}