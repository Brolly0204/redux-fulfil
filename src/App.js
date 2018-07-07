import React, { Component } from 'react';
import UserTest from './components/UserTest'
import List from './components/List'
import Button from './components/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserTest />
        <List />
        <Button />
      </div>
    );
  }
}

export default App;
