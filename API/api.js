import * as axios from 'axios';

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true
})

export const getMyAuth = () => {
    return instance.get('auth/me')
        .then(response => response.data)
}

export const getProfile = (userId) => {
    return instance.get('profile/' + userId)
        .then(response => response.data)
}

export const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}