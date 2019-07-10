import React from 'react';
import testImage1 from '../../img/testImage1.JPG';
import testPart from '../../drawings/testPart.PDF';

const TestImage = () => {
    return (
        <div className="all-center">
            <img src={testImage1} alt="test" className="popup-image"/>
            <a href={testPart} className="large text-success">Test Object Drawing PDF</a>
            <p>This is a part from the Solidworks certification
            test prep, so you can practice using the software and making cool stuff like this.</p>
        </div>
    );
};


export default TestImage;