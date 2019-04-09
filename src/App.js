import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import AppNav from './components/AppNav';
import Albums from './containers/Albums';
import Album from './containers/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNav/>
        <Album/>
        <Albums/> 
        
      </div>
    );
  }
}

export default withStyles({
  button:{
    backgroundColor: 'red'
  }
}) (App);
