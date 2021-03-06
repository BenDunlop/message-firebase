import React, { Component } from 'react';
import firebase from './config'


import MessageList from './components/MessageList/MessageList'
import MessageBox from './components/MessageBox/MessageBox'
import Header from './components/Header/Header'


class App extends Component {


  render() {
    return (
      <div className="container">
        <Header title="Simple Firebase app" />
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageList db={firebase}/>
          </div>
        </div>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageBox db={firebase}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
