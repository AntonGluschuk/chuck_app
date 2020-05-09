import React from "react";
import "./CategoriesItself.css";
// import { ToggleButton } from '@material-ui/lab';

function CategoriesItself({ categories }) {
    return (
        <div className="categories_list">
            {categories.map(category => <button value={category} key={category}>{category}</button>)}
        </div>
    );
}

export default CategoriesItself