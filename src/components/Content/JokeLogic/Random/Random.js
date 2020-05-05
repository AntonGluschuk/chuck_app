import React from "react";

function Random() {
    return (
        <div className="form-check">
            <label>
                <input
                    type="radio"
                    name="react-tips"
                    value="option1"
                    defaultChecked={true}
                    className="form-check-input"
                />
                Random
            </label>
        </div>
    );
}

export default Random