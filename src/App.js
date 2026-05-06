import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom'
import Signup from './components/Signup';
import Signin from './components/Signin'
import Getcars from './components/Getcars'
import Addcars from './components/Addcars';
import Mpesapayment from './components/Mpesapayment';
import Footer from './components/Footer';
import Booktestdrive from './components/Booktestdrive';
import { useState} from 'react';



function App() {
  const[open,setOpen]=useState(false);
  return (
    <Router>
    <div className="App">
      <div className='App-header'>
        <h1 className='text-primary'>Welcome to Imani car sales</h1>
    </div><br/>
    <nav className='m-2 navbar navbar-expand-md navbar-light bg-light' >
      
      <button 
      className="navbar-toggler"
      onClick={()=>setOpen(prev=> !prev)} >
        <span 
        className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${open ? "show":""}`}>
        <div className="navbar-nav ms-auto">
      <Link to="/signup" className='text-dark ms-2 nav-link'>Signup</Link> 
      <Link to="/signin" className='text-dark ms-2 nav-link'>Signin</Link>
      <Link to="/addcars" className='text-dark ms-2 nav-link'>AddCar</Link>
      <Link to="/" className='text-dark ms-2 nav-bar brand nav-link'>Get Cars</Link>
      <Link to="/booktestdrive" className='text-dark ms-2 nav-link'>Book Testdrive</Link>
  
    
  
      </div>
      </div>
    </nav>

      {/* Linking routes */}
     
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/' element={<Getcars/>}/>
        <Route path='/addcars' element={<Addcars/> }/>
        <Route path='/makepayment' element={<Mpesapayment/>}/>
        <Route path='/booktestdrive' element={<Booktestdrive/>}/>
      </Routes> <br />
      
      <Footer/>
      
    </div>
    </Router>
  );
}

export default App;
