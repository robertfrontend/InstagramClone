import React from 'react'
import styled from 'styled-components'
import AvatarUser from '../components/utils/AvatarUser'

const HeaderPerfil = styled.div`
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
    .divConfig{
        width: auto;
        height: inherit;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 1.4em;
        padding: 1em;
        color: #2c3e50;

    }
    .divName{
        width: auto;
        font-weight: 500;
    }
`

const ContetPerfil = styled.div`
    width: 100%;
    min-height: 100vh;
`

const InfoPerfil = styled.div`
    padding-top: 4em;
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 1em;

    .part1 {
        padding-right: 1em;
    }
    .part2 {
        width: 60%;
        display: flex;
        flex-direction: column;
        span {
            font-size: 1.8em;
            font-weight: 400;
            color: #2c3e50;
        }
        button {
            width: 100% !important;
            border: 1px solid #dbdbdb;
            padding: 5px;
            background-color: white;
            border-radius: 2px;
            font-size: 103%;
        }
    }
`


const Perfil = () => {

    const imagenUser = "https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_960_720.jpg"


    return (
        <ContetPerfil>
            <HeaderPerfil>
                <div className="divConfig">
                   <svg aria-label="Opciones" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z" fillRule="evenodd"></path></svg>
                </div>
                <div className="divName">
                    robertrm0
                </div>
                <div className="divConfig">
                    <svg aria-label="Descubrir personas" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M32 25.5c5.2 0 9.5-4.3 9.5-9.5S37.2 6.5 32 6.5s-9.5 4.3-9.5 9.5 4.3 9.5 9.5 9.5zm0-16c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zm5.5 19h-11c-5.5 0-10 4.5-10 10V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-3.9 3.1-7 7-7h11c3.9 0 7 3.1 7 7V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-5.5-4.5-10-10-10zm-20-4.5c0-.8-.7-1.5-1.5-1.5h-5.5V17c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v5.5H2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h5.5V31c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5.5H16c.8 0 1.5-.7 1.5-1.5z"></path></svg>
                </div>
            </HeaderPerfil>
            <InfoPerfil>
                <div className="part1">
                    <AvatarUser
                        tamano="100"
                     color={"transparent"}
                    ></AvatarUser>
                </div>
                <div className="part2">
                    <span>robertrm0</span>
                    <button>Editar perfil</button>
                </div>
            </InfoPerfil>
        </ContetPerfil>
    )
}

export default Perfil