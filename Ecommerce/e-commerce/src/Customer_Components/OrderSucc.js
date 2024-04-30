import axios from "axios";
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderSuccess = () =>{

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = params.get('id');

    useEffect(()=>{
        console.log("order succes");
        console.log(id);
        const myFunc = async() =>{
            try{
                const respose = await axios.get("http://localhost:7070/order/AddLive/"+id);
                console.log(respose.data);
                toast.success("Thank ypu for your purchase");
            }
            catch(e){
                console.log("Error adding order as live:", e);
                throw new Error(e);
            }
        }
        myFunc();
    },[]);

    return(
        <div>
            <h4>
                Thank You for your purchase :)
            </h4>
            <h5>
                You can check your orders <Link to={"/Customer/Live"}>here</Link>
            </h5>
        </div>
    );
}

export default OrderSuccess;