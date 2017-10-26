import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
class App extends Component {
  render() {
    return (
      <div className="App">
       <AppBar
    title="CESS"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
      </div>
    );
  }
}

export default App;
