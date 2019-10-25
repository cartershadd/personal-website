import React from 'react';
import CloudVideo from './CloudVideo';

const About = () => {
    return (
        <div className="about-section all-center my-1">
            <h1>About Me</h1>
            <p className="about-bio">
                My name is Carter and I enjoy making things. I have been teaching myself HTML, CSS and JavaScript, and look at me now! :)
                <br></br>
                Under the Projects tab,  you'll find different items I made in Solidworks (3D CAD/CAM software).
                While I'm not currently certified, I know my way around the software and can make almost anything.
                <br></br><br></br>
                I also teach a class on how to make your own LED cloud.
                Click the play button below to watch it glow!
                <br></br><br></br>
            </p>
            <CloudVideo/>
            <br></br>
            <p className="about-bio">
                I also made this website and have a few coding projects under my belt. Some websites I made are listed below, as is the link to my Github page.
            </p>
            <br></br>
            <a href="https://github.com/cartershadd" className="btn-success">Carter on Github</a>
            <br></br>
            <a href="https://animal-website.firebaseapp.com/" className="btn-success">Animal Encyclopedia</a>
            <br></br>
            <a href="https://intense-basin-06475.herokuapp.com/" className="btn-success">Mockup Cat Adoption Website</a>


        </div>
    )
};

export default About;