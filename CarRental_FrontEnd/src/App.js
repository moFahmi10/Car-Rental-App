import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './Create';
import React from 'react';
import Service from './Service';
import Search from './Search';
import Payment from './Payment';
import Login from './Login';
import Logged from './Logged';
import Admin from './admin';
import Report from './Report';
import Customer from './customer';
import Car from './car';
import Profile from './Profile';
import PreRep from './PreRep';


function App() {

  
  return (
      <Router>
    <div className="App">
      
      <div className="content">
        <Switch>
            <Route exact path="/">
             <Home/>
            </Route>
            <Route path="/login">
             <Login/>
            </Route>
            <Route path="/logged">
             <Logged/>
            </Route>
            <Route path="/admin">
             <Admin/>
            </Route>
            <Route path="/create">
             <Create/>
            </Route>
            <Route path="/search">
                <Search/>
            </Route>
            <Route path ="/service">
              <Service/>
            </Route>
            <Route path="/payment">
              <Payment/>
            </Route>
            <Route path="/car">
              <Car/>
            </Route>
            <Route path="/report">
              <Report/>
            </Route>
            <Route path="/preRep">
              <PreRep/>
            </Route>
            <Route path="/customer">
              <Customer/>
            </Route>
            <Route path="/profile">
            <Profile/>
            </Route>
          </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;