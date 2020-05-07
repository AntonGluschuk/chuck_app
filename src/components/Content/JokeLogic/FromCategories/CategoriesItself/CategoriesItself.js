import React from "react";
import "./CategoriesItself.css";

function CategoriesItself({ categories }) {
    return (
        <div className="categories_list">
            {categories.map(category => <button className="category_btn" value={category} key={category}>{category}</button>)}
        </div>
    );
}

export default CategoriesItself