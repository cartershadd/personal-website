import React from 'react';
import woodenSpoon from '../../img/woodenSpoon.png';
import spoon from '../../drawings/spoon.PDF';

const WoodenSpoon = () => {
    return (
        <div className="all-center">
            <img src={woodenSpoon} alt="spoon" className="popup-image"/>
            <a href={spoon} className="large text-success">Wooden Spoon Drawing PDF</a>
            <p>
                Just a spoon I made for fun!
            </p>
        </div>
    );
};


export default WoodenSpoon;