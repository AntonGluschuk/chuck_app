import React from "react";
import "./FavJoke.css";

function FavJoke({ id, value, category, updated_at, unlikeJoke }) {

    const calculateHours = (date) => {
        return Math.floor((new Date() - new Date(date)) / 1000 / 60 / 60);
    };

    return (<div>{ value ?
        <div className="fav-joke">
            <button title="Remove from Favourites" className="fav-joke__unlike-btn" onClick={() => unlikeJoke(id)}> </button>
            <div className="fav-joke__container">
                <div className="fav-joke__comment-circle"> </div>
                <div className="fav-joke__content">
                    <div className="fav-joke__id">
                        ID: <a id="fav-joke__id-link" href={`https://api.chucknorris.io/jokes/${id}`}>{id}</a>
                    </div>
                    <div className="fav-joke__value">{value}</div>
                    <div className="fav-joke__apps">
                        <div className="fav-joke__apps-last-update">Last update: {calculateHours(updated_at)} hours ago</div>
                        <div className="fav-joke__apps-category">{category}</div>
                    </div>
                </div>
            </div>
        </div>
        :
            null
        }</div>
    );
}

export default FavJoke