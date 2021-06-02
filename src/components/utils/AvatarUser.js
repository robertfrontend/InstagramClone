import React from 'react'

import styled from 'styled-components'


const AvatarUser = (props) => {
    console.log(props.tamaño, 'propsss avatqar use');

    let tamañoImagen = props.tamaño - 12
    console.log(tamañoImagen, 'tamaño imagen');

    const Avatar = styled.div`
    display: flex;
    align-items: center;
    width: ${props.tamaño || 40}px;
    height: ${props.tamaño || 40}px;
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
        width: ${tamañoImagen || 28}px;
        height: ${tamañoImagen || 28}px;
        border-radius: 5em;
        object-fit: cover;
            padding: 1em;
        }
    `;

    return (
        <Avatar>
            <img src={props.imagen} alt="" />
        </Avatar>
    )
}


export default AvatarUser