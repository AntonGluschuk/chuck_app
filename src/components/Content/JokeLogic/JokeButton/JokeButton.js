import React, {useContext} from "react";
import "./JokeButton.css"
import {JokeContext} from "../../../JokeContext/JokeContext";

function JokeButton({ getAJoke }) {

    const {
        query,
        selected
    } = useContext(JokeContext);

    return (
        <div>
        {selected === 'option3' ?
            <button className="joke-btn" onClick={getAJoke} disabled={query.length < 3}>Get a joke</button>
        :
            <button className="joke-btn" onClick={getAJoke}>Get a joke</button>
        }
        </div>

    )
}

export default JokeButton