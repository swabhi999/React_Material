import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Card from "./Components/Card.jsx";
import React from "react";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  // let userInfo = (
  //   <h3 className="text-gray-400 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  //     Loading...
  //   </h3>
  // );
  const GetData = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=15`
      );

      setUserData(response.data);
      console.log(response.data); // <-- correct
    } catch (error) {
      console.error(error);
    }
  };

let userInfo;

if (userData.length === 0) {
  userInfo = (
    <div className="w-full min-h-[70vh] flex items-center justify-center">
      <h3 className="text-gray-400 text-xl animate-pulse">Loading...</h3>
    </div>
  );
} else {
  userInfo = (
    <div className="flex flex-wrap gap-6 justify-center">
      {userData.map((elem, idx) => (
        <Card key={idx} elem={elem} />
      ))}
    </div>
  );
}


  useEffect(() => {
    GetData();
  }, [index]);

  return (
    <>
      <div className="bg-black h-screen overflow-auto text-white ">
        <h1 className="text-4xl fixed">{index}</h1>

        <div className="flex flex-wrap gap-6 p-10 relative items-center ">{userInfo}</div>

        <div className="flex justify-center gap-5 my-5 items-center">
            <button 
           className="bg-amber-400 cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
            onClick={()=>{
              setIndex(1)
            }}
          >Back to start</button>
          <button
              className="bg-amber-400  cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
              style={{opacity: index == 0 ? 0.5 : 1}}
            onClick={() => {
              if (index >= 1) {
                setIndex(index - 1);
                setUserData([]);
              }
              console.log("prev clicked!");
            }}
          >
            Prev
          </button>
          <h4>Page No.{index}</h4>
          <button
              className="bg-amber-400 cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
            onClick={() => {
              setUserData([]);
              setIndex(index + 1);

              console.log("next clicked!");
            }}
          >
            Next
          </button>

          <button
            className="bg-amber-400 cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
            onClick={() => {
              setIndex(index + 10);
              setUserData([]);
            }}
          >
            Skip 10 pages
          </button>
        
        </div>
      </div>
    </>
  );
}

export default App;
