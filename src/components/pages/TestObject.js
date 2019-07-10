import React from 'react';
import testObject from '../../img/testObject.JPG';
import TestObject1 from '../../drawings/TestObject1.PDF';

const TestObject = () => {
    return (
        <div className="all-center">
            <img src={testObject} alt="object" className="popup-image"/>
            <a href={TestObject1} className="large text-success">Test Object</a>
            <p>
                This is another shape from the Solidworks certification test prep.
            </p>
        </div>
    );
};


export default TestObject;