import React from "react";
import "./JokeItself.css";

function JokeItself(props) {
    return (
        <div className="joke">{props.value}</div>
    );
}

export default JokeItself