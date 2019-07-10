import React from 'react';
import designToolsPart from '../../img/designToolsPart.png';
import designTool from '../../drawings/designTool.PDF';
const TestObject = () => {
    return (
        <div className="all-center">
            <img src={designToolsPart} alt="tool" className="popup-image"/>
            <a href={designTool} className="large text-success">Sheet Metal Design PDF</a>
            <p>
                Just some practice with the Lofting tool in Solidworks.
            </p>
        </div>
    );
};


export default TestObject;