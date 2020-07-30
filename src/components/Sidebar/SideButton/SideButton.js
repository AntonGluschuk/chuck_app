import React, {useContext} from "react";
import { JokeContext } from "../../JokeContext/JokeContext";
import "./SideButton.css";

function SideButton() {
    const {
        visibleSide,
        setVisibleSide
    } = useContext(JokeContext);

    /*Opening sidebar after click on side-button */
    const openSideBar = () => {
        if(!visibleSide) {
            setVisibleSide(true);
        } else {
            setVisibleSide(false);
        }
    };

    /*Change className for div "side-button" tag*/
    const changeSidebarIcon = (changeIcon) => {
        if(!visibleSide) {
            changeIcon = "";
        } else {
            changeIcon = "side-button_active";
        }
        return changeIcon;
    };

    return (
        <div className={`side-button ${changeSidebarIcon()}`} onClick={() => openSideBar()}>
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