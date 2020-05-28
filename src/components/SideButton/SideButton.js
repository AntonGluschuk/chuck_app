import React, {useContext} from "react";
import equal from "../images/equal.png";
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

    return (
        <div className="side_fav_menu">
            <div className="side_fav_icon">
                <button className="side_fav_btn" onClick={() => openSideBar()}>
                    <img src={equal} className="fav_btn_icon" alt="fav_btn_icon"/>
                    <div className="side_fav_title">Favourite</div>
                </button>
            </div>
        </div>
    )
}

export default SideButton