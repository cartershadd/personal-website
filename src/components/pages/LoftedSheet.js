import React from 'react';
import sheetmetalLofted from '../../img/sheetmetalLofted.png';
import sheetMetalLofted from '../../drawings/sheetMetalLofted.PDF';

const LoftedSheet = () => {
    return (
        <div className="all-center">
            <img src={sheetmetalLofted} alt="lofted" className="popup-image"/>
            <a href={sheetMetalLofted} className="large text-success">Lofted Sheet Metal Drawing PDF</a>
            <p>
                This was a part I made to practice working with the Lofted function in Solidworks.
            </p>
        </div>
    );
};


export default LoftedSheet;