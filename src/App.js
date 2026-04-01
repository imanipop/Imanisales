import logo from './logo.svg';
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



function App() {
  return (
    <Router>
    <div className="App">
      <div className='App-header'>
        <h1 className='text-primary'>Welcome to Imani car sales</h1>
    </div><br/>
    <nav className='m-2 navbar navbar-expand-md navbar-light bg-light' >
    <Link to="/"  href='#'className=' ms-2 nav-bar brand nav-link'>Get Cars</Link>
    <button class="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarcollapse">
      <div class="navbar-nav ms-auto">
    <Link to="/signup" className='text-dark ms-2 nav-link'>Signup</Link> 
    <Link to="/signin" className='text-dark ms-2 nav-link'>Signin</Link>
    <Link to="/addcars" className='text-dark ms-2 nav-link'>AddCar</Link>
    <Link to="/getcars" className='text-dark ms-2 nav-link'>GetCar</Link>
    </div>
    </div>
    </nav>

      {/* Linking routes */}
      <nav>
        <Link to="/signup" className='btn btn-outline-primary ms-2'>Sign up</Link>
        <Link to="/signin" className='btn btn-outline-primary ms-2'>Sign in</Link>
        <Link to="/" className='btn btn-outline-primary ms-2'>Get car</Link>
        <Link to="/addcars" className='btn btn-outline-primary ms-2'>Add car</Link>
      
      </nav>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/' element={<Getcars/>}/>
        <Route path='/addcars' element={<Addcars/>}/>
        <Route path='/makepayment' element={<Mpesapayment/>}/>
      </Routes> <br />
      
      <Footer/>
      
    </div>
    </Router>
  );
}

export default App;
