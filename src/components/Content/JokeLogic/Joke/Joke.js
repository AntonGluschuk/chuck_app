import React from "react";
import "./Joke.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import comment_icon from '../../../images/comment.png'

function Joke({ id, value, category, updated_at, likeJoke }) {

    const calculateHours = (date) => {
        return Math.floor((new Date() - new Date(date)) / 1000 / 60 / 60);
    };

    return (<div>{ value ?
        <div className="joke">
            <button className="joke__like-btn" onClick={() => likeJoke(id)}>
                <FontAwesomeIcon className="joke__like-btn-icon" icon={ faHeart } size="2x" />
            </button>
            <div className="joke__container">
                <div className="joke__comment-circle">
                    <img src={comment_icon} className="joke__comment-circle-icon" alt="joke__comment-circle-icon"/>
                </div>
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