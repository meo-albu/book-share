import React from 'react'
import styled from 'styled-components'
import {lightTheme, darkTheme, gradientTheme} from '../Themes/themes'
import {setLightTheme, setDarkTheme, setGradientTheme} from '../Store/action/themeActions'
import { useDispatch, useSelector } from 'react-redux'

export const ChangeTheme = () => {
  const dispatch = useDispatch()
  const themeStyle = useSelector(state => state.themeReducer.themeStyle)

  return (
    <div>
      <ChangeThemeButton theme={lightTheme} onClick={() => dispatch(setLightTheme())} />
      <ChangeThemeButton theme={darkTheme} onClick={() => dispatch(setDarkTheme())} />
      <ChangeThemeButton theme={gradientTheme} onClick={() => dispatch(setGradientTheme())} />

      <hr style={{clear: 'both'}} />

      <Test theme={themeStyle}>text</Test>
    </div>
  )
}

const ChangeThemeButton = styled.div`
  background: ${({theme}) => theme.background};
  width: 20px;
  height: 20px;
  border: 3px solid white;
  float: left;
  margin-right: 10px;
  border-radius: 50%;
  box-shadow: 0 0 0 2pt green;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1)
  }
`

const Test = styled.div`
  background: ${({theme}) => theme.background};
  padding: 50px;
  color: ${({theme}) => theme.textColor};
  transition: ${({theme}) => theme.transition};
`
