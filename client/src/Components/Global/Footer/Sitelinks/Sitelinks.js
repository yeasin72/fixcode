import React from 'react';
import { Link } from 'react-router-dom';


const Sitelinks = ({menuitems}) => {
    
    

    return (
        <div className="site-links">
            <div className="sitelink-heading">
                <h3>Important Links</h3>
                <div className="underline-border"></div>
            </div>
            <div className="footer-menu">
                {menuitems.map(menuitem => (
                    <li key={menuitem.id}><Link to={menuitem.link_path}>{menuitem.link_name}</Link></li>
                ) )}
            </div>
        </div>
    )
}

export default Sitelinks
