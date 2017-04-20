import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'isomorphic-fetch'
import BlogList from './bloglist';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>blogList 2017 version</h2>
        </div>
        <div className="App-intro">
          <p>Note, due to [my] unresolved CORS issues, I think with create-react-app, I am proxying in package.json to https://zapier.com</p>
          <BlogList url='/blog/feeds/latest/' posts={5} />
        </div>
      </div>
    );
  }
}

export default App;
