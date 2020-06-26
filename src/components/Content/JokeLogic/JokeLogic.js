import React, { useContext } from "react";
import "./JokeLogic.css";
import JokeItself from "./JokeItself/JokeItself";
import JokeOptions from "./JokeOptions/JokeOptions";
import JokeButton from "./JokeButton/JokeButton";
import SideButton from "../../SideButton/SideButton";
import { JokeContext } from "../../JokeContext";

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

    const getCategories = async () => {
        const response = await fetch('https://api.chucknorris.io/jokes/categories');
        const data = await response.json();
        setCategories(data);
    };getCategories().catch(e => {console.log(e);});

    const getAJoke = async () => {
        setLoading(true);
        if(selected === "option1") {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await response.json();
            setJokes([data, ...jokes]);
            setLoading(false);
        }
        else if(selected === "option2") {
            const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${active}`);
            const data = await response.json();
            setJokes([data, ...jokes]);
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
            setJokes([singleJ, ...jokes]);
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
    };

    const randomSearchJoke = (jokess) =>  {
        let randJ = Math.floor(Math.random() * jokess.length);
      return jokess[randJ];
    };

    return (
        <div className="joke_logic">
            <div className="logo">
                <div className="logo_title">MSI 2020</div>
                <SideButton/>
            </div>
            <div className="intro">
                <div className="intro_title">Hey!</div>
                <div className="intro_subtitle">Let's try to find a joke for you:</div>

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
            {loading && <span className="joke_loader"> </span>}
            {/*Jokes*/}
            {
                jokes.map(joke => {
                    return (
                        <JokeItself
                            value={joke.value}
                            id={joke.id}
                            category={joke.categories}
                            updated_at={joke.updated_at}
                            likeJoke={likeJoke}
                            key={joke.id}
                        />
                    )
                })
            }
        </div>
    );
}

export default JokeLogic