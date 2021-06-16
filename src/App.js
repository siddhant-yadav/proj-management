import React from "react";
import { BrowserRouter , Switch , Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard"
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div classname="App black">
        {/* <h1>Planning App by Siddhant Yadav</h1> */}
        <Navbar />

        <Switch >
          <Route exact path = '/' component = {Dashboard} />
          <Route exact path = '/project/:id' component = {ProjectDetails} />
          <Route exact path = '/signin' component = {SignIn} />
          <Route exact path = '/signup' component = {SignUp} />
        </Switch>


      </div>
    </BrowserRouter>
  );
}

export default App;

<Dashboard />