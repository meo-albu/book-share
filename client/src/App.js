import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {ThemeProvider} from 'styled-components'

import {autoLogin} from './Store/action/userActions'
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import { Sidebar } from './Components/Sidebar/Sidebar';

export default function App() {

  // const loggedIn = useSelector(state => state.userReducer.loggedIn)
  // const user = useSelector(state => state.userReducer.user)
  // const authError = useSelector(state => state.userReducer.authError)
  // const error = useSelector(state => state.errorReducer.error)

  // const login = (e) => {
  //   e.preventDefault()

  //   const [username, password] = e.target.elements

  //   dispatch(logUserIn({
  //     identifier: username.value,
  //     password: password.value
  //   }))
  // }

  // const register = (e) => {
  //   e.preventDefault()

  //   const [username, email, password] = e.target.elements

  //   dispatch(signUserUp({
  //     username: username.value,
  //     email: email.value,
  //     password: password.value
  //   }))
  // }

  const theme = useSelector(state => state.themeReducer.themeStyle)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(autoLogin())
  }, [dispatch])

  return (
      <ThemeProvider theme={theme}>
        <Header />
        <Main>
        {/* <form onSubmit={login}>
          <h2>Login</h2>
          <input type='text' name='username' placeholder='username' />
          <input type='password' name='password' placeholder='password' />
          <input type='submit' value='Login' />
        </form>
        <button onClick={() => dispatch(logUserOut())}>Logout</button>
        {
          loggedIn && 'buna, ' + user.email
        } 

        <form onSubmit={register}>
          <h2>Register</h2>
          <input type='text' name='username' placeholder='username' />
          <input type='email' name='email' placeholder='email' />
          <input type='password' name='password' placeholder='password' />
          <input type='submit' value='Register' />
        </form>

        <h3>Errors</h3>
        {authError && <p>{error}</p>} */}

        </Main>
        <Sidebar />
        
      </ThemeProvider>
  );
}