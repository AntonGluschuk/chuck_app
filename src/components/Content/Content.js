import React, {useContext} from "react";
import JokeLogic from "./JokeLogic/JokeLogic";
import "./Content.css";
import {JokeContext} from "../JokeContext/JokeContext";

function Content() {

    const {
        visibleSide
    } = useContext(JokeContext);

    let closeContent;
    if(!visibleSide) {
        closeContent = "";
    } else {
        closeContent = "content_deactivate";
    }

    return (
        <div className={`content ${closeContent}`}>
            <JokeLogic />
        </div>
    )
}

export default Content