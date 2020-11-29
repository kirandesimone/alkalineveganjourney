import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Recipes from './Components/Recipes'
import Recipe from './Components/Recipe'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/recipes" component={Recipes}></Route>
        <Route exact path="/recipe/:id" children={<Recipe />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
