import React, { useState } from "react";
import "../ComponentsCss/sidebar.css";
import Product from "./Product";
import SimilarProducts from "./SimilarProduct";
import CommentsAndReviews from "./CommentsAndReviews";
import Profile from "./Profile";
import PendingOrders from "./PendingOrders";
import Categories from "./Offers";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function SideBar(){
        const [Trending ,SetTrending] = useState(false);
        const [backGroundColor, setBg]= useState(false);
        function handleMouseOver(){
            SetTrending(true);
            setBg(true);
        }


    function handleMouseLeave(){
        SetTrending(false);
        setBg(false);
    }


    
    return (
        <div className="bigcontainer">
            <div className="sidebar">
                <div style={{marginTop:'20px', marginLeft:'8px'}}>
                <div
                        onMouseOver={handleMouseOver}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transition: 'height 0.5s ease-in-out', // Add the transition property
                        }}
                        >
                        {!backGroundColor && (
                            <div>
                            <h6 className="myH6">Trending products</h6>
                            </div>
                        )}
                        {backGroundColor && (
                            <div>
                            <h6 className="myH6">Trending products</h6>
                            </div>
                        )}
                        {Trending && (
                            <div style={{ marginLeft: '10px', width: '100px', height: 'auto' }}>

                             <Link to ='/Customer/Exclusive' style={{textDecoration:'none'}}>
                                - Mens
                            </Link>
                            <br></br>
                            <Link to ='/Customer/Exclusive' style={{textDecoration:'none'}}>
                                - Women
                            </Link>
                            <br></br>
                            <Link to ='/Customer/Exclusive' style={{textDecoration:'none'}}>
                                - Kids
                            </Link>
                            <br></br>
                            <Link to ='/Customer/Exclusive' style={{textDecoration:'none'}}>
                                - Adults
                            </Link>
                            </div>
                        )}

                </div>
                <hr className="underline"></hr>
                <div>
                    <Link to ='/Customer/Exclusive' style={{textDecoration:'none'}}>
                        Wishlist
                    </Link>
                </div>
                <hr className="underline"></hr>
                <div>
                    <Link to ='/Customer/Exclusive' style={{textDecoration:'none'}}>
                        Special for your
                    </Link>               
                </div>
                <hr className="underline"></hr>
                <div>
                    <Link to ='/Customer/Exclusive' style={{textDecoration:'none'}}>
                        Join Exclusive !
                    </Link>
                </div>
                <hr className="underline"></hr>
                </div>
            </div>           
       </div>   

        
    );
}

export default SideBar;