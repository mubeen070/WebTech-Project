import "../Style/login.css";
import React from "react";
import { useState, useEffect, useRef } from "react";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const goRed = useRef("");
  const red = () => {
    goRed.current.style.backgroundColor = 'red' 
  }

  const count = useRef(0);
  useEffect(() => { 
    count.current = count.current+1;
    console.log(count.current)
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted.");
  };

  const handleChange = (e) => {
    if (e.currentTarget.name === "Email") {
      const newEmail = e.currentTarget.value;
      setEmail(newEmail);
      console.log(e.currentTarget.value);
    } else if (e.currentTarget.name === "Password") {
      const newPassword = e.currentTarget.value;
      setPassword(newPassword);
      console.log(e.currentTarget.value);
    }
  };

  return (
    <div className="main">
      <div>
        <h1>
          <button onClick={()=>navigate("/signup")}>Go to Signup</button >
        </h1>
      <h2>Render Count: {count.current}</h2>
      </div>
      <div className="login">
        <h1>Constructease</h1>
        <h1 className="d-flex justify-content-center"></h1>
        <h4>Login</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-1">
            <input
              type="email"
              value={email}
              name="Email"
              onChange={handleChange}
              className="containers form-control"
              id="floatingPassword"
              placeholder="Email"
              ref={goRed}
            /> 
            <label for="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-1">
            <input
              type="password"
              value={password}
              name="Password"
              onChange={handleChange}
              className="containers form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <p className="forgot-password text-center mt-2">
            Forgot <a href="/">password?</a>
          </p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-outline-light" type="submit">
              Login
            </button>
            
            <button className="btn btn-outline-light" onClick={red}>
              Go Red
            </button>
            
          </div>
        </form>
      </div>
    <Footer/>
    </div>
  );
};

export default Login;