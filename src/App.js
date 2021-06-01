import React from 'react'
import Header from './components/Header';
import Posts from './components/Posts/Posts';
import Storys from './components/storys/Storys';
import Footer from './components/Footer';
import './index.css';



function App() {
  return (
    <>
      <Header />
      <Storys />
      <Posts />
      <Footer/>
    </>
  );
}

export default App;
