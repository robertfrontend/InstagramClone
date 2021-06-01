import React from 'react'
import styled from 'styled-components'

const ContentStory = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  text-align: center;
`

const StoryCont = styled.div `
  display: flex;
  align-items: center;
  width: 70px;
  height: 70px;
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
    margin-left: 1em;
    background-color: white;
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
    background: linear-gradient(to right, red, orange);
  }

 img {
  width: 58px;
  height: 58px;
  border-radius: 5em;
  object-fit: cover;
    padding: 1em;
}
`;

const Story = () => {
    return (
      <>
        <ContentStory>
            <StoryCont>
                <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_960_720.jpg" alt="" />
            </StoryCont>
            <span>robertrm0</span>
          </ContentStory>
        </>
    )
}

export default Story