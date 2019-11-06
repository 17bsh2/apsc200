import React from "react";

import { Route, BrowserRouter, Switch } from "react-router-dom";

import { Home } from "./Components/Home";
import { Data } from "./Components/Data";
import { Camera } from "./Components/Camera";
import { Settings } from "./Components/Settings";
import { NotFound } from "./Components/NotFound";

import { NavBar } from "./Components/NavBar";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        <h1> PVH APP </h1>
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Data" component={Data} />
            <Route path="/Camera" component={Camera} />
            <Route path="/Settings/" component={Settings} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
        <br />
        <br />
        to do: <br />
        make logo <br />
        change settings <br />
        make work <br />
        Header: with title and settings <br />
        then browser router to switch pages on click
      </p>
    </div>
  );
}

export default App;
