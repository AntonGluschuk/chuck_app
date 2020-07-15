import React from "react";
import "./Joke.css";
import LikeJokeButton from "./LikeJokeButton/LikeJokeButton";
import UnlikeJokeButton from "../../../Sidebar/FavJoke/UnlikeJokeButton/UnlikeJokeButton";


function Joke({ jokeIsF, id, value, category, updated_at, likeJoke, unlikeJoke }) {

    const calculateHours = (date) => {
        return Math.floor((new Date() - new Date(date)) / 1000 / 60 / 60);
    };

    return (<div>{ value ?
        <div className="joke">
            {jokeIsF ?
                <UnlikeJokeButton id={id} unlikeJoke={unlikeJoke} />
                :
                <LikeJokeButton id={id} likeJoke={likeJoke} />
            }
            <div className="joke__container">
                <div className="joke__comment-circle"> </div>
                <div className="joke__content">
                    <div className="joke__id">
                        ID: <a id="joke__id-link" href={`https://api.chucknorris.io/jokes/${id}`}>{id}</a>
                    </div>
                    <div className="joke__value">{value}</div>
                    <div className="joke__apps">
                        <div className="joke__apps-last-update">Last update: {calculateHours(updated_at)} hours ago</div>
                        <div className="joke__apps-category">{category}</div>
                    </div>
                </div>
            </div>
        </div>
        :
            null
        }</div>
    );
}

export default Joke