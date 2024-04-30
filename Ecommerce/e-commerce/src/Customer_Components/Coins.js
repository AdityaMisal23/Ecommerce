import { useState } from "react";
import { useSelector } from "react-redux";
import coi from "../Icons/dollar (1).png";

const Coins = () =>{
    const mystate = useSelector((state)=> state.reducer);
    const [coins ,setCoins] = useState(0);
    return(
        <div style={{marginBottom:'300px', marginLeft:'20px'}}>
            <h3>Hello, {mystate.name}</h3>
            <h4>You have {coins} Horizon coins in you Account</h4>
            <hr></hr>
            <br></br>
            <br></br>
            <h3 style={{marginTop:'60px'}}>What are horizon coins?</h3>
            <p>
                On each purchase you can get some coins as reward.
            </p>

            <p>
                These coins can be used on next purchase to get a discount.
            </p>
            <div style={{backgroundColor:'#deece7', width:'400px', border:'3px solid', borderRadius:'7px', borderColor:'#002333'}}>
                <h4 style={{marginLeft:'20px'}}>10 Horizon coin <img style={{width:'20px', height:'20px', marginTop:'-3px'}} src={coi}></img> = 5 Rs. </h4>
            </div>
        </div>
    );
}

export default Coins;