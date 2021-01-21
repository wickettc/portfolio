import React from 'react';
import '../css/FlipCard.css';

const FlipCard = (props) => {
    return (
        <div className="flip-card">
            <div className="flip-card-contents">
                <div className="flip-card-front">
                    <img
                        className="flip-card-img"
                        src={props.img}
                        alt={props.img}
                    />
                </div>
                <div className="flip-card-back">
                    <h4 className="flip-card-title">{props.name}</h4>
                    {props.back}
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
