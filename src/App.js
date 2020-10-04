import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Blogs from "./components/Blogs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>SYEDA'S MERN BLOG</p>
        <a
          className="App-link"
          href="https://github.com/ismatfarjana"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
      <div className="blogList">
        <Blogs />
      </div>
    </div>
  );
}

export default App;
