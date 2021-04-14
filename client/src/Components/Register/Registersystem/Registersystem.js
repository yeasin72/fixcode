import React, {useState} from "react";
import { Link } from 'react-router-dom'
import key from '../../../key';
import axios from 'axios'

const Registersystem = () => {
    const [errorMsg, setErrorMsg] = useState({err: false, errMsg: ''})

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userNameChanged = (e) => setUserName(e.target.value);
    const emailChanged = (e) => setEmail(e.target.value);
    const passwordChanged = (e) => setPassword(e.target.value);

   
    
    

    const createUser = () => {
        if(userName.length < 4  ){
            setErrorMsg({err: true, errMsg: 'Data not valid'})
        }
        else if(email.length < 6 ){
            setErrorMsg({err: true, errMsg: 'Email address not valid'})
        }
        else if(password.length < 5 ){
            setErrorMsg({err: true, errMsg: 'Password not valid'})
        }
        else{
            axios.post(key.createUserApi, {
                "username": userName,
                "email": email,
                "password": password
            })
                .then(res => {
                    console.log(res.data);
                    setUserName('')
                    setEmail('')
                    setPassword('')
                    setErrorMsg({err: false, errMsg: 'Your account Created'})
                })
                .catch(error => {
                    console.log(error);
                    setErrorMsg({err: true, errMsg: error.message})
                })
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
                    <div className="form-item">
                        <p>You already have an account? <Link to="/login">Login</Link></p>
                        {
                            errorMsg.err ? 
                            <p className="error">{errorMsg.errMsg}</p>
                            :
                            <p className="success">{errorMsg.errMsg}</p>
                        }
                        
                        

                    </div>
                </div>
            </div>
    );
};

export default Registersystem;
