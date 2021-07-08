import React, { useContext } from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    return (
        <div className="header">
          
                <div className="hero-rider">
                    <h1>Hero-Rider</h1>
                </div>
        <div>
             <nav className="nav">
                <ul>
                    
                    <li>
                        <Link to="/home">Home</Link>

                    </li>
                    <li>
                    <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                    <Link to="/Blog">Blog</Link>
                    </li>
                    <li>
                    <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                    <Link to="/login">Login</Link>
                    <button style={{marginLeft:'20px',color:'blue'}} onClick={()=>setLoggedInUser({})}>SignOut</button>
                    </li>
                </ul>
            </nav>
            </div>
            
        </div>
    );
};

export default Header;