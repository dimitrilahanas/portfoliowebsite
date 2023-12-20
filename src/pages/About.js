import React from "react";
import "./Pages.css";
import AboutPhoto from "../media/me1.png";

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
            <img src={AboutPhoto} className="me1" alt="me"></img>
        </div>
        </>
    );
}

export default About;