import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ArtGallery extends Component {
    render() {
        return (
                <div className="art-preview">
                    <Link to={'/artgallery/curvedlines'} className="profile-preview">
                        <img src={"/img/curvedLines.png"} alt="art" className="art-img round-img"/>
                    </Link>

                    <Link to={'/artgallery/crazylines'} className="profile-preview">
                        <img src={"/img/crazyLines.png"} alt="art" className="art-img round-img"/>
                    </Link>

                    <Link to={'/artgallery/smile'} className="profile-preview">
                        <img src={"/img/smile.png"} alt="art" className="art-img round-img"/>
                    </Link>

                </div>
            )

    }
}

export default ArtGallery;