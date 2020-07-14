import React from "react";
// import logo from './logo.svg';
import API from "./API";
import "./App.css";
import Navbar from "./Navbar";
import Fav from "./Fav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WeatherContextprovider from './GlobalContext'

function App() {

  return (
  <Router>
      <WeatherContextprovider>

    <div className="App">
      <Navbar />
        <Switch>
          <Route path='/' component={API} exact />
          <Route path='/Fav' component={Fav} />
        </Switch>
    </div>
  </WeatherContextprovider>
  </Router>
  
  );
}

export default App;
