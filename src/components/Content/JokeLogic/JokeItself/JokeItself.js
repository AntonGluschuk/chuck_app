import React from "react";
import "./JokeItself.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import comment_icon from '../../../images/comment.png'

function JokeItself({ id, value, category, updated_at, likeJoke }) {

    const calculateHours = (date) => {
        return Math.floor((new Date() - new Date(date)) / 1000 / 60 / 60);
    };

    return (<div>{ value ?
        <div className="rectangle">
            <button className="favorite_joke" onClick={() => likeJoke(id)}>
                <FontAwesomeIcon className="favorite_icon" icon={ faHeart } size="2x" />
            </button>
            <div className="joke">
                <div className="comment_circle">
                    <img src={comment_icon} className="comment_icon" alt="comment_icon"/>
                </div>
                <div className="joke_content">
                    <div className="id">
                        ID: <a id="link" href={`https://api.chucknorris.io/jokes/${id}`}>{id}</a>
                    </div>
                    <div className="joke_value">{value}</div>
                    <div className="update_category">
                        <div className="last_update">Last update: {calculateHours(updated_at)} hours ago</div>
                        <div className="joke_category">{category}</div>
                    </div>
                </div>
            </div>
        </div>
    :
            null
        }</div>
    );
}

export default JokeItself