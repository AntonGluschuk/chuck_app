import React, {useEffect, useState} from "react";
import "./JokeLogic.css";
import JokeItself from "./JokeItself/JokeItself";
import JokeOptions from "./JokeOptions/JokeOptions";

function JokeLogic() {
    const [data, setData] = useState({});
    const [jokes, setJokes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState("option1");
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState(categories[0]);
    const [query, setQuery] = useState('punch');

    useEffect(() => {
        setLoading(true);
        getAJoke();
        fetch('https://api.chucknorris.io/jokes/categories')
            .then(res => res.json())
            .then(res => {
                setCategories(res);
                setLoading(false);
            })
            .catch(e => console.log(e));
    }, []);

    const getAJoke = () => {
        if(selected === "option1") {
                fetch('https://api.chucknorris.io/jokes/random')
                    .then(res => res.json())
                    .then(res => {
                        setData(res);
                        setLoading(false);
                    })
                    .catch(e => console.log(e));
            }
        else if(selected === "option2") {
            fetch(`https://api.chucknorris.io/jokes/random?category=${active}`)
                .then(res => res.json())
                .then(res => {
                    setData(res);
                    setLoading(false);
                })
                .catch(e => console.log(e));
        }
        else if(selected === "option3") {
            fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
                .then(res => res.json())
                .then(res => {
                    setJokes(res.result);
                    setLoading(false);
                })
                .catch(e => console.log(e));
        }
    };

    const handleOptionChange = e => {
       setSelected(e.target.value);
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
                getAJoke={getAJoke}
                setQuery={setQuery}
            />
            {/*Get a Joke Button*/}
            <button className="btn" onClick={getAJoke}>Get a joke</button>
            {/*Jokes*/}
            {selected === 'option1' || selected === 'option2' ?
                <JokeItself
                value={data.value}
                id={data.id}
                category={data.categories}
                />
                :
                jokes.map(data => {
                    return (
                    <JokeItself value={data.value}
                    id={data.id}
                    category={data.categories}
                    key={data.id}
                    />
                    )
                })
            }
        </div>
    );
}

export default JokeLogic