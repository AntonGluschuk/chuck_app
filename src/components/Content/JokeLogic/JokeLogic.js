import React, {useEffect, useState} from "react";
import axios from "axios";
import "./JokeLogic.css";
import Random from "./Random/Random";
import FromCategories from "./FromCategories/FromCategories";
import Search from "./Search/Search";
import JokeItself from "./JokeItself/JokeItself";
import CategoriesItself from "./FromCategories/CategoriesItself/CategoriesItself";

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
                <form>
                    {/* Random RadioButton*/}
                    <Random defaultChecked={selected} handleOptionChange={handleOptionChange}/>
                    {/* FromCategories RadioButton*/}
                    <FromCategories defaultChecked={selected} handleOptionChange={handleOptionChange}/>
                    {/* Categories List*/}
                    {(selected === "option2") ?
                        <CategoriesItself selected={selected} categories={categories.slice(0, 4)}/>
                        :
                        null
                    }
                    {/* Search RadioButton*/}
                    <Search defaultChecked={selected} handleOptionChange={handleOptionChange}/>
                    {(selected === "option3") ?
                        <div className="search">
                            <input
                                type="text"
                                placeholder="Free text search..."
                            />
                        </div>
                        :
                        null
                    }
                    <button className="btn" onClick={() => setCount(count + 1)}>Get a joke</button>
                </form>
            </div>
            <JokeItself
                value={data.value}
                id={data.id}
            />
        </div>
    );
}

export default JokeLogic