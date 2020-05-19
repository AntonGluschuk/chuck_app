import React from "react";

function Random({ handleOptionChange, checked }) {
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                id="random"
                type="radio"
                name="react-tips"
                value="option1"
                checked={checked === "option1"}
                onChange={handleOptionChange}
            />
            <label className="radio_label" htmlFor="random">Random</label>
        </div>
    );
}

export default Random