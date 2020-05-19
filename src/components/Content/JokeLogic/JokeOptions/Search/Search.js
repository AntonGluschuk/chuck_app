import React from "react";

function Search({ handleOptionChange, checked }) {
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                id="search"
                type="radio"
                name="react-tips"
                value="option3"
                checked={checked === "option3"}
                onChange={handleOptionChange}
            />
            <label className="radio_label" htmlFor="search">Search</label>
        </div>
    );
}

export default Search