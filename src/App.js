import React from "react";
// import logo from './logo.svg';
import API from "./API";
import "./App.css";
import Navbar from "./Navbar";
import Fav from "./Fav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
  <Router>
  
    <div className="App">

      <Navbar />
        <Switch>
          <Route path='/' component={API} exact />
        <Route path='/Fav/:id' component={Fav} />
        </Switch>
    </div>
  
  </Router>
  
  );
}

export default App;
