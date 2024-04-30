import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import logo from '../Icons/logo.jpeg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const myState = useSelector((state)=> state.reducer);
  return (
    <div >
      <div >                            
        <nav style={{ backgroundColor: '#012a4a', padding: '10px', color: '#002333', display: 'flex' }}>
        <span style={{ marginLeft: '10px', color: '#fff' , marginTop : '7px',font:'16px'}}><img src={logo} style={{height:'30px', width:'100px', marginTop:'5px'}}></img></span>
          <span style={{ marginLeft: '20px', color: '#fff' , marginTop : '7px', fontSize:'20px'}}><Link style={{textDecorationLine:'none', color:'white'}} to={"/VendorHome2"}>Home</Link></span>
          
          <span style={{ marginLeft: '400px', marginRight: '2px', marginTop:'10px' }}><h5>Hello, {myState.name}</h5></span> 
        </nav>
      </div>
    </div>
  );
};

export default NavBar;