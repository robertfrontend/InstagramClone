import React from 'react'
import styled from 'styled-components';

// components
import Story from './Story';
import MyStory from './MyStory';
import StoryView from './StoryView';

// estilos
const StoryContain = styled.div`
    margin-top: 3em;
    width: 100%;
    height: 12vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow-x: scroll;
    background-color: #95a5a60c;
    border-bottom: 1px solid #95a5a625;

`;


const Storys = () => {

    const lasStorys = [1,2,3,4,5,6,7,8]

    return (
        <StoryContain>
            <MyStory/>
            {
                lasStorys.map(res => {
                    return (
                        <Story key={res}/>
                    )
                })
            }

            <StoryView/>
        </StoryContain>
    )
}

export default Storys;