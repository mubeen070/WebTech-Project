import "./App.css";
import Login from "./Components/login";
import SignUp from "./Components/signupform";
import NavBar from "./Components/navigationbar";
import Home from "./Components/home";
import ContactUs from "./Components/Contactus";
import Material from "./Components/material";
import DealerInfo from "./Components/dealerInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Equipment from "./Components/equipment";
import Calculator from "./Components/calculator";
import Employees from "./Components/Employees";

function App() {
  return (
    <>
      <Router>
        
        <div className="main">
          <NavBar />
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/material" element={<Material />} />
            <Route exact path="/equipment" element={<Equipment />} />
            <Route exact path="/calc" element={<Calculator />} />
            <Route exact path="/employ" element={<Employees />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route exact path="/dealer" element={<DealerInfo />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
