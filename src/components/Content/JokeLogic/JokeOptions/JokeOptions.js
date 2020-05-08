import React from "react";
import Random from "./Random/Random";
import FromCategories from "./FromCategories/FromCategories";
import CategoriesItself from "./FromCategories/CategoriesItself/CategoriesItself";
import Search from "./Search/Search";

function JokeOptions({ selected, handleOptionChange, categories, setCount, count }) {
    return (
        <form>
            {/* Random RadioButton*/}
            <Random defaultChecked={selected} handleOptionChange={handleOptionChange}/>
            {/* FromCategories RadioButton*/}
            <FromCategories defaultChecked={selected} handleOptionChange={handleOptionChange}/>
            {/* Categories List*/}
            {(selected === "option2") ?
                <CategoriesItself selected={selected} categories={categories.slice(0, 4)}/>
                :
                null
            }
            {/* Search RadioButton*/}
            <Search defaultChecked={selected} handleOptionChange={handleOptionChange}/>
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
            <button className="btn" onClick={() => setCount(count + 1)}>Get a joke</button>
        </form>
    );
}

export default JokeOptions