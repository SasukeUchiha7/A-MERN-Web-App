import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import JobsList from "../src/components/jobs.component";
import Home from "./components/home.component";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/jobs" component={JobsList} />
      </Router>
    </div>
  );
}

export default App;
