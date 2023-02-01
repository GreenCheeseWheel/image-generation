import React from "react";
import "../css/instructions.css"

function Instructions()
{

    return (
        <section className="instructions">
            <div className="instructions--description">
                <h2>How to use our text-to-image generator correctly</h2>
                <p>AI's are not particularly good at understanding people's intentions nor emotions, of course.
                    As such, they typically need specific, precise, instructions to follow, else whatever they produce
                    runs the risk of being subpar or not up to the users expectations.
                </p>
            </div>

            <div className="instructions--lists">
                <ul className="instructions--correct">
                    <li className="instructions--item"><h2>Examples of <span className="instructions--item---highlight">correctly</span> written instructions</h2></li>
                    <li className="instructions--item correct"><span>A black cat in halloween, it's wearing a witch's hat and the ambience is spooky</span></li>
                    <li className="instructions--item correct"><span>Futuristic underground city destroyed by time. Buildings are deteriorated beyond recognition</span></li>
                    <li className="instructions--item correct"><span>A black cat in halloween, </span></li>
                    
                </ul>
                <ul className="instructions--correct">
                    <li className="instructions--item"><h2>Examples of <span className="instructions--item---highlight">incorrectly</span> written instructions</h2></li>
                    <li className="instructions--item incorrect"><span>A black cat in halloween</span></li>
                    <li className="instructions--item incorrect"><span>Futuristic underground city with deteriorated buildings</span></li>
                    <li className="instructions--item incorrect"><span>A black cat in halloween, </span></li>
                </ul>
            </div>

        </section>
    );

}

export default Instructions;