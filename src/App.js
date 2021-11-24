import React, {Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import ArticlesListPage from "./pages/ArticlesListPage"
import ArticlePage from "./pages/ArticlePage" 
import Navbar from "./Navbar"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div id="page-body">
          <Routes>
            <Route path="/" exact element={<HomePage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/articles-list" element={<ArticlesListPage/>}/>
            <Route path="/article/:name" element={<ArticlePage/>}/>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
