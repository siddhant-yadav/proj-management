import React from "react";
import { BrowserRouter , Switch , Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard"
import ProjectDetails from "./components/projects/ProjectDetails";


function App() {
  return (
    <BrowserRouter>
      <div classname="App">
        {/* <h1>Planning App by Siddhant Yadav</h1> */}
        <Navbar />

        <Switch >
          <Route exact path = '/' component = {Dashboard} />
          <Route exact path = '/project/:id' component = {ProjectDetails} />
        </Switch>


      </div>
    </BrowserRouter>
  );
}

export default App;

<Dashboard />