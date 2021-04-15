import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckIcon from '@material-ui/icons/Check';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, profileUser } from '../../../redux/actions/userAction';

const Registersystem = () => {
    const dispatch = useDispatch()

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userNameChanged = (e) => setUserName(e.target.value);
    const emailChanged = (e) => setEmail(e.target.value);
    const passwordChanged = (e) => setPassword(e.target.value);
    const goDashbord = () => window.location.replace("/")

    // @function take response
    // @resone take response message after submitting form
    const createNewUser = useSelector(state => state.createNewUser)
    
    const {loading, registererror, newuserData } = createNewUser
    if(newuserData){
        localStorage.setItem('token', newuserData.jwt);
        createProfile()
        goDashbord()
        
    }
    
    function createProfile(){
        const profileData = {
            "username": newuserData.user.username,
            "full_name": null,
            "user_bio": null,
            "user_title": null,
            'user_avatar': null,
            "github_url": null,
            "facebook_url": null,
            "twitter_url": null,
            "gender": null,
            "date_of_birth": null,
            "users_permissions_user": {
                "username": newuserData.user.username,
                "_id": newuserData.user.id,
                "id": newuserData.user.id,
                "email": newuserData.user.email
            }
        }
        
        dispatch(profileUser(profileData))
    }


      // @function submit form
    // @resone to create user & reset form
    const formData = {
        "username":userName,
        "email": email,
        "password": password
    }
    const createUser = () => {
        
            setUserName('');
            setEmail('')
            setPassword('')
            dispatch(registerUser(formData))
        
    }


    return (
            <div className="login-system">
                <h3>Register.</h3>
                <p>
                    Fill the form & create your account. If you already have an account then login
                </p>
                <div className="main-form">
                    
                    <div className="form-item">
                        <input placeholder="Username" value={userName} onChange={userNameChanged} name="username" type="text" />
                    </div>
                    <div className="form-item">
                        <input placeholder="E-mail Address" value={email} onChange={emailChanged} name="email" type="email" />
                    </div>
                    <div className="form-item">
                        <input placeholder="Password" value={password} onChange={passwordChanged} name="password" type="password"></input>
                    </div>
                    <div className="form-item">
                        <button className="default-button login-btn" onClick={createUser}>
                        Register
                        </button>
                    </div>
                    <div className="form-item msgsec">
                        <p>You already have an account? <Link to="/login">Login</Link></p>
                        {
                            loading ? 
                            <ScaleLoader color={'#106FDE'} loading={loading} size={40} />
                            : registererror ?
                            <p className="error"><ErrorOutlineIcon /> {registererror[0].messages[0].message}</p>
                            : newuserData ? 
                                newuserData.jwt ?
                                <p className="success"><CheckIcon /> Your account created please login</p> : <></>
                            : 
                            <></>
                        }
                        
                        

                    </div>
                </div>
            </div>
    );
};

export default Registersystem
