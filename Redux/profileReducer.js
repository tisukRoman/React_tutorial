const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default: 
            return state
    }
}

export const setCurrentUserPage = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
};

export default profileReducer;

export const setUserProfile = ()=> (dispatch)=>{
    
}