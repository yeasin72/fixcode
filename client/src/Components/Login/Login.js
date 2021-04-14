import React from 'react';
import './Login.css';
import Loginsystem from './Loginsystem/Loginsystem'

const Login = () => {

    return (
        <div className="login-page" style={{backgroundImage: 'url("./img/loginbg.svg")'}}>
            <div className="container login-main">
                <div className="login-form">
                    <Loginsystem />
                </div>
                <div className="login-right-content">
                    <img src="./img/login.svg" alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default Login
