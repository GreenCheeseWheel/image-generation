import React from "react";
import "../css/showcase.css"

import starryNight from "../assets/showcase/starry.webp"
import AiWoman from "../assets/showcase/woman.webp"
import AiDog from "../assets/showcase/dog.webp"

function Showcase() 
{

    return (
        <section className="showcase">
            
            <ul className="showcase--list">
                <li className="showcase--item left">
                    <img className="showcase--item---image" src={starryNight}></img>

                    <div className="showcase--item---content"> 
                        <h2 className="showcase--content---title">The right tool for your ideas</h2>
                        <p className="showcase--content---text">
                            Generate images with a simple click and see your ideas come to life!
                            The life of an artist has never been easier. Now you can transform all your visions into reality,
                            and you only need to write them.
                        </p>
                    </div>

                </li>

                <li className="showcase--item right">

                    <div className="showcase--item---content"> 
                        <h2 className="showcase--content---title">AI Image Generation is the future. Be a part of it!</h2>
                        <p className="showcase--content---text">
                            New and more powerful tools are being created constantly. 
                            Now you can create the beautiful works of art you have always dreamed of with help 
                            of TopAI's image generator
                        </p>
                    </div>

                    <img className="showcase--item---image" src={AiWoman}></img>

                </li>
                
                <li className="showcase--item left">
                    <img className="showcase--item---image" src={AiDog}></img>

                    <div className="showcase--item---content"> 
                        <h2 className="showcase--content---title">New and classic</h2>
                        <p className="showcase--content---text">
                            Try it, be it impressionistic, renaissance or classicist art, TopAI has trained it's AI in all
                            kinds of art. If you are into cyberpunk aesthetics, or appreciate Goya and Da Vinci even more,
                            we've got it here for you! 
                        </p>
                    </div>



                </li>
            </ul>
        
        </section>
    );

}

export default Showcase;