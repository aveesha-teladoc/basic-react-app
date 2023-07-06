import './App.css';
import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      res: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pages/fetch',
      {
        method: 'POST',
        body: JSON.stringify({
          key: 'call_details.call_history'
        })
      })
      .then(response => response.text()
        .then(res => this.setState({res})));
  }

  render() {
    return (
      <div>
        <div>
          <h1>Fetching content from CMS</h1>
        </div>
        {this.state.res}
      </div>
    );
  }
}

export default App;