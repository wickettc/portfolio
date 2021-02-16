import React from 'react';
import '../css/Home.css';
import FadeInItem from '../components/FadeInItem';
import cwLogo from '../imgs/cw-logo.png';
import chaseDevLogo from '../imgs/chase_dev_logo.png';

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
                    <img
                        className="my-logo"
                        width="80%"
                        src={chaseDevLogo}
                        alt="Chase Wickett WebDev Logo"
                    />
                </div>
            </div>
            <div className="home-about-container">
                <FadeInItem divClass="about-me">
                    <h2>About Me</h2>
                    <div>
                        My name is{' '}
                        <span className="my-name">Chase Wickett</span> and I am
                        a web devloper from Michigan! I love figuring out
                        complex problems and coming up with responsive and
                        creative solutions. Check out some of my latest work
                        here or send me a message here!
                    </div>
                </FadeInItem>
                <FadeInItem>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent fermentum sapien quis massa placerat, in
                        dignissim mi scelerisque. Sed cursus tortor in volutpat
                        euismod. Quisque laoreet molestie mauris. Aenean porta
                        nisi ac pulvinar dignissim. Curabitur sed vulputate
                        nisi, in porta mauris. Donec varius dui vitae vestibulum
                    </div>
                    <hr></hr>
                </FadeInItem>
                <FadeInItem>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent fermentum sapien quis massa placerat, in
                        dignissim mi scelerisque. Sed cursus tortor in volutpat
                        euismod. Quisque laoreet molestie mauris. Aenean porta
                        nisi ac pulvinar dignissim. Curabitur sed vulputate
                        nisi, in porta mauris. Donec varius dui vitae vestibulum
                    </div>
                    <hr></hr>
                </FadeInItem>
                <FadeInItem>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent fermentum sapien quis massa placerat, in
                        dignissim mi scelerisque. Sed cursus tortor in volutpat
                        euismod. Quisque laoreet molestie mauris. Aenean porta
                        nisi ac pulvinar dignissim. Curabitur sed vulputate
                        nisi, in porta mauris. Donec varius dui vitae vestibulum
                    </div>
                    <hr></hr>
                </FadeInItem>
            </div>
        </div>
    );
};

export default Home;
