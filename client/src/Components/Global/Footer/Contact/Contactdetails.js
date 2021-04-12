import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const Contactdetails = ({contactdata}) => {
    return (
        <div className="site-contact">
            <div className="sitelink-heading shouldbesmall">
                <h3>Contact Us</h3>
                <div className="underline-border"></div>
            </div>
            <div className="footer-menu">
                <li><a href={`tel:${contactdata.phone_number}`}>{contactdata.phone_number}</a></li>
                <li><a href={`mailto:${contactdata.contact_email}`}>{contactdata.contact_email}</a></li>
                <li><a href={`${contactdata.google_map_address_link}`} target="_blank" rel="noreferrer">{contactdata.company_address}</a></li>
                
            </div>
            <div className="socile-media">
                <button>
                    <a href={contactdata.facebook_link} target="_blank" rel="noreferrer">
                        <FacebookIcon style={{ color: '#106FDE', fontSize: 30 }} />
                    </a>
                </button>
                <button>
                    <a href={contactdata.twitter_link} target="_blank" rel="noreferrer">
                        <TwitterIcon style={{ color: '#106FDE', fontSize: 30 }} />
                    </a>
                </button>
                <button>
                    <a href={contactdata.github_link} target="_blank" rel="noreferrer">
                        <GitHubIcon style={{ color: '#106FDE', fontSize: 30 }} />
                    </a>
                </button>
                <button>
                    <a href={contactdata.instagram_link} target="_blank" rel="noreferrer">
                        <InstagramIcon style={{ color: '#106FDE', fontSize: 30 }} />
                    </a>
                </button>

            </div>
        </div>
    )
}

export default Contactdetails
