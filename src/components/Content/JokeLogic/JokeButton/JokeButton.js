import React from "react";

function JokeButton({ getAJoke, query, selected }) {
    return (
        <div>
        {selected === 'option3' ?
            <button className="btn" onClick={getAJoke} disabled={!query || query.length < 3}>Get a joke</button>
        :
            <button className="btn" onClick={getAJoke}>Get a joke</button>
        }
        </div>

    )
}

export default JokeButton