import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../redux/actions/userAction';
import VisibilityIcon from '@material-ui/icons/Visibility';

const Loginsystem = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailChanged = (e) => setEmail(e.target.value);
    const passwordChanged = (e) => setPassword(e.target.value);
    const goDashbord = () => window.location.replace("/")
    

    // @function take response
    // @resone take response message after submitting form
    const login = useSelector(state => state.login)
    const {loading, loginerror, userData } = login
    if(userData){
        localStorage.setItem('token', userData.jwt);
        goDashbord(userData)
    }

    // @function submit form
    // @resone to create user & reset form
    const formData = {
        "identifier": email,
        "password": password}
    const dispatch = useDispatch()
    const createUser = () => {
        setEmail('')
        setPassword('')
        dispatch(loginUser(formData))

    }

    return (
            <div className="login-system">
                <h3>Login.</h3>
                <p>
                    To get all feautre fill the form & login. If you don't have account then
                    Create an account
                </p>
                <div className="main-form">
                    <div className="form-item">
                        <input placeholder="E-mail Address" value={email} onChange={emailChanged} name="email" type="email" />
                    </div>
                    <div className="form-item">
                        <input placeholder="Password" value={password} onChange={passwordChanged} name="password" type="password" />
                        <VisibilityIcon />
                    </div>
                    <div className="form-item">
                        <button type="submit" className="default-button login-btn" onClick={createUser}>
                        Log In
                        </button>
                    </div>
                    <div className="form-item">
                        <p>You don't have any account? <Link to="/register">Create Account</Link></p>
                        {
                            loading ? 
                            <ScaleLoader color={'#106FDE'} loading={loading} size={40} />
                            : loginerror ?
                            <p className="error"><ErrorOutlineIcon /> {loginerror[0].messages[0].message}</p>
                            
                            : 
                            <></>
                        }
                    </div>
                </div>
            </div>
    );
};

export default Loginsystem;
