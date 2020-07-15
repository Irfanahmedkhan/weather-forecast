import React from "react";
import API from "./API";
import "./App.css";
import Navbar from "./Navbar";
import Data from "./Data";
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
            <Route path='/Data' component={Data} />
        </Switch>
    </div>
  </WeatherContextprovider>
  </Router>
  
  );
}

export default App;
