import { 
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_ERROR,
} from '../constant/userConstent';

const profileReducer = (state = { profileData: null }, action) => {
    switch (action.type){
        case USER_PROFILE_REQUEST:
            return { profileloading: true, profileData: null }
        case USER_PROFILE_SUCCESS:
            return { profileloading: false, profileData: action.payload }
        case USER_PROFILE_ERROR:
            return { profileloading: false, error: action.payload, profileData: null }
        default:
            return state
    }
}
export default profileReducer;