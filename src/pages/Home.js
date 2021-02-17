import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import FadeInItem from '../components/FadeInItem';
import westlandBowlLaptopImg from '../imgs/westlandbowl-laptop.PNG';
import westlandBowlPhoneImg from '../imgs/westlandbowl-phone.PNG';

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
                <FadeInItem divClass="home-featured-project">
                    <h2>Featured Project</h2>
                    <h3>Westland Bowl</h3>
                    <p>
                        Westland Bowl's website was a bit outdated and needed an
                        update! The original was not responsive and accessing
                        any information from a mobile device was a zooming and
                        scrolling task. Working with the owners, I was able to
                        create a modern and repsonsive design that their patrons
                        love! The owners also wanted to ability to update their
                        events, specials and also, post the league scores
                        through the site, so I implemented a backend with PHP to
                        allow that functionality.
                    </p>
                    <div className="home-featured-imgs">
                        <img
                            className="featured-laptop-img"
                            src={westlandBowlLaptopImg}
                            alt="Laptop screen shot of westlandbowl.com"
                        />
                        <img
                            className="featured-phone-img"
                            src={westlandBowlPhoneImg}
                            alt="Phone screen shot of westlandbowl.com"
                        />
                    </div>
                    <a href="https://westlandbowl.com" target="__blank">
                        Check it Out!
                    </a>
                </FadeInItem>
            </div>
        </div>
    );
};

export default Home;
