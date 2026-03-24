import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Addcars = () => {
  // declaring state variables
  const[product_name,setProductName]=useState("")
  const[product_description,setProductDescription]=useState("")
  const[product_cost,setProductCost]=useState("")
  const[product_photo,setProductPhoto]=useState("")

  // status messages
  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[success,setSuccess]=useState("")

  // function add products to database
  const handleSubmit=async (e)=>{
    e.preventDefault()
    setLoading("Please wait...")
    try {
      // retrieving product details
      const formData=new FormData();
      formData.append("product_name",product_name)
      formData.append("product_description",product_description)
      formData.append("product_cost",product_cost)
      formData.append("product_photo",product_photo)

      // Adding base url to post data
  const response=await axios.post("https://imanihyrax.alwaysdata.net/api/add_product",formData);
  setLoading("")
  setSuccess(response.data.success)  
    } catch (error) {
      setError(error.message)
    }
  }


  return (
    <div className='row justify-content-center'>
      <div className='col-md-6 card shadow m-2 p-4'>
        <h2>Have any car for sale?add here</h2>
         {/* binding variables */}
         <h6 id='loadbutton'>{loading}</h6>
        {error}
        <h6 id='loadbutton'>{success}</h6>
        <nav>
          <Link to="/" className='btn btn-dark'>Get all products</Link> <br /> <br />
        </nav>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <input type="text" 
            placeholder='Enter car Make' 
            className='form-control'
            onChange={(e)=>setProductName(e.target.value)}
            required /><br />

            <textarea name="" 
            id="" className='form-control' 
            placeholder='Car specs'
            onChange={(e)=>setProductDescription(e.target.value)}
            required></textarea><br />

            <input type="number" 
            placeholder='Enter car cost' 
            className='form-control'
            onChange={(e)=>setProductCost(e.target.value)}
            required/><br />

            <input type="file" 
            className='form-control'
            onChange={(e)=>setProductPhoto(e.target.files[0])}
            required/> <br />

            <input type="submit" 
            value='Add product' 
            className='btn btn-primary'/> <br /><br />

            <input type="reset"
             className='btn btn-danger' />

          </fieldset>
        </form>

      </div>

    </div>
  )
}

export default Addcars