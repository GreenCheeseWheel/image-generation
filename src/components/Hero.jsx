import React, {useState} from "react";
import "../css/hero.css"
import Card from "./Card"
import data from "../data"

function Hero(props)
{

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

    
    const textData = data.ideasText;

    const [cardArray, setCardArray] = useState( textData.map((text) => <Card key={text} text={text} clickHandler={copyInput}/>) );
    



    return (
        
        <>
          
        <section className="hero">
            <h1 className="hero--title">Text to Image With AI Generation</h1>
            <h4 className="hero--subtitle">Convert words to images in seconds with this free AI image generator</h4>
        </section>



        <div className="container">

            <section className="hero--input">
                <textarea type="text" className="hero--input---element" placeholder="Describe what you want, separated by commas"></textarea>
                <button className="hero--input---generate" onClick={() => props.clickHandler(document.getElementsByClassName("hero--input---element").item(0).value)}>Generate</button>
            </section>
          

            <section className="hero--ideas">
                <div className="hero--ideas---cards">
                    <h4 className="hero--ideas---title">↺ No ideas? Try something from here!</h4>
                    {cardArray}
                </div>
            </section>

        </div>
        
        </>
    );
}

export default Hero;