import React from "react";

function Random({ selected, handleOptionChange }) {
    return (
        <div className="form-check">
            <label>
                <input
                    type="radio"
                    name="react-tips"
                    value="option1"
                    defaultChecked={selected === "option1"}
                    onChange={handleOptionChange}
                    className="form-check-input"
                />
                Random
            </label>
        </div>
    );
}

export default Random