import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/layout/navBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactMe from './components/contact/ContactMe';
import Projects from './components/pages/Projects';
import ArtGallery from './components/layout/ArtGallery';
import './App.css';
import CrazyLines from "./components/pages/CrazyLines";
import CurvedLines from "./components/pages/CurvedLines";
import Smile from "./components/pages/Smile";
import ReverseGravity from "./components/pages/reverseGravity";
import RainbowStar from "./components/pages/rainbowStar";

const App = () => {
    return (
        <Router>
            <div className='App'>
                <NavBar/>
                <div className='container'>
                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route exact path={'/about'} component={About}/>
                        <Route exact path={'/projects'} component={Projects}/>
                        <Route exact path={'/artgallery'} component={ArtGallery}/>
                        <Route exact path={'/artgallery/smile'} component={Smile}/>
                        <Route exact path={'/artgallery/curvedlines'} component={CurvedLines}/>
                        <Route exact path={'/artgallery/crazylines'} component={CrazyLines}/>
                        <Route exact path={'/artgallery/reverse'} component={ReverseGravity}/>
                        <Route exact path={'/artgallery/star'} component={RainbowStar}/>
                        <Route exact path={'/contact'} component={ContactMe}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
