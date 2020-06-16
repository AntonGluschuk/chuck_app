import React from "react";
import Random from "./Random/Random";
import FromCategories from "./FromCategories/FromCategories";
import CategoriesItself from "./FromCategories/CategoriesItself/CategoriesItself";
import Search from "./Search/Search";
import "./JokeOptions.css";

function JokeOptions({ selected, handleOptionChange, categories, active, setActive, query, setQuery, getAJoke }) {

    return (
        <div className="select_option">
                {/* Random RadioButton*/}
                <Random checked={selected} handleOptionChange={handleOptionChange}/>
                {/* FromCategories RadioButton*/}
                <FromCategories checked={selected} handleOptionChange={handleOptionChange}/>
                {/* Categories List*/}
                {(selected === "option2") ?
                    <CategoriesItself selected={selected}
                                      categories={categories}
                                      active={active}
                                      setActive={setActive}
                    />
                    :
                    null
                }
                {/* Search RadioButton*/}
                <Search checked={selected} handleOptionChange={handleOptionChange}/>
                {(selected === "option3") ?
                    <form className="search">
                        <input
                            className="search_input"
                            type="text"
                            placeholder="Free text search..."
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    if (query.length >= 3) {
                                        getAJoke();
                                    }
                                }
                            }}
                        />
                    </form>
                    :
                    null
                }
        </div>
    );
}

export default JokeOptions