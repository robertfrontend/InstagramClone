import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer';
import './index.css';


import Home from './view/Home';
import Perfil from './view/Perfil';


function App() {
  return (
    <>
      <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/perfil" exact  component={Perfil} />
           </Switch>
        <Footer/>
      </Router>

    </>
  );
}

export default App;
