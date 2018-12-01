
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onKeyUp={()=> {console.log('aaa')}} / >
      </React.Fragment>
    )
  }
}

export default App;