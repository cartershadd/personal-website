import React from 'react';
import goldScrew from '../../img/goldScrew.png';
import knurledScrew from '../../drawings/knurledScrew.PDF';

const KnurledScrew = () => {
    return (
        <div className="detail-page">
            <img src={goldScrew} alt="screw" className="popup-image"/>
            <a href={knurledScrew} className="pdf-link">Knurled Screw Drawing PDF</a>
            <p className="detail-about">
               This is a screw with a knurled cap.
            </p>
        </div>
    );
};


export default KnurledScrew;