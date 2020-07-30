import React, {useContext} from "react";
import "./UnlikeJokeButton.css";
import {JokeContext} from "../../../JokeContext/JokeContext";

function UnlikeJokeButton({ id }) {

    const {
        unlikeJoke
    } = useContext(JokeContext);

    return (
        <button title="Remove from Favourites" className="fav-joke__unlike-btn" onClick={() => unlikeJoke(id)}> </button>
    );
}

export default UnlikeJokeButton