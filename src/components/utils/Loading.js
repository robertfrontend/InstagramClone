import React from 'react'
import styled from 'styled-components'


const IsLoading = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
        font-size: 3em;
        color: #bdc3c7;
    }
`


const ComponentLoading = () => {
    return (
        <IsLoading>
            <i className="fab fa-instagram"></i>
        </IsLoading>
    )
}

export default ComponentLoading
