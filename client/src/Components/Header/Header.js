import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import hammer from 'hammerjs'
import { Settings } from './Settings'
import { useSelector } from 'react-redux'

export const Header = () => {
  const themeStyle = useSelector(state => state.themeReducer.themeStyle)
  const darkTheme = useSelector(state => state.themeReducer.darkTheme)
  const [logo, setLogo] = useState(true)
  const ref = useRef();

  useEffect(() => {
    const hm = new hammer.Manager(ref.current)
    const Swipe = new hammer.Swipe()
    hm.add(Swipe)
    hm.on('swipeup', () => {
      if(window.screen.availWidth < 1025) {
        logo && setLogo(false)
      }
    })
    hm.on('swipedown', () => {
      if(window.screen.availWidth < 1025) {
        logo && setLogo(true)
      }
    })
  }, [logo])

  window.onmousewheel = (e) => {
    if(e.deltaY > 0) {
      setLogo(false)
    } else {
      setLogo(true)
    }
  }

  return (
    <Containter theme={themeStyle} darkTheme={darkTheme}>
      <Settings />
      <Logo logo={logo}>NextBook</Logo>
      <BookContainter theme={themeStyle} darkTheme={darkTheme} logo={logo} ref={ref} >{logo && 'Swipe up'}</BookContainter>
    </Containter>
  )
}

const Logo = styled.div`
  position: absolute;
  left: 5%;
  top: 50%;
  transform: ${({logo}) => logo ? 'scale(1) translateY(10vh)' : 'scale(0.4) translateY(-50%)' };
  font-size: 110px;
  background: ${({theme}) => theme.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  transform-origin: top left;
  transition: transform 0.5s;
  font-family: 'Alex Brush', cursive;

  @media only screen and (max-width: 600px) {
    font-size: 80px;
    transform: ${({logo}) => logo ? 'scale(1) translateY(10vh)' : 'scale(0.5) translateY(-50%)' };
  }

  &>img {
    width: 100%;
  }
`

const Containter = styled.div`
  padding: 20px 5%;
  background: #101010;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: fixed;
  width: 100vw;
  color: white;
  z-index: 100;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background: ${({theme}) => theme.gradient};
  }
`

const BookContainter = styled.div`
  position: absolute;
  align-self: flex-start;
  transform: ${({logo}) => logo ? 'translateY(80vh)' : 'translateY(15vh)' };
  transform-origin: top left;
  transition: transform 0.2s;
  height: 100vh;
  width: 90vw;
  background: ${({theme}) => theme.background};
  border: 1px solid ${({theme, darkTheme}) => darkTheme ? theme.secondary : theme.primary };
  border-radius: 3vw;
  color: ${({theme}) => theme.textColor};
  text-align: center;
  padding: 15px;

  @media only screen and (max-width: 600px) {
    transform: ${({logo}) => logo ? 'translateY(80vh)' : 'translateY(54px)' };
    border-radius: ${({logo}) => logo ? '3vw' : '0' };
    width: 100vw;
    right: 0;
    border-width: 1px 0 0 0;
  }
`
