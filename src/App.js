import './App.css';
import React, {useState} from 'react';

import ColorButton from './components/ColorButton.js';
import FaceArt from './components/FaceArt.js';

function App() {
  const [currentColor, setCurrentColor] = useState("");

  const updateCurrentColor = (color) => {
    setCurrentColor(color)
  }

  return (
    <div className="app">
      <h1 id="app-title" className="centerText">Click Art</h1>
      <main>
        <h5 className="centerText section-title">Step 1: Click a box to Pick a Color</h5>
        <section id="color-picker-section">
          <ColorButton pickedColor = "#0FF906" getColor = {() => updateCurrentColor("#0FF906")}/>
          <ColorButton pickedColor = "#009D0A" getColor = {() => updateCurrentColor("#009D0A")}/>
          <ColorButton pickedColor = "#FCFC07" getColor = {() => updateCurrentColor("#FCFC07")}/>
        
          <ColorButton pickedColor = "#0691FC" getColor = {() => updateCurrentColor("#0691FC")}/>
          <ColorButton pickedColor = "#021BFD" getColor = {() => updateCurrentColor("#021BFD")}/>
          <ColorButton pickedColor = "#F207FA" getColor = {() => updateCurrentColor("#F207FA")}/>

          <ColorButton pickedColor = "#F8D806" getColor = {() => updateCurrentColor("#F8D806")}/>
          <ColorButton pickedColor = "#FC9408" getColor = {() => updateCurrentColor("#FC9408")}/>
          <ColorButton pickedColor = "#FF2504" getColor = {() => updateCurrentColor("#FF2504")}/>          
        </section>
        <h5 className="centerText section-title">Step 2: Click any Circle below to change the Color</h5>
        <section id="art-section">
          <FaceArt pickedColor= {currentColor} />
        </section>
      </main>
    </div>
  );
}


export default App;
