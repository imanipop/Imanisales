import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios, { Axios } from 'axios'




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
        <h2>Sign up</h2>
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
          <Link to='/signin'>Already have account?signin</Link>
      </div>
     
           
    </div>
  )
}

export default Signup