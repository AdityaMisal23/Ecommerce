import axios from "axios";
import { useEffect } from "react"
import { useSelector } from "react-redux"

const OrderSuccessFul = () =>{

    const mystate = useSelector((state)=> state.reducer);

    useEffect(()=>{
        const getData = async () =>{
            try{
                console.log("chal ja bhaii");
                const response = await axios.get("http://localhost:7070/order/AddLive/"+mystate.id);
                console.log("hello");
            }
            catch(err){
                // throw new Error(err);
            }
        }

        getData();
    },[]);


    return(
        <div>

        </div>
    )
}

export default OrderSuccessFul