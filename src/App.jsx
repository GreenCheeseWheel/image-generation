import React, {useState} from "react";
import { Configuration, OpenAIApi } from "openai"

import "./css/app.css"
import defaultLogo from "./assets/react.svg"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Gallery from "./components/Gallery";
import Generation from "./components/Generation";


export default function App()
{   

    const config = new Configuration({
        apiKey: "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"
    });


    const [imageUrl, setImageUrl] = useState(defaultLogo);
    const openai = new OpenAIApi(config);


    const generateImage = async (genPrompt) => {
    
        const response = await openai.createImage({
            prompt: genPrompt, 
            n: 1, 
            size: "256x256"
            }
        );

        setImageUrl(response.data.data[0].url);
        
       
    };


    
    return (
        <section className="main--section">

            <Header />
            <Hero clickHandler={generateImage}/>
            <Generation imgUrl={imageUrl}/>
            <Gallery />
            
        </section>
    );
}

