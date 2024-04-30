import '../ComponentsCss/LoginMain.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import shoppingImag from '../Icons/shopping2.jpeg';
import { useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import instagram from   '../Icons/instagram.png';
import facebook from   '../Icons/facebook.png';
import gmail from   '../Icons/gmail.png';
import { updateValue } from '../Redux/Actions/actions';
import { connect, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { UseSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function L(update_values){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginAs, setLoginAs] = useState('customer'); // Default value is 'customer'
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const [path,setPath] =  useState(location.state?.paths || '/');
    const dispatch = useDispatch();
    const myState = useSelector((state)=> state.reducer);

    const updateMyValue = (value) =>{
        dispatch(updateValue(value));
    }


    const handleLogin = () => {
        // Simple form validation
        if (!username || !password || !loginAs) {
            notifyEmpty();
        return;
        }
        setError('');
        if(loginAs === "customer"){
            customerLogin();
        }
        else{
            vendorLogin();
        }

    };

    const notifyEmpty = () =>{
        toast.error("Please enter both username, password, and select a login type.");
    }

    async function vendorLogin(){
        const email ={
            "email" : username,
            "password" : password
        };
        try{
        const response = await axios.get("http://localhost:7070/Vendor/Login", {
            params: email
          });
          console.log(response.data.id);
          if(response.data.status == true){
            const data = {
                id : response.data.id,
                name : response.data.name
            }
            console.log(data);
            updateMyValue(data)
            // update_values(value);
            navigate("/VendorHome2");
            notify(2,3);
          }
          else{
            notify(3,2);
          }
          

        }
        catch(e){
            notifyErr();
        }
        
    }


    const notifyErr = () => {
        toast.error("Something went wrong");
    }




    async function customerLogin(){
        const email ={
            "email" : username,
            "password" : password
        };
        try{
        const response = await axios.get("http://localhost:7070/Customer/Login", {
            params: email
          });
          if(response.data.status == true){
            if(loginAs=='customer'){
                var data = {
                    id: response.data.id,
                    name: response.data.name
                }
                
                updateMyValue(data);
                notify(1,3);
                navigate("/");

            }
            else{
                notify(3,1);
            }
          }
        }
        catch(e){
            notifyErr();
            
        }

        
    }

    const notify = ( a, b) =>{
        if(a==1){
            toast.success("Customer Login Success");
        }
        if(a==2){
            toast.success("Vendor login success");
        }
        if(b==1){
            toast.error("Customer : Wrong email or password");
        }
        if(b==2){
            toast.error("Vendor : Wrong email or password");
        }
    }

    return(
        <div className="full-container">
            <div className='inner-container'>
                
                <div className='image-container'>
                    <img src={shoppingImag}></img>
                </div>

                
                <div className="login-container">
                <h2 style={{color:'#002333', textDecoration:'underline', marginLeft:'140px'}}>Login</h2>
                <form>
                    <label>
                    <h4 style={{marginBottom:'0px'}}>
                    Username:
                    </h4>
                    <br></br>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    </label>
                    <label>
                    <h4 style={{marginBottom:'0px'}}>
                    Password:
                    </h4>
                    <br></br>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </label>
                    <label>
                    <h4 style={{marginBottom:'0px'}}>
                    Login As:
                    </h4>
                    <br></br>
                    <select
                        value={loginAs}
                        onChange={(e) => setLoginAs(e.target.value)}
                        style={{marginBottom:'32px'}}
                    >
                        <option value="customer">Customer</option>
                        <option value="seller">Seller</option>
                    </select>
                    </label>
                    {error && <p className="error-message">{error}</p>}
                    <button type="button" onClick={handleLogin}>
                    Login
                    </button>
                    <p className="sign-up-link" style={{marginTop:'14px'}}>
                    Don't have an account? <a href="/SignUp">Sign Up</a>
                    </p>
                     <a href="/" style={{marginLeft:'87px', marginTop:'-10px'}}>Continue Without Login?</a>

                    <div style={{marginTop:'80px',display:'flex'}}>
                        <img src={facebook} style={{width:'25px', height:'25px', marginLeft:'250px'}}></img>
                        <img src={instagram} style={{width:'25px', height:'25px',marginLeft:'20px'}}></img>
                        <img src={gmail} style={{width:'25px', height:'25px', marginLeft:'20px'}}></img>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
}

const mapStatesToProps = (state)=>({})

const mapDispatchToProps = (dispatch)=>({
    update_values : (value)=>{dispatch(updateValue(value))}
})



export default connect(mapStatesToProps,mapDispatchToProps) (L);