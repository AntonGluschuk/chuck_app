import React, {useContext} from "react";
import { JokeContext } from "../../JokeContext/JokeContext";
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
        changeIcon = "side-button_active";
    }

    return (
        <div className={`side-button ${changeIcon}`} onClick={() => openSideBar()}>
            <div className="side-button__icon">
                <span className="side-button__icon-line first-line">
                </span>
                <span className="side-button__icon-line second-line">
                </span>
            </div>
            <div className="side-button__title">Favourite</div>
        </div>
    )
}

export default SideButton