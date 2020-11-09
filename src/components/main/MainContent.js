import React from "react";
import Nav from "../nav/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import About from "../about/About";
import Resume from "../resume/Resume";
import Projects from "../projects/Projects";
import "./style.css";

export default function MainContent() {
  return (
    <Router>
      <div className="app_main">
        <Nav />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>

          <Route path="/resume">
            <Resume />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

//Redirect is to redirect to home if user entered something other than /, /resume, or /projects
