import React, { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import "firebase/auth";
import { UserContext } from "../../App";



const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history =useHistory();
  const location =useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [newUser, setNewUser] = useState(false);
  const [user,setUser]=useState({
    name:'',
    email:'',
    password:'',
    error:'',
    success:true,
    newUser:false
    
  })

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
   const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;

        var token = credential.accessToken;
        // The signed-in user info.
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email: email };
        setLoggedInUser(signedInUser);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  const loginStyle = {
    marginLeft: "500px",
    marginTop: "40px",

    fontSize: "30px",
    border: "1px solid grey",
    paddingLeft: "40px",
    paddingTop: "10px",
    height: "400px",
    width: "300px",
  };

  const handleBlur=(e)=>{
      let isFieldValid=true;
      if(e.target.name==='email'){
          isFieldValid=/\S+@\S+\.\S+/.test(e.target.value);

      }
      if(e.target.name==='password'){
          const isPasswordValid=e.target.value.length>6;
          const passwordValid=/\d{1}/.test(e.target.value);
          isFieldValid=isPasswordValid&& passwordValid;

      }
      if(isFieldValid){
          const newUserInfo={...loggedInUser};
          newUserInfo[e.target.name]=e.target.value;
          setLoggedInUser(newUserInfo);
          
      }
  }
  const handleSubmit=(e)=>{
      if(newUser &&  loggedInUser.email&&loggedInUser.password){
        firebase.auth().createUserWithEmailAndPassword(loggedInUser.email,loggedInUser.password)
  .then((res) => {
    const newUserInfo={...loggedInUser}
  newUserInfo.error='';
  newUserInfo.success=true;
  setLoggedInUser(newUserInfo)
  })
  .catch((error) => {
  const newUserInfo={...loggedInUser}
  newUserInfo.error=error.message;
  newUserInfo.success=false;
  setLoggedInUser(newUserInfo)
    // ..
  });
      }
if(!newUser && loggedInUser.email &&loggedInUser.password){
  firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
  .then((res) => {
    // Signed in
    const newUserInfo={...loggedInUser}
  newUserInfo.error='';
  newUserInfo.success=true;
  setLoggedInUser(newUserInfo);
  history.replace(from);
    
  })
  .catch((error) => {
    const newUserInfo={...loggedInUser}
  newUserInfo.error=error.message;
  newUserInfo.success=false;
  setLoggedInUser(newUserInfo)
  });
}




      e.preventDefault();
      
  }
  return (
    <div className="app">
      <div style={loginStyle}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} action="">
          {newUser &&
            <input type="text" name="name" onBlur={handleBlur} placeholder="Name" id="" />}
          <input onBlur={handleBlur} type="text" name="email" id="" required placeholder="Email" />
          <br/>
          <input onBlur={handleBlur}
            type="password"
            name="password"
            id=""
            required
            placeholder="Password"
          />
          <br />
          <input type="submit" value="Login" />
          <p style={{ fontSize: "15px" }}>
            Don't have an account?
           <input type="checkbox" onChange={() =>setNewUser(!newUser)} name="newUser" />
        <label htmlFor="newUser"><b>Create One</b></label>
          </p>
        </form>
        
      
      </div>
      <button
        onClick={handleGoogleSignIn}
        style={{ marginLeft: "590px", marginTop: "10px" }}
      >
        Login With Google
      </button>
      <br />
      <button style={{ marginLeft: "590px", marginTop: "10px" }}>
        Login With Facebook
      </button>
      {
          loggedInUser.success && <p style={{textAlign: "center",color: "green"}}>User {newUser ?'Created':'Logged In '} SuccessFully</p>
      }
    </div>
  );
};

export default Login;
