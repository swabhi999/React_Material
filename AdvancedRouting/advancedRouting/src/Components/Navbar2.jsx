import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar2 = () => {
  let Navigate = useNavigate();

  const btnClicked = () => {
    Navigate("/");
    console.log("button Clicked !");
  };
  return (
    <div className="py-2 px-5 bg-cyan-900">
      <button
        onClick={() => Navigate(-1)}
        className="bg-amber-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Back
      </button>
      <button
        onClick={() => Navigate(+1)}
        className="bg-amber-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Next
      </button>
      <button
        onClick={btnClicked}
        className="bg-amber-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Return to Home page
      </button>
    </div>
  );
};

export default Navbar2;
