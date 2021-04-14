import React from 'react';
import Registersystem from './Registersystem/Registersystem'

const Register = () => {

    return (
        <div className="login-page" style={{backgroundImage: 'url("./img/loginbg.svg")'}}>
            <div className="container login-main">
                <div className="login-form">
                    <Registersystem />
                </div>
                <div className="login-right-content">
                    <img src="./img/login.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Register
