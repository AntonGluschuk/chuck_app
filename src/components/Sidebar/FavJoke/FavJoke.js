import React, {useContext} from "react";
import "./FavJoke.css";
import UnlikeJokeButton from "./UnlikeJokeButton/UnlikeJokeButton";
import {JokeContext} from "../../JokeContext/JokeContext";

function FavJoke({ value, id, category, updated_at }) {

    const {
        calculateHours
    } = useContext(JokeContext);

    return (<div>{ value ?
        <div className="fav-joke">
            <UnlikeJokeButton id={id} />
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