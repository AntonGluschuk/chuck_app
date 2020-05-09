import React from "react";
import "./JokeItself.css";

function JokeItself({ id, value, category }) {
    return (
        <div className="joke">
            <div className="id">ID: <a id="link" href={id}>{id}</a></div> <br/>
            <div className="joke_value">{value}</div>
            <div className="joke_category">{category}</div>
        </div>
    );
}

export default JokeItself