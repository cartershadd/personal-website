import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/layout/navBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactMe from './components/contact/ContactMe';
import Projects from './components/pages/Projects';
import Smile from './components/pages/Smile';
import CrazyLines from './components/pages/CrazyLines';
import CurvedLines from './components/pages/CurvedLines';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className='App'>
                <NavBar/>
                <div className='container'>
                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route exact path={'/about'} component={About}/>
                        <Route path={'/projects'} component={Projects}/>
                        <Route path={'/smile'} component={Smile}/>
                        <Route path={'/lines'} component={CrazyLines}/>
                        <Route path={'/curved'} component={CurvedLines}/>
                        <Route exact path={'/contact'} component={ContactMe}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
