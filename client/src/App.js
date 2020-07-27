import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {ThemeProvider} from 'styled-components'

import {logUserIn, autoLogin, signUserUp, logUserOut} from './Store/action/userActions'
import { ChangeTheme } from './Components/ChangeTheme';

export default function App() {

  const loggedIn = useSelector(state => state.userReducer.loggedIn)
  const user = useSelector(state => state.userReducer.user)
  const authError = useSelector(state => state.userReducer.authError)
  const error = useSelector(state => state.errorReducer.error)
  const theme = useSelector(state => state.themeReducer.themeStyle)
  const dispatch = useDispatch()

  const login = (e) => {
    e.preventDefault()

    const [username, password] = e.target.elements

    dispatch(logUserIn({
      identifier: username.value,
      password: password.value
    }))
  }

  const register = (e) => {
    e.preventDefault()

    const [username, email, password] = e.target.elements

    dispatch(signUserUp({
      username: username.value,
      email: email.value,
      password: password.value
    }))
  }

  useEffect(() => {
    dispatch(autoLogin())
  }, [dispatch])

  return (
      <ThemeProvider theme={theme}>
        <h1>Book</h1>
        <form onSubmit={login}>
          <h2>Login</h2>
          <input type='text' name='username' placeholder='username' />
          <input type='password' name='password' placeholder='password' />
          <input type='submit' value='Login' />
        </form>
        <button onClick={() => dispatch(logUserOut())}>Logout</button>
        {
          loggedIn && 'buna,' + user.email
        } 

        <form onSubmit={register}>
          <h2>Register</h2>
          <input type='text' name='username' placeholder='username' />
          <input type='email' name='email' placeholder='email' />
          <input type='password' name='password' placeholder='password' />
          <input type='submit' value='Register' />
        </form>

        <hr />
        <h3>Errors</h3>
        {authError && <p>{error}</p>}

        <hr />
        <ChangeTheme />
      </ThemeProvider>
  );
}