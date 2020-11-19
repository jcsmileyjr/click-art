import React from 'react';
import './faceArt.css';

const FaceArt = (props) => {
    return(
        <main className="face-art">
            <section id="eye-zone">
                <article className="eye-art"></article>
                <article className="eye-art"></article>
            </section>
            <section id="mouth-zone">
                <article className="mouth-art"></article>
            </section>            
        </main>
    );
}

export default FaceArt;