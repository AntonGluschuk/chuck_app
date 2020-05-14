import React from "react";
import JokeLogic from "./JokeLogic/JokeLogic";
import "./Content.css";

function Content() {
    return (
        <div className="content">
            <div className="logo">
                <h3>MSI 2020</h3>
            </div>
            <div className="intro">
                <h1>Hey!</h1>
                <h2>Let's try to find a joke for you:</h2>
            </div>
            <JokeLogic />
        </div>
    )
}

export default Content