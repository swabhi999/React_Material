import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [Data, setData] = useState([])
  async function calldata(){
    const response =await fetch('https://picsum.photos/v2/list')
     const Newdata = await response.json();
     console.log(Newdata);
      setData(Newdata)
  }

  return (
    <>
   <div>
   
  <button onClick={calldata}>call data</button>
  <div>
 {Data.map(function (elem,idx){

   return(
     <img src={elem.url}  />
      )
 } )}
  </div>
   </div>
    </>
  )
}

export default App
