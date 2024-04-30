import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Icons/logo.jpeg';

const NavBar = (props) => {
  return (
    <div >
      <div >                            
        <nav style={{ backgroundColor: '#012a4a', padding: '10px', color: '#002333', display: 'flex' }}>
        <span style={{ marginLeft: '10px', color: '#fff' , marginTop : '7px',font:'16px'}}><img style={{height:'30px', width:'100px', marginTop:'5px'}} src={logo}></img></span>
          
          <span style={{ marginLeft: '540px', marginRight: '2px', marginTop:'10px' }}><h5>Hello, Aditya</h5></span> 
          <span style={{ marginLeft: '610px', marginRight: '2px', marginTop:'10px' }}><button type='button' style={{backgroundColor:'red'}}>Logout</button></span>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;