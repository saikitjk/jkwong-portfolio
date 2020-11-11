import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Sidebar from "./components/side/Sidebar";
import Main from "./components/main/MainContent";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Router>
      <div className="App">
        <div className="container appContainer">
          <div className="row appRow">
            <div className="col-sm-12 col-lg-3 app_side" data-aos="flip-left">
              <Sidebar />
            </div>

            <div className="col-sm-12 col-lg-9 app_main" data-aos="zoom-in">
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
