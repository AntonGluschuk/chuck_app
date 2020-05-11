import React from "react";

function Search({ handleOptionChange, checked }) {
    return (
        <div className="form-check">
            <label>
                <input
                    className="form-check-input"
                    type="radio"
                    name="react-tips"
                    value="option3"
                    checked={checked === "option3"}
                    onChange={handleOptionChange}
                />
                Search
            </label>
        </div>
    );
}

export default Search