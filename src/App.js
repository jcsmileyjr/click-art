import './App.css';

import ColorButton from './components/ColorButton.js';

function App() {
  return (
    <div className="app">
      <h1 id="app-title" className="centerText">Click Art</h1>
      <main>
        <h4 className="centerText section-title">Click a box to Pick a Color</h4>
        <section id="colorPickerSection">
          <ColorButton pickedColor = "#0FF906"/>
          <ColorButton pickedColor = "#009D0A"/>
          <ColorButton pickedColor = "#FCFC07"/>
        
          <ColorButton pickedColor = "#0691FC"/>
          <ColorButton pickedColor = "#021BFD"/>
          <ColorButton pickedColor = "#F207FA"/>

          <ColorButton pickedColor = "#F8D806"/>
          <ColorButton pickedColor = "#FC9408"/>
          <ColorButton pickedColor = "#FF2504"/>          
        </section>
      </main>
    </div>
  );
}

export default App;
