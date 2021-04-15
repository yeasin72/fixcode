import React, { useState } from 'react';
import './Header.css';
import logo from '../../../logo-white.svg';
import { Link } from 'react-router-dom';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import MenuIcon from '@material-ui/icons/Menu';

const Header = ({auth}) => {
    const [mobileMenuValue, setMobileMenuValue] = useState(false);
    function toggleMoblieMenu(){
        setMobileMenuValue(!mobileMenuValue)
    }

    function logOutfromAccount(){
        localStorage.clear();
        
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
                            <li className="item">
                                <Link className="item-link" to="/contact">Dashbord</Link>
                            </li>
                            {auth ? 
                                <a href="/login">
                                    <button className="default-button menu-login" onClick={logOutfromAccount}>Logout</button>
                                </a>
                            :
                            <>
                            <li className="item">
                                <Link className="item-link" to="/login">login</Link>
                            </li>
                            <Link to="/register">
                                <button className="default-button menu-login">Register</button>
                            </Link>
                            </>
                            }
                            
                            
                        </ul>
                        <button className="for-function" onClick={toggleMoblieMenu}>
                            {mobileMenuValue ? 
                            <MenuOpenIcon style={{ fontSize: 40, color: "#F1FAEE", padding: 10 }} />
                            : 
                            <MenuIcon style={{ fontSize: 40, color: "#F1FAEE", padding: 10 }} />}
                            
                        </button>
                        
                        
                    </nav>
                </div>
                {
                    mobileMenuValue ?
                    <div className="nav-mobile">
                    <ul className="nav-items-mobile">
                                <li className="item">
                                    <Link className="item-link" to="/" onClick={toggleMoblieMenu}>home</Link>
                                </li>
                                <li className="item">
                                    <Link className="item-link" to="/about" onClick={toggleMoblieMenu}>About</Link>
                                </li>
                                <li className="item">
                                    <Link className="item-link" to="/contact" onClick={toggleMoblieMenu}>contact</Link>
                                </li>
                                <li className="item">
                                    <Link className="item-link" to="/dashbord" onClick={toggleMoblieMenu}>Dashbord</Link>
                                </li>
                                {auth ? 
                                    <a href="/login">
                                    <button className="default-button menu-login" onClick={logOutfromAccount}>Logout</button>
                                    </a>
                                :
                                <>
                                <li className="item">
                                    <Link className="item-link" to="/login" onClick={toggleMoblieMenu}>login</Link>
                                </li>
                                <Link to="/register">
                                    <button className="default-button menu-login" onClick={toggleMoblieMenu}>Register</button>
                                </Link>
                                </>
                                }
                                
                        </ul>
                    </div>
                    :
                    <> </>
                }
                
                
            </div>
        </header>
    )
}

export default Header
