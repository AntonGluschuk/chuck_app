import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios'

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
                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="option1"
                                defaultChecked={true}
                                className="form-check-input"
                            />
                            Random
                        </label>
                    </div>

                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="option2"
                                className="form-check-input"
                            />
                            From Categories
                        </label>
                    </div>

                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="option3"
                                className="form-check-input"
                            />
                            Search
                        </label>
                    </div>
                    <button type="button" className="btn" onClick={() => setCount(count + 1)}>Get a joke</button>
                </form>
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


