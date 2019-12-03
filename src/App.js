import React from 'react';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../src/components/Home";
import Form from "../src/components/Form";
import Login from "../src/components/Login";
import Register from "../src/components/Register";
import Logout from "../src/components/Logout";

function App(){
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/oddaj-rzeczy" component={Form}/>
          <Route path="/logowanie" component={Login}/>
          <Route path="/rejestracja" component={Register}/>
          <Route path="/wylogowano" component={Logout}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
