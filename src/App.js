import { } from "antd"
import React from 'react'
import './App.css';
import Navigation from "./Componets/Navigation";
import Content from "./Componets/Content";
import Footer from "./Componets/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
