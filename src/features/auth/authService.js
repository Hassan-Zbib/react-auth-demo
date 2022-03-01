import axios from "axios";

const API_URL = 'http://localhost:8000/api/auth/'

// Register user
const register = async (userData) => {
    const res = await axios.post(API_URL + 'register', userData)

    if(res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
    }

    return res.data
}

// Login user
const login = async (userData) => {
    // change api url and concatinate login endpoint later
    const res = await axios.post(API_URL + 'login', userData)

    if(res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
    }

    return res.data
}

// logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login
}

export default authService