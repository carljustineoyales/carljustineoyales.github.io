import React from 'react';
import './Card.css';
const Card = (props) =>{
    return (
        <div className = "bg-light-blue dib br3 pa3 ma2 w-20">
            <img src={props.image} alt={props.image} className="cardImg"/>
            <h4>{props.name}</h4>
            <p>Link: <a href={props.link}  rel='noopener noreferrer' target='_blank' >{props.name}</a></p>
        </div>
    );
}

export default Card;