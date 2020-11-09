import React, { useState, useEffect } from "react";
import Sidebar from "./components/side/Sidebar";
import Main from "./components/main/MainContent";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <Sidebar />
            </div>

            <div className="col-sm-12 col-lg-9">
              <Main />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
