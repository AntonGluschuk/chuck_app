import React from "react";

function Search({ selected, handleOptionChange }) {
    return (
        <div className="form-check">
            <label>
                <input
                    type="radio"
                    name="react-tips"
                    value="option3"
                    defaultChecked={selected === "option3"}
                    onChange={handleOptionChange}
                    className="form-check-input"
                />
                Search
            </label>
        </div>
    );
}

export default Search