import { useState } from "react";
import '../ComponentsCss/JoinExclusive.css'
import { toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';

function JoinEx(){
    const [exclusive , setExclusive] =  useState(false);
    const [supers , setSupers] =  useState(false);
    const mystate = useSelector((state)=>state.reducer);

    const HandleOnclick1 = async () =>{
        try{
            const response = await axios.put("http://localhost:7070/Customer/JoinExclusive/1/"+mystate.id);
            console.log(response.data);
            toast.success("Great, Now you are Exclusive Member");
        }
        catch(e){
            toast.error("Server is not responding");
            // throw new Error(e);
        }
    }
    const HandleOnclick2 = async() =>{
        try{
            const response = await axios.put("http://localhost:7070/Customer/JoinExclusive/2/"+mystate.id);
            console.log(response.data);
            toast.success("Great, Now you are Exclusive Member");
        }
        catch(e){
            toast.error("Server is not responding");
            // throw new Error(e);
        }
    }


    return (
        <div style={{display:'flex', marginTop:'50px'}}>
            <span style={{width:'300px', height:'500px', backgroundColor:'#002333', marginLeft:'320px', marginRight:'10px', marginTop:'25px'}}>
                <h2>
                    Basic Plan
                </h2>
                <hr></hr>
                <h5>
                    - 1 day delivery
                    <br></br>
                    - Additional points on each order
                    <br></br>
                    - gwt goodies
                    <br></br>
                </h5>
                <button className="customButton buyNow" style={{marginTop:'200px'}} onClick={HandleOnclick2}>Rs 499/month</button>
            </span>
            <span style={{width:'330px', height:'530px',backgroundColor:'#002333', marginLeft:'40px'}} >
                <h2 style={{marginLeft:'45px'}}>
                    Exclusive plan
                </h2>
                <hr></hr>
                <h5>
                    - 1 day delivery
                    <br></br>
                    - Additional points on each order
                    <br></br>
                    - gwt goodies
                    <br></br>
                    - Additional offers in each product
                    <br></br>
                </h5>
                <button style={{marginTop:'150px'}} className="customButton buyNow" onClick={HandleOnclick2} >Rs 799/month</button>
            </span>


        </div>
    );
}

export default JoinEx;