import React from 'react';
import crank from '../../img/crank.png';
import crankshaft from '../../drawings/crankshaft.PDF';

const CrankShaft = () => {
    return (
        <div className="all-center">
            <img src={crank} alt="crankshaft" className="popup-image"/>
            <a href={crankshaft} className="large text-success">Crankshaft PDF</a>
            <p>
                This is a crankshaft I made in Solidworks. Really cool part to make!
            </p>
        </div>
    );
};


export default CrankShaft;