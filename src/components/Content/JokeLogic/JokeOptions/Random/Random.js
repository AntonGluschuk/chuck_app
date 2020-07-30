import React, {useContext} from "react";
import {JokeContext} from "../../../../JokeContext/JokeContext";

function Random() {

    const {
        selected,
        handleOptionChange
    } = useContext(JokeContext);

    return (
        <form className="joke-options__form">
            <input
                className="joke-options__form-input"
                id="random"
                type="radio"
                name="react-tips"
                value="option1"
                checked={selected === "option1"}
                onChange={handleOptionChange}
            />
            <label className="joke-options__form-label" htmlFor="random">Random</label>
        </form>
    );
}

export default Random