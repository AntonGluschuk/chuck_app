import React, { useEffect, useContext } from "react";
import "./JokeLogic.css";
import JokeItself from "./JokeItself/JokeItself";
import JokeOptions from "./JokeOptions/JokeOptions";
import JokeButton from "./JokeButton/JokeButton";
import { JokeContext } from "../../JokeContext";

function JokeLogic() {
    const {
        data,
        setData,
        jokes,
        setJokes,
        favJokes,
        setFavJokes,
        selected,
        setSelected,
        setLoading,
        categories,
        setCategories,
        active,
        setActive,
        query,
        setQuery
    } = useContext(JokeContext);

    useEffect(() => {
        setLoading(true);
        getAJoke();
        const fetchCategories = async () => {
            const response = await fetch('https://api.chucknorris.io/jokes/categories');
            const data = await response.json();
            setCategories(data);
            setLoading(false);
        };
        fetchCategories();
    }, []);

    const getAJoke = async () => {
        if(selected === "option1") {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await response.json();
            console.log(data);
            setData(data);
            setLoading(false);
        }
        else if(selected === "option2") {
            const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${active}`);
            const data = await response.json();
            setData(data);
            setLoading(false);
        }
        else if(selected === "option3") {
            const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
            const data = await response.json();
            setJokes(data.result);
            setLoading(false);
        }
    };

    const handleOptionChange = e => {
       setSelected(e.target.value);
    };

    const likeJoke = (id) => {
        let favJoke;
      if (favJokes.find((joke) => joke.id === id)) return;
      if(jokes.length > 0) {
          jokes.forEach(joke => {
              if(joke.id === id) {
                  favJoke = joke;
              }
          })
      }
      if (data.id === id ) {
          favJoke = data;
      }
      setFavJokes([favJoke, ...favJokes]);
    };

    return (
        <div className="joke_logic">
            <div className="logo">
                <div className="logo_title">MSI 2020</div>
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

            {/*Jokes*/}
            {selected === 'option1' || selected === 'option2' ?
                  <JokeItself
                      value={data.value}
                      id={data.id}
                      category={data.categories}
                      updated_at={data.updated_at}
                      likeJoke={likeJoke}
                      key={data.id}
                  />
                :
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