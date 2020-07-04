import React from "react";

function Search({ handleOptionChange, checked }) {
    return (
        <form className="joke-options__form">
            <input
                className="joke-options__form-input"
                id="search"
                type="radio"
                name="react-tips"
                value="option3"
                checked={checked === "option3"}
                onChange={handleOptionChange}
            />
            <label className="joke-options__form-label" htmlFor="search">Search</label>
        </form>
    );
}

export default Search