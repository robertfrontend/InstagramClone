import React, { useState, useEffect, useContext } from 'react'
import Posts from '../components/Posts/Posts';
import Header from '../components/Header';
import Storys from '../components/storys/Storys';
import { DataContext } from '../context/DataContext';

import styled from 'styled-components';

const Reload = styled.div`
    width: 100%;
    position: absolute;
    top: 9em;
    left: 0;
    z-index: 100;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    button {
        background-color: white;
        border: 0;
        box-shadow: 0 0 10px #95a5a1;
        padding: 10px 4em;
        border-radius: 20px;
    }
`

const Home = () => {

    
    const [reload, setReload] = useState(false);

    const { recargar, setRecargar } = useContext(DataContext)

    useEffect(() => {

        setTimeout(() => {
            setReload(true)
        }, 10000)

        return () => {
        }
    }, [])

    const onReload = () => {
        setRecargar(true)
    }

    return (
        <>
            {
                reload ?
                        <Reload>
                            <button onClick={onReload}>Nuevo posts</button>
                        </Reload>
                    : null
                    
            }
            <Header />
            <Storys />
            <Posts />
        </>
    )
}


export default Home