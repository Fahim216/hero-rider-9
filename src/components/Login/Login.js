import React from 'react';
import {Link} from 'react-router-dom'

const Login = () => {
    const loginStyle={
        marginLeft:'500px',
        marginTop:'40px',
       
    
     fontSize:'30px',
     border: '1px solid grey',
    paddingLeft:'40px',
     paddingTop:'10px',
     height: '400px',
     width: '300px'
    }
    return (
        <div className="app">
            <div style={loginStyle}>
            <h1>Login</h1>
           <form action="">
                <input type="text" name="email" id=""required placeholder="Email"/>
                <br />
                <input type="password" name="password" id=""required placeholder="Password"/>
                <br />
                <input type="submit" value="Login" />
                <p style={{fontSize:'15px'}}>Don't have an account?<Link to="/CreateAccount">Create an account</Link></p>
           </form>
        </div>
        <button style={{marginLeft:'590px',marginTop:'10px'}}>Login With Google</button>
      <br/>
      <button style={{marginLeft:'590px',marginTop:'10px'}}>Login With Facebook</button>
        
        </div>
       
    );
};

export default Login;