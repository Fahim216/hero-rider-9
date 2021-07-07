import React from 'react';
import  './Home.css';
import { Link } from 'react-router-dom';
import {Card } from 'react-bootstrap';
import bus from '../Frame-1.png';
import car from '../car.png';
import bike from '../bike.png'
import train from '../5-54340_bullet-train-png-photos-japanese-bullet-train-png.png';


const Home = () => {
    const style={
      marginLeft: "30px",
      marginTop: "60px",
      padding: "20px",
      textAlign: "center",
      display: "flex",
      color: "purple",
      borderRadius: "5px",
    }
    
    return (
        <div style={style} className="Home-cart">

  <div className="card">
  <Card className="container">
    <Card.Img variant="top" src={bike} height="300" width="250"  />
    <Card.Body>
      
      <Card.Text className="">
      <h1 ><Link to="/destination">Bike</Link></h1>
      </Card.Text>
    </Card.Body>
    
  </Card>
  </div>
  <div className="card">
  <Card className="container">
    <Card.Img variant="top" src={car} height="300" width="250"  />
    <Card.Body>
    
      <Card.Text>
      <h1> <Link to="/destination">Car</Link></h1>
      </Card.Text>
    </Card.Body>
    
  </Card>
  </div>
  
 
 <div className="card">
 <Card className="container">
    <Card.Img variant="top" src={bus} height="300" width="250"  />
    <Card.Body>
      
      <Card.Text>
      <h1><Link to="/destination">Bus</Link></h1>
      </Card.Text>
    </Card.Body>
  </Card>
 </div>
 <div className="card">
 <Card className="container">
    <Card.Img variant="top" src={train} height="300" width="250"  />
    <Card.Body>
    
      <Card.Text>
      <h1><Link to="/destination">Train</Link></h1>
      </Card.Text>
    </Card.Body>
  </Card>
 </div>


            
            
        </div>
    );
};

export default Home;