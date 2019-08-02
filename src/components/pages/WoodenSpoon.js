import React from 'react';
import woodenSpoon from '../../img/woodenSpoon.png';
import spoon from '../../drawings/spoon.PDF';

const WoodenSpoon = () => {
    return (
        <div className="detail-page">
            <img src={woodenSpoon} alt="spoon" className="popup-image"/>
            <a href={spoon} className="pdf-link">Wooden Spoon Drawing PDF</a>
            <p className="detail-about">
                Just a spoon I made for fun!
            </p>
        </div>
    );
};


export default WoodenSpoon;