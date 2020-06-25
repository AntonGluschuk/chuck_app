import React, {useContext} from "react";
import Random from "./Random/Random";
import FromCategories from "./FromCategories/FromCategories";
import Search from "./Search/Search";
import CategoriesItself from "./FromCategories/CategoriesItself/CategoriesItself";
import "./JokeOptions.css";
import {JokeContext} from "../../../JokeContext";

function JokeOptions({ selected, handleOptionChange, categories, active, setActive, query, setQuery, getAJoke }) {
    const {
        validSearch,
        setValidSearch,
        validSearchValue
    } = useContext(JokeContext);

    const handleSearchValue = e => {
        if(e.target.value.length < 3 || e.target.value.length > 120) {
            setValidSearch(false);
        } else {
            setValidSearch(true);
        }
        setQuery(e.target.value);
    };

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
                            onChange={handleSearchValue}
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    if (query.length >= 3) {
                                        getAJoke();
                                    }
                                }
                            }}
                        />
                        {!validSearch && <span className="search_input_inv_size">Text size must be between 3 and 120 characters</span>}
                        {!validSearchValue && <span className="search_input_invalid">Enter a valid search value</span>}
                    </form>
                    :
                    null
                }
        </div>
    );
}

export default JokeOptions