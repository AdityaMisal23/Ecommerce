import Watch from '../Icons/watch.jpg';
import '../ComponentsCss/pendingorder.css';
import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';
import SideBar from './SideBar';
import { compose } from 'redux';
import { useNavigate } from 'react-router-dom';


function Success(){
    const mystate = useSelector((state)=>state.reducer);
    const[cart, setCart] = useState([])
    const[exclusive, setExclusive] = useState(0);
    const[myobj, setMyObj] = useState({});
    const navigate = useNavigate();
    const [check ,setcheck] =useState(0);


    useEffect(() => {
        const getCartData = async () => {
            try {
                
                const exclusiveResponse = await axios.get("http://localhost:7070/Customer/IsExclusive/" + mystate.id);
                console.log(exclusiveResponse.data.name);
                // setDiscount(exclusiveResponse.data.name, () => {
                    
                //   });
                if (exclusiveResponse.data.name === "1") {
                    setExclusive(10);
                }
                if (exclusiveResponse.data.name === "2") {
                    setExclusive(20);
                }

                const cartResponse = await axios.get("http://localhost:7070/Cart/GetData/" + mystate.id);
                console.log(cartResponse.data);
                setCart(cartResponse.data);


                const reducedValue = cart.reduce((accumulator, currentValue) => {
                    // Perform your reduction logic here
                    
                    return accumulator + ((currentValue.product.price*currentValue.quantity)*((100-currentValue.product.offers)/100)*((100-exclusive)/100)) 
                  }, 0);
                
                const d = {
                    total : reducedValue
                }
                setMyObj(d);
                console.log(myobj);

                if(check<1){
                    setcheck(check+1);
                }
    

               
            } catch (err) {
                console.error(err);
            }
        };

        getCartData();
    }, [check]);


    const handleBuyNow = () =>{
        navigate("/Customer/OrderSuccessful");
    }

    return (
        <div className="container" style={{marginBottom:'300px'}}>
            <table className="table table-striped" style={{ backgroundColor: '#002333', color: '#deefe7' }}>
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product quantity</th>
                        <th scope="col">Product price</th>
                        <th scope="col">Product discount</th>
                        <th scope="col">Additional discount (if exclusive)</th>
                        <th scope="col">Total for product</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((c, index) => (
                        <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#deefe7' : '#002333', color: index % 2 === 0 ? '#002333' : '#deefe7' }}>
                            <td>{c.product.productName}</td>
                            <td>{c.quantity}</td>
                            <td>{c.product.price}/-</td>
                            <td>{c.product.offers}%</td>
                            <td>
                                {exclusive}%
                            </td>
                            <td>
                                {((c.product.price*c.quantity)*((100-c.product.offers)/100)*((100-exclusive)/100)).toFixed(2)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{marginTop:'60px'}}>
                        <h3>
                        Your Order Total is : {myobj.total}
                        </h3>
            </div>
            <div style={{marginTop:'20px'}}>
                <button className='btn btn-success' type='button' onClick={handleBuyNow}>Buy Now</button>
            </div>
        </div>
    );
};

export default Success;