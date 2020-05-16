import React, {createContext, useState} from "react";

export const JokeContext = createContext();

export const JokeProvider = (props) => {
    const [data, setData] = useState({});
    const [jokes, setJokes] = useState([]);
    const [favJokes, setFavJokes] = useState([]);
    const [selected, setSelected] = useState("option1");

    const providerValue = {
      data,
      jokes,
      favJokes,
      setData,
      setJokes,
      setFavJokes,
      selected,
      setSelected
    };

    return (
        <JokeContext.Provider value={providerValue}>
            {props.children}
        </JokeContext.Provider>
    )
};