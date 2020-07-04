import React from "react";

function FromCategories({ handleOptionChange, checked }) {
    return (
        <form className="joke-options__form">
            <input
                className="joke-options__form-input"
                id="from-categories"
                type="radio"
                name="react-tips"
                value="option2"
                checked={checked === "option2"}
                onChange={handleOptionChange}
            />
            <label className="joke-options__form-label" htmlFor="from-categories">From categories</label>
        </form>
    );
}

export default FromCategories