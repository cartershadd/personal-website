import React from 'react';
import manifoldPipe from '../../img/manifoldPipe.JPG';
import manifoldpipe from '../../drawings/manifoldpipe.PDF';

const ManifoldPipe = () => {
    return (
        <div className="detail-page">
            <img src={manifoldPipe} alt="pipe" className="popup-image"/>
            <a href={manifoldpipe} className="pdf-link">Exhaust Manifold Drawing PDF</a>
            <p className="detail-about">
                This is an exhaust manifold I made in Solidworks. The gold finish is just to make it look extra fancy.
            </p>
        </div>
    );
};


export default ManifoldPipe;