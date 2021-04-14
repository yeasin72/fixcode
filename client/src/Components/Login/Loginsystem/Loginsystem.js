import React from "react";
import { Link } from 'react-router-dom'

const Loginsystem = () => {
    return (
            <div className="login-system">
                <h3>Login.</h3>
                <p>
                    To get all feautre fill the form & login. If you don't have account then
                    Create an account
                </p>
                <form>
                    <div className="form-item">
                        <input placeholder="E-mail Address" name="email" type="email" />
                    </div>
                    <div className="form-item">
                        <input placeholder="Password" name="password" type="password"></input>
                    </div>
                    <div className="form-item">
                        <input
                        placeholder="Confirm Password"
                        name="samepassword"
                        type="password"
                        ></input>
                    </div>
                    <div className="form-item">
                        <button type="submit" className="default-button login-btn">
                        Log In
                        </button>
                    </div>
                    <div className="form-item">
                        <p>You don't have any account? <Link to="/register">Create Account</Link></p>
                    </div>
                </form>
            </div>
    );
};

export default Loginsystem;
