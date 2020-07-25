import React, {useState} from 'react'
import {ThemeProvider} from 'styled-components'

export const Theme = ({children}) => {

  const [ darkTheme, setDarkTheme ] = useState(localStorage.getItem('darktheme'))
  
  const theme = () => {
    if(darkTheme === 'light') {
      return {
          background: 'white',
          text: '#161412'
        }
    } else if (darkTheme === 'dark') {
      return {
        background: '#161412',
        text: 'white'
      }
    } else {
      return {
        background: 'yellow',
        text: 'black'
      }
    }
  }

  const changeTheme = (t) => {
    setDarkTheme(t)
    localStorage.setItem('darktheme', t)
  }

  return (
      <ThemeProvider theme={theme}>
        helooooooooo
        {children}

        <button onClick={
          () => {
            setDarkTheme('light')
            localStorage.setItem('darktheme', 'light')
          }
        }>
          dark theme
        </button>

        <form>
          <input type='radio' name='theme' onClick={() => changeTheme('dark')} /> dark
          <input type='radio' name='theme' onClick={() => changeTheme('light')} /> light
          <input type='radio' name='theme' onClick={() => changeTheme('midd')} /> middle
        </form>
          
      </ThemeProvider>
  )
}
