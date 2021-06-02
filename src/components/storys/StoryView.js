import React from 'react';

import styled from 'styled-components'
import Avatar from '../utils/AvatarUser'


const ContentView = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: #151723;
    z-index: 1000;
`;

const OverFlowContent = styled.div `
    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;
`

const HeaderView = styled.div`
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
    .contentUser {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        color: white;
        padding: 1em;
        .user {
            width: 50%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            text-align: left !important;
            div {
                margin: 0;
            }
            span {
                padding-left: 4px;
                font-weight: 500;
                margin-top: -5px;
            }
        }
        .close {
            width: auto;
            position: fixed;
            top: 1.2em;
            right: 0.5em;
            font-size: 1.5em;
            padding: 0.2em 1em;
        }
    }
`;

const FooterView = styled.div`
    width: 100%;
    height: 8vh;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 1em;
    .cajaMensaje {
        width: 80%;
        position: relative;
        input {
            width: 100%;
            height: 5vh;
            border: 1px solid white;
            border-radius: 50px;
            background-color: transparent;
            color: white !important;
            padding-left: 1.5em;
            ::placeholder {
                color: white;
                font-size: 120%;
            }
        }
        .threePoint{
            position: absolute;
            color: white;
            font-size: 40px;
        }
    }
    .reenviar {
        position: relative;
        width: 20%;
        text-align: right;
        padding-right: 1.5em;
        font-size: 1.4em;
        color: white;
    }
`;

const ContentImagen = styled.div`
    width: 100%;
    height: 100vh;
    background: url('https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_960_720.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`


const StoryView = (props) => {
    const closeView = () => {
        props.openView(false)
    }

    return (
        <ContentView>
            <OverFlowContent className="OverFlowContent">
                <HeaderView>
                    <div className="count">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="contentUser">
                        <div className="user">
                            <Avatar
                                imagen={"https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_960_720.jpg"}
                                color={"transparent"}
                                tamaño={"40"} /**tamaño en px */
                            >
                            </Avatar>
                            <span>nameuser</span>
                        </div>
                        <div className="close" onClick={closeView}>
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                </HeaderView>
                <FooterView>
                    <div className="cajaMensaje">
                        <input placeholder="Enviar mensaje"/>
                        <div className="threePoint">...</div>
                    </div>
                    <div className="reenviar">
                        <i className="far fa-paper-plane"></i>
                    </div>
                </FooterView>
            </OverFlowContent>
            <ContentImagen>

            </ContentImagen>
        </ContentView>
    )
}

export default StoryView
