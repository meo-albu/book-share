const setUser = (payload) => ({ type: "SET_USER", payload})

export const logUserOut = () => ({type: "LOG_OUT"})

export const fetchUser = (userInfo) => dispatch => {
    fetch(`http://localhost:1337/auth/local`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("token", data.jwt)
        dispatch(setUser(data.user))
    })
}

export const signUserUp = (userInfo) => dispatch => {
    fetch(`http://localhost:1337/auth/local/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("token", data.jwt)
        dispatch(setUser(data.user))
    })
}

export const autoLogin = () => dispatch => {
    localStorage.getItem('token') &&
    fetch(`http://localhost:1337/users/me`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(data => {
        dispatch(setUser(data))
    })
}