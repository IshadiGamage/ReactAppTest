import React, { Component } from 'react';
import NavigationBar from './Component/NavigationBar';
import Routes from './Routes/routes';
import AboutUsPage from "./Component/AboutUsPage";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React JS</h1>
        </header>
          <NavigationBar/>
          <Routes/>
      </div>
    );
  }
}

export default App;
