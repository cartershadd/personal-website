import React from 'react';
import goldScrew from '../../img/goldScrew.png';
import knurledScrew from '../../drawings/knurledScrew.PDF';

const KnurledScrew = () => {
    return (
        <div className="all-center">
            <img src={goldScrew} alt="screw" className="popup-image"/>
            <a href={knurledScrew} className="large text-success">Knurled Screw Drawing PDF</a>
            <p>
               This is a screw with a knurled cap.
            </p>
        </div>
    );
};


export default KnurledScrew;