import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
   
  useEffect(function (){
    console.log("useEffect called...")
  },[])
  return (
    <>
    <div>
      <h1>{a}</h1>
      <h1>{b}</h1>

      <button onClick={()=>{
        setA(a+1)
      }}> Inc A</button>
      <br />
      <br />
      <button onClick={()=>{
        setB(b+1)
      }}> Inc B </button>
    </div>
    </>
  )
}

export default App
