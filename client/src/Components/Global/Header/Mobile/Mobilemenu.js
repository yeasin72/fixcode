import React from 'react';
import { Link } from 'react-router-dom';

const Mobilemenu = () => {
    return (
        <div className="nav-mobile">
                    <ul className="nav-items-mobile">
                                <li className="item">
                                    <Link className="item-link" to="/">home</Link>
                                </li>
                                <li className="item">
                                    <Link className="item-link" to="/about">About</Link>
                                </li>
                                <li className="item">
                                    <Link className="item-link" to="/contact">contact</Link>
                                </li>
                                <button className="default-button menu-login">Login</button>
                    </ul>
                </div>
    )
}

export default Mobilemenu
