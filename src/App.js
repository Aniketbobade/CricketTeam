import React from "react";
import Testimonials from "./component/Testomonial";
import reviews from "./data";
import "./App.css";

const App = () => {
  
  return (
    <div
      className="flex flex-col justify-center items-center
    mt-10 p-10 max-w-[90%] w-[550px] mx-auto gap-3"
    >
      <div className="box text-center">
        <h1 className="text-2xl text-orange-600">Team India</h1>
      </div>
      <div className="flex flex-col">
        <Testimonials reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
