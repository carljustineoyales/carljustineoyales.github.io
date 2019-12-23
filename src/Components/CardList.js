import React from 'react';
import Card from './Card';


const CardList = ({projects}) =>{

    const cardComponent = projects.map((item,i)=>{
        return <Card key={i} link={projects[i].link} name={projects[i].name} image={projects[i].image} />
    })

    return(
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;