import NavBar from "./NavBar"

import { useLocation } from "react-router-dom";
import Footer from "./Footer";

import Product from "./Product";
import SideBar from "./SideBar";
import SimilarProducts from "./SimilarProduct";
import Profile from "./Profile";
import PendingOrders from "./PendingOrders";
import CommentsAndReviews from "./CommentsAndReviews";
import Success from "./SuccessBuy";
import JoinEx from "./JoinExclusive";
import Coins from "./Coins";
import OrderSuccess from "./OrderSucc";

import OrderSuccessFul from "./OrderSuccessful";


import Cart from "./Cart";
import {useEffect } from "react";
import AllProducts from "./AllProducts";

function Home(){
    const location = useLocation();

    const path = location.pathname;


    return(

        <div>
            <NavBar></NavBar>
            <div style={{display:'flex'}}>
            <SideBar></SideBar>
            {path === '/Customer/Product' && (
                <div style={{width:'84vw'}}>
                    {/* <SideBar /> */}
                    <Product></Product>
                    <SimilarProducts></SimilarProducts>
                    <CommentsAndReviews></CommentsAndReviews>
                </div>
            )}
            {path === '/Customer/Pending' && (
                <div>
                    <SideBar />
                    <PendingOrders></PendingOrders>
                    <SimilarProducts></SimilarProducts>
            </div>
            )}
            {path === '/customer/Profile' && (
                    // <div style={{width:'700px'}}>
                    //     <Profile></Profile>
                    // </div>
                    <div>
                    <Profile></Profile>
                    </div>
            )}
            {path === '/Customer/Success' &&(
                <Success></Success>
            )}

            {path === '/Customer/Exclusive' && (
                    // <div style={{width:'700px'}}>
                    //     <Profile></Profile>
                    // </div>
                        <JoinEx></JoinEx>
    

            )}

            {
                path === '/Customer/AllProduct' &&
                <div>
                    <AllProducts></AllProducts>
                </div>
            }

            {path === '/Customer/OrderSuccess' &&
                <OrderSuccess></OrderSuccess>
            
            }

            {path === '/Customer/OrderSuccessful' &&
                <OrderSuccessFul></OrderSuccessFul>
            }

            {path === '/Home/Wallet' &&
                <div>
                    <Coins></Coins>
                </div>    
            }
            
            {path === '/Customer/Cart' &&(
                <div>
                <Cart></Cart>
                </div>
            )}


            </div>

            <Footer></Footer>
            
        </div>
    );
}



export default Home;