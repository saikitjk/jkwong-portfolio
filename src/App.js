import React, { useEffect } from "react";
import Aos from "aos";
//import axios from "axios";
import "aos/dist/aos.css";
import Sidebar from "./components/side/Sidebar";
import Main from "./components/main/MainContent";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    setInterval(() => {
      async function doRequest() {
        //ping jkwong-portfolio.herokuapp.com/
        const response = await fetch("jkwong-portfolio.herokuapp.com/");
        if (response.status === 200) {
          // Store response body normally
          console.log("pinged. Portfolio awake");
          return;
        }
      }
      doRequest();
    }, 1200000);
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

// useEffect(() => {
//   setInterval(() => {
//     async function doRequest() {
//       //ping jkwong-portfolio.herokuapp.com/
//       const response = await fetch("jkwong-portfolio.herokuapp.com/");
//       if (response.status === 200) {
//         // Store response body normally
//         console.log("pinged. Site awake");
//         return;
//       }
//     }
//     doRequest();
//   }, 1200000);
// }, []);
