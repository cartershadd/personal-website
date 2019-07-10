import React from 'react';
import manifoldPipe from '../../img/manifoldPipe.JPG';
import manifoldpipe from '../../drawings/manifoldpipe.PDF';

const ManifoldPipe = () => {
    return (
        <div className="all-center">
            <img src={manifoldPipe} alt="pipe" className="popup-image"/>
            <a href={manifoldpipe} className="large text-success">Exhaust Manifold Drawing PDF</a>
            <p>
                This is an exhaust manifold I made in Solidworks. The gold finish is just to make it look extra fancy.
            </p>
        </div>
    );
};


export default ManifoldPipe;