import React from 'react'
import Posts from '../components/Posts/Posts';
import Header from '../components/Header';
import Storys from '../components/storys/Storys';

const Home = () => {
    return (
        <>
            <Header />
            <Storys />
            <Posts />
        </>
    )
}


export default Home