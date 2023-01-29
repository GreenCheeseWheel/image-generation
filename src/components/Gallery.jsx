import React from "react";
import data from "../data";

import "..//css/gallery.css"

function ImgCard(props) 
{
    return (
        <img src={props.img} className="slider--img"></img>
    );
};


/* Parent component */

function Gallery()
{
    var scrollAmount = 0;
    var imgArray = data.galleryImages;
    let key = 0;
    imgArray = imgArray.map((url) => <ImgCard key={key++} img={url}/>);

    const scrollLeft = () => {
        const slider = document.getElementsByClassName("slider--content").item(0);
        console.log(scrollAmount);
        scrollAmount = (scrollAmount >= 1100) ? scrollAmount : scrollAmount + 256;
        slider.scrollTo(
            {
                top: 0,
                left: scrollAmount,
                behavior: "smooth"
            }
        )
    };

    const scrollRight = () => {
        const slider = document.getElementsByClassName("slider--content").item(0);
        console.log(scrollAmount);
        scrollAmount = (scrollAmount <= 0) ? scrollAmount : scrollAmount -256;
        slider.scrollTo(
            {
                top: 0,
                left: scrollAmount,
                behavior: "smooth"
            }
        )
    };


    return (
        <section className="gallery">
            
            <h4 className="gallery--title">Featured gallery</h4>
            <div className="slider">
                <button className="slider--btn" onClick={scrollRight}> {"<"} </button>
                
                <div className="slider--content">
                    {imgArray}
                </div>

                <button className="slider--btn" onClick={scrollLeft}> {">"} </button>
            </div>

        </section>
    );
}

export default Gallery;