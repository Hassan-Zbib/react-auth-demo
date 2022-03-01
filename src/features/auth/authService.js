import axios from "axios";

const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
    const res = await axios.post(API_URL, userData)

    if(res.data) {
        localStorage.setItem('user', JSON.stringify(res.datra))
    }

    return res.data
}

// logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register
}

export default authService