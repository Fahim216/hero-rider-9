import React from "react";
import { Link } from "react-router-dom";

const CreateAccount = () => {

  const formStyle = {
    marginLeft: "500px",
    marginTop: "40px",
    fontSize: "30px",
    border: "1px solid grey",
    paddingLeft: "40px",
    paddingTop: "10px",
    height: "400px",
    width: "300px",
  };
  return (
    <div className="app">
      <div style={formStyle}>
        <h4>Create an Account</h4>
        <form action="">
          <input type="text" name="name" id="" placeholder="Name" required />
          <br />
          <input type="text" name="email" id="" required placeholder="Email" />
          <br />
          <input
            type="password"
            name="password"
            id=""
            required
            placeholder="Password"
          />
          <br />
          <input
            type="password"
            name="Confirm Password"
            id=""
            required
            placeholder="Confirm password"
          />
          <br />
          <input type="submit" value="Create an account" />
          <p style={{ fontSize: "15px" }}>
            Already have an account?<Link to="/Login">Login</Link>
          </p>
          
        </form>
      </div>
      <button style={{marginLeft:'590px',marginTop:'10px'}}>Login With Google</button>
      <br/>
      <button style={{marginLeft:'590px',marginTop:'10px'}}>Login With Facebook</button>
    </div>
  );
};

export default CreateAccount;
