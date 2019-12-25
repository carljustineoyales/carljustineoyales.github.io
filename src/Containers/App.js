import React, {Component} from 'react';
import './App.css';
import Page404 from '../Components/Page404';
import 'tachyons';
import Search from '../Components/Search';
import CardList from '../Components/CardList'
import {projects} from '../projects';

class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: projects,
            search: '',
            page: ''
        }
    }

    click = (event) => {
        // console.log(event.target.value);
        this.setState({page: event.target.value})
    }

    filter = (event) =>{
        this.setState({search: event.target.value});
    }

    render() {
        const filteredProject = this.state.projects.filter((project)=>{
            
            //access search on the constructor
          return project.tag.toLowerCase().includes(this.state.search.toLowerCase())
        })
        // console.log(filteredProject);
        switch (this.state.page) {
            case 'Work':
                return (

                    <div>
                    
                    <button className="close" value="" onClick={this.click}>X</button>
                    <div className="work-section">
                    <div className="filters">
                    <h1>Projects</h1>

                    <Search searchChange={this.filter}/>
                    </div>
                    <CardList projects={filteredProject}/>
                    </div>
                </div>


                );
            case 'Page404':
                return <Page404/>;
            default:
                // return <Home pageChange={this.onClick}/>
                return (
                    <header>
                        <h2>I'm</h2>
                        <h1>Carl Justine Oyales</h1>
                        <h2>Welcome to my Portfolio</h2>

                        <div className="home-buttons">
                            <button value="About" onClick={this.click}>About</button>
                            <button value="Work" onClick={this.click}>Work</button>
                            <button value="Contact" onClick={this.click}>Contact</button>
                        </div>
                    </header>
                );
        }
    }
}

export default App;
