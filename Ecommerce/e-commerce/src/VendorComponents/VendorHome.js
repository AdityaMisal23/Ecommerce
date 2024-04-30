import VNavBar from "../VendorComponents/VendorNavBar"
import Footer from "../Customer_Components/Footer"
import { VendorSidebar } from "./vendorSidebar"
import "../VendorComponentCss/VHome.css";
import Fashion from "../Icons/kidsClothes.jpg"
import AddIcon from "../Icons/add.png"

export const VendorHome=()=>{
    const categories = [
        {id:1,img: Fashion, name: 'Clothes'},
        {id:2,img: Fashion, name: 'Beauty'},
        {id:3,img: Fashion, name: 'Accessories'},
        {id:4,img: Fashion, name: 'Electronics'},
        {id:5,img: Fashion, name: 'Home Appliances'},
        {id:6,img: Fashion, name: 'category'},
        {id:7,img: Fashion, name: 'category'},
    ]
    return (
        <div>
            <VNavBar/>
            <div style={{display:'flex'}} className="main">
            <div className="vendorHome">
                {categories.map((category)=>(
                    <div id={category.id} className="media-element" onClick={{}}>
                        <img src={category.img} alt="Fashion Category" className="categories"></img>
                        <h3 className="categories-text">{category.name}</h3>
                    </div>
                ))}
                <div className="vendorHome">
                    <img src={AddIcon} className="categories"/>
                </div>
                </div>
                <VendorSidebar/>
                </div>
            <Footer/>
        </div>
    )
}