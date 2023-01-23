import React, { useState } from "react";
import "../css/generation.css"

function Generation(props)
{

    return (
        <section className="generation">
            <img src={props.imgUrl} alt="Generated Img Here" className="generation--img"></img>
        </section>
    );
}

export default Generation;

