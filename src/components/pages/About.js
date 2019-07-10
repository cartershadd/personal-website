import React from 'react';
import CloudVideo from './CloudVideo';

const About = () => {
    return (
        <div className="about-section all-center my-1">
            <h1>About Me</h1>
            <p>
                My name is Carter and I enjoy making things.
                <br></br><br></br>
                Under the Projects tab,  you'll find different items I made in Solidworks (3D CAD/CAM software).
                <br></br><br></br>
                I also teach a class on how to make your own LED cloud.
                Click the play button below to watch it glow!
                <br></br><br></br>
            </p>
            <CloudVideo/>
            <br></br>
            <p>
                I also made this website and have a few coding projects under my belt.
                Click here to check out my Github page!
            </p>
            <br></br>
            <a href="https://github.com/cartershadd" className="btn-success">Carter on Github</a>
        </div>
    )
};

export default About;