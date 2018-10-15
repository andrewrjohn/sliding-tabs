import React, { Component } from 'react';
import './App.css';
import Tabs from './Tabs'
import { TabProvider, TabConsumer } from './contexts/tab'

const tabs = ['Apples', 'Oranges', 'Mangos', 'Pears', 'Banana', 'Asparagus']

const value = {
  age: 21,
  name: 'Andrew Johnson',
  job: 'Frontend'
}
class App extends Component {
  render() {
    return (
      <div className="App">
<TabProvider>

  <Tabs tabs={tabs} />

  <TabConsumer>

{context => (
  <span>{context.AGE}</span>
)
}
</TabConsumer>
</TabProvider>
          

          

      </div>
    );
  }
}

export default App;
