import React, { useState } from 'react';
import './Header.css';
import logo from '../../../logo-white.svg';
import { Link } from 'react-router-dom';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import MenuIcon from '@material-ui/icons/Menu';
import Mobilemenu from './Mobile/Mobilemenu'

const Header = () => {
    const [mobileMenuValue, setMobileMenuValue] = useState(false);
    function toggleMoblieMenu(){
        setMobileMenuValue(!mobileMenuValue)
    }
    return (
        <header className="mainheader">
            <div className="container headercontent">
                <div className="logosection">
                    <a href="/"><img className="logo" src={logo} alt="logo" /></a>
                </div>
                <div className="navsection">
                    <nav>
                        <ul className="nav-items-desktop">
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
                        <button className="for-function" onClick={toggleMoblieMenu}>
                            {mobileMenuValue ? 
                            <MenuOpenIcon style={{ fontSize: 40, color: "#F1FAEE", padding: 10 }} />
                            : 
                            <MenuIcon style={{ fontSize: 40, color: "#F1FAEE", padding: 10 }} />}
                            
                        </button>
                        
                        
                    </nav>
                </div>
                {mobileMenuValue ? 
                    <Mobilemenu />
                : <></>
                 }
                
            </div>
        </header>
    )
}

export default Header
