import React, {useState, useEffect} from 'react';
import Playvideo from './Playvideo/Playvideo';
import axios from 'axios';
import key from '../../../key'


const Aboutsec = () => {
    const [aboutData, setAboutData] = useState({})

    useEffect(() => {
        axios.get(key.miniAboutApi)
            .then(res => {
                setAboutData(res.data)
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [])
    
    return (
        <div className="mini-about-section">
            <div className="container mini-about-main">
                <h2>About us</h2>
                <div className="headline-under"></div>
                <p>{aboutData.about_company}</p>
                <Playvideo videoId={aboutData.youtube_video_id} />
            </div>
        </div>
    )
}

export default Aboutsec
