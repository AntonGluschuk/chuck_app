import React from "react";

function JokeButton({ getAJoke }) {
    return (
        <button className="btn" onClick={getAJoke}>Get a joke</button>
    );
}

export default JokeButton