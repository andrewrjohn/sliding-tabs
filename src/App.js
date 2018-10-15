import React, { Component } from 'react';
import './App.css';
import Tabs from './Tabs'

const tabs = ['Apples', 'Oranges', 'Mangos', 'Pears', 'Banana', 'Asparagus']
class App extends Component {
  render() {
    return (
      <div className="App">

          <Tabs tabs={tabs} />

      </div>
    );
  }
}

export default App;
