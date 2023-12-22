import React from "react";
import "./Pages.css";
import AboutPhoto from "../media/me1.JPG";

function About() {
    return (
        <>
        <title>About | DL</title>

        <div className="aboutWrapper">
            <div className="aboutContent">
                <h1>Hello  👋</h1>
                <h1>I am Dimitrios</h1>
                <h2>STUDENT</h2>
            </div>

            <div class="aboutimageWrapper">
                <img src={AboutPhoto} alt="me"></img>
                <div class="imageOverlay">
                <p>My name is Dimitrios Lahanas and I am a 17 year old high school student eager to learn!
I have a great passion for fields related to creative arts and technology; as a result I dream of a future
as a photographer and/or software developer. I am always keen on learning new skills within these fields evident
through my portfolio - everything being self taught!</p>
                </div>
            </div> 
        </div>
        </>
    );
}

export default About;