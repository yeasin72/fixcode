import { 
    USER_CREATE_REQUEST,
    USER_CREATE_SUCCESS,
    USER_CREATE_ERROR,
} from '../constant/userConstent';

const registerReducer = (state = { newuserData: null}, action) => {
    switch (action.type){
        case USER_CREATE_REQUEST:
            return { loading: true, newuserData: null }
        case USER_CREATE_SUCCESS:
            return { loading: false, newuserData: action.payload }
        case USER_CREATE_ERROR:
            return { loading: false, registererror: action.payload, userData: null }
        default:
            return state
    }
}
export default registerReducer;