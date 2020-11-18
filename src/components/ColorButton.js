import React from 'react';
import './colorButton.css';

const ColorButton = (props) => {
    return(
        <main   
            className="squareBoxStyle" 
            onClick={props.getColor}
            style={{backgroundColor:props.pickedColor}}>            
        </main>
    );
}

export default ColorButton;