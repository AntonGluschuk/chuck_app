import React, {useContext} from "react";
import { JokeContext } from "../JokeContext";
import "./SideButton.css";

function SideButton() {
    const {
        visibleSide,
        setVisibleSide
    } = useContext(JokeContext);


    const openSideBar = () => {
        if(!visibleSide) {
            setVisibleSide(true);
        } else {
            setVisibleSide(false);
        }
    };

    let changeIcon;
    if(!visibleSide) {
        changeIcon = "";
    } else {
        changeIcon = "menu_active";
    }

    return (
        <div className={`side_fav_menu ${changeIcon}`} onClick={() => openSideBar()}>
            <div className="side_fav_icon">
                <span className="side_fav_icon-line first-line">
                </span>
                <span className="side_fav_icon-line second-line">
                </span>
            </div>
            <div className="side_fav_title">Favourite</div>
        </div>
    )
}

export default SideButton