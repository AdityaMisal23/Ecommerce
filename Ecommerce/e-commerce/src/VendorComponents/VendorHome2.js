import VNavBar from "../VendorComponents/VendorNavBar"
import Footer from "../Customer_Components/Footer"
import { VendorSidebar } from "./vendorSidebar"
import "../VendorComponentCss/VHome.css";
import Fashion from "../Icons/kidsClothes.jpg"
import AddIcon from "../Icons/add.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const VendorHome2=()=>{
    const navigate = useNavigate();
    const [vendorId , setVendorId] = useState(0);
    const location = useLocation();
    const [response, setResponse] = useState({}); 
    const [items, setItems] = useState([]);
    let num = 1;
  
    const myState = useSelector((state)=> state.reducer);



    useEffect(() => {
        async function handleOnLoad() {
            console.log(myState);
          setVendorId(myState.id);
          try {
            const response = await axios.get("http://localhost:7070/VendorProduct/AllProducts", {
              params: { Vendorid: myState.id }
            });
      
            setItems(response.data);
          } catch (err) {
            throw new Error(err);
          }
        }
      
        handleOnLoad();
      }, []);
      


    const handleOnclick = () =>{
        navigate("/VendorHome/AddProducts");
    }



    

    return (
        <div>
            <VNavBar/>
            <div>
            <div className="container" style={{marginBottom:'500px', marginTop:'100px'}}>
            <div style={{display:'flex'}}>
                <h3 style={{color:'#159a9c', textDecoration:'underline'}}>Your Product History</h3>
                <button onClick={handleOnclick} className="customButton buyNow" style={{marginLeft:'25px'}}>+ Sell More Products</button>
            </div>
                <div>
                    <table className="table table-responsive" style={{backgroundColor:'#002333'}}>
                        <thead style={{color:'white', background:'002333'}}>
                            <tr>
                                <th>
                                    Sr No
                                </th>
                                <th>
                                    Product name
                                </th>
                                <th>
                                    product selling Quantity
                                </th>
                                <th>
                                    Individual price
                                </th>
                                <th>
                                    Total price
                                </th>
                                <th>
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(obj => (
                                <tr>
                                    <td>
                                        {num++}
                                    </td>
                                    <td>
                                        {obj.productName}
                                    </td>
                                    <td>
                                        {obj.quantity}
                                    </td>
                                    <td>
                                        {obj.price}
                                    </td>
                                    <td>
                                        {obj.price * obj.quantity}
                                    </td>
                                    <td>
                                        {obj.dateOfAdding}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
                </div>
            <Footer/>
        
        </div>
    )
}