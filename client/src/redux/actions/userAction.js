import axios from 'axios';
import key from '../../key'
import { 
    USER_CREATE_REQUEST,
    USER_CREATE_SUCCESS,
    USER_CREATE_ERROR,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_AUTH_REQUEST,
    USER_AUTH_SUCCESS,
    USER_AUTH_ERROR,
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_ERROR,
} from '../constant/userConstent';



export const registerUser = (formdata) => async (dispatch) => {
    try {
        dispatch({ type: USER_CREATE_REQUEST })
        
        const { data } = await axios.post(key.createUserApi, formdata)
        dispatch({
            type: USER_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: USER_CREATE_ERROR,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}



export const loginUser = (formdata) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        
        const { data } = await axios.post(key.loginUserApi, formdata)
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: USER_LOGIN_ERROR,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

const tokencode = {
    headers:{
        Authorization: 'Bearer ' + localStorage.getItem('token')
    }
}

export const authUser = () => async (dispatch) => {
    
    try {
        dispatch({ type: USER_AUTH_REQUEST })
        
        const { data } = await axios.get(key.authApi, tokencode)
        dispatch({
            type: USER_AUTH_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: USER_AUTH_ERROR,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}


export const profileUser = (profileData) => async (dispatch) => {
    
    try {
        dispatch({ type: USER_PROFILE_REQUEST })
        
        const { data } = await axios.post(key.createProfileApi, profileData, {
            headers:{
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        dispatch({
            type: USER_PROFILE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: USER_PROFILE_ERROR,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}