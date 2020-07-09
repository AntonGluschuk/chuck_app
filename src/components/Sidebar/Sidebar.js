import React, {useContext} from "react";
import "./Sidebar.css";
import { JokeContext } from "../JokeContext/JokeContext";
import FavJoke from "./FavJoke/FavJoke";

function Sidebar() {

    const {
        favJokes,
        setFavJokes,
        setSavedJoke,
        visibleSide
    } = useContext(JokeContext);

    const unlikeJoke = (id) => {
        const newLikedJokes = favJokes.filter((joke) => joke.id !== id);
        setFavJokes(newLikedJokes);
        setSavedJoke(false);
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
                favJokes.map((joke, index) => {
                    return (
                        <FavJoke
                            value={joke.value}
                            id={joke.id}
                            category={joke.categories}
                            updated_at={joke.updated_at}
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