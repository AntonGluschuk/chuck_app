import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import Sidebar from "./components/Sidebar/Sidebar";
import {JokeProvider} from "./components/JokeContext/JokeContext";

function App() {

  return (
      <JokeProvider>
          <section className="app">
              <Content/>
              <Sidebar/>
          </section>
      </JokeProvider>

  )
}

export default App;
