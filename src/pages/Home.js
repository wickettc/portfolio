import React from "react";
import "../css/Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <h2 className="home-first">Hey there,</h2>
            <h2 className="home-second">
                I'm <span className="my-name">Chase Wickett</span>
            </h2>
            <h2 className="home-third">Web Developer</h2>
        </div>
    );
};

export default Home;
