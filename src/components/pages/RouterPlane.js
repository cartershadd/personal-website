import React from 'react';
import RP1 from '../../img/RP1.JPG';
import routerPlaneAssembly from '../../drawings/routerPlaneAssembly.PDF';

const RouterPlane = () => {
    return (
        <div className="all-center">
            <img src={RP1} alt="rp1" className="popup-image"/>
            <a href={routerPlaneAssembly} className="large text-success">Router Plane Assembly PDF</a>
            <p>
                This is a router plane, which is used for woodworking.
            </p>
        </div>
    );
};


export default RouterPlane;