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
`;


const MyStoryCont = styled.div `
  display: flex;
  align-items: center;
  width: 70px;
  height: 70px;
  margin: auto;
  position: relative;
  box-sizing: border-box;
  color: #FFF;
  background-clip: padding-box;
  border: solid 5px transparent;
  border-radius: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
    margin-left: 1em;

    img {
        width: 60px;
        height: 60px;
        border-radius: 5em;
        object-fit: cover;
    }

    span {
        padding: 1px;
        border-radius: 2em;
        position: absolute;
        right: 0;
        bottom: 0em;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        font-size: 18px;
        color: #3498db;
        font-weight: lighter;
    }
`;

const MyStory = () => {
    return (
        <>
            <ContentStory>
                <MyStoryCont>
                    <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_960_720.jpg" alt="" />
                    <span>
                        <i className="fas fa-plus-circle"></i>
                    </span>
                </MyStoryCont>
                <span>Your Story</span>
            </ContentStory>
        </>
    )
}


export default MyStory