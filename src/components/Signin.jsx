import React, { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'


const Signin = () => {
  // Declaring state variables
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")

// status messages
const[loading,setLoading]=useState("")
const[error,setError]=useState("")
const[success,setSuccess]=useState("")

// navigation
const navigate=useNavigate()
// function to submit
const handleSignin=async(e)=>{
  e.preventDefault();
  setLoading("Please wait")

try{
  // retrieving user details
  const formData=new FormData()
  formData.append("email",email)
  formData.append("password",password)

  // adding a base url
  const response=await axios.post("https://imanihyrax.alwaysdata.net/api/signin",formData);
  if(response.data.user){
    setSuccess(response.data.message)
    setLoading("")
    localStorage.setItem("user",JSON.stringify(response.data.user))
    // navigation on successful signin
    navigate("/")
  }
}catch (errror){
  setError(error)

}
}


  return (
    <div className='row justify-content-center'>
      <div className='col-md-6 card shadow m-2 p-4' id='form'>
        <h2>Sign in</h2>
        {/* binding values */}
        <h6>{loading} <br /></h6>
        {error} <br />
        {success}
        <form onSubmit={handleSignin}>
          <fieldset>
            <input type="email"
             placeholder='Enter your Email' 
             className='form-control' 
             onChange={(e)=>setEmail(e.target.value)}
             required/><br/>

            <input type="password" 
            placeholder='Enter your password' 
            className='form-control' 
            onChange={(e)=>setPassword(e.target.value)}
            required/><br />

            <input type="submit" 
            value='Sign in' 
            className='btn btn-primary'/><br/>
            
          </fieldset><br />
          <Link to='/signup'>Dont have an account yet?sign up</Link>

        </form>


      </div>
    </div>
  )
}

export default Signin