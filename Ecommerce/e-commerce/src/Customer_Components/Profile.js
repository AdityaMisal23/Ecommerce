import "../ComponentsCss/Profile.css";
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import profile from '../Icons/profile.jpeg';
import box from '../Icons/box.png';
import user from '../Icons/user.png';
import location from '../Icons/location-pin.png';
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Footer from "./Footer";
import axios from "axios";
import { connect, useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { updateValue } from '../Redux/Actions/actions';
import { useNavigate } from "react-router-dom";


function Profile(){

      const [div1 , setdiv1] = useState(false);
      const [div2 , setdiv2] = useState(false);
      const [div3 , setdiv3] = useState(false);
      const [div4 , setdiv4] = useState(false);

    const id = useSelector(state => state.reducer.id);
    const name = useSelector(state => state.reducer.name);
    const dispatch = useDispatch();


    const [fullname, setName] = useState("");
    const [password, setPass] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const [customerInfo, setCustomerInfo] = useState({});
    const [coins, setcoins] = useState("");
    const [email, setEmail] = useState("");
    const[mobile ,setMobile] = useState("");
    const [image, setImage] = useState("");
    const [currentPass, setCurrentPass] = useState("");
    const [error, setError] = useState("");
    const [fullImage, setFullImage] = useState("");
    const navigate  = useNavigate();

    const updateMyValue=(data)=>{
        dispatch(updateValue(data));
    }
    
    useEffect(() =>{
        var data = {
            id: id,
            name: name
        }
        updateMyValue(data);

        if(id!="" && id!=undefined){
        const getCustomerData = async () =>{
        try{
            const response = await axios.get("http://localhost:7070/Customer/getCustomer", {
                params: {id : id}
              });
              setName(response.data.firstName + " " + response.data.lastName);
              setcoins(response.data.coins);
              setEmail(response.data.email);
              setMobile(response.data.mobile);
              setProfileImage(response.data.customerImage);
            //   console.log(profileImage);

        }
        catch (err){
            throw new Error(err.message);
        }
        }
        getCustomerData();
        }

        
    }, [image])



      const handleProfile= () =>{
        try{

        }
        catch{

        }
      }

      const updateName = async () =>{
        console.log("Hello " + name);
        const data = {
            "name" : fullname,
            "id" : id
        }

        try{

            const response = await axios.post("http://localhost:7070/Customer/UpdateName?name=" + fullname + "&id=" +id);
        }
        catch (err){
            throw new Error(err.message);
        }
      }

      const updatePass = () =>{

    }

    const updateProfile = async() =>{
        console.log(image);
        const data = new FormData();
        data.append("profileImage", image);
        data.append("id", id);
        try{
            const response = await axios.post("http://localhost:7070/Customer/upload",data);
        }
        catch (err) {
            throw new Error(err);
        }
    }

    const handleDiv2 = () =>{
        if(div2 == false){
            setdiv2(true);
            console.log("Hello");
            console.log(div2);
        }
    }
    

    const handleDoneClick = () => {
        console.log('Helooooooooooooo');
        setdiv2(false);
        console.log(div2);
      };


    const handleLogout = () => {
        const data = {
            id : "",
            name : ""
        }
        updateMyValue(data);
        console.log('Logout clicked');
        navigate("/login");
      };

    return(
        
        <div style={{marginLeft:'140px', width:'80vw', marginBottom:'100px'}}>

            
            <div style={{height : '280px', backgroundColor : '#002333', marginTop:'30px' , borderRadius : '15px', display:'flex'}}>
                <span style={{width :"100px", marginLeft:'70px'}}>
                    <img src={`data:image/png;base64,${profileImage}`} style={{height : "200px", width : "200px", borderRadius:'5px'}}/>
                </span>
                <span style={{marginLeft:'200px', marginTop:'30px', width:"700px"}}>
                    <h4 style={{color : 'white'}}>Name : {fullname}</h4>
                    <h4 style={{color : 'white',width:'500px'}}>email : {email}</h4>
                    <h4 style={{color : 'white'}}>mobile : {mobile}</h4>
                    <h4 style={{color : 'white'}}>coins : {coins}</h4>
                    
                </span>
                <span style={{ top: 0, right: 0, marginRight: '30px' }}>
                    <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleLogout}
                    style={{
                        transition: 'background-color 0.3s, color 0.3s', // Adding hover effect
                          }}>
                    Logout
                  </button>
                </span>
            </div>
            <hr></hr>
            <div className="mydiv"
                style={{
                    height: div1 ? '700px' : '190px',
                    backgroundColor: '#deefe7',
                    marginTop: '10px',
                    borderRadius: '15px',
                    transition: 'height 0.5s', // Adding animation effect to height change
                    cursor: 'pointer',
                    }}
                    onClick={()=>{setdiv1(true)}}
                    >
                        <br />
                        {!div1 &&
                        (
                        <center>
                            <img src={box} alt="order box" style={{width:'50px', height:'50px'}}></img>
                            <h3 style={{ marginTop: '10px' }}>Your Orders</h3>
                        </center>
                        )}
            </div>
            <div className="mydiv"
                style={{
                    height: div2 ? '700px' : '190px',
                    backgroundColor: '#deefe7',
                    marginTop: '30px',
                    borderRadius: '15px',
                    transition: 'height 0.5s', // Adding animation effect to height change
                    cursor: 'pointer',
                    }}
                onClick={() => handleDiv2()}
                >
                        <br />
                        {!div2 &&
                        (
                        <center>
                        
                        <img src={user} alt="order box" style={{width:'50px', height:'50px'}}></img>
                            <h3 style={{ marginTop: '10px' }}>Edit Profile</h3>
                        
                        </center>
                        )}

                        {div2 && 
                        (
                            <div style={{marginLeft:'50px'}}>
                                <h3>Enter New name</h3>
                                <input value={fullname} type="text" style={{width:'500px'}} onChange={(e)=>{setName(e.target.value); console.log(name)}}/>
                                <br></br>
                                <button type="button" onClick={updateName}>update your name</button>
                                <br></br>
                                <br></br>
                                <br></br>
                                <h3>Change Password</h3>
                                <input type="text" style={{width:'500px'}}  placeholder="Enter New Password" onChange={(e)=>setPass(e.target.value)}/>
                                <input type="text" style={{width:'500px'}} placeholder="Enter Current Password" onChange={(e)=> setCurrentPass(e.target.value)}/>
                                <div><h5 color="red">{error}</h5> </div>
                                <br></br>
                                <button type="button" onClick={updatePass}>update your Password</button>
                                <br></br>
                                <br></br>
                                <br></br>
                                <h3>Update profile picture</h3>
                                <input  type="file" onChange={(e)=> {setImage(e.target.files[0])}}/>
                                <button type="button" onClick={updateProfile}>upload new Profile image</button>
                                <br></br>
                                <br></br>
                                <br></br>
                                
                                {div2 &&  <button type='button' style={{ backgroundColor: 'green', marginLeft: '530px' }} onClick={handleDoneClick}>Done</button>}
                               
                        
                                
                                
                            </div>  

                        )}
                        
            </div>
            <div className="mydiv"
                style={{
                    height: div3 ? '700px' : '150px',
                    backgroundColor: '#deefe7',
                    marginTop: '30px',
                    borderRadius: '15px',
                    transition: 'height 0.5s', // Adding animation effect to height change
                    cursor: 'pointer',
                    }}
                onClick={() => setdiv3(true)}>
                        <br />
                        {!div3 &&
                        (
                        <center>
                            <img src={location} alt="order box" style={{width:'50px', height:'50px'}}></img>
                            <h3 style={{ marginTop: '10px' }}>Your Addresses</h3>
                        </center>
                        )}

            </div>
            <div className="mydiv"
                style={{
                    height: div4 ? '700px' : '150px',
                    backgroundColor: '#deefe7',
                    marginTop: '30px',
                    borderRadius: '15px',
                    transition: 'height 0.5s', // Adding animation effect to height change
                    cursor: 'pointer',
                    }}
                onClick={() => setdiv4(true)}>
                        <br />
                        {!div4 &&
                        (
                        <center>
                            <h3 style={{ marginTop: '30px' }}>Edit Profile</h3>
                        </center>
                        )
                        }
            </div>
            </div>
    );
}




export default Profile;