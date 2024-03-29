import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import ChaseWickettResume from '../documents/ChaseWickettResume.pdf';
import FadeInItem from '../components/FadeInItem';
import westlandBowlPhoneLaptopImg from '../imgs/westlandbowl-phone-laptop.PNG';
import chasebookPhoneLaptopImg from '../imgs/chasebook-mobile-laptop.png';

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
                            I'm <span className="my-name">Chase </span>
                        </span>
                        <span className="home-break home-third">
                            Web Developer
                        </span>
                    </h1>
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
                    <h2>Featured Projects</h2>
                    <h3>ChaseBook</h3>
                    <p>
                        ChaseBook is a "Facebook clone" that I created to help
                        solidify what I had learned about creating full-stack
                        applications. I created the server with ExpressJS, the
                        database with MongoDB and the front end with ReactJS.
                        ChaseBook is secured using Json Web Tokens and utilizes
                        PassportJS for easy authentication. This was a fun
                        project to really tie together these technologies and
                        show I have the skills to use them all to create a real
                        world application.
                    </p>
                </FadeInItem>

                <FadeInItem divClass="home-featured-project home-featured-project-second">
                    <img
                        src={chasebookPhoneLaptopImg}
                        alt="Screen shot of chasebook"
                        className="featured-photo"
                    />
                    <a
                        href="https://chasebook-wickettc.vercel.app/"
                        target="__blank"
                    >
                        Check it Out!
                    </a>
                </FadeInItem>
                <FadeInItem divClass="home-featured-project home-featured-project-first">
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
                    <Link to="/projects">Check out my other projects!</Link>
                    <h2>OR</h2>
                    <a href={ChaseWickettResume} target="__blank">
                        My Resume
                    </a>
                </FadeInItem>
                <hr />
            </div>
        </div>
    );
};

export default Home;
