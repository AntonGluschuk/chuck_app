import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import Sidebar from "./components/Sidebar/Sidebar";

export function App() {
  return (
      <section className="main_content">
        <Content/>
        <Sidebar/>
      </section>
  )
}

export default App;
