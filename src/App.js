import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/layout/Navbar";


function App() {
  return (
    <BrowserRouter>
      <div classname="App">
        {/* <h1>Planning App by Siddhant Yadav</h1> */}
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
