import React from "react";

function Random({ handleOptionChange, checked }) {
    return (
        <form className="joke-options__form">
            <input
                className="joke-options__form-input"
                id="random"
                type="radio"
                name="react-tips"
                value="option1"
                checked={checked === "option1"}
                onChange={handleOptionChange}
            />
            <label className="joke-options__form-label" htmlFor="random">Random</label>
        </form>
    );
}

export default Random