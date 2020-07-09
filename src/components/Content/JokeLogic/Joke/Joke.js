import React from "react";
import "./Joke.css";

function Joke({ id, value, category, updated_at, likeJoke, savedJoke }) {

    const calculateHours = (date) => {
        return Math.floor((new Date() - new Date(date)) / 1000 / 60 / 60);
    };
    // const setFavJokeIcon = (e, classButton) => {
    //     if(e.target.value) {
    //         classButton = "fav-joke__unlike-btn";
    //     } else {
    //         classButton = "joke__like-btn";
    //     }
    //     return classButton;
    // };
    return (<div>{ value ?
        <div className="joke">
            <button title="Add to Favourites" className="joke__like-btn" onClick={() => likeJoke(id)}> </button>
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