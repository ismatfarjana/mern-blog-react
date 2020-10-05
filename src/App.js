import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import githublogo from "./githublogo.png";
import linkedinlogo from "./linkedinlogo.png";
import Blogs from "./components/Blogs";
import Users from "./components/Users";
import Time from "./components/Time";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="headerParts">
          <Time />
          <p>
            {new Date().getDate()}.{new Date().getMonth() + 1}.
            {new Date().getFullYear()}
          </p>
        </div>

        <div className="headerParts">
          <h2>BLOG</h2>
          <p>Built on MERN</p>
          <p className="copyright">
            Copyright © 2020 | BLOG Developed by SyedaIsmatFarjana | MERN |
            Melbourne, Australia | All rights reserved
          </p>

          <div className="social">
            <a
              className="App-link"
              href="https://github.com/ismatfarjana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="" className="sociallogo" src={githublogo} />
            </a>
            <a
              className="App-link"
              href="https://www.linkedin.com/in/syeda-ismat-farjana/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="" className="sociallogo" src={linkedinlogo} />
            </a>
          </div>
        </div>
      </header>
      <div className="componentList">
        <Users />
        <Blogs />
      </div>
    </div>
  );
}

export default App;
