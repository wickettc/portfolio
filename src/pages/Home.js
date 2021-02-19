import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import resume from '../documents/resume.pdf';
import FadeInItem from '../components/FadeInItem';
import westlandBowlPhoneLaptopImg from '../imgs/westlandbowl-phone-laptop.PNG';

const Home = () => {
    return (
        <div>
            <div className="home-container">
                <div className="home-title">
                    <h1>
                        <span className="home-break home-first">
                            Hey there,
                        </span>
                        <span className="home-break home-second">
                            I'm <span className="my-name">Chase</span>
                        </span>
                        <span className="home-break home-third">
                            Web Developer
                        </span>
                    </h1>
                </div>
                <div className="home-logo-container">
                    {/* <img
                        className="my-logo"
                        width="80%"
                        src={chaseDevLogo}
                        alt="Chase Wickett WebDev Logo"
                    /> */}
                </div>
            </div>
            <div className="home-page-continued">
                <FadeInItem divClass="home-about-container">
                    <h2>About Me</h2>
                    <div>
                        My name is{' '}
                        <span
                            className="my-name"
                            style={{ fontStyle: 'normal' }}
                        >
                            Chase Wickett
                        </span>{' '}
                        and I am a web devloper from Michigan! I love figuring
                        out complex problems and coming up with responsive and
                        creative solutions. I &#x2665; JavaScript, but I am
                        comfortable working with whatever language is the best
                        tool for the job!
                    </div>
                    <Link to="/contact">Get in Contact</Link>
                </FadeInItem>
                <hr />
                <FadeInItem divClass="home-featured-project home-featured-project-first">
                    <h2>Featured Project</h2>
                    <h3>Westland Bowl</h3>
                    <p>
                        Westland Bowl's website was a bit outdated and needed an
                        update! The original was not responsive and accessing
                        any information from a mobile device was a zooming and
                        scrolling task. Working with the owners, I was able to
                        create a modern and repsonsive design that their patrons
                        love! The owners also wanted to ability to update their
                        events, specials and to post the league scores through
                        the site. I ended up implementing a backend with PHP
                        that allowed this functionality and more importantly,
                        was easy for the owners to use.
                    </p>
                </FadeInItem>

                <FadeInItem divClass="home-featured-project home-featured-project-second">
                    <img
                        src={westlandBowlPhoneLaptopImg}
                        alt="Screen shot of westlandbowl.com"
                        className="featured-photo"
                    />
                    <a href="https://westlandbowl.com" target="__blank">
                        Check it Out!
                    </a>
                </FadeInItem>
                <hr />
                <FadeInItem divClass="home-resume-and-links">
                    <h2>Check out my other projects!</h2>
                    <Link to="/projects">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M14 18l10-7.088-10-6.912v3.042s-11.618 2.583-14 12.958c5.072-5.431 14-5.218 14-5.218v3.218z" />
                        </svg>
                    </Link>
                    <h2>OR</h2>
                    <h2>My Resume</h2>
                    <a href={resume} target="__blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M14 18l10-7.088-10-6.912v3.042s-11.618 2.583-14 12.958c5.072-5.431 14-5.218 14-5.218v3.218z" />
                        </svg>
                    </a>
                </FadeInItem>
                <hr />
            </div>
        </div>
    );
};

export default Home;
