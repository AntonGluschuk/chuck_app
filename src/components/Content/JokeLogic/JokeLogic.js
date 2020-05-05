import React, {useEffect, useState} from "react";
import axios from "axios";
import "./JokeLogic.css";
import Random from "./Random/Random";
import FromCategories from "./FromCategories/FromCategories";
import Search from "./Search/Search";
import JokeItself from "./JokeItself/JokeItself";

function JokeLogic() {
    const [data, setData] = useState({});
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/random')
            .then(response => {
                console.log(response);
                setData(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [count]);

    return (
        <div className="joke_logic">
            <div className="select_option">
                <form>
                    <Random/>
                    <FromCategories/>
                    <Search/>
                    <button type="button" className="btn" onClick={() => setCount(count + 1)}>Get a joke</button>
                </form>
            </div>
            <div className="joke_itself">
                <JokeItself value={data.value}/>
            </div>
        </div>
    );
}

export default JokeLogic