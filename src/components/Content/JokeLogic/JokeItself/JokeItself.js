import React from "react";
import Moment from 'react-moment';
import "./JokeItself.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import comment_icon from './images/comment.png'

function JokeItself({ id, value, category, updated_at }) {
    return (
        <div className="rectangle">
            <div className="comment_circle">
                <img src={comment_icon} className="comment_icon" alt="comment_icon"/>
            </div>
            <div className="joke">
                <button className="favorite_joke"><FontAwesomeIcon className="favorite_icon" icon={ faHeart } size="2x" /></button>
                <div className="id">ID: <a id="link" href={id}>{id}</a></div>
                <div className="joke_value">{value}</div>
                <div className="last_update">Last update: <Moment fromNow>{updated_at}</Moment></div>
                <div className="joke_category">{category}</div>
            </div>
        </div>
    );
}

export default JokeItself