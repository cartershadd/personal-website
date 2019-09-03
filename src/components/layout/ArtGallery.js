import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import smile from '../../img/smile.png';
import curvedLines from '../../img/curvedLines.png';
import crazyLines from '../../img/crazyLines.png';

class ArtGallery extends Component {
    render() {
        return (
                <div className="art-preview">
                    <Link to={'/artgallery/curvedlines'} className="profile-preview">
                        <img src={curvedLines} alt="art" className="art-img round-img"/>
                    </Link>

                    <Link to={'/artgallery/crazylines'} className="profile-preview">
                        <img src={crazyLines} alt="art" className="art-img round-img"/>
                    </Link>

                    <Link to={'/artgallery/smile'} className="profile-preview">
                        <img src={smile} alt="art" className="art-img round-img"/>
                    </Link>

                </div>
            )

    }
}

export default ArtGallery;