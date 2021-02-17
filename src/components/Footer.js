import React from 'react';
import chaseDevLogo from '../imgs/chase_dev_logo.png';
import '../css/Footer.css';

const Footer = () => {
    return (
        <div>
            <footer>
                <div>Handcrafted with &#x2665; </div>
                <div>
                    <a href="https://github.com/wickettc">Chase Wickett</a> ©
                    2021
                </div>
                <img src={chaseDevLogo} alt="My Logo" className="footer-logo" />
            </footer>
        </div>
    );
};

export default Footer;
