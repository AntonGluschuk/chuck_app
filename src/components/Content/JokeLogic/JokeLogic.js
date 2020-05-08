import React, {useEffect, useState} from "react";
import axios from "axios";
import "./JokeLogic.css";
import JokeItself from "./JokeItself/JokeItself";
import JokeOptions from "./JokeOptions/JokeOptions";

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

    return (
        <div className="joke_logic">
            <div className="select_option">
                <JokeOptions
                    setCount={setCount}
                    handleOptionChange={handleOptionChange}
                    selected={selected}
                    categories={categories}
                />
            </div>
            <JokeItself
                value={data.value}
                id={data.id}
                category={data.categories}
            />
        </div>
    );
}

export default JokeLogic