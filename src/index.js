import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios'

function JokeLogic() {
    const [data, setData] = useState({});
    // const [joke, setJoke] = useState({value : ''});


    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/random')
            .then(response => {
                console.log(response);
                setData(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div className="joke_logic">
            <div className="select_option">
                <input type="radio" /><label>Random</label> <br/>
                <input type="radio" /><label>From Categories</label> <br/>
                <input type="radio" /><label>Search</label> <br/>
                <button type="button" className="btn" onClick={() => setData}>Get a joke</button>
            </div>
            <div className="joke_itself">
                <div className="joke">{data.value}</div>
            </div>
        </div>
    );
}

function Sidebar() {
    return (
        <aside className="sidebar">
            <div>Favorite jokes</div>
        </aside>
    )
}

function Content() {
    return (
        <div className="content">
            <div className="intro">
                <h3>MSI 2020</h3>
                <h1>Hey!</h1>
                <h2>Let's try to find a joke for you:</h2>
            </div>
                <JokeLogic />
        </div>
    )
}

function MainContent() {
        return (
            <section className="main_content">
                <Content/>
                <Sidebar/>
            </section>
        )
}

// ========================================

ReactDOM.render(
    <MainContent />,
    document.getElementById('root')
);


