import React, {useContext, useState} from "react";
import { Configuration, OpenAIApi } from "openai"
import {Contexto} from "../App"

import "../css/home.css"

import Header from "./Header"
import Hero from "./Hero"
import Gallery from "./Gallery";
import Showcase from "./Showcase";
import Instructions from "./Instructions";
import Footer from "./Footer";



export default function Home(props)
{
    
    return (
            
            <section className="main--section">
                    
                <Header />                    
                <Hero />
                <Gallery />
                <Showcase />
                <Instructions />
                <Footer />
                
            </section>
            
        
    
    );

}