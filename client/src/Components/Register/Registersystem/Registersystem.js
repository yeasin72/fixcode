import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckIcon from '@material-ui/icons/Check';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import key from './../../../key';
import axios from 'axios'


const Registersystem = () => {

    const [Error, setError] = useState({err: false, message: ''});
    const [loading, setLoadin] = useState(false);
    const [success, setSuccess] = useState(false);
    const [passwordtoggle, setpasswordtoggle] = useState(false);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userNameChanged = (e) => setUserName(e.target.value);
    const emailChanged = (e) => setEmail(e.target.value);
    const passwordChanged = (e) => setPassword(e.target.value);
    const goSetprofile = () => window.location.replace("/setprofile")


    const passToggle = () => {
        setpasswordtoggle(!passwordtoggle)
    }


    // @function submit form
    // @resone to create user & reset form
    const formData = {
        "username":userName,
        "email": email,
        "password": password
    }

    const insertUser = async () => {
        if(formData.username < 5){
            setError({
                err: true,
                message: "Invalid username"
            })
        }else{
        try {
            const {data} = await axios.post(key.createUserApi, formData)

            setLoadin(true)
            localStorage.setItem('token', data.jwt)
            const tokencode = {
                headers:{
                    Authorization: 'Bearer ' + data.jwt
                }
            }
            const profileData = {
                "username": data.user.username, "full_name": "", "user_bio": "", "user_title": "", 'user_avatar': null, "github_url": "", "facebook_url": "", "twitter_url": "", "gender": "Male", "date_of_birth": null, "users_permissions_user": {
                    "username": data.user.username, "_id": data.user.id, "id": data.user.id, "email": data.user.email}
            }
            try {
                const profile = await axios.post(key.createProfileApi, profileData, tokencode)
                localStorage.setItem('puid', profile.data.id)

                setUserName('');
                setEmail('')
                setPassword('')
                setSuccess(true)
                goSetprofile()

            } catch (error) {
                setError({
                    err: true,
                    message: error.response.data.message[0].messages[0].message
                })
            }
            
        } catch (error) {
            setError({
                err: true,
                message: error.response.data.message[0].messages[0].message
            })
        }
        }
    }


    return (
            <div className="login-system">
                <h3>Register.</h3>
                <p>
                    Fill the form & create your account. If you already have an account then login
                </p>
                <div className="main-form">
                    
                    <div className="form-item">
                        <input placeholder="Username" value={userName} onChange={userNameChanged} type="text" />
                    </div>
                    <div className="form-item">
                        <input placeholder="E-mail Address" value={email} onChange={emailChanged} type="email" />
                    </div>
                    <div className="form-item password">
                        <input placeholder="Password" value={password} onChange={passwordChanged} type={passwordtoggle ? "text" : "password"} />
                        {passwordtoggle ? 
                            <VisibilityOffIcon onClick={passToggle} />
                        :
                            <VisibilityIcon onClick={passToggle} />
                        }
                    </div>
                    <div className="form-item">
                        <button className="default-button login-btn" onClick={insertUser}>
                        Register
                        </button>
                    </div>
                    <div className="form-item msgsec">
                        <p>You already have an account? <Link to="/login">Login</Link></p>
                        {
                            success ? 
                            <p className="success"><CheckIcon /> Your account created</p> 
                            :
                            loading ? 
                            <ScaleLoader color={'#106FDE'} loading={loading} size={40} />
                            : Error.err ?
                            <p className="error"><ErrorOutlineIcon />
                             {Error.message}
                             </p>
                            : 
                            <></>
                        }
                        
                        

                    </div>
                </div>
            </div>
    );
};

export default Registersystem
