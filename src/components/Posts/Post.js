import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 92%;
    margin: 0 auto;
`

const ContentPost = styled.div`
    width: 100%;
    min-height: 70vh;
    margin-bottom: 1em;
`;

const HeaderPost = styled.div`
    width: 100%;
    min-height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .perfil {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        span {
            padding-left: 5px;
        }
    }
`;

const StoryCont = styled.div `
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
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
  width: 38px;
  height: 38px;
  border-radius: 5em;
  object-fit: cover;
    padding: 1em;
}
`;

const ContenImagePost = styled.div`
    width: 100%;
    img {
        width: 100%;
        object-fit: cover;
    }
`

const FooterPost = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    i {
        padding-right:8px;
    }
    .treeOption {
    }

    .save {
    }
`

const ContentInfo = styled.div`
    .like {
        padding: 10px 0;
        span {
            font-weight: 500;
        }
    }
    .infoUser {
        padding: 2px 0;
        span {
            font-weight: 500;
        }
        a {
            text-decoration: none;
        }
    }
`;




const Post = () => {
    return (
        <>
            <ContentPost>
                <Container>
                    <HeaderPost>
                        <div className="perfil">
                            <StoryCont>
                                <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_960_720.jpg" alt="" />
                            </StoryCont>
                            <span>json_smitsh</span>
                        </div>
                        <div className="option">
                            <i className="fas fa-ellipsis-v"></i>
                        </div>
                    </HeaderPost>
                </Container>
                <ContenImagePost>
                    <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_960_720.jpg" alt="" />
                </ContenImagePost>
            <Container>
                    <FooterPost>
                        <div className="treeOption">
                            <i className="far fa-heart"></i>
                            <i className="far fa-comment"></i>
                            <i className="far fa-paper-plane"></i>
                        </div>
                        <div className="save">
                            <i className="far fa-bookmark"></i>
                        </div>
                    </FooterPost>
                    <ContentInfo>
                        <div className="like"> <span>2.500</span> Likes</div>
                        <div className="infoUser">
                            <span >username</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Aut deleniti corrupti nam aspernatur ducimus officiis voluptates adipisci excepturi eaque dolores.
                            <br /> <br />
                            Lorem ipsum dolor sit amet.
                            <br /> <br />
                            <a href="#">#robertrm0 </a>
                            <a href="#">#facebook </a>
                            <a href="#">#insgram</a>
                        </div>
                    </ContentInfo>
                    <div>Escribe un comentario...</div>
                </Container>
            </ContentPost>
        </>
    )
}

export default Post