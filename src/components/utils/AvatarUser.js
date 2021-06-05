import React from 'react'

import styled from 'styled-components'


const AvatarUser = (props) => {
    let tamanoImagen = props.tamano - 12

    const Avatar = styled.div`
    display: flex;
    align-items: center;
    width: ${props.tamano || 40}px;
    height: ${props.tamano || 40}px;
    margin: auto;
    position: relative;
    box-sizing: border-box;
    color: #FFF;
    background-clip: padding-box;
    border: solid 4px transparent;
    border-radius: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props.color || "blue"};
    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -2;
        margin: -2px;
        border-radius: inherit;
    }

    img {
        width: ${tamanoImagen || 28}px;
        height: ${tamanoImagen || 28}px;
        border-radius: 5em;
        object-fit: cover;
            padding: 1em;
        }
    `;

    return (
        <Avatar>
            <img src={props.imagen || 'https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_960_720.jpg' } alt="" />
        </Avatar>
    )
}


export default AvatarUser