import React, {useState} from 'react';
import './faceArt.css';

const FaceArt = (props) => {
    const [eye1, setEye1Color] = useState("white")
    const [eye2, setEye2Color] = useState("white")
    const [mouth, setMouthColor] = useState("white")
    const [face, setFaceColor] = useState("white")

    const updateCircleColor = (facePart) => {
        if(facePart === 'eye1'){
            setEye1Color(props.pickedColor);
        }
       
        if(facePart === 'eye2'){
            setEye2Color(props.pickedColor);
        }

        if(facePart === 'mouth'){
            setMouthColor(props.pickedColor);
        }

    }

    const updateFace = (event) => {
        let clickedSection = event.target.className;
        if(clickedSection !== "eye-art" && clickedSection !== "mouth-art"){
            setFaceColor(props.pickedColor);
        }
        
    }

    return(
        <main className="face-art" style={{backgroundColor: face}} onClick={(e)=> updateFace(e)}>
            <section id="eye-zone">
                <article className="eye-art" style={{backgroundColor: eye1}} onClick={()=> updateCircleColor('eye1')}></article>
                <article className="eye-art" style={{backgroundColor: eye2}} onClick={()=> updateCircleColor('eye2')} ></article>
            </section>
            <section id="mouth-zone">
                <article className="mouth-art" style={{backgroundColor: mouth}} onClick={()=> updateCircleColor('mouth')} ></article>
            </section>            
        </main>
    );
}

export default FaceArt;