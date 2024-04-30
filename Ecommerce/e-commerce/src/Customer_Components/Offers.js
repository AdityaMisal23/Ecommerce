import React, { useState, useEffect, useRef } from 'react';
import Fashion from "../Icons/Category.jpg";
import '../ComponentsCss/Offers.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UseSelector } from 'react-redux';
import { updateProductId } from '../Redux/Actions/action2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Offers() {
 

  const containerRef = useRef(null);

  const [productImage, setProductImage] = useState(null);
  const [productName, setProductname] = useState("");
  const [productPrice , setProductPrice] = useState("");
  const [offers, setOffers] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const myFunc = async () =>{
      try{
        console.log("Hello boys chaii pilo");
        const response = await axios.get("http://localhost:7070/Product/Offers");
        console.log(response.data);
        setOffers(response.data);
      }
      catch(e){
        toast.error("Server error");
      }
    }

    myFunc();


  }, []); 


  const handleOnClick = (id) =>{
    navigate("/Customer/Product?id=" + id);
  }


  return (
    <div>
      <div style={{backgroundColor:'#dee7ef', height:'50px'}}>
        <h3 style={{marginTop:'20px', marginLeft:'40px,', color:'#002333',marginTop:'27px'}}>    Special for you</h3>
      </div>
      
    <div className="media-scroller" ref={containerRef} >
      {offers.map((offer) => (
        <div key={offer.id} className="media-element" onClick={()=>handleOnClick(offer.id)}>
          <img src={`data:image/png;base64,${offer.productImage}`} alt="Fashion Category" className="categories"></img>
          <h3 className="categories-text">{offer.productName}</h3>
          <h3 className="categories-text"> {offer.price}</h3>
        </div>
      ))}
    </div>
    </div>
    
  );
}

export default Offers;
