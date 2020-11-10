import React from "react";
import Sidebar from "./components/side/Sidebar";
import Main from "./components/main/MainContent";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="row appRow">
            <div className="col-lg-3">
              <Sidebar />
            </div>

            <div className="col-lg-9 app_main">
              <Main />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

//<div className="app_main">
