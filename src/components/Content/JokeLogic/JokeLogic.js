import React, {useContext, useEffect} from "react";
import "./JokeLogic.css";
import Joke from "./Joke/Joke";
import JokeOptions from "./JokeOptions/JokeOptions";
import JokeButton from "./JokeButton/JokeButton";
import SideButton from "../../Sidebar/SideButton/SideButton";
import {JokeContext} from "../../JokeContext/JokeContext";

function JokeLogic() {

    const {
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
        setValidSearchValue
    } = useContext(JokeContext);

    useEffect(() => {
       async function getCategories() {
            const response = await fetch('https://api.chucknorris.io/jokes/categories');
            const data = await response.json();
            setCategories(data);
        }
        getCategories().catch((e) => alert(e));
    }, []);

    const getAJoke = async () => {
        setLoading(true);
        if(selected === "option1") {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await response.json();
            getUnique(jokes, data);
            setLoading(false);
        }
        else if(selected === "option2") {
            const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${active}`);
            const data = await response.json();
            getUnique(jokes, data);
            setLoading(false);
        }
        else if(selected === "option3") {
            const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
            const data = await response.json();
            const singleJoke = randomSearchJoke(data.result);
            checkValidQuery(singleJoke);
        }
    };

    const checkValidQuery = (singleJ) => {
        if(singleJ === undefined) {
            setQuery("");
            setValidSearchValue(false);
            setLoading(false);
        } else {
            getUnique(jokes, singleJ);
            setValidSearchValue(true);
            setQuery("");
            setLoading(false);
        }
    };

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

    const likeJoke = (id) => {
        let favJoke;

        if (favJokes.find(joke => joke.id === id)) return;

        favJoke = jokes.find(joke => joke.id === id);

        setFavJokes([favJoke, ...favJokes]);
        setJokes(jokes => jokes.map(item => item.id === id ? {...item, isFavourite: true} : item));
    };

    const unlikeJoke = (id) => {
        const newLikedJokes = favJokes.filter(joke => joke.id !== id);
        setFavJokes(newLikedJokes);
        setJokes(jokes => jokes.map(item => item.id === id ? {...item, isFavourite: false} : item));
    };

    const randomSearchJoke = (jokes_r) =>  {
        let randJ = Math.floor(Math.random() * jokes_r.length);
      return jokes_r[randJ];
    };
    const getUnique = (jokes, data) => {
        if (jokes.find(joke => joke.id === data.id)) {
           return null;
        } else {
            setJokes([data, ...jokes]);
        }
    };
    return (
        <div className="joke-logic">
            <div className="joke-logic__logo">
                <div className="joke-logic__logo-title">MSI 2020</div>
                <SideButton/>
            </div>
            <div className="joke-logic__intro">
                <div className="joke-logic__intro-title">Hey!</div>
                <div className="joke-logic__intro-subtitle">Let's try to find a joke for you:</div>

                {/*Radio Buttons*/}
                <JokeOptions
                    handleOptionChange={handleOptionChange}
                    selected={selected}
                    active={active}
                    setActive={setActive}
                    categories={categories}
                    query={query}
                    setQuery={setQuery}
                    getAJoke={getAJoke}
                />

                {/*Get a Joke Button*/}
                <JokeButton getAJoke={getAJoke} query={query} selected={selected}/>
            </div>
            {/*Loader*/}
            {loading && <span className="joke-logic__loader"> </span>}
            {/*Jokes*/}
            {
                jokes.map(joke => {
                    return (
                        <Joke
                            value={joke.value}
                            id={joke.id}
                            category={joke.categories}
                            updated_at={joke.updated_at}
                            likeJoke={likeJoke}
                            unlikeJoke={unlikeJoke}
                            jokeIsF={joke.isFavourite}
                            key={joke.id}
                        />
                    )
                })
            }
        </div>
    );
}

export default JokeLogic