import React, { useState, useEffect } from 'react';
import './Footer.css';
import Contactdetails from './Contact/Contactdetails';
import Sitelinks from './Sitelinks/Sitelinks';
import Details from './Details/Details';
import axios from 'axios';
import key from '../../../key'

const Footer = () => {
    const [ menus, setmenus ] = useState([])
    const [ focontact, setfocontact ] = useState([])

    useEffect(() => {
        //@des footer menu
        axios.get(key.footerMenuApi)
            .then(menu => {
                setmenus(menu.data)
            })
            .catch(error => {
                console.log(error.message);
            })
        axios.get(key.footerData)
            .then(footerdata => {
                setfocontact(footerdata.data)
            })
            .catch(error => {
                console.log(error.message);
            })
        
    }, [])


    return (
        <footer className="site-footer">
            
            <div className="container footer-content">
                <Details sitedetails={focontact} />
                <Sitelinks menuitems={menus} />
                <Contactdetails contactdata={focontact} />
                <div className="footer-bottom">
                    <p>{focontact.footer_copyright}</p>
                </div>
            </div>
        
            
        </footer>
    )
}

export default Footer
