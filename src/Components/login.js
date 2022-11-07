import "./login.css"
import { useState } from "react";
import BackgroundSlider from "./bgSlider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();

      console.log("Submitted.");
  }

  const handleChange = (e) => {
    if(e.currentTarget.name === "Email"){
      const newEmail = e.currentTarget.value;
      setEmail(newEmail);
      console.log(e.currentTarget.value);
    }
    else
    if(e.currentTarget.name === "Password"){  
      const newPassword = e.currentTarget.value;
      setPassword(newPassword);
      console.log(e.currentTarget.value);
  }
}

  return (
    <div className="login">
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
        <button className="btn btn-outline-light" type="submit" >
          Login
        </button>
      </div>
      </form>
      </div>
    
  );
};

export default Login;
