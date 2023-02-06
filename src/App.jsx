import React, {createContext, useState} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import defaultLogo from "./assets/react.svg"

import Home from "./components/Home"
import Generation from "./Components/Generation";
export const Contexto = createContext();


export default function App()
{   
    const [imageUrl, setImageUrl] = useState(null);
    const [result, setResult] = useState(null);
    
    return (            
        
        <>
        
            <Contexto.Provider value={{imageUrl, setImageUrl, result, setResult}}> 

                <BrowserRouter >
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="generate" element={<Generation />} />
                    </Routes>
                </BrowserRouter>

            </Contexto.Provider>
        
        </>

    );
}

