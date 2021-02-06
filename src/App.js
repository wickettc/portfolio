import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Page404 from './pages/Page404';
import NavBar from './components/NavBar';
import LinkBar from './components/LinkBar';
import './css/App.css';

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <LinkBar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route>
                        <Page404 />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
