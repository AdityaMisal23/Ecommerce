import { useEffect, useState } from "react";
import "../ComponentsCss/Cart.css";
import Image from "../Icons/Category.jpg";
import { UseSelector, useSelector } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Cart(){

    const [amount,setAmount] = useState(1);
    const myState = useSelector((state)=>state.reducer);
    const [carts, setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [productImage, setProductImage] = useState(null);
    const  [counter , setCounter] = useState(0);
    const navigate = useNavigate();
    // var totalAmount = 0;

    
    const setDecrease =()=>{
        setAmount(amount-1);
    }

    const setIncrease =()=>{
        setAmount(amount+1);
    }



    useEffect(()=>{
        async function getCartData(){
            try{
                console.log("this is my state "+ myState.id);
                const response = await axios.get("http://localhost:7070/Cart/GetData/"+myState.id);
                setCart(response.data);
                
                const newTotalAmount = carts.reduce((total, cart) => total + cart.price, 0);
                console.log(newTotalAmount);
                setTotalAmount(newTotalAmount);
                
            }
            catch(e){
                throw new Error(e.message);
            }
        }
        getCartData();
        

    },[counter])

    const removeCart = async(id) =>{
        try{
            const response = await axios.delete(`http://localhost:7070/Cart/RemoveCart/${id}`);
            console.log(response.data);

            toast.success("Product removed");
            const filteredArray = carts.filter(obj => obj.id !== id);
            setCart(filteredArray);
            setCounter(counter+1);
        }
        catch(e){
            toast.error("Something went wromng");
        }
    }

    const HandleBuyCart = () =>{
        navigate("/Customer/Success");
    }

    return (
            <div>
             <div style={{backgroundColor:'#deefe7', height:'50px'}}><h3>Your cart total is : {totalAmount}</h3></div>
             {carts.length>0 && <button style={{width:'100px', height:'50px',marginTop:'30px'}} className="btn btn-success" type="button" onClick={HandleBuyCart}>Buy Cart</button>}
            {carts!=undefined && carts.map(c =>
             (
             <div className="cartContainer">
                 <img  src={`data:image/png;base64,${c.product.productImage}`} className="cartImage"  key={c.id}></img>
                 <div> 
                 <div className="cartInfo">
                    <h3>{c.product.productName}</h3>
                    <p>{c.product.description}</p>
                    <button className="btn btn-warning" onClick={setDecrease}>-</button>
                    <div style={{fontSize:'20px', display:'inline',margin:'5px'}}>{c.quantity}</div>
                    <button className="btn btn-primary" style={{display:'inline'}} onClick={setIncrease}>+</button> 
                    <div>
                    <br></br>
                    <button style={{marginLeft:'10px', marginTop:'0px'}} className="btn btn-danger" onClick={()=>removeCart(c.id)}>Remove</button>
                 </div> 
                 </div>  
                 </div>
              </div>
              
              )
              )
              
            } 
            {carts.length == 0 && 
            <div className="cartTotal"> 
                {totalAmount==0 && <h2  style={{color:'black'}}>The cart is Empty :(  <Link to={"/"} style={{color:'#deece'}}> Add products to cart</Link></h2>}
                {totalAmount!==0 && <h2 style={{color:'black'}}> Items Total : {totalAmount}</h2>}
            </div>
            }
            </div>
    );
}
export default Cart;