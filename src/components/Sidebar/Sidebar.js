import React, { useContext } from "react";
import "./Sidebar.css";
import { JokeContext } from "../JokeContext";
import FavJokeItself from "./FavJokeItself/FavJokeItself";

function Sidebar() {
    const {
        favJokes,
        setFavJokes,
        selected
    } = useContext(JokeContext);

    const unlikeJoke = (id) => {
        const newLikedJokes = favJokes.filter((joke) => joke.id !== id);
        setFavJokes(newLikedJokes);
    };

    return (
        <aside className="sidebar">
            <div className="fav_title">Favourite</div>
            <div className="favourite_jokes">
                {selected === 'option1' || selected === 'option2' ?
                    favJokes.map(joke => {
                        return (
                            <FavJokeItself
                                value={joke.value}
                                id={joke.id}
                                category={joke.categories}
                                updated_at={joke.updated_at}
                                unlikeJoke={unlikeJoke}
                                key={joke.id}
                            />
                        )
                    }) :
                    favJokes.map(joke => {
                        return (
                            <FavJokeItself
                                value={joke.value}
                                id={joke.id}
                                category={joke.categories}
                                updated_at={joke.updated_at}
                                unlikeJoke={unlikeJoke}
                                key={joke.id}
                            />
                        )
                    })
                }
            </div>
        </aside>
    )
}

export default Sidebar