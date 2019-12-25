import React, {Component} from 'react';
import './App.css';
import Page404 from '../Components/Page404';
import 'tachyons';
import Work from '../Components/Work';
import Home from '../Components/Home'

const App = () => {
    switch('Page404'){
        case 'Work':
            return (<Work/>);
        case 'Home':
            return (<Home/>);
        case 'Page404':
            return <Page404 />
    }
}

export default App;
