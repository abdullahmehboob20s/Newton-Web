import React from "react";
import Hero from "./layouts/Hero";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <div>
      <div className="header z-10">
        <Navbar />
        <Hero />

        <img
          src="images/header-bg.png"
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
