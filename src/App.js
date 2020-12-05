import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Recipes from './Components/Recipes'
import Recipe from './Components/Recipe'
import Footer from './Components/Footer'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import './App.css';
import Sidebar from './Components/Sidebar';

function App() {
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <Router>
      {matches ? <Sidebar/> : <Navbar/>}
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/recipes" component={Recipes}></Route>
        <Route exact path="/recipe/:id" children={<Recipe />}></Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
