import React from "react";
import "./LikeJokeButton.css";

function LikeJokeButton({ id, likeJoke }) {
    return (
        <button title="Add to Favourites" className="joke__like-btn" onClick={() => likeJoke(id)}> </button>
    );
}

export default LikeJokeButton