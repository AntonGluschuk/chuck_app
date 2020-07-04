import React, {useContext} from "react";
import Random from "./Random/Random";
import FromCategories from "./FromCategories/FromCategories";
import Search from "./Search/Search";
import Categories from "./FromCategories/Categories/Categories";
import "./JokeOptions.css";
import {JokeContext} from "../../../JokeContext/JokeContext";

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
        <div className="joke-options">
                {/* Random RadioButton*/}
                <Random checked={selected} handleOptionChange={handleOptionChange}/>
                {/* FromCategories RadioButton*/}
                <FromCategories checked={selected} handleOptionChange={handleOptionChange}/>
                {/* Categories List*/}
                {(selected === "option2") ?
                    <Categories selected={selected}
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
                    <form className="joke-options__search-form">
                        <input
                            className="joke-options__search-input"
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
                        {!validSearch && <span className="joke-options__invalid-size">Text size must be between 3 and 120 characters</span>}
                        {!validSearchValue && <span className="joke-options__invalid-value">Enter a valid search value</span>}
                    </form>
                    :
                    null
                }
        </div>
    );
}

export default JokeOptions