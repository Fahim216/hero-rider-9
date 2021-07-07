import React from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
          
                <div className="hero-rider">
                    <h1>Hero-Rider</h1>
                </div>
        <div>
             <nav className="nav">
                <ul>
                    
                    <li>
                        <a href="Home"><Link to="/home">Home</Link>
</a>
                    </li>
                    <li>
                    <a href="Destination"><Link to="/destination">Destination</Link></a>
                    </li>
                    <li>
                    <a href="Blog">Blog</a>
                    </li>
                    <li>
                    <a href="Contact">Contact</a>
                    </li>
                    <li>
                    <a href="Login"><Link to="/login">Login</Link></a>
                    </li>
                </ul>
            </nav>
            </div>
            
        </div>
    );
};

export default Header;