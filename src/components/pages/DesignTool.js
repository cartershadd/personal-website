import React from 'react';
import designToolsPart from '../../img/designToolsPart.png';
import designTool from '../../drawings/designTool.PDF';
const TestObject = () => {
    return (
        <div className="detail-page">
            <img src={designToolsPart} alt="tool" className="popup-image"/>
            <a href={designTool} className="pdf-link">Sheet Metal Design PDF</a>
            <p className="detail-about">
                Just some practice with the Lofting tool in Solidworks.
            </p>
        </div>
    );
};


export default TestObject;