import React, { useEffect, useState } from 'react'
import axios from 'axios'
import image from '../logo.svg'
import { useNavigate } from 'react-router-dom';
import Mycarousel from './Mycarousel';


const Getcars = () => {

  // Declaring state variables
  const[products,setProducts]=useState([]);
  const[loading,setLoading]=useState("");
  const[error,setError]=useState("");

  // Image url
  const img_url="https://imanihyrax.alwaysdata.net/static/images/"

  // navigation
  const navigate = useNavigate()

  // Functions to call products 
  const getProducts=async()=>{
    setLoading("Please wait as we retrieve products")

    try {
      const response=await axios.get("https://imanihyrax.alwaysdata.net/api/get_product_details")
      setProducts(response.data)
      setLoading("")
    } catch (error) {
      setError(error.message)

    }
  }


  // useEffect to retrieve products automatically
  useEffect(()=>{
    getProducts()
  },[]);
  return (
    <div className='row'>
      <h3>Available products</h3>
      <Mycarousel/>
      {loading}
      {error}
      {/* designing the products card */}

      {/* listing products */}
      {products.map((product)=>(
      <div className='col-md-3 justtify-content-center mb-4' key={product.product_id}>
        <div className='card shadow card-margin'>
          <img className='mt-2 product_img' src={img_url + product.product_photo} alt={product.product_photo} />
          {/* The product details */}
          <div className='card-body'>
            <h5 className='mt-2'>{product.product_name}</h5>
            <p className='text-muted'>{product.product_description}</p>
            <b className='text-warning'>${product.product_cost}</b><br />
            <button className='btn btn-dark mt-2 w-100' 
            onClick={()=>navigate("/makepayment",{state:{product}})}>Purchase now</button>
          </div>
        </div>
      </div>
     ) )}
    </div>
  )
}

export default Getcars