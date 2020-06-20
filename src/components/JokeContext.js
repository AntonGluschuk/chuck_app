import React, {createContext, useState, useEffect} from "react";

export const JokeContext = createContext();

export const JokeProvider = (props) => {
    const [data, setData] = useState({});
    const [jokes, setJokes] = useState([]);
    const initialFavJoke = () => (JSON.parse(localStorage.getItem('favourite_jokes')) || []);
    const [favJokes, setFavJokes] = useState(initialFavJoke);
    const [selected, setSelected] = useState("option1");
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState("animal");
    const [query, setQuery] = useState("");
    const [visibleSide, setVisibleSide] = useState(false);
    const [validSearch, setValidSearch] = useState(true);
    const [validSearchValue, setValidSearchValue] = useState(true);

    const providerValue = {
        data,
        setData,
        jokes,
        setJokes,
        favJokes,
        setFavJokes,
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
        setValidSearchValue
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