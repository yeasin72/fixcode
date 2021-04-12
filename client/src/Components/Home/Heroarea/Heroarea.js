import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import key from '../../../key';

const Heroarea = () => {
    const [heroAreaData, setHeroAreaData] = useState({});
    const [heroImg, setHeroImg] = useState([]);

    useEffect(() => {
        axios.get(key.heroAreaData)
            .then(hero => {
                setHeroAreaData(hero.data)
                setHeroImg(hero.data.hero_area_img)
                
            })
            .catch(error => {
                console.log(error);
            })
        
    }, [])
    

    
   
    return (
        <div className="hero-area">
            <div style={{backgroundImage: `url("./img/hero-bg.png")`, height: '100%'}}>
                <div className="container hero-main">
                    <div className="hero-left">
                        <h3>{heroAreaData.hero_area_title}</h3>
                        <p>{heroAreaData.hero_area_description}</p>
                        <Link to={`${heroAreaData.hero_area_button_url}`}><button className="default-button hero-btn">{heroAreaData.hero_area_button}</button></Link>
                        
                    </div>
                    <div className="hero-right">
                        {heroImg.map(data => (
                            <img key={`${data.id}`} src={`${key.mainApi}${data.url}`} alt="" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heroarea
