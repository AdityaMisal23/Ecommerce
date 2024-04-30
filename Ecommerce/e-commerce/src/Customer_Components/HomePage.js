
import SideBar from "./SideBar";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Offers from "./Offers";
import SimilarProducts from "./SimilarProduct";
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import Categories from "./Categories";


function HomePage(){

    const myState = useSelector((state)=> state.reducer);

    useEffect(()=>{
        console.log(myState);
    },[])

    return (
        <div>
        <NavBar />
        <div style={{display:'flex'}}>
        <SideBar />
        <div>
            <Offers></Offers>
            <Categories></Categories>
        </div>
        </div>
        
        <Footer></Footer>
        </div>

    );
}


export  default HomePage;