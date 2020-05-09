import React from "react";
import Random from "./Random/Random";
import FromCategories from "./FromCategories/FromCategories";
import CategoriesItself from "./FromCategories/CategoriesItself/CategoriesItself";
import Search from "./Search/Search";
import "./JokeOptions.css";

function JokeOptions({ selected, handleOptionChange, categories }) {
    return (
        <div className="select_option">
            <form>
                {/* Random RadioButton*/}
                <Random checked={selected} handleOptionChange={handleOptionChange}/>
                {/* FromCategories RadioButton*/}
                <FromCategories checked={selected} handleOptionChange={handleOptionChange}/>
                {/* Categories List*/}
                {(selected === "option2") ?
                    <CategoriesItself selected={selected} categories={categories.slice(0, 4)}/>
                    :
                    null
                }
                {/* Search RadioButton*/}
                <Search checked={selected} handleOptionChange={handleOptionChange}/>
                {(selected === "option3") ?
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Free text search..."
                        />
                    </div>
                    :
                    null
                }
            </form>
        </div>
    );
}

export default JokeOptions