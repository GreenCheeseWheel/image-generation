import React, { useContext, useEffect } from "react";
import {Contexto} from "../App"
import {Link} from "react-router-dom"

import { OpenAIApi, Configuration } from "openai";
import "../css/generation.css"

function Generation(props)
{
    const {imageUrl, setImageUrl, result} = useContext(Contexto);


    var apiKey = " " + import.meta.env.VITE_OPEN_KEY;
    apiKey = apiKey.trim().replaceAll("@", "");

    const config = new Configuration({
        apiKey: apiKey
    });
    
    const openai = new OpenAIApi(config);


    const createImageResponse = async (prompt) => {
        const response = await openai.createImage( {
            prompt: prompt,
            n: 1,
            size: "256x256"
            
        });

        setImageUrl(response.data.data[0].url);
    }
    

    useEffect(() => { createImageResponse(result); }, []);
        return (
        <section className="generation">
            <img src={imageUrl} alt="Generated Img Here" className="generation--img"></img>
            <a href={imageUrl} className="generation--download" download>Download your image (If there is no image in display wait a few seconds)</a>
            <Link to="/" className="generation--return">Not happy with your results? Try again! (Maybe you weren't specific enough)</Link>
        </section>
    );
}

export default Generation;