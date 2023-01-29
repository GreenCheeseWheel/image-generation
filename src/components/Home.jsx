import React, {useContext, useState} from "react";
import { Configuration, OpenAIApi } from "openai"
import {Contexto} from "../App"

import "../css/home.css"

import Header from "./Header"
import Hero from "./Hero"
import Gallery from "./Gallery";
import Footer from "./Footer";

export default function Home(props)
{
    const {imageUrl} = useContext(Contexto);
    
    const config = new Configuration({
        apiKey: import.meta.env.VITE_OPEN_KEY
    });

    
    
    const openai = new OpenAIApi(config);
    const generateImage = async (genPrompt) => {
        
        /*
        const response = await openai.createImage({
            prompt: genPrompt, 
            n: 1, 
            size: "256x256"
            }
        );

        setImageUrl(response.data.data[0].url);
        */

    };




    return (
            
            <section className="main--section">
                    
                <Header />                    
                <Hero />
                <Gallery />
                <Footer />
                
            </section>
            
        
    
    );

}