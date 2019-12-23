import React from 'react';
import Cards from './Cards';
import './CardList.css';

//import property of CardList
const CardList = ({projects}) => {

    const cardItem = projects.map((project,i)=>{
        return <Cards name={projects[i].name} image={projects[i].image} link={projects[i].link}key={i}/>;
    });

    return (
        <div className='cardListContainer'>
            {cardItem}
        </div>
    );
}

export default CardList;