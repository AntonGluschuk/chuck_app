import React, {useEffect, useState} from "react";
import "./JokeLogic.css";
import JokeItself from "./JokeItself/JokeItself";
import JokeOptions from "./JokeOptions/JokeOptions";
import JokeButton from "./JokeButton/JokeButton";

function JokeLogic() {
    const [data, setData] = useState({});
    const [jokes, setJokes] = useState([]);
    const [favJokes, setFavJokes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState("option1");
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState(categories[0]);
    const [query, setQuery] = useState('punch');

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
      if (favJokes.find((joke) => joke.id === id)) return;
        let favJoke;
      if (data.id === id) {
          favJoke = data;
      }
      setFavJokes([favJoke, ...favJokes]);

    };

    return (
        <div className="joke_logic">
            {/*Radio Buttons*/}
            <JokeOptions
                handleOptionChange={handleOptionChange}
                selected={selected}
                active={active}
                setActive={setActive}
                categories={categories}
                setQuery={setQuery}
                getAJoke={getAJoke}
            />
            {/*Get a Joke Button*/}
            <JokeButton getAJoke={getAJoke}/>
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
                    updated_at={data.updated_at}
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