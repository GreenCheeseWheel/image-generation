import React, {useContext, useState} from "react";
import {Contexto} from "../App"

import "../css/hero.css"
import Card from "./Card"
import data from "../data"
import { Link } from "react-router-dom";

function Hero(props)
{
    const {setImageUrl} = useContext(Contexto);


    const copyInput = (event) => 
    {
        const copyValue = event.target.innerHTML;
        navigator.clipboard.writeText(copyValue);
        
        changeInput();
    };

    const changeInput = async () => 
    {
        var inputElement = document.getElementsByClassName("hero--input---element").item(0);

        inputElement.value = await navigator.clipboard.readText(); 
    };

    const clickHandler = () => 
    {
        const inputElement = document.getElementsByClassName("hero--input---element").item(0);
        setImageUrl(inputElement.value.trim());
    }

    
    const textData = data.ideasText;

    const [cardArray, setCardArray] = useState( textData.map((text) => <Card key={text} text={text} clickHandler={copyInput}/>) );
    



    return (
        
        <>
          
        <section className="hero">
            <h1 className="hero--title">Text to Image with AI Image Generator</h1>
            <h4 className="hero--subtitle">Convert words to images in seconds with this free AI image generator. Input the text prompts and transfer your imagination into art now.</h4>
        </section>



        <div className="container">

            <section className="hero--input">
                <textarea type="text" className="hero--input---element" placeholder="Describe what you want, separated by commas"></textarea>
                <Link to="generate" className="hero--input---generate" onClick={clickHandler}>Generate</Link>
            </section>
          

            <section className="hero--ideas">
                <div className="hero--ideas---cards">
                    <h4 className="hero--ideas---title">↺ No ideas? Try these!</h4>
                    {cardArray}
                </div>
            </section>

        </div>
        
        </>
    );
}

export default Hero;