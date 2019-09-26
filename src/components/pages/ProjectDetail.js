import React from 'react';

const ProjectDetail = (props) => {
    return (
        <div className="detail-page">
            <img src={props.project.img} alt="screw" className="popup-image"/>
            <a href={props.project.link} className="pdf-link">{props.project.linkText}</a>
            <p className="detail-about">{props.project.about}</p>
        </div>
    );
};


export default ProjectDetail;