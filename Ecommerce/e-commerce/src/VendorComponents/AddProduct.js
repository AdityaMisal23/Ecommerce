import VendorNavBar from './VendorNavBar'
import { VendorSidebar } from './vendorSidebar'
import Footer from '../Customer_Components/Footer.js'
import '../VendorComponentCss/AddProduct.css'
import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddProduct=()=>{
    const [selectedCategory,setSelectedCategory]=useState("");
    const [quantity,setQuantity] = useState("0");
    const [pricePerProduct,setPricePerProduct] = useState("0");
    const [productType, setProductType] = useState("");
    const totalPrice = Number(quantity)*Number(pricePerProduct);
    const [productName, setProductName] = useState("");
    const [productBrand, setProductBrand] = useState("");
    const [categoryId , setCategoryId] = useState(0);
    const [category , setCategory] = useState([]);
    const [subcategory, setSubcategory] = useState([]);
    const location = useLocation();
    const receivedData = location.state;
    const [subcategoryId , setSubcategoryId] = useState("");
    const [description , setDescription] = useState("");
    const [date , setDate] = useState("");
    const navigate = useNavigate();
    const [productImage , setProductImage] = useState("");
    const myState = useSelector((state)=> state.myReducer);




    useEffect(() => {
        const getCategories = async () => {
          try {
            console.log("hello......");
            const response = await axios.get("http://localhost:7070/Category/AllCategories");
            setCategory(response.data);
          } catch (error) {
            throw new Error(error);
          }
        }
        getCategories();
      }, []);
      
      const getSubCategories = async (categoryId) => { 
        try {
          console.log("inside method :"+ categoryId);
          const response = await axios.get("http://localhost:7070/SubCategory/GetOneCategory", {
            params: { "categoryId": categoryId }
          });
          setSubcategory(response.data);
        } 
        catch (error) {
          throw new Error(error);
        }
      }

    const notifySuc = ()=>{
        toast.success('Product Added Successfully');
    }

    const notifyFail = ()=>{
        toast.error('Something went wrong');
    }

    const handleOnSubmit  = async(e) => {
        e.preventDefault();

        console.log("hello");
        console.log(productImage);
        const formData = new FormData();
        formData.append("productName" , productName );
        formData.append("rating" , 0 );
        formData.append("description" , description, );
        formData.append("stock" , quantity );
        formData.append("brand" , productBrand );
        formData.append("price" , pricePerProduct );
        formData.append("productType" ,productType );
        formData.append("subCategoryId" , subcategoryId);
        formData.append("productImage", productImage);
        console.log(subcategoryId);
    
        try{
            const response = await axios.post("http://localhost:7070/Product/AddProduct", formData);
            console.log(response.data);
            if(response.data==true){
                setProductName("");
                setDescription("");
                setProductBrand("");
                setPricePerProduct(0);
                setProductType("");
                setSubcategoryId("");
                setSubcategory([]);
                setCategoryId("");
                setProductImage("");
                notifySuc();
            }
            
        }
        catch(err){
            notifyFail();
        }
    
    }


      




    return (
        <div className="fullContainer">
            <VendorNavBar/>
            <div style={{display:'flex'}}>
            <div className="addProduct">
                <form className='media-form' onSubmit={handleOnSubmit}>
                <h1 style={{textAlign:'center', color:'white',textDecoration:'underline'}}>Add Product</h1>
                    <br></br>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="productName">Product Name</label>
                            <input type="text" value={productName} className="form-control" id="productName" placeholder="Jeans" onChange={(e)=>{setProductName(e.target.value)}}/>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="brandName">Brand Name</label>
                            <input type="text" value={productBrand} className="form-control" id="brandName" placeholder="flying machine" onChange={(e)=>{setProductBrand(e.target.value)}}/>
                        </div>

                        </div>
                        
                        <div className='form-row'>
                        <div className="form-group col-md-4">
                            <label for="brandName">Category</label>
                            <select onChange={(e) => { getSubCategories(e.target.value); setCategoryId(e.target.value)}}>
                                <option value="0">--Select--</option>
                                {category.map(cat => (
                                    <option key={cat.id} value={cat.id}>
                                    {cat.categoryName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        </div>

                        <div className='form-row'>
                        <div className="form-group col-md-4">
                            <label for="brandName">Sub-Category</label>
                            <select onChange={(e)=>{setSubcategoryId(e.target.value)}}>
                                <option value="1">--Select--</option>
                                {subcategory.map(cat=><option key={cat.id} value={cat.id}>{cat.subCategoryName}</option>)}
                            </select> 
                        </div>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="brandName">Product Type</label>
                            <input type="text" value={productType} className="form-control" id="productType" placeholder="shirt/laptop/rc-car" onChange={(e)=>{setProductType(e.target.value)}}/>
                        </div>

                        <div className="form-row">
                        <div className="form-group col-md-2">
                            <label for="productQuantity">Product Quantity</label>
                            <input type="number" value={quantity} className="form-control" id="productQuantity" onChange={(e)=>setQuantity(e.target.value)} />
                        </div>

                        <div className="form-group col-md-3">
                            <label for="productPrice">Unit Price (Rs.)</label>
                            <input type="number" value={pricePerProduct} className="form-control" id="productPrice" onChange={(e)=>setPricePerProduct(e.target.value)} placeholder='Rs.' />
                        </div>

                        </div>
                        <div className="form-row">
                        <div className="form-group col-md-5">
                            <label for="totalPrice">Total Price (Rs.)</label>
                            <input type="text" className="form-control" id="totalPrice" value={totalPrice}  readOnly></input>
                        </div>

                        </div>
                    <label for='description'>Description</label>
                    <textarea type='text' value={description} id='description' placeholder='full description of product' onChange={(e)=>{setDescription(e.target.value)}}/>
                        <br></br>

                    <div className='form-row'>
                        <div className='form-group col-md-6'>
                                <div>
                                <label for="productImage">Product Image</label>
                                <input  type="file"  onChange={(e)=> {setProductImage(e.target.files[0])}}/>
            
                                </div>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-group col-md-2'>
                            <button type='submit' className='btn btn-success'  >Add product </button>
                        </div>
                    </div>
                </form>
            </div>
            <VendorSidebar/>
            </div> 
            <Footer/>
        </div>
    )
}