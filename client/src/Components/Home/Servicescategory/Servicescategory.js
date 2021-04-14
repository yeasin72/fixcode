import React, { useState, useEffect } from 'react';
import axios from 'axios';
import key from '../../../key'

const Servicescategory = () => {
    const [ categoryData, setCategoryData ] = useState([]);

    useEffect(() => {
        axios.get(key.categoryApi)
            .then(res => {
                setCategoryData(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <div className="servicescategory-section">
            <div className="container services-main">
                {categoryData.map(item => (
                    <div key={item.id} className="services-item">
                        <img src={`${key.mainApi}${item.category_icon.url}`} alt={`${item.category_title}`} />
                        <h3>{item.category_title}</h3>
                        <p>{item.category_description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Servicescategory
