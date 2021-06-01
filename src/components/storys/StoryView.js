import React from 'react'
import styled from 'styled-components'

const ContentView = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: #151723;
    z-index: 1000;
`;

const HeaderView = styled.div `
    width: 100%;
    min-height: 8vh;
    .count {
        padding-top: 0.8em;
        display: flex;
        flex-direction: row;
        justify-content: stretch;
        align-items: center;
        div {
            width: 140px;
            height:2px;
            background-color: white;
            margin: 0 2px;
            border-radius: 10px;
        }
    }
`

const StoryView = () => {
    return (
        <ContentView>
            <HeaderView>
                <div className="count">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="user-close"></div>
            </HeaderView>
        </ContentView>
    )
}

export default StoryView
