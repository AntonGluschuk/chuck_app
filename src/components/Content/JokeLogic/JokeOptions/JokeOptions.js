import React, {useContext} from "react";
import Random from "./Random/Random";
import FromCategories from "./FromCategories/FromCategories";
import Search from "./Search/Search";
import Categories from "./FromCategories/Categories/Categories";
import "./JokeOptions.css";
import {JokeContext} from "../../../JokeContext/JokeContext";
import SearchInput from "./Search/SearchInput/SearchInput";

function JokeOptions({ getAJoke }) {
    const {
        selected
    } = useContext(JokeContext);

    return (
        <div className="joke-options">
                {/* Random RadioButton*/}
                <Random/>
                {/* FromCategories RadioButton*/}
                <FromCategories/>
                {/* Categories List*/}
                {(selected === "option2") ?
                    <Categories/>
                    :
                    null
                }
                {/* Search RadioButton*/}
                <Search/>
                {(selected === "option3") ?
                    <SearchInput getAJoke={getAJoke} />
                    :
                    null
                }
        </div>
    );
}

export default JokeOptions