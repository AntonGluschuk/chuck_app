import React from "react";
import "./JokeItself.css";

function JokeItself(props) {
    return (
        <div className="joke">
            <p id="id">ID: <a id="link" href={props.id}>{props.id}</a></p> <br/>
            <p id="joke">{props.value}</p>
        </div>
    );
}

export default JokeItself