import React from 'react';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import Footer from './Components/Footer';
import './App.css';
import Product from './Components/Product';

import Profile from './Components/Profile';
import Register from './Components/Register';
import L from './Components/Login';
import Home from './Components/Home';



import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
import { VendorHome } from './VendorComponents/VendorHome';
import { AddProduct } from './VendorComponents/AddProduct';
// import Home from './Components/Home';
 
function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<L></L>}/>
                <Route path='/Home/Product' element={<Home></Home>}/>
                <Route path='/Home/Pending' element={<Home></Home>}/>
                <Route path='/Home' element={<HomePage></HomePage>}/>
                <Route path='/Home/Success' element={<Home></Home>}/>
                <Route path='/SignUp' element={<Register></Register>}/>
                <Route path='/VendorHome' element={<VendorHome/>}/>
                <Route path='/VendorHome/AddProducts' element={<AddProduct/>}/>
                <Route/>
            </Routes>
        </Router>
    </div>


  );
}

export default App;
