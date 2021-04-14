import React from 'react'
import key from '../../../../key';

const Tech = ({techdata}) => {
    return (
        <div className="tech-item">
            <div className="img-inside">
                <a href={techdata.technology_website_url} target="_blank" rel="noreferrer">
                    <img src={`${key.mainApi}${techdata.technology_icon.url}`} alt={techdata.technology_name} title={techdata.technology_name} />
                </a>
            </div>
            <a href={techdata.technology_website_url} target="_blank" rel="noreferrer">
                <h5>{techdata.technology_name}</h5>
            </a>
        </div>
    )
}

export default Tech
