import React, {useContext} from "react";
import {JokeContext} from "../../../../JokeContext/JokeContext";

function Search() {

    const {
        selected,
        handleOptionChange
    } = useContext(JokeContext);

    return (
        <form className="joke-options__form">
            <input
                className="joke-options__form-input"
                id="search"
                type="radio"
                name="react-tips"
                value="option3"
                checked={selected === "option3"}
                onChange={handleOptionChange}
            />
            <label className="joke-options__form-label" htmlFor="search">Search</label>
        </form>
    );
}

export default Search