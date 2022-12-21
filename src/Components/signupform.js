import "../Style/signupform.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MDBCheckbox } from "mdb-react-ui-kit";
import Footer from "./footer";
const SignUp = () => {
  const navigate = useNavigate();
  const [firstN, setFirstN] = useState("");
  const [lastN, setLastN] = useState("");
  const [email, setEmail] = useState("");
  const [confirmE, setConfrimE] = useState("");
  const [password, setPassword] = useState("");
  const [passwordC, setCPaswword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted.");
  };

  const handleChange = (e) => {
    if (e.currentTarget.name === "fname") {
      const newFirstN = e.currentTarget.value;
      setFirstN(newFirstN);
      console.log(e.currentTarget.value);
    } else if (e.currentTarget.name === "lname") {
      const newLastN = e.currentTarget.value;
      setLastN(newLastN);
      console.log(e.currentTarget.value);
    } else if (e.currentTarget.name === "email") {
      const newEmail = e.currentTarget.value;
      setEmail(newEmail);
      console.log(e.currentTarget.value);
    } else if (e.currentTarget.name === "cEmail") {
      const newConfrimE = e.currentTarget.value;
      setConfrimE(newConfrimE);
      console.log(e.currentTarget.value);
    } else if (e.currentTarget.name === "password") {
      const newPassword = e.currentTarget.value;
      setPassword(newPassword);
      console.log(e.currentTarget.value);
    } else if (e.currentTarget.name === "cPassword") {
      const newCPassword = e.currentTarget.value;
      setCPaswword(newCPassword);
      console.log(e.currentTarget.value);
    }
  };

  return (
    <div className="main">
<div>
        <h1>
          
        </h1>
      </div>
      <div className="signupmain">
        <h1>Constructease</h1>
        <h4>Create Account</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-1">
            <input
              type="text"
              onChange={handleChange}
              value={firstN}
              name="fname"
              class="containers form-control"
              id="floatingInput"
              placeholder="First Name"
            />
            <label for="floatingInput">First Name</label>
          </div>
          <div className="form-floating mb-1">
            <input
              type="text"
              onChange={handleChange}
              value={lastN}
              name="lname"
              class="containers form-control"
              id="floatingInput"
              placeholder="Last Name"
              required
            />
            <label for="floatingInput">Last Name</label>
          </div>

          <div className="form-floating mb-1">
            <input
              type="email"
              onChange={handleChange}
              value={email}
              name="email"
              className="containers form-control"
              id="floatingInput"
              placeholder="Last Name"
              required
            />
            <label for="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-1">
            <input
              type="email"
              onChange={handleChange}
              value={confirmE}
              name="cEmail"
              className="containers form-control"
              id="floatingPassword"
              placeholder="Email"
            />
            <label for="floatingInput">Confirm Email</label>
          </div>
          <div className="form-floating mb-1">
            <input
              type="password"
              onChange={handleChange}
              value={password}
              name="password"
              className="containers form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="form-floating mb-1">
            <input
              type="password"
              onChange={handleChange}
              value={passwordC}
              name="cPassword"
              className="containers form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Confirm Password</label>
          </div>
          <div className="d5 d-flex justify-content-center">
            <MDBCheckbox
              className="flexcheck"
              id="flexCheckDefault"
              label="I agree all statements in Terms of service"
            />
          </div>
          <div className="button d-flex justify-content-center">
            <button className="btn btn-outline-light" type="submit">
              Sign Up
            </button>
            <button className='btn btn-primary'onClick={()=>navigate(-1)}>Alread have an account?</button >
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
