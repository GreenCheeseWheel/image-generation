import React, { useContext } from "react";
import {Contexto} from "../App"
import {Link} from "react-router-dom"

import "../css/generation.css"

function Generation(props)
{
    const {imageUrl} = useContext(Contexto);
    console.log(imageUrl);

    return (
        <section className="generation">
            <img src={imageUrl} alt="Generated Img Here" className="generation--img"></img>
            <a href={imageUrl} className="generation--download" download>Download your image</a>
            <Link to="/" className="generation--return">Not happy with your results? Try again! (Maybe you weren't specific enough)</Link>
        </section>
    );
}

export default Generation;