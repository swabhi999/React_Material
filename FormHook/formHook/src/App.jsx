import React from "react";
import "./App.css";
import FeedbackSystem from "./devotee";

const title = "Code Review Feedback";

const App = () => {
  return (
    <div className="App ">
      <nav>{title}</nav>
      <FeedbackSystem />
    </div>
  );
};


export default App
