import axios from 'axios';
import '../ComponentsCss/Register.css';
import { useNavigate } from 'react-router-dom';
import React , { useState } from 'react';
import { Link } from 'react-router-dom';


function Register(){

  let [isChecked,setChecked] = useState(false);

  let [height,setHeight] = useState('110vh');

  let [additionalFields, setAdditionalFields] = useState([]);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [fullAddres, setFullAdd] = useState("");
  const [conformPassword, setConform] = useState("");

  const [shopName, setShopName] = useState("");
  const [adharNumber, setAdhar] = useState("");
  const [gstNumber, setGst] = useState("");
  const [homeAdrress, setHome] = useState({city: "", state: "", pincode : "", fullAddress : "", type: false})
  const [shopAddress, setShop] = useState({city: "", state: "", pincode : "", fullAddress :"", type: true});


  const handleSignUp = async ()=>{
      if(!isChecked){
        const data = {
                        "email" : email,
                        "password" : password,
                        "firstName" : firstName,
                        "lastName" : lastName,
                        "mobileNumber" : mobileNumber,
                        "homeAddress" : homeAdrress 
                      }
        try{
          const response = await axios.post("http://localhost:7070/Customer/SignUp", data);
        }
        catch(err){
          console.log(err);
        }
      }
      if(isChecked){
        // console.log("fghjcfvghjkcvbhnjmk,cvbnm,cvbnmklcvfghjklvgbhjklcvbnjmklfghjklfvgbhjk")
        const data = {
                      "email" : email,
                      "password" : password,
                      "firstName" : firstName,
                      "lastName" : lastName,
                      "mobileNumber" : mobileNumber,
                      "shopName" : shopName,
                      "adharNumber" : adharNumber,
                      "gstNumber" : gstNumber,
                      "homeAddress" : homeAdrress,
                      "shopAddress" : shopAddress
                    }
        console.log("data: "+ shopName);
        try {
          const response = await axios.post("http://localhost:7070/Vendor/SignUp", data);
          console.log("Signup successful:", response.data);
        } catch (err) {
          // console.log("Signup failed:", err.response.data || err.message);
          console.log("hello");
          throw new Error(err);
        }
      }

      navigate("/Login");
      
  }


  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    if (!isChecked) {
      setHeight('170vh');
      setAdditionalFields([
        <>

      <div className="form-row">
      <div className="form-group col-md-6">
        <label for="inputShopName">Shop Name</label>
        <input type="text" className="form-control" id="inputShopName" placeholder="Puma" onChange={(e)=>{setShopName(e.target.value)}}/>
      </div>

      <div className="form-group col-md-6">
        <label for="inputShopName">Adhar Number</label>
        <input type="number" className="form-control" id="inputAdharNumber" placeholder="1234 2345 3456" onChange={(e)=>{setAdhar(e.target.value)}}/>
      </div>
      
      </div>

      <div className="form-row">
      <div className="form-group col-md-6">
        <label for="inputGST">GST Number</label>
        <input type="number" className="form-control" id="inputGST" placeholder="54482154" onChange={(e)=>{setGst(e.target.value)}}/>
      </div>

      <div className="form-group col-md-6">
        <label for="inputShopMobile">Mobile</label>
        <input type="number" className="form-control" id="inputShopMobile" placeholder="548789898" />
      </div>

      </div>


      <div className="form-row">
  <div className="form-group col-md-6">
    <label for="inputCity">City</label>
    <input type="text" className="form-control" id="inputCity" onChange={(e)=>{shopAddress.city=e.target.value}}/>
  </div>
  <div className="form-group col-md-4">
    <label for="inputState">State</label>
    <select id="inputState" className="form-control" onChange={(e)=>{shopAddress.state=e.target.value}}>
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="form-group col-md-2">
    <label for="inputZip">Zip</label>
    <input type="text" className="form-control" id="inputZip" onChange={(e)=>{shopAddress.pincode=e.target.value}}/>
  </div>
</div> 

      <div className="form-group">
        <label for="inputShopAddress">Shop Address</label>
        <input type="text" className="form-control" id="inputShopAddress" placeholder="1235 Vancouver " onChange={(e)=>{shopAddress.fullAddress=e.target.value}}/>
      </div>
     
    
    
      </> 
      ]);
    } else {
      setAdditionalFields([]);
      setHeight('110vh');
    }
  };

    return(   

<div className='bodyclass' style={{ height: height }}>
<div className="container card p-3 mt-4">
<form>
<h1 style={{textAlign:'center'}}>Register</h1>
<br></br>

<div className="form-row">
<div className="form-group col-md-6">
  <label for="inputFirstName">First Name</label>
  <input type="text" className="form-control" id="inputFirstName" placeholder="Arya" onChange={(e)=>{setFirstName(e.target.value)}}/>
</div>

<div className="form-group col-md-6">
  <label for="inputLastName">Last Name</label>
  <input type="text" className="form-control" id="inputLastName" placeholder="Stark" onChange={(e)=>{setLastName(e.target.value)}}/>
</div>
</div>

<div className="form-row">
<div className="form-group col-md-6">
    <label for="inputEmail">Email</label>
    <input type="email" className="form-control" id="inputEmail" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
  </div>

  <div className="form-group col-md-6">
    <label for="inputMobile">Mobile</label>
    <input type="number" className="form-control" id="inputMobile" placeholder="9876543210" onChange={(e)=>{setMobile(e.target.value)}}/>
  </div>


</div>  

<div className="form-row">
  
  <div className="form-group col-md-6">
    <label for="inputPassword">Password</label>
    <input type="password" className="form-control" id="inputPassword" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
  </div>

  <div className="form-group col-md-6">
    <label for="inputConfirmPassword">Confirm Password</label>
    <input type="password" className="form-control" id="inputConfirmPassword" placeholder="Confirm Password" onChange={(e)=>{setConform(e.target.value)}}/>
  </div>
</div>

<div className="form-row">
  <div className="form-group col-md-6">
    <label for="inputCity">City</label>
    <input type="text" className="form-control" id="inputCity" onChange={(e)=>{homeAdrress.city = e.target.value}}/>
  </div>
  <div className="form-group col-md-4">
    <label for="inputState">State</label>
    <select id="inputState" className="form-control" onChange={(e)=>{homeAdrress.state = e.target.value}}>
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="form-group col-md-2">
    <label for="inputZip">Zip</label>
    <input type="text" className="form-control" id="inputZip" onChange={(e)=>{homeAdrress.pincode = e.target.value}} />
  </div>
</div>

<div className="form-group">
  <label for="inputHomeAddress">Home Address</label>
  <input type="text" className="form-control" id="inputHomeAddress" placeholder="1234 Main St" onChange={(e)=>{homeAdrress.fullAddress = e.target.value}}/>
</div>


<div className="form-group">
  <div className="form-check">
    <input className="form-check-input" type="checkbox" id="gridCheck"  onChange={handleCheckboxChange}/>
    <label className="form-check-label" for="gridCheck">
      Register as a Seller
    </label>
  </div>
</div>


<div>
      {isChecked && additionalFields.map(field => field)}
</div>


<button type="submit" className="btn btn-primary" onClick={handleSignUp}>Sign Up</button>
<p className='loginbtn'>Already Have an Account?  <Link to="/Login">Login</Link> </p> 

     
    




</form>
</div>
</div>



       
    );
}

export default Register;