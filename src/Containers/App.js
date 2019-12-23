import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from '../Components/Header';
import { projects } from '../projects';
// import Card from '../Components/Card';
import CardList from '../Components/CardList';
import Error404 from '../Components/Error404';

function App() {
  if(false){
    return (
      <div className="App">
        <Error404 />
        {/* <Header />
        <CardList projects={projects}/> */}
      </div>
    );
  }else{
    return (
      <div className="App">
        <Header />
        <CardList projects={projects}/>
      </div>
    );
  }
  
}

export default App;
