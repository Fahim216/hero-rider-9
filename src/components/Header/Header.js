import React from 'react';
import '../Header/Header.css';

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
                        <a href="Home">Home</a>
                    </li>
                    <li>
                    <a href="Destination">Destination</a>
                    </li>
                    <li>
                    <a href="Blog">Blog</a>
                    </li>
                    <li>
                    <a href="Contact">Contact</a>
                    </li>
                    <li>
                    <a href="Login">Login</a>
                    </li>
                </ul>
            </nav>
            </div>
            
        </div>
    );
};

export default Header;