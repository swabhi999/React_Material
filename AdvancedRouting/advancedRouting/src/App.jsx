import { useState } from 'react'
import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Navbar2 from './Components/Navbar2.jsx'
import Footer from './Components/footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import Notfound from './pages/notfound.jsx'
import Men from './pages/Men.jsx'
import Women from './pages/Women.jsx'
import Courses from './pages/Courses.jsx'
import CourseDetail from './pages/CourseDetail.jsx'
import {useParams} from 'react'
import {Route,Routes} from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <>
    <div className="h-screen bg-black text-white">
     <Navbar/>
    <Navbar2/>
   <Routes>
     <Route  path='/'  element={<Home/>}/>
      <Route  path='/about'  element={<About/>}/>
      <Route  path='/courses'  element={<Courses/>}/>
      <Route  path='/courses/:id'  element={<CourseDetail/>}/>

     <Route  path='/product'  element={<Product/>}>
     <Route  path='men'  element={<Men/>}/>
     <Route  path='women'  element={<Women/>}/>
     </Route>
     <Route  path='*'  element={<Notfound/>}/>
   </Routes>
      
      <Footer/>
    </div>
    </>
  )
}

export default App
