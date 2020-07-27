import axios from 'axios'

const setUser = (payload) => ({ type: "SET_USER", payload})
const setError = (payload) => {
    return { type: "SET_ERROR", payload}
}
const clearError = () => ({type: "CLEAR_ERROR"})
const authError = () => ({type: "AUTH_ERROR"})

export const logUserOut = () => ({type: "LOG_OUT"})

export const logUserIn = (userInfo) => dispatch => {
    axios.post(`http://localhost:1337/auth/local`, userInfo)
    .then(response => {
        const data = response.data
        localStorage.setItem("token", data.jwt)
        dispatch(setUser(data.user))
        dispatch(clearError())
    }).catch(err => {
        dispatch(setError(err.response.data.message[0].messages[0].message))
        dispatch(authError())
    })
}

export const signUserUp = (userInfo) => dispatch => {
    axios.post(`http://localhost:1337/auth/local/register`, userInfo)
    .then(response => {
        const data = response.data
        localStorage.setItem("token", data.jwt)
        dispatch(setUser(data.user))
        dispatch(clearError())
    }).catch(err => {
        dispatch(setError(err.response.data.message[0].messages[0].message))
        dispatch(authError())
    })
}

export const autoLogin = () => dispatch => {
    localStorage.getItem('token') &&
    axios.get(`http://localhost:1337/users/me`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }).then(response => {
        const data = response.data
        dispatch(setUser(data))
        dispatch(clearError())
    }).catch(err => {
        dispatch(setError(err.response.data.message[0].messages[0].message))
        dispatch(authError())
    })
}