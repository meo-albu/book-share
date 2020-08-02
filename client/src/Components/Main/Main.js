import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

export const Main = ({children}) => {
  const themeStyle = useSelector(state => state.themeReducer.themeStyle)

  return (
    <Container theme={themeStyle}>
      {children}
      <p>A place where you can find <br />your next book to read...</p>
        <span>… or share a book you love</span>
        <button>Find a book</button>
    </Container>
  )
}

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: italic;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: ${({theme}) => theme.background};
  color: ${({theme}) => theme.textColor};
  transition: ${({theme}) => theme.transition};
  z-index: 0;
  padding: 110px 5.5% 50px;
  font-size: 5vh;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (max-width: 600px) {
    line-height: 1.4;

    br {
      display: none;
    }
  }

  button {
    padding: 15px 70px;
    border-radius: 10px;
    border: 0;
    background: transparent;
    color: ${({theme}) => theme.primary};
    border: 2px solid ${({theme}) => theme.primary};
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    margin-top: 80px;
    cursor: pointer;
    transition: 0.3s;

    @media only screen and (max-width: 600px) {
      margin-top: 40px;
    }

    &:hover {
      background: ${({theme}) => theme.primary};
      color: ${({theme}) => theme.background};
    }
  }

  &>span {
    font-size: 3vh;
  }
`