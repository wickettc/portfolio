import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import '../css/NavBar.css';

const NavBar = () => {
    const [openNavBar, setOpenNavBar] = useState(false);
    const [hideNav, setHideNav] = useState(true);

    return (
        <Router>
            <div>
                <div
                    onClick={() => {
                        setOpenNavBar(!openNavBar);
                        openNavBar ? setHideNav(true) : setHideNav(false);
                    }}
                    className={`nav-hamburger ${openNavBar ? 'change' : ''}`}
                >
                    <div className="top-bar"></div>
                    <div className="middle-bar"></div>
                    <div className="bottom-bar"></div>
                </div>
                <nav className="nav-bar hide-nav-bar">
                    <ul className={`${hideNav ? 'hide' : ''}`}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default NavBar;
