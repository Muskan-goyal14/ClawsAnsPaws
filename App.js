import React from 'react';
import Front from './Front';
import Join from './Join';
import {  Switch, Route } from "react-router-dom";
import "./my.css";

import Explore from './Explore';
import Medicine from './Medicine';


function App() {
  return (
    // <div className="App">
    //  <Front></Front>
    // </div>
    <>
    <Switch>
    <Route path="/" exact component={Front}></Route>
    <Route path="/Join" exact component={Join}></Route>
    <Route path="/Medicine" exact component={Medicine}></Route>
  
    <Route path="/Explore" exact component={Explore}></Route>
    </Switch>
    </>
  );
}

export default App;
