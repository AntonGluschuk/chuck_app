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
    const [selected, setSelected] = useState("option1");
    const [categories, setCategories] = useState([]);

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

    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/categories')
            .then(response => {
                console.log(response);
                setCategories(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const handleOptionChange = e => {
       setSelected(e.target.value);
    };

    const handleFormSubmit = e => {
      e.preventDefault();
      console.log("You have submitted: ", selected);
    };

    return (
        <div className="joke_logic">
            <div className="select_option">
                <form onSubmit={handleFormSubmit}>
                    <Random defaultChecked={selected} handleOptionChange={handleOptionChange}/>
                    <FromCategories defaultChecked={selected} handleOptionChange={handleOptionChange}/>
                    <ul>
                        {categories.map(category => <li>{category}</li>)}
                    </ul>
                    <Search defaultChecked={selected} handleOptionChange={handleOptionChange}/>
                    <button type="submit" className="btn" onClick={() => setCount(count + 1)}>Get a joke</button>
                </form>
            </div>
            <div className="joke_itself">
                <JokeItself
                    value={data.value}
                    id={data.id}
                />
            </div>
        </div>
    );
}

export default JokeLogic