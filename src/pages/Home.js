import React from 'react';
import '../css/Home.css';
import cwLogo from '../imgs/cw-logo.png';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-title">
                {/* <h2 className="home-first">Hey there,</h2>
                <h2 className="home-second">
                    I'm <span className="my-name">Chase Wickett</span>
                </h2>
                <h2 className="home-third">Web Developer</h2> */}
                <h1>
                    <span className="home-break home-first">Hey there,</span>
                    <span className="home-break home-second">
                        I'm <span className="my-name">Chase Wickett</span>
                    </span>
                    <span className="home-break home-third">Web Developer</span>
                </h1>
            </div>
            <div className="home-logo-container">
                <img
                    className="my-logo"
                    src={cwLogo}
                    alt="Chase Wickett WebDev Logo"
                />
            </div>
        </div>
    );
};

export default Home;
