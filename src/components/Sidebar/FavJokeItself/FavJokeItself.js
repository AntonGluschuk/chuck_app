import React from "react";
import Moment from 'react-moment';
import "./FavJokeItself.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import comment_icon from './images/comment.png'

function FavJokeItself({ id, value, category, updated_at, unlikeJoke }) {
    return (
        <div className="fav_rectangle">
            <div className="fav_comment_circle">
                <img src={comment_icon} className="fav_comment_icon" alt="comment_icon"/>
            </div>
            <div className="fav_joke">
                <button className="fav_favorite_joke" onClick={() => unlikeJoke(id)}>
                    <FontAwesomeIcon className="fav_favorite_icon" icon={ faHeart } size="2x"/>
                </button>
                <div className="fav_id">
                    ID: <a id="fav_link" href={`https://api.chucknorris.io/jokes/${id}`}>{id}</a>
                </div>
                <div className="fav_joke_value">{value}</div>
                <div className="fav_last_update">Last update: <Moment fromNow>{updated_at}</Moment></div>
                <div className="fav_joke_category">{category}</div>
            </div>
        </div>
    );
}

export default FavJokeItself