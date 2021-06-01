import React from 'react'
import styled from 'styled-components'

const HeaderDiv = styled.header`
    padding-top: 0.2em;
    width: 100%;
    height: 6vh;
    background-color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #95a5a60c;
    border-bottom: 1px solid #95a5a625;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    .divCamera{
        width: auto;
        height: inherit;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 1.4em;
        padding: 1em;
    }
    .divLogo{
        width: auto;
        img {
            padding-top: 0.6em;
        }
    }

`

const Header = () => {
    return (
        <>
            <HeaderDiv>
                <div className="divCamera">
                    <i className="fas fa-camera"></i>
                </div>
                <div className="divLogo">
                    <img src="https://i.ibb.co/NpkTJ8v/Instagram-Logo.png" alt="a" width="100px" />
                </div>
                <div className="divCamera">
                    <i className="far fa-paper-plane"></i>
                </div>
            </HeaderDiv>
        </>
    )
}

export default Header