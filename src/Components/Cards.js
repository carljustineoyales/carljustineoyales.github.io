import React from 'react';
import './Cards.css';

//import property of Cards
const Cards = (props) =>{
    
    return (
        <div className='card grow'>
        <div className='cardContainer'>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img src={props.image} alt='1' />
            <h3>{props.name}</h3>
        </a>
            
        </div>
        </div>
    )
}

export default Cards;