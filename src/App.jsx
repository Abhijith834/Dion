import React from "react";
import "./App.css";
import Navbar from "./assets/Components/Navbar/Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
