import React from "react";

function FromCategories({ selected, handleOptionChange }) {
    return (
        <div className="form-check">
            <label>
                <input
                    type="radio"
                    name="react-tips"
                    value="option2"
                    defaultChecked={selected === "option2"}
                    onChange={handleOptionChange}
                    className="form-check-input"
                />
                From Categories
            </label>
        </div>
    );
}

export default FromCategories