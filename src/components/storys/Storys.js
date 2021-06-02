import React, { useState } from 'react'
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
    padding: 0.3em 0;
`;


const Storys = () => {
    const [view, setOpenView] = useState(false)

    const lasStorys = [1, 2, 3, 4, 5, 6, 7, 8]
    
    // open modal view desde el Story
    const openView = (data) => {
        setOpenView(data)
    }

    // close modal view desde el StoryView
    const openViewClose = (data) => {
        setOpenView(data)
    }

    return (
        <StoryContain>

            {/** componente mi historias */}
            <MyStory />

            
            {/** componente de las historias */}
            {
                lasStorys.map(res => {
                    return (
                        <Story
                            key={res}
                            openView={openView}
                            view={view}
                        />
                    )
                })
            }

            {/** Componente de la historia completa */}
            {
                view ?
                    <StoryView
                        open={view}
                        openView={openViewClose}
                    />
                : null
            }
          
        </StoryContain>
    )
}

export default Storys;