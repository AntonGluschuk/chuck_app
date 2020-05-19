import React from "react";

function FromCategories({ handleOptionChange, checked }) {
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                id="from-categories"
                type="radio"
                name="react-tips"
                value="option2"
                checked={checked === "option2"}
                onChange={handleOptionChange}
            />
            <label className="radio_label" htmlFor="from-categories">From categories</label>
        </div>
    );
}

export default FromCategories