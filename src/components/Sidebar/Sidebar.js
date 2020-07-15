import React, {useContext} from "react";
import "./Sidebar.css";
import { JokeContext } from "../JokeContext/JokeContext";
import FavJoke from "./FavJoke/FavJoke";

function Sidebar() {

    const {
        setJokes,
        favJokes,
        setFavJokes,
        visibleSide
    } = useContext(JokeContext);

    const unlikeJoke = (id) => {
        const newLikedJokes = favJokes.filter(joke => joke.id !== id);
        setFavJokes(newLikedJokes);
        setJokes(jokes => jokes.map(item => item.id === id ? {...item, isFavourite: false} : item));
    };

    /*Change className for aside sidebar*/
    const openSide = (opS) => {
        if(!visibleSide) {
            opS = "";
        } else {
            opS = "sidebar_active";
        }
        return opS;
    };

    return (
        <aside className={`sidebar ${openSide()}`}>
            <div className="sidebar__title">Favourite</div>
            <div className="sidebar__jokes">
            {
                favJokes.map((favJoke, index) => {
                    return (
                        <FavJoke
                            value={favJoke.value}
                            id={favJoke.id}
                            category={favJoke.categories}
                            updated_at={favJoke.updated_at}
                            unlikeJoke={unlikeJoke}
                            key={index}
                        />
                    )
                })
            }
            </div>
        </aside>
    )
}

export default Sidebar