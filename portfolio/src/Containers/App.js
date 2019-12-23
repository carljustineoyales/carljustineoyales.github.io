import React, {Component} from 'react';
import './App.css';
import Page404 from '../Components/Page404';
import CardList from '../Components/CardList';
import Search from '../Components/Search';
import {projects} from '../projects';
import 'tachyons';

//to use state convert function to class
class App extends Component {

    constructor() {
        super(); // "this" is not allowed without this line
        
        this.state = {
            projects: projects,
            search: ''
        }
    }

    //this is a custom function
    //this is an object so this.onClick
    //if you make a custom method use "functionName = () => {}" syntax
    onClick = (event) => {

      //to get the value of the input to display in console
      // console.log(event.target.value);
      //to update state do "this.setState"
      this.setState({search: event.target.value});
    }

    render() {

      const filteredProject = this.state.projects.filter((project)=>{
        return project.tag.toLowerCase().includes(this.state.search.toLowerCase())
      })
      console.log(filteredProject);

        if (!false) {
            return (<Page404/>);
        } else {
            return (
                <div>
                    <h1>Projects</h1>
                    <Search searchChange={this.onClick}/>
                    <CardList projects={filteredProject}/>
                </div>

            );
        }
    }

}

export default App;
