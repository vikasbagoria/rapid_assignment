import './App.css';
import React from 'react';
import {Redirect, Route,Switch} from 'react-router-dom';
import About from './component/AboutUs/About';
import Contact from './component/contactUs/Contact';
import Home from './component/home/Home';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
    </>
  );
}

export default App;
