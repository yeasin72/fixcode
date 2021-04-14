import React, {useState, useEffect} from 'react';
import Tech from './Tech/Tech';
import axios from 'axios';
import key from '../../../key';

const Technology = () => {
    const [techData, setTechData] = useState([]);

    useEffect(() => {
        axios.get(key.technologiesApi)
            .then(res => {
                setTechData(res.data)
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [])
    return (
        <div className="technology-section">
            <div className="container technology-main">
                <div className="technology-heading">
                    <h2>Technology we use</h2>
                    <div className="headline-under"></div>
                </div>
                <div className="technology-items">

                    { techData.map(techData => (
                        <Tech key={techData.id} techdata={techData} />
                    )) }

                </div>
            </div>
        </div>
    )
}

export default Technology
