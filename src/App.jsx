import React from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Product from './pages/Product'
import ChooseBundle from './pages/ChooseBundle'
import BundleTarget from './pages/BundleTarget'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Method from './pages/Method'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword';

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/product' element={<Product/>}/>
        <Route path='/choosebundle' element={<ChooseBundle/>} />
        <Route path='/bundletarget' element={<BundleTarget/>} />
        <Route path='/method' element={<Method/>} />
        <Route path='/reset' element={<ResetPassword/>}/>
        <Route path='/loginform' element={<Login/>}/>
      </Routes>
      <Footer/>
      
     </BrowserRouter> 
    </>
  )
}

export default App
