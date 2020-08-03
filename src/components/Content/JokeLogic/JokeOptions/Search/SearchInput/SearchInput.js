import React, {useContext} from "react";
import "./SearchInput.css"
import {JokeContext} from "../../../../../JokeContext/JokeContext";

function SearchInput({ getAJoke }) {

    const {
        query,
        setQuery,
        validSearch,
        setValidSearch,
        validSearchValue
    } = useContext(JokeContext);

    /*Checking whether the value written in the search input will pass the validation*/
    const handleSearchValue = e => {
        if(e.target.value.length < 3 || e.target.value.length > 120) {
            setValidSearch(false);
        } else {
            setValidSearch(true);
        }
        setQuery(e.target.value.replace(/[^A-Za-z]/ig, ''));
    };

    /*Allow to press Enter to make a search for a Joke*/
    const enterKeyPress = e => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (query.length >= 3) {
                getAJoke();
            }
        }
    };

    return (
        <form className="joke-options__search-form">
            <input
                className="joke-options__search-input"
                type="text"
                placeholder="Free text search..."
                value={query}
                onChange={handleSearchValue}
                onKeyPress={enterKeyPress}
            />
            {!validSearch && <span className="joke-options__invalid-size">Text size must be between 3 and 120 characters</span>}
            {!validSearchValue && <span className="joke-options__invalid-value">Enter a valid search value</span>}
        </form>
    );
}

export default SearchInput