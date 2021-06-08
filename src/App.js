import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { DataProvider } from './context/DataContext';


import './index.css';


import Home from './view/Home';
import Perfil from './view/Perfil';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Router>
        <Switch>
           <DataProvider>
              <Route path="/" exact component={Home} />
              <Route path="/perfil" exact  component={Perfil} />
            </DataProvider>
           </Switch>
        <Footer/>
      </Router>

    </>
  );
}

export default App;
