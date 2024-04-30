import Watch from '../Icons/watch.jpg';
import '../ComponentsCss/Product.css';
import StarRating from './starts.js';
import { useEffect, useState } from 'react';
import WhiteHeart from './Heart.js';
import CopyToClipboardButton from './CopyToClipBoard.js';
import Cart from "../Customer_Components/Cart.js"
import { UseSelector, useSelector } from 'react-redux';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import houseHold from '../Icons/houseHold.jpeg';
import fashion from '../Icons/tshirt.png';
import electronics from '../Icons/electronics.png';
import grocery from '../Icons/grocery.jpeg';
import beauty from '../Icons/beauty.jpeg';
import gaming from '../Icons/gaming.jpg';
import beauty2 from '../Icons/beauty2.jpg';
import { useNavigate } from 'react-router-dom';


const Categories = () =>{
    const categories = [
        {name : "Fashion", image: ""},
        {name : "Electronics", image: ""},
        {name : "Beauty", image: ""},
        {name : "HouseHold", image: ""},
        {name : "Gaming", image: ""},
        {name : "Grocery", image: ""},
    ]

    const[check1, setCheck1] = useState(0);
    const[check2, setCheck2] = useState(0);
    const[check3, setCheck3] = useState(0);
    const[check4, setCheck4] = useState(0);
    const[check5, setCheck5] = useState(0);
    const[check6, setCheck6] = useState(0);
    const navigate = useNavigate();
    
    const [i,setI] = useState(0);

    const hanleOnClick= (id)=>{
        if(id==1){
            setCheck1(1);
        }
        if(id==2){
            setCheck2(1);
        }
        if(id==3){
            setCheck3(1);
        }
        if(id==4){
            setCheck4(1);
        }
        if(id==5){
            setCheck5(1);
        }
        if(id==6){
            setCheck6(1);
        }
    }

    const handleMouseOut =(id) =>{
        if(id==1){
            setCheck1(0);
        }
        if(id==2){
            setCheck2(0);
        }
        if(id==3){
            setCheck3(0);
        }
        if(id==4){
            setCheck4(0);
        }
        if(id==5){
            setCheck5(0);
        }
        if(id==6){
            setCheck6(0);
        }
    }

    const handleOnclcik2 =(id) =>{
        navigate("/Customer/AllProduct?id="+id);
    }

    return(
        <div style={{marginLeft:'50px'}}>
        <div style={{marginTop : '50px',display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width:'1200px', height:'500px'}}>
                <div style={{ width: '23%', marginBottom: '20px', textAlign: 'center' , height:'500px',borderColor:'#002333', borderRadius:'5px', border:'7px solid'}} onMouseOver={()=>hanleOnClick(1)} onMouseOut={()=>handleMouseOut(1)}>
                {check1==0 && <img src={fashion} style={{ width: '100%', borderRadius: '8px' , height:'300px' }} />}
                {check1==1 && 
                    <div style={{marginTop:'50px', marginBottom:'78px'}}>
                        <div style={{marginTop:'30px', backgroundColor:'#deefe7', width:'150px', marginLeft:'60px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(4)}>
                            <h4>Men</h4>
                        </div>
                        <div style={{marginTop:'30px', backgroundColor:'#deefe7', width:'150px', marginLeft:'60px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(5)}>
                        <h4>WoMen</h4>
                        </div>
                        <div style={{marginTop:'30px', backgroundColor:'#deefe7', width:'150px', marginLeft:'60px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(6)}>
                        <h4>Kids</h4>
                        </div>
                    </div>}
                <p style={{ marginTop: '8px', fontSize: '14px', color: '#555' }}><h3>Fashion</h3></p>
                </div>

                <div style={{ width: '23%', marginBottom: '20px', textAlign: 'center' , height:'500px',borderColor:'#002333', borderRadius:'5px', border:'7px solid', marginLeft:'-40px'}} onMouseOver={()=>hanleOnClick(2)} onMouseOut={()=>handleMouseOut(2)}>
                {check2==0 &&  <img src={electronics} style={{ width: '100%', borderRadius: '8px', height:'300px' }} />}
                {check2==1 && 
                    <div style={{marginTop:'30px', marginBottom:'50px'}}>
                        <div style={{marginTop:'30px', backgroundColor:'#deefe7', width:'230px', marginLeft:'14px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(15)}>
                            <h4 style={{marginLeft:'0px'}}>Computer And Laptops</h4>
                        </div>
                        <div style={{marginTop:'10px', backgroundColor:'#deefe7', width:'230px', marginLeft:'14px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(16)}>
                        <h4>Computer Accessories</h4>
                        </div>
                        <div style={{marginTop:'10px', backgroundColor:'#deefe7', width:'230px', marginLeft:'14px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(17)}>
                        <h4>SmartPhone and Accessories</h4>
                        </div>
                        <div style={{marginTop:'10px', backgroundColor:'#deefe7', width:'230px', marginLeft:'14px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(18)}>
                        <h4>Audio & Video</h4>
                        </div>
                        <div style={{marginTop:'10px', backgroundColor:'#deefe7', width:'230px', marginLeft:'14px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(19)}>
                        <h4>Camera</h4>
                        </div>
                    </div>}
                <p style={{ marginTop: '8px', fontSize: '14px', color: '#555' }}><h3>Electronics</h3></p>
                </div>  

                <div style={{ width: '23%', marginBottom: '20px', textAlign: 'center' , height:'500px',borderColor:'#002333', borderRadius:'5px', border:'7px solid', marginLeft:'-40px'}} onMouseOver={()=>hanleOnClick(3)} onMouseOut={()=>handleMouseOut(3)}>
                {check3==0 &&   <img src={beauty2} style={{ width: '100%', borderRadius: '8px', height:'300px' }} />}
                {check3==1 && 
                    <div style={{marginTop:'50px', marginBottom:'78px'}}>
                        <div style={{marginTop:'30px', backgroundColor:'#deefe7', width:'150px', marginLeft:'60px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(20)}>
                            <h4>Skincare</h4>
                        </div>
                        <div style={{marginTop:'30px', backgroundColor:'#deefe7', width:'150px', marginLeft:'60px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(21)}>
                        <h4>Makeup</h4>
                        </div>
                        <div style={{marginTop:'30px', backgroundColor:'#deefe7', width:'150px', marginLeft:'60px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(22)}>
                        <h4>Haircare</h4>
                        </div>
                        <div style={{marginTop:'30px', backgroundColor:'#deefe7', width:'150px', marginLeft:'60px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(23)}>
                        <h4>Men's Grooming</h4>
                        </div>
                    </div>}
                <p style={{ marginTop: '8px', fontSize: '14px', color: '#555' }}><h3>Beauty</h3></p>
                </div>  
        </div>       

         <div style={{marginTop : '50px',display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width:'1200px', height:'550px'}}>
                <div style={{ width: '23%', marginBottom: '20px', textAlign: 'center' , height:'500px',borderColor:'#002333', borderRadius:'5px', border:'7px solid'}} onMouseOver={()=>hanleOnClick(4)} onMouseOut={()=>handleMouseOut(4)}>
                {check4==0 &&   <img src={houseHold} style={{ width: '100%', borderRadius: '8px', height:'300px' }} />}
                {check4==1 && 
                    <div style={{marginTop:'30px', marginBottom:'78px'}}>
                        <div style={{marginTop:'10px', backgroundColor:'#deefe7', width:'150px', marginLeft:'60px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(24)}>
                            <h4>Kitchen and Dining</h4>
                        </div>
                        <div style={{marginTop:'10px', backgroundColor:'#deefe7', width:'150px', marginLeft:'60px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(25)}>
                            <h4>Home Organization</h4>
                        </div>
                        <div style={{marginTop:'10px', backgroundColor:'#deefe7', width:'150px', marginLeft:'60px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(26)}>
                            <h4>Cleaning Supplies</h4>
                        </div>
                        <div style={{marginTop:'10px', backgroundColor:'#deefe7', width:'150px', marginLeft:'60px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(27)}>
                            <h4>Home Decor</h4>
                        </div>
                    </div>}
                <p style={{ marginTop: '8px', fontSize: '14px', color: '#555' }}><h3>HouseHold</h3></p>
                </div>

                <div style={{ width: '23%', marginBottom: '20px', textAlign: 'center' , height:'500px',borderColor:'#002333', borderRadius:'5px', border:'7px solid', marginLeft:'-40px' }} onMouseOver={()=>hanleOnClick(5)} onMouseOut={()=>handleMouseOut(5)}>
                {check5==0 &&   <img src={gaming} style={{ width: '100%', borderRadius: '8px', height:'300px' }} />}
                {check5==1 && 
                    <div style={{marginTop:'30px', marginBottom:'50px'}}>
                        <div style={{marginTop:'10px', backgroundColor:'#deefe7', width:'150px', marginLeft:'60px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(7)}>
                            <h4>Gaming Consoles</h4>
                        </div>
                        <div style={{marginTop:'10px', backgroundColor:'#deefe7', width:'150px', marginLeft:'60px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(8)}>
                            <h4>Video Games</h4>
                        </div>
                        <div style={{marginTop:'10px', backgroundColor:'#deefe7', width:'150px', marginLeft:'60px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(9)}>
                            <h4>Gaming Accessories</h4>
                        </div>
                        <div style={{marginTop:'10px', backgroundColor:'#deefe7', width:'150px', marginLeft:'60px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(10)}>
                            <h4>Gaming PCs and Components</h4>
                        </div>
                    </div>}
                <p style={{ marginTop: '8px', fontSize: '14px', color: '#555' }}><h3>Gaming</h3></p>
                </div>  
                
                <div  style={{ width: '23%', marginBottom: '20px', textAlign: 'center' , height:'500px',borderColor:'#002333', borderRadius:'5px', border:'7px solid', marginLeft:'-40px'}} onMouseOver={()=>hanleOnClick(6)} onMouseOut={()=>handleMouseOut(6)}>
                {check6==0 &&   <img src={grocery} style={{ width: '100%', borderRadius: '8px', height:'300px' }} />}
                {check6==1 && 
                    <div style={{marginTop:'30px', marginBottom:'50px'}}>
                        <div style={{marginTop:'10px', backgroundColor:'#deefe7', width:'150px', marginLeft:'60px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(11)}>
                            <h4>Bakery and Bread</h4>
                        </div>
                        <div style={{marginTop:'10px', backgroundColor:'#deefe7', width:'150px', marginLeft:'60px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(12)}>
                            <h4>Pantry Staples</h4>
                        </div>
                        <div style={{marginTop:'10px', backgroundColor:'#deefe7', width:'150px', marginLeft:'60px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(13)}>
                            <h4>Snacks and Sweets</h4>
                        </div>
                        <div style={{marginTop:'10px', backgroundColor:'#deefe7', width:'150px', marginLeft:'60px', border:'5px solid', borderColor:'#002333', borderRadius:'10px'}} onClick={()=>handleOnclcik2(14)}>
                            <h4>Beverages</h4>
                        </div>
                    </div>}
                <p style={{ marginTop: '8px', fontSize: '14px', color: '#555' }}><h3>Grocery</h3></p>
                </div>  
        </div>      
    </div> 
    )
}

export default Categories;
