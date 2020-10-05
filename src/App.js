import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import githublogo from "./githublogo.png";
import linkedinlogo from "./linkedinlogo.png";
import Blogs from "./components/Blogs";
import Time from "./components/Time";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="headerParts">
          <Time />
        </div>

        <div className="headerParts">
          <p>SYEDA'S MERN BLOG</p>

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

          <p>
            {new Date().getDate()}.{new Date().getMonth() + 1}.
            {new Date().getFullYear()}
          </p>
        </div>
      </header>
      <div className="blogList">
        <Blogs />
      </div>
    </div>
  );
}

export default App;
