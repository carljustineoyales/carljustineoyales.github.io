import React,{ Component } from 'react';
import Search from './Search';
import CardList from './CardList'
import {projects} from '../projects';
//to use state convert function to class
class Work extends Component{
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
  
              return (
                  
                  <div>
                      <h1>Projects</h1>
                      <Search searchChange={this.onClick}/>
                      <CardList projects={filteredProject}/>
                  </div>
  
              );
          }
}
export default Work;