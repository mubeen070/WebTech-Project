import React from "react";
import Login from "./Components/login";
import SignUp from "./Components/signupform";
import NavBar from "./Components/navbar";
import Home from "./Components/home";
import Material from "./Components/material";
import DealerInfo from "./Components/dealerInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Equipment from "./Components/equipment";


function App() {
  return (
    <>
      <style>
        {
          "body {background-image: linear-gradient(to top,rgba(0, 0, 0, 0.748),#00294c); }"
        }
      </style>
      <div className="app">
        
{/* 
          <Fifa/>
          <MiddleTop/>
          <Footer1/> */}

        <Router>
          <NavBar />
          <div className="main">
            <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/material" element={<Material />} />
              <Route exact path="/equipment" element={<Equipment />} />
              <Route exact path="/dealer" element={<DealerInfo />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/login" element={<Login />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
