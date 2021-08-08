import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './Miguel.css';

function DigitalClock() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
        console.log("is working")
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="DigitalClock">
      <header className="DigitalClock-header">
        <BrowserRouter>
          <div>
            <Link className="DigitalClock-link" to="/">Home</Link>
            &nbsp;|&nbsp;
            <Link className="DigitalClock-link" to="/page2">Page2</Link>
          </div>
          <Switch>
            <Route exact path="/">
                {/* <img src={logo} className="DigitalClock-logo" alt="logo" /> */}
                <p>
                  Edit <code>src/DigitalClock.js</code> and save to reload.
                </p>
                <a
                  className="DigitalClock-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
                <p>The current time is {currentTime}.</p>
            </Route>
            <Route path="/page2">
                <p>This is page 2!</p>
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default DigitalClock;