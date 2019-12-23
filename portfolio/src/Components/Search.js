import React from 'react';
import './Search.css'

//using destructuring to grabe the object searchField and the property searchChange
const Search = ({ searchField , searchChange})=>{
    return(
        <div className="buttons">
            {/* <input type="search" placeholder="Search Projects" onChange={searchChange}/> */}
            <button value="" onClick={searchChange}>All</button>
            <button value="web design" onClick={searchChange}>Web Design</button>
            <button value="programming" onClick={searchChange}>Programming</button>
        </div>
        
    );
}

export default Search;