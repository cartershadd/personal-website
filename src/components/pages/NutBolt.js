import React from 'react';
import nutNBolt from '../../img/nutNBolt.JPG';
import nutBolt from '../../drawings/nutBolt.PDF';

const NutBolt = () => {
    return (
        <div className="detail-page">
            <img src={nutNBolt} alt="bolt" className="popup-image"/>
            <a href={nutBolt} className="pdf-link">Nut and Bolt Assembly PDF</a>
            <p className="detail-about">
                The basic nut and bolt, made in Solidworks.
            </p>
        </div>
    );
};


export default NutBolt;