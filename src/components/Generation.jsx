import React, { useContext } from "react";
import {Contexto} from "../App"
import "../css/generation.css"

function Generation(props)
{
    const {imageUrl} = useContext(Contexto);
    console.log(imageUrl);

    return (
        <section className="generation">
            <img src={imageUrl} alt="Generated Img Here" className="generation--img"></img>
        </section>
    );
}

export default Generation;