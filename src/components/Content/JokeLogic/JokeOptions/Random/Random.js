import React from "react";

function Random({ handleOptionChange, checked }) {
    return (
        <div className="form-check">
            <label>
                <input
                    className="form-check-input"
                    type="radio"
                    name="react-tips"
                    value="option1"
                    checked={checked === "option1"}
                    onChange={handleOptionChange}
                />
                Random
            </label>
        </div>
    );
}

export default Random