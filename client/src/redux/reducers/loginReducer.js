import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
} from '../constant/userConstent';

const loginReducer = (state = { userData: null }, action) => {
    switch (action.type){
        case USER_LOGIN_REQUEST:
            return { loading: true, userData: null }
        case USER_LOGIN_SUCCESS:
            return { loading: false, userData: action.payload }
        case USER_LOGIN_ERROR:
            return { loading: false, loginerror: action.payload, userData: null }
        default:
            return state
    }
}
export default loginReducer;