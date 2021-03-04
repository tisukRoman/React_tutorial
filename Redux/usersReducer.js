import {getUsers} from '../API/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const GET_USERS = 'GET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    users: [],
    totalUsersCount: 20,
    pageSize: 8,
    currentPage: 1,
    isFetching: true
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    };
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    };
                    return u;
                })
            };
        case GET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const toFollow = (userID) => ({type: FOLLOW, userID});
export const toUnfollow = (userID) => ({type: UNFOLLOW, userID});
export const loadUsers = (users) => ({type: GET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const onFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer;

export const getUsersThunk = (currentPage, pageSize)=> (dispatch) =>{
        dispatch(onFetching(true));
        dispatch(setCurrentPage(currentPage));
        getUsers(currentPage, pageSize)
          .then(data => {
            dispatch(loadUsers(data.items));
            dispatch(onFetching(false));
          })
}
