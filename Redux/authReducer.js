import {getMyAuth} from '../API/api'

const SET_USER_AUTH = 'SET_USER_AUTH';

let initialState = {
    login: null,
    email: null,
    password: null,
    isAuthorized: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH:
            return {
                ...state,
                ...action.data,
                isAuthorized: true
            }
        default:
            return state;
    }
}


export const setUserAuth = ({ login, email, password }) => {
    return {
        type: SET_USER_AUTH,
        data: { login, email, password }
    }
};

export default authReducer;

export const setAuthThunk = () => (dispatch) =>{
    getMyAuth()
    .then(data => {
        if(data.resultCode===0){
            dispatch(setUserAuth(data.data));
        }
    })
}