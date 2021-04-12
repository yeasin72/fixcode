import React from 'react';
import logo from '../../../../logo-white.svg'
import { Link } from 'react-router-dom';

const Details = ({sitedetails}) => {
    return (
        <div className="site-details">
            <div className="footer-logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="details-content">
                <p>{sitedetails.company_description}</p>
            </div>
        </div>
    )
}

export default Details
