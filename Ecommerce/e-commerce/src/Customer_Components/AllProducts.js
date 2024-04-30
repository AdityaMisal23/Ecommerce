import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { compose } from "redux";
import "../ComponentsCss/AllProduct.css";
import { toast } from "react-toastify";
import Product from "./Product";

const AllProducts = () =>{
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    const[products , setProducts] = useState([]);
    const navigate = useNavigate();
 
    useEffect(()=>{
        console.log(id);
        const getData = async() =>{
            try{    
                const response = await axios.get(`http://localhost:7070/Product/getCategoryProducts/${id}`); 
                setProducts(response.data);
                console.log(products);
            }   
            catch(e){
                toast.error("Server not responding");
            }
        }

        getData();
    },[])
    
    const handleOnClick = (id) =>{
        navigate("/Customer/Product?id=" + id);
    }


    return(
      
        <div className="meracontainer">
            {products.map((product) => (
                <div className="merasubdiv" onClick={()=> handleOnClick(product.id)}>
                    <div>
                        <img className="meraimg" src={`data:image/png;base64,${product.productImage}`}></img>
                        <div>
                            <h6 className="myh6">{product.productName}</h6>
                        </div> 
                        <div style={{marginLeft:'110px'}}>
                            <h5>Rs. {product.price}</h5>
                        </div> 
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AllProducts;