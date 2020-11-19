import './App.css';
import React, {useState} from 'react';

import ColorButton from './components/ColorButton.js';

function App() {
  const [currentColor, setCurrentColor] = useState("");

  const updateCurrentColor = (color) => {
    setCurrentColor(color)
  }

  return (
    <div className="app">
      <h1 id="app-title" className="centerText">Click Art</h1>
      <main>
        <h4 className="centerText section-title">Click a box to Pick a Color</h4>
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
        <h4 className="centerText section-title">Click any Circle below to change the Color</h4>
        <section id="art-section">
          <article className="face-art">
            <section id="eye-zone">
              <article className="eye-art"></article>
              <article className="eye-art"></article>
            </section>
            <section id="mouth-zone">
              <article className="mouth-art"></article>
            </section>            
          </article>
        </section>
      </main>
    </div>
  );
}


export default App;
