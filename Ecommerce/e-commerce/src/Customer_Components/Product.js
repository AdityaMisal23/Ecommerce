import Watch from '../Icons/watch.jpg';
import '../ComponentsCss/Product.css';
import StarRating from './starts.js';
import { useEffect, useState } from 'react';
import WhiteHeart from './Heart.js';
import CopyToClipboardButton from './CopyToClipBoard.js';
import Cart from "../Customer_Components/Cart.js"
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Product() {

    const [productName, setProductName] = useState('Dummy product');
    const [productDesc, setProductDesc] = useState('This is dummy info about product');
    const [productRating, setProductRating] = useState(3);
    const [amount,setAmount] = useState(1);
    const myState = useSelector((state)=> state.reducer);
    const [myProdct, setMyProduct] = useState({});
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = params.get('id');

    // setProductDesc('This dummy info');
    const setDecrease =()=>{
        if(amount>0){
            setAmount(amount-1);
        }
    }

    const setIncrease =()=>{
        setAmount(amount+1);
    }

    useEffect(()=>{
        console.log("hii");
        const getProductData  = async() =>{
            console.log("mystate "+ myState);
            try{
                const response = await axios.get(`http://localhost:7070/Product/getProduct/${id}`);
                console.log(response.data);
                setMyProduct(response.data);
            }
            catch(e){
                throw new Error(e);
            }
            }
            getProductData();
    },[])
    

    const handleAddToCart = async () =>{
        try{
            console.log("pid "+ id);
            console.log("cid "+ myState.id);
            const data = {
                pId : id,
                cId : myState.id,
                quantity : amount
            }
            const queryString = new URLSearchParams(data).toString();
            const url = `http://localhost:7070/Cart/AddData?${queryString}`     
            const response = await axios.post(url);
        }
        catch(e){
            throw new Error(e);
        }
    }
   

    return (
        <div style={{display:'flex'}}>
            {console.log("Ho ja mere bhaii")};
            <div id="image" style={{ width: '30%', marginLeft:'25px' }}>
            <img src={`data:image/png;base64,${myProdct.productImage}`}  style={{ width: '550px', height: '550px' }} alt="Watch" />
            </div>
            <div>
            <div style={{marginLeft:'170px', marginTop:'20px'}}>
                <WhiteHeart></WhiteHeart>
            </div>
            <div style={{marginLeft:'170px', marginTop:'0px'}}>
                <CopyToClipboardButton></CopyToClipboardButton>
            </div>
            </div>
            <div id="description" style={{ marginLeft: '80px', marginTop:'15px'}}>
                <div>
                    <h1 style={{color:'#002333'}} >{myProdct.productName}</h1>
                    <h3 style={{color:'#002333'}}>{myProdct.description}</h3>
                    <h5 style={{color:'#002333'}}>
                        
                    </h5>
                </div>
                <div>
                    <StarRating rating={productRating}></StarRating>
                </div>

                <div style={{marginTop:'50px'}}>
                <button className="btn btn-warning" onClick={setDecrease}>-</button>
                <div style={{fontSize:'20px', display:'inline',margin:'5px'}}>{amount}</div>
                <button className="btn btn-primary" style={{display:'inline',marginLeft:'2px'}}  onClick={setIncrease}>+</button>
                </div>


                <div className="buttonContainer">
                    <button className="customButton addToCart" onClick={handleAddToCart}>Add to Cart</button>
                    <button style={{marginLeft:'10px'}}  className="customButton buyNow">Buy Now</button>
                </div>
            </div>

            
        </div>
    )
}

export default Product;