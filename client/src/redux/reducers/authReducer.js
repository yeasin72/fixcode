import { 
    USER_AUTH_REQUEST,
    USER_AUTH_SUCCESS,
    USER_AUTH_ERROR,
} from '../constant/userConstent';

const authReducer = (state = { userData: null }, action) => {
    switch (action.type){
        case USER_AUTH_REQUEST:
            return { authloading: true, userData: null }
        case USER_AUTH_SUCCESS:
            return { authloading: false, userData: action.payload }
        case USER_AUTH_ERROR:
            return { authloading: false, error: action.payload, userData: null }
        default:
            return state
    }
}
export default authReducer;