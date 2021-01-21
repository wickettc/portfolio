import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => {
    const [openNavBar, setOpenNavBar] = useState(false);
    const [hideNav, setHideNav] = useState(true);

    return (
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
                        <Link
                            onClick={() => {
                                setOpenNavBar(false);
                                setHideNav(true);
                            }}
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => {
                                setOpenNavBar(false);
                                setHideNav(true);
                            }}
                            to="/about"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => {
                                setOpenNavBar(false);
                                setHideNav(true);
                            }}
                            to="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => {
                                setOpenNavBar(false);
                                setHideNav(true);
                            }}
                            to="/projects"
                        >
                            Projects
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
