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
        selected,
        loading,
        setLoading,
        setCategories,
        active,
        query,
        setQuery,
        setValidSearchValue
    } = useContext(JokeContext);

    /*Getting categories of jokes from chuckNorris.io API*/
    useEffect(() => {
       async function getCategories() {
            const response = await fetch('https://api.chucknorris.io/jokes/categories');
            const data = await response.json();
            setCategories(data);
        }
        getCategories().catch((e) => alert(e));
    }, []);

    /*Getting jokes from chuckNorris.io API*/
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

    /*Clear search input field*/
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

    /*Generate single joke from array of jokes(received from 3rd option - Search) */
    const randomSearchJoke = (jokes_r) =>  {
      return jokes_r[Math.floor(Math.random() * jokes_r.length)];
    };

    /*Prevent render duplicate jokes*/
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
                <JokeOptions getAJoke={getAJoke} />

                {/*Get a Joke Button*/}
                <JokeButton getAJoke={getAJoke} />
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