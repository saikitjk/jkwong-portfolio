import React, { useState, useEffect } from "react";
import Sidebar from "./components/side/Sidebar";
import Main from "./components/main/MainContent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <div className="app_main">
              <Main />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
