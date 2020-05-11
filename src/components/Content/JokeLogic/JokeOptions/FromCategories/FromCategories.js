import React from "react";

function FromCategories({ handleOptionChange, checked }) {
    return (
        <div className="form-check">
            <label>
                <input
                    className="form-check-input"
                    type="radio"
                    name="react-tips"
                    value="option2"
                    checked={checked === "option2"}
                    onChange={handleOptionChange}
                />
                From Categories
            </label>
        </div>
    );
}

export default FromCategories