import React from 'react';
import testImage1 from '../../img/testImage1.JPG';
import testPart from '../../drawings/testPart.PDF';

const TestImage = () => {
    return (
        <div className="detail-page">
            <img src={testImage1} alt="test" className="popup-image"/>
            <a href={testPart} className="pdf-link">Test Object Drawing PDF</a>
            <p className="detail-about">
                This is a part from the Solidworks certification
            test prep, so you can practice using the software and making cool stuff like this.
            </p>
        </div>
    );
};


export default TestImage;