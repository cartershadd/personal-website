import React from 'react';
import testObject from '../../img/testObject.JPG';
import TestObject1 from '../../drawings/TestObject1.PDF';

const TestObject = () => {
    return (
        <div className="detail-page">
            <img src={testObject} alt="object" className="popup-image"/>
            <a href={TestObject1} className="pdf-link">Test Object</a>
            <p className="detail-about">
                This is another shape from the Solidworks certification test prep.
            </p>
        </div>
    );
};


export default TestObject;