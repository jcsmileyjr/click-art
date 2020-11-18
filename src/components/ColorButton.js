import React from 'react';
import './colorButton.css';

const ColorButton = (props) => {
    return(
        <main   
            className="squareBoxStyle" 
            style={{backgroundColor:props.pickedColor}}>
            
        </main>
    );
}

export default ColorButton;