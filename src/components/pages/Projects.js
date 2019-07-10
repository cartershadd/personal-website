import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import crank from '../../img/crank.png';
import woodenSpoon from '../../img/woodenSpoon.png';
import goldScrew from '../../img/goldScrew.png';
import manifoldPipe from '../../img/manifoldPipe.JPG';
import nutNBolt from '../../img/nutNBolt.JPG';
import testObject from '../../img/testObject.JPG';
import designToolsPart from '../../img/designToolsPart.png';
import RP1 from '../../img/RP1.JPG';
import testImage1 from '../../img/testImage1.JPG';
import sheetmetalLofted from '../../img/sheetmetalLofted.png';
import TestImage from './TestImage';
import RouterPlane from './RouterPlane';
import ManifoldPipe from './ManifoldPipe';
import KnurledScrew from './KnurledScrew';
import LoftedSheet from './LoftedSheet.js';
import WoodenSpoon from "./WoodenSpoon";
import TestObject from "./TestObject";
import DesignTool from "./DesignTool";
import CrankShaft from "./CrankShaft";
import NutBolt from "./NutBolt";

function Projects() {
    return (
        <Router>
            <div className="scrolling">
                <ul className="scrolling-container">
                    <li className="scrolling-item">
                        <Link to="/projects/nutbolt" className="link-scroll">
                            <img src={nutNBolt} alt="bolt" className="scrolling-img"/>
                        </Link>
                    </li>
                    <li className="scrolling-item">
                        <Link to="/projects/crankshaft" className="link-scroll">
                            <img src={crank} alt="crankshaft" className="scrolling-img"/>
                        </Link>
                    </li>
                    <li className="scrolling-item">
                        <Link to="/projects/manifoldpipe" className="link-scroll">
                            <img src={manifoldPipe} alt="pipe" className="scrolling-img"/>
                        </Link>
                    </li>
                    <li className="scrolling-item">
                        <Link to="/projects/testobject" className="link-scroll">
                            <img src={testObject} alt="object" className="scrolling-img"/>
                        </Link>
                    </li>
                    <li className="scrolling-item">
                        <Link to="/projects/knurledscrew" className="link-scroll">
                            <img src={goldScrew} alt="screw" className="scrolling-img"/>
                        </Link>
                    </li>
                    <li className="scrolling-item">
                        <Link to="/projects/woodenspoon" className="link-scroll">
                            <img src={woodenSpoon} alt="spoon" className="scrolling-img"/>
                        </Link>
                    </li>
                    <li className="scrolling-item">
                        <Link to="/projects/designtool" className="link-scroll">
                            <img src={designToolsPart} alt="tool" className="scrolling-img"/>
                        </Link>
                    </li>
                    <li className="scrolling-item">
                        <Link to="/projects/routerplane" className="link-scroll">
                            <img src={RP1} alt="rp1" className="scrolling-img"/>
                        </Link>
                    </li>
                    <li className="scrolling-item">
                        <Link to="/projects/loftedsheet" className="link-scroll">
                            <img src={sheetmetalLofted} alt="lofted" className="scrolling-img"/>
                        </Link>
                    </li>
                    <li className="scrolling-item">
                        <Link to="/projects/testimage" className="link-scroll">
                            <img src={testImage1} alt="test" className="scrolling-img"/>
                        </Link>
                    </li>
                </ul>

                <Route exact path="/projects/nutbolt" component={NutBolt}/>
                <Route exact path="/projects/crankshaft" component={CrankShaft}/>
                <Route exact path="/projects/manifoldpipe" component={ManifoldPipe}/>
                <Route exact path="/projects/testobject" component={TestObject}/>
                <Route exact path="/projects/knurledscrew" component={KnurledScrew}/>
                <Route exact path="/projects/woodenspoon" component={WoodenSpoon}/>
                <Route exact path="/projects/designtool" component={DesignTool}/>
                <Route exact path="/projects/routerplane" component={RouterPlane}/>
                <Route exact path="/projects/loftedsheet" component={LoftedSheet}/>
                <Route exact path="/projects/testimage" component={TestImage}/>

            </div>
        </Router>
    );

};


export default Projects;