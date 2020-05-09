import React, {useEffect, useState} from "react";
import "./JokeLogic.css";
import JokeItself from "./JokeItself/JokeItself";
import JokeOptions from "./JokeOptions/JokeOptions";

function JokeLogic() {
    const [data, setData] = useState({});
    const [joke, setJoke] = useState("");
    // const [jokesList, setJokesList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState("option1");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setLoading(true);
        getAJoke();
        fetch('https://api.chucknorris.io/jokes/categories')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setCategories(res);
                setLoading(false);
            })
            .catch(e => console.log(e));
    }, []);

    const getAJoke = () => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setData(res);
                console.log(res.value);
                setJoke(res.value);
                // console.log(jokesList);
                setLoading(false);
            })
            .catch(e => console.log(e));
    };

    const handleOptionChange = e => {
       setSelected(e.target.value);
    };
    /*Trying to implement array of jokes*/

    // const addedJokeToList = () => {
    //     for(let i = 0; i < jokesList.length; i++) {
    //         if(jokesList.indexOf(joke)) {
    //             console.log('Joke already in the list');
    //         } else {
    //             setJokesList([joke, ...jokesList]);
    //         }
    //     }
    // };

    return (
        <div className="joke_logic">
            <JokeOptions
                handleOptionChange={handleOptionChange}
                selected={selected}
                categories={categories}
                getAJoke={getAJoke}
            />
            <button className="btn" onClick={getAJoke}>Get a joke</button>
            <JokeItself
                value={data.value}
                id={data.id}
                category={data.categories}
            />
        </div>
    );
}

export default JokeLogic