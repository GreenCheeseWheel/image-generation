import React from "react";
import "../css/header.css"

import arrow from "../assets/down-arrow.svg"

import logo from "../assets/logo.svg"
import logoTwo from "../assets/logo2.svg"

function Header()
{

    const scrollChange = (event) => 
    {   
        var scroll = window.scrollY;
        const header = document.getElementsByTagName("header").item(0);
        const headerLogo = document.getElementsByClassName("header--logo").item(0);
        
        if(scroll <= 50) 
        {
            header.style = "background: rgba(255, 255, 255, 0); color: snow"
            headerLogo.src = logo;
        } 
        
        else 
        {
            header.style = "background: rgba(255, 255, 255, 1); color: rgb(35, 35, 35)"
            headerLogo.src = logoTwo;
        }
    };

    window.onscroll = scrollChange;


    function mouseLeaveHandler(evento)
    {

        const target = evento.target;

        if(!target.classList.contains(".dropdown--menu"))
        {
            const arrayDropdrown = document.getElementsByClassName("dropdown--menu");

            for(let i = 0; i < arrayDropdrown.length; i++)
            {
                arrayDropdrown.item(i).style = "opacity: 0; pointer-events: none;";
            }
        }
       
    }


    function mouseEnterHandler(evento)
    {

        let currDropdown = evento.target;
        const isDropDown = currDropdown.matches(".header--menu---item");
        
        if(!isDropDown && currDropdown.closest(".dropdown") != null)
        {
            return
        }

        if(isDropDown)
        {
            currDropdown = currDropdown.parentElement.children[1];
            currDropdown.style = "opacity: 1; pointer-events: auto; transform: translateY(0px)";
            return;   
        }

        if(!isDropDown && currDropdown.closest(".dropdown") == null)
        {
            currDropdown = document.getElementsByClassName("dropdown--menu");

            for(let i = 0; i < currDropdown.length; i++)
            {
                currDropdown.item(i).style = "opacity: 0; pointer-events: none;";
            }
            
            return;   
        }    

    }


    return (
        <header>
            <div className="header--menu" onMouseOver={mouseEnterHandler} >
                <div className="header--title---container"><img className="header--logo" src={logo}></img></div>

                <div className="dropdown stable" onMouseLeave={mouseLeaveHandler}>
                    <a className="header--menu---item" >Editing tools <img src={arrow}></img></a>
                    <div className="dropdown--menu">
                        <section className="dropdown--menu---section">
                            <h2 className="dropdown--title">Web Photo Editor</h2>
                          
                            <div className="dropdown--menu---options">
                                <a className="dropdown--options---item">Crop image</a>
                                <a className="dropdown--options---item">Resize image</a>
                                <a className="dropdown--options---item">Circle crop</a>
                                <a className="dropdown--options---item">Shape image</a>
                                <a className="dropdown--options---item">Text editor</a>
                            </div>    
                        
                        </section>

                        <section className="dropdown--menu---section">
                            <h2 className="dropdown--title">App Photo Editor</h2>
                            <div className="dropdown--menu---options">
                                <a className="dropdown--options---item">Mobile photo editor app</a>
                                <a className="dropdown--options---item">Mac/Windows photo editor app</a>
                            </div>    
                        </section>


                    </div>
                </div>

                <div className="dropdown stable" onMouseLeave={mouseLeaveHandler}>
                    <a className="header--menu---item">Create <img src={arrow}></img></a>
                    <div className="dropdown--menu" >
                        <section className="dropdown--menu---section">
                            <h2 className="dropdown--title">Marketing</h2>
                          
                            <div className="dropdown--menu---options">
                                <a className="dropdown--options---item">Logo maker</a>
                                <a className="dropdown--options---item">Flyer maker</a>
                                <a className="dropdown--options---item">Poster maker</a>
                                <a className="dropdown--options---item">Business card maker</a>
                                <a className="dropdown--options---item">Resume maker</a>
                                <a className="dropdown--options---item">Brochure maker</a>
                            </div>    
                        
                        </section>

                        <section className="dropdown--menu---section">
                            <h2 className="dropdown--title">Social</h2>
                          
                            <div className="dropdown--menu---options">
                                <a className="dropdown--options---item">Youtube thumbnail maker</a>
                                <a className="dropdown--options---item">Youtube cover maker</a>
                                <a className="dropdown--options---item">Instagram post maker</a>
                                <a className="dropdown--options---item">Facebook cover maker</a>
                                <a className="dropdown--options---item">Twitch cover maker</a>
                            </div>    
                        
                        </section>

                        <section className="dropdown--menu---section">
                            <h2 className="dropdown--title">Events</h2>
                          
                            <div className="dropdown--menu---options">
                                <a className="dropdown--options---item">Invitation maker</a>
                                <a className="dropdown--options---item">Card maker</a>
                                <a className="dropdown--options---item">Birthday card maker</a>
                                <a className="dropdown--options---item">Certificate maker</a>
                                <a className="dropdown--options---item">Gift certificate maker</a>
                                <a className="dropdown--options---item">Wallpaper maker</a>
                            </div>    
                        
                        </section>

                    </div>
                </div>

                <div className="dropdown" onMouseLeave={mouseLeaveHandler}>
                    <a className="header--menu---item" >AI Tools <img src={arrow}></img></a>
                    <div className="dropdown--menu">
                        <div className="dropdown--menu---options">
                                    <a className="dropdown--options---item">Background remover</a>
                                    <a className="dropdown--options---item">Object remover</a>
                                    <a className="dropdown--options---item">Art generator</a>
                                    <a className="dropdown--options---item">NFT creator</a>
                        </div>    
                    </div>
                </div>

                <div className="dropdown" onMouseLeave={mouseLeaveHandler}>
                    <a  className="header--menu---item" >Templates <img src={arrow}></img></a>
                    <div className="dropdown--menu">

                        <section className="dropdown--menu---section">
                            <h2 className="dropdown--title">Marketing</h2>
                          
                            <div className="dropdown--menu---options">
                                <a className="dropdown--options---item">Poster</a>
                                <a className="dropdown--options---item">Flyer maker</a>
                                <a className="dropdown--options---item">Invitation</a>
                                <a className="dropdown--options---item">Cards</a>
                                <a className="dropdown--options---item">Logos</a>
                                <a className="dropdown--options---item">Certificates</a>
                            </div>    
                        
                        </section>

                        <section className="dropdown--menu---section">
                            <h2 className="dropdown--title">Social</h2>
                          
                            <div className="dropdown--menu---options">
                                <a className="dropdown--options---item">Instagram story</a>
                                <a className="dropdown--options---item">Instagram post</a>
                                <a className="dropdown--options---item">YouTube thumbnail</a>
                                <a className="dropdown--options---item">YouTube cover</a>
                                <a className="dropdown--options---item">Presentation</a>
                                <a className="dropdown--options---item">Resume</a>
                            </div>    
                        
                        </section>

                        <section className="dropdown--menu---section">
                            <h2 className="dropdown--title">Themes</h2>
                          
                            <div className="dropdown--menu---options">
                                <a className="dropdown--options---item">Party</a>
                                <a className="dropdown--options---item">Haloween</a>
                                <a className="dropdown--options---item">Wanted</a>
                                <a className="dropdown--options---item">Christmas</a>
                                <a className="dropdown--options---item">Campaign</a>
                                <a className="dropdown--options---item">Volunteer</a>
                            </div>    
                        
                        </section>





                    </div>
                </div>

                <div className="dropdown" onMouseLeave={mouseLeaveHandler}>
                    <a className="header--menu---item" >Support <img src={arrow}></img></a>
                    <div className="dropdown--menu">
                        <div className="dropdown--menu---options">
                                    <a className="dropdown--options---item">Blog</a>
                                    <a className="dropdown--options---item">Tutorials</a>
                                    <a className="dropdown--options---item">Help center</a>
                                    <a className="dropdown--options---item">Video tutorials</a>
                                    <a className="dropdown--options---item">Contact</a>
                        </div>
                

                    </div>
                </div>
            </div>

            <a href="#" className="header--signin">Sign in</a>
        </header>
    );
}

export default Header;