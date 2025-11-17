import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  let Navigate = useNavigate()

    const btnClicked = ()=>{
        Navigate('/')
        console.log("button Clicked !")
    }
  return (
    <div>
        <button 
        onClick={()=>{
         Navigate(-1)
        }}
        className='bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'
        >Back</button>

        <button
        onClick={btnClicked}
        className='bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'
        >Return to Home page</button>
      <h1>About page</h1>
    </div>
  )
}

export default About