import React, {createContext, useState, useEffect, useReducer} from "react";
import {JokeReducer} from "./JokeReducer";
export const JokeContext = createContext();

export const JokeProvider = (props) => {
    const [favJokes, dispatch] = useReducer(JokeReducer, JSON.parse(localStorage.getItem('favourite_jokes')) || []);
    // const initialFavJoke = () => (JSON.parse(localStorage.getItem('favourite_jokes')) || []);
    const [jokes, setJokes] = useState([]);
    // const [favJokes, setFavJokes] = useState(initialFavJoke);
    const [selected, setSelected] = useState("option1");
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState("animal");
    const [query, setQuery] = useState("");
    const [visibleSide, setVisibleSide] = useState(false);
    const [validSearch, setValidSearch] = useState(true);
    const [validSearchValue, setValidSearchValue] = useState(true);

    /*Added joke to the favourite */
    const likeJoke = (id) => {
        if (favJokes.find(joke => joke.id === id)) return;
        dispatch({type: 'LIKE_JOKE', joke_id: id, prev_jokes: jokes});
        // setFavJokes([jokes.find(joke => joke.id === id), ...favJokes]);
        setJokes(jokes => jokes.map(item => item.id === id ? {...item, isFavourite: true} : item));
    };

    /*Delete joke from the favourite */
    const unlikeJoke = (id) => {
        dispatch({type: 'UNLIKE_JOKE', favJoke_id: id});
        // setFavJokes(favJokes.filter(joke => joke.id !== id));
        setJokes(jokes => jokes.map(item => item.id === id ? {...item, isFavourite: false} : item));
    };

    /*Make a correct format of last update date*/
    const calculateHours = (date) => {
        return Math.floor((new Date() - new Date(date)) / 1000 / 60 / 60);
    };

    /*Handle options selecting (Random, From categories, Search)*/
    const handleOptionChange = e => {
        if(selected === "option1" || selected === "option3") {
            setActive("animal");
            setSelected(e.target.value);
        }
        else if(selected === "option1" || selected === "option2") {
            setValidSearchValue(true);
            setSelected(e.target.value);
        } else {
            setSelected(e.target.value);
        }
    };

    const providerValue = {
        jokes,
        favJokes,
        setJokes,
        selected,
        setSelected,
        loading,
        setLoading,
        categories,
        setCategories,
        active,
        setActive,
        query,
        setQuery,
        visibleSide,
        setVisibleSide,
        validSearch,
        setValidSearch,
        validSearchValue,
        setValidSearchValue,
        likeJoke,
        unlikeJoke,
        calculateHours,
        handleOptionChange
    };

    useEffect(() => {
        localStorage.setItem('favourite_jokes', JSON.stringify(favJokes));
    }, [favJokes]);

    return (
        <JokeContext.Provider value={providerValue}>
            {props.children}
        </JokeContext.Provider>
    )
};