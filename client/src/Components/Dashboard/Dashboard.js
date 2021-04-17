import React, {useEffect, useState} from 'react';
import DateRangeIcon from '@material-ui/icons/DateRange';
import WcIcon from '@material-ui/icons/Wc';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import ScaleLoader from "react-spinners/ScaleLoader";
import {Link} from 'react-router-dom'
import './Dashboard.css'
import key from './../../key'
import { useDispatch, useSelector } from 'react-redux';
import { profileUser } from '../../redux/actions/userAction';


const Dashboard = () => {
    const dispatch = useDispatch()
    const [dashload, setdashload] = useState(true);
    const [lodingstyle, setlodingstyle] = useState({backgroundColor: '#223248', height: '55vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'});

    const defaultProfile = useSelector(state => state.defaultProfile)
    const { profileData } = defaultProfile
    
    function loadingOff(){
        setdashload(false)
        setlodingstyle({backgroundColor: '#FFFFFF', height: 'auto'})
        
    }

    useEffect(() => {
        dispatch(profileUser())
        loadingOff()
    }, [dispatch])

    return (
        <div className="dashboard-page" style={lodingstyle}>
            {dashload? 
            <ScaleLoader color={'#106FDE'} loading={dashload} size={100} />
            :
            <div className="container dashboard-main">
                
                <div className="info-section">
                    <div className="visual">
                        <div className="profile-avatar">
                            {}
                            <img src={profileData && profileData.user_avatar? `${key.mainApi}${profileData.user_avatar.url}`: './icon/user.svg'} alt={profileData? profileData.full_name : ""} />
                        </div>
                        
                        <div className="visual-details">
                            <h3>{profileData? profileData.full_name : ""}</h3>
                            <h5>{profileData? profileData.user_title : "Job Title"}</h5>
                        </div>
                        <div className="additional-details">
                            <div className="key-element">
                                <div className="element-icon"><DateRangeIcon /></div>
                                <div className="element-title">Date of birth</div>
                            </div>
                            <div className="element-data">
                                {profileData? profileData.date_of_birth : "20, january, 2020"}
                            </div>
                        </div>
                        <div className="additional-details">
                            <div className="key-element">
                                <div className="element-icon"><WcIcon /></div>
                                <div className="element-title">Gender</div>
                            </div>
                            <div className="element-data">
                            {profileData? profileData.gender : "Male"}
                            </div>
                        </div>
                        <div className="edit-button">
                            <Link to="/setprofile">
                            <button className="default-button">Edit Account</button>
                            </Link>
                        </div>
                    </div>
                    <div className="info">
                        <div className="user-description">
                            <h2>Description</h2>
                            <p>{profileData? profileData.user_bio : "No description"}</p>
                        </div>
                        <div className="socile-links">
                            <div className="socile-heading">
                                <h3>Socile Links</h3>
                            </div>
                            <div className="socila-link-item">
                                <GitHubIcon />
                                <a href="/">
                                    Github
                                </a>
                            </div>
                            <div className="socila-link-item">
                                <FacebookIcon />
                                <a href="/">
                                    Facebook
                                </a>
                            </div>
                            <div className="socila-link-item">
                                <TwitterIcon />
                                <a href="/">
                                    twitter
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <div className="active-order">
                    <p>dashboard-main</p>
                </div> */}
                
            </div>
            }
        </div>
    )
}

export default Dashboard
