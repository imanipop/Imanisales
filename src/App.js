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
