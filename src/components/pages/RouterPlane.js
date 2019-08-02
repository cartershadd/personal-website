import React from 'react';
import RP1 from '../../img/RP1.JPG';
import routerPlaneAssembly from '../../drawings/routerPlaneAssembly.PDF';

const RouterPlane = () => {
    return (
        <div className="detail-page">
            <img src={RP1} alt="rp1" className="popup-image"/>
            <a href={routerPlaneAssembly} className="pdf-link">Router Plane Assembly PDF</a>
            <p className="detail-about">
                This is a router plane, which is used for woodworking.
            </p>
        </div>
    );
};


export default RouterPlane;