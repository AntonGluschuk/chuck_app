import React, {useContext} from "react";
import "./Sidebar.css";
import { JokeContext } from "../JokeContext/JokeContext";
import FavJoke from "./FavJoke/FavJoke";

function Sidebar() {

    const {
        visibleSide,
        favJokes
    } = useContext(JokeContext);

    /*Change className for aside "sidebar" tag*/
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
                favJokes.map(favJoke => {
                    return (
                        <FavJoke
                            value={favJoke.value}
                            id={favJoke.id}
                            category={favJoke.categories}
                            updated_at={favJoke.updated_at}
                            key={favJoke.id}
                        />
                    )
                })
            }
            </div>
        </aside>
    )
}

export default Sidebar