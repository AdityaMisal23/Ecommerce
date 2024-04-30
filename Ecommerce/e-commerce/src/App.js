import React, { useState } from 'react';
import NavBar from './Customer_Components/NavBar';
import SideBar from './Customer_Components/SideBar';
import Footer from './Customer_Components/Footer';
import './App.css';
import Product from './Customer_Components/Product';

import Profile from './Customer_Components/Profile';
import Register from './Customer_Components/Register';
import L from './Customer_Components/Login';
import Home from './Customer_Components/Home';
import Cart from './Customer_Components/Cart';
import { VendorHome2 } from './VendorComponents/VendorHome2';
import { AdminHomePage } from './AdminComponents/ADminHomePage';


import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';

import HomePage from './Customer_Components/HomePage';
import { VendorHome } from './VendorComponents/VendorHome';
import { AddProduct } from './VendorComponents/AddProduct';




 
function App() {

  const [username, setName] = useState("");
  const [id, setId]  = useState("");
  
  return (
    <div>
      
        <Router>
            <Routes>
                <Route path='/Login' element={<L></L>}/>
                {/* <Route path='/' element={<Home></Home>}/> */}
                <Route path='/Customer/Product' element={<Home></Home>}/>
                <Route path='/Customer/Pending' element={<Home></Home>}/>
                <Route path='/' element={<HomePage></HomePage>}/>
                <Route path='/Customer/Success' element={<Home></Home>}/>
                <Route path='/Customer/Exclusive' element={<Home></Home>}/>

                <Route path='/SignUp' element={<Register></Register>}/>

                <Route path='/VendorHome' element={<VendorHome/>}/>
                <Route path='/VendorHome/AddProducts' element={<AddProduct/>}/>
                <Route path='/VendorHome2' element={<VendorHome2/>}/>

                <Route path='/Customer/Cart' element={<Home></Home>}/>
                <Route path='/AdminHome' element={<AdminHomePage></AdminHomePage>}/>
                <Route path='/Customer/AllProduct' element={<Home></Home>}></Route>
                <Route path='Home/Wallet' element={<Home></Home>}/>
                <Route path='/Customer/OrderSuccess' element={<Home></Home>}/>
                <Route path='/Customer/OrderSuccessful' element={<Home></Home>}/>

                <Route path='/customer/Profile' element={<Home></Home>}/>

  
            </Routes>
        </Router>
    </div>


  );
}

export default App;
