import React, {useContext} from "react";
import JokeLogic from "./JokeLogic/JokeLogic";
import "./Content.css";
import {JokeContext} from "../JokeContext/JokeContext";

function Content() {

    const {
        visibleSide
    } = useContext(JokeContext);

    /*Change className for div "content" tag*/
    const deactivateContent = (closeContent) => {
        if(!visibleSide) {
            closeContent = "";
        } else {
            closeContent = "content_deactivate";
        }
        return closeContent;
    };

    return (
        <div className={`content ${deactivateContent()}`}>
            <JokeLogic />
        </div>
    )
}

export default Content