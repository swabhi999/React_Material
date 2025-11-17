import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import { Link } from 'react-router-dom'
import './App.css'
import Navbar from '../../../../Routing in React/react-routing-ten/src/components/NavBar.jsx'
import Details from './pages/details.jsx'
import Contact from './pages/contact.jsx'

function App() {
  

  return (
    <>
      <div>
        <div className='nav'>
           <h3>Luffy website</h3>
           <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/details'>Details</Link>
          <Link to='/contact'>Contact</Link>
           </div>
        </div>
          <Routes>    
                 <Route path='/' element={<Home/>}/>
                      <Route path='/about' element={<About/>}/>
                      <Route path='/details' element={<Details/>}/>
                      <Route path='/contact' element={<Contact/>}/>
          </Routes>
            {/* only the routes <routes> inside code will be chnage other will remain the same *test yourself */}
        </div>
    
    </>
  )
}

export default App
