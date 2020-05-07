import React from "react";
import "./JokeItself.css";

function JokeItself(props) {
    return (
        <div className="joke">
            <div id="id">ID: <a id="link" href={props.id}>{props.id}</a></div> <br/>
            <div id="joke_value">{props.value}</div>
        </div>
    );
}

export default JokeItself