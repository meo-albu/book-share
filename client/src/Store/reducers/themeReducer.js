import {lightTheme, darkTheme, gradientTheme} from '../../Themes/themes'

!localStorage.getItem('theme') && localStorage.setItem('theme', 'lightTheme')

const defaultState = {
  theme: localStorage.getItem('theme'),
  themeStyle: lightTheme
}

localStorage.getItem('theme') === 'darkTheme' && (defaultState.themeStyle = darkTheme)
localStorage.getItem('theme') === 'gradientTheme' && (defaultState.themeStyle = gradientTheme)

const themeReducer = (state = defaultState, action) => {
  switch(action.type){
      case "LIGHT_THEME":
        localStorage.setItem('theme', 'lightTheme')
        return {
            theme: localStorage.getItem('theme'),
            themeStyle: lightTheme
        }
      case "DARK_THEME":
        localStorage.setItem('theme', 'darkTheme')
        return {
          theme: localStorage.getItem('theme'),
          themeStyle: darkTheme
        }
      case "GRADIENT_THEME":
        localStorage.setItem('theme', 'gradientTheme')
        return {
          theme: localStorage.getItem('theme'),
          themeStyle: gradientTheme
        }
      default: return state
  }
}

export default themeReducer