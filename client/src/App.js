import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Promos from "./pages/Promos";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";
import './App.css';
import './index.css';



class App extends Component {


  render(){
    return (
      <Router>
          <Switch>
            <Route exact path="/" 
            render={props=><LandingPage {...props} />} 
            />
            <Route exact path="/dashboard" 
            render={props=><Dashboard {...props}  />}
            />
            <Route exact path="/promos" 
            render={props=><Promos {...props} />}
            />
            <Route exact path="/inventory" 
            render={props=> <Inventory {...props} />}
            />
            <Route exact path="/profile" 
            render={props=><Profile {...props}  />}
            />
            <Route component={NoMatch} />
          </Switch>
      </Router>
    );

  }

}

export default App;


