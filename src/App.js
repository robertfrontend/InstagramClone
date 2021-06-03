import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';


import Home from './view/Home';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
           </Switch>
        <Footer/>
      </Router>

    </>
  );
}

export default App;
