import React from 'react';
import './Home.css';
import Heroarea from './Heroarea/Heroarea';
import Servicescategory from './Servicescategory/Servicescategory';
import Aboutsec from './Aboutsec/Aboutsec';
import Technology from './Technology/Technology'

const Home = () => {
    return (
        <div className="Homepage">
            <Heroarea />
            <Servicescategory />
            <Aboutsec />
            <Technology />
        </div>
    )
}

export default Home
