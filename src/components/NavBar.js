import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import resume from '../documents/resume.pdf';
import '../css/NavBar.css';

const NavBar = () => {
    const [openNavBar, setOpenNavBar] = useState(false);
    const [hideNav, setHideNav] = useState(true);
    const navBar = useRef(null);
    const navHamburger = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (openNavBar && !hideNav) {
                if (
                    navHamburger.current.contains(e.target) ||
                    !navBar.current.contains(e.target)
                ) {
                    setOpenNavBar(false);
                    setHideNav(true);
                }
            }
        };

        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [openNavBar, hideNav]);

    return (
        <div>
            <div
                ref={navHamburger}
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
            <nav ref={navBar} className={`nav-bar ${hideNav ? 'hide' : ''}`}>
                <Link
                    onClick={() => {
                        setOpenNavBar(false);
                        setHideNav(true);
                    }}
                    to="/"
                >
                    Home
                </Link>
                <Link
                    onClick={() => {
                        setOpenNavBar(false);
                        setHideNav(true);
                    }}
                    to="/projects"
                >
                    Projects
                </Link>
                <Link
                    onClick={() => {
                        setOpenNavBar(false);
                        setHideNav(true);
                    }}
                    to="/contact"
                >
                    Contact
                </Link>
                <a
                    href={resume}
                    target="__blank"
                    onClick={() => {
                        setOpenNavBar(false);
                        setHideNav(true);
                    }}
                >
                    Resume
                </a>
            </nav>
        </div>
    );
};

export default NavBar;
