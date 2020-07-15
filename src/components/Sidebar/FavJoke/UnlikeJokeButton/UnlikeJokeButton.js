import React from "react";
import "./UnlikeJokeButton.css";

function UnlikeJokeButton({ id, unlikeJoke }) {
    return (
        <button title="Remove from Favourites" className="fav-joke__unlike-btn" onClick={() => unlikeJoke(id)}> </button>
    );
}

export default UnlikeJokeButton