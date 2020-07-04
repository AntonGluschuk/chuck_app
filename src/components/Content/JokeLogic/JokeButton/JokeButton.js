import React from "react";
import "./JokeButton.css"

function JokeButton({ getAJoke, query, selected }) {

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