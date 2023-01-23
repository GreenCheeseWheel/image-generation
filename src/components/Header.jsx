import React from "react";
import "../css/header.css"
import arrow from "../assets/down-arrow.svg"

function Header()
{

    const scrollChange = (event) => 
    {   
        var scroll = window.pageYOffset;
        const header = document.getElementsByTagName("header").item(0);
        if(scroll === 0) {
            header.style = "background: rgba(255, 255, 255, 0); color: snow"
        } else 
        
        {
            header.style = "background: rgba(255, 255, 255, 1); color: rgb(35, 35, 35)"
        }


    };

    window.onscroll = scrollChange;

    return (
        <header>
            <div className="header--menu">
                <h3>TopAI</h3>
                <a href="#" className="header--menu---item">Editing tools <img src={arrow}></img></a>
                <a href="#" className="header--menu---item">Create <img src={arrow}></img></a>
                <a href="#" className="header--menu---item">AI Tools <img src={arrow}></img></a>
                <a href="#" className="header--menu---item">Templates <img src={arrow}></img></a>
                <a href="#" className="header--menu---item">Support <img src={arrow}></img></a>
            </div>

            <a href="#" className="header--signin">Sign in</a>
        </header>
    );
}

export default Header;