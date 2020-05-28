import React, {useContext} from "react";
import JokeLogic from "./JokeLogic/JokeLogic";
import "./Content.css";
import {JokeContext} from "../JokeContext";


function Content() {
    const {
        visibleSide
    } = useContext(JokeContext);

    let shadowMain;
    if(!visibleSide) {
        shadowMain = "content";
    } else {
        shadowMain = "deactivate_content";
    }

    return (
        <div className={shadowMain}>
            <JokeLogic />
        </div>
    )
}

export default Content