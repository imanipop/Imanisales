import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'




const Signup = () => {
  // declaring state variables
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[password,setPassword]=useState("")
// status messages
const[loading,setLoading]=useState("")
const[error,setError]=useState("")
const[success,setSuccess]=useState("")
// function to submit
const handleSubmit=async(e)=>{
  e.preventDefault();
  setLoading("please wait...")

try {
  // retrieving user details
  const formData=new FormData();
  formData.append("username",username)
  formData.append("email",email)
  formData.append("phone",phone)
  formData.append("password",password)

  // adding base url
  const response = await axios.post("https://imanihyrax.alwaysdata.net/api/signup",formData);
  setSuccess(response.data.success)
} catch (error) {
  setError(error)
}}
  return (
    <div className='row justify-content-center'>


      <div className='col-md-6 card shadow m-2 p-4'>
        <h2 className='fw-bold text-primary'>Create Account</h2>
        <p className='text-muted'>Join Imani Car Sales today</p>
        {/* Binding values from form */}
        <h6 id='loadbutton'>{loading}</h6><br/>
        {error}<br/>
        {success}<br/>
        <fieldset>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          placeholder='Enter username' 
          className='form-control'
          onChange={(e)=>setUsername(e.target.value)} 
          required /> <br />

          <input type="email" 
          placeholder='Enter your email' 
          className='form-control'
          onChange={(e)=>setEmail(e.target.value)} 
          required/> <br />

          <input type="tel" 
          placeholder='Enter your phone number' 
          className='form-control' 
          onChange={(e)=>setPhone(e.target.value)} 
          required/> <br />

          <input type="password" 
          placeholder='Enter your password' 
          className='form-control'
          onChange={(e)=>setPassword(e.target.value)} 
          required/> <br />

          <input type="submit" value='Signup' className='btn btn-primary'/>
        </form>
        </fieldset>
        {/* incase someone already has an account */}
        <p className='mb-0 text-muted'>Already have account? </p>
          <Link to='/signin' className='text-primary fw-semibold text-decoration-none'>signin</Link>
         
      </div>
     
           
    </div>
  )
}

export default Signup