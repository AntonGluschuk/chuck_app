import React, {useContext} from "react";
import "./LikeJokeButton.css";
import {JokeContext} from "../../../../JokeContext/JokeContext";

function LikeJokeButton({ id }) {

    const {
        likeJoke
    } = useContext(JokeContext);

    return (
        <button title="Add to Favourites" className="joke__like-btn" onClick={() => likeJoke(id)}> </button>
    );
}

export default LikeJokeButton